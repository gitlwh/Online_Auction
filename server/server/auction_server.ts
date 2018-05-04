import * as express from 'express';
import * as path from 'path';
import {Server} from 'ws';


const app = express();

export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ) {

    }
}

export class Comment {
    constructor(public id: number,
                public productId: number,
                public timestamp: string,
                public user: string,
                public rating: number,
                public content: string) {

    }
}

const products: Product[] = [
    new Product(1, 'First Product', 1.99, 3.5, 'This is the description of first product.', ['electronic']),
    new Product(2, 'Second Product', 2.99, 2.5, 'This is the description of second product.', ['electronic', 'hardware']),
    new Product(3, 'Third Product', 3.99, 3.5, 'This is the description of third product.', ['hardware']),
    new Product(4, 'Fourth Product', 4.99, 4.5, 'This is the description of fourth product.', ['book']),
    new Product(5, 'Fifth Product', 5.99, 5, 'This is the description of fifth product.', ['electronic', 'hardware']),
    new Product(6, 'Sixth Product', 6.99, 1, 'This is the description of six product.', ['book'])
];

const comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', 'Zhang San', 3, 'Good stuff!'),
    new Comment(2, 1, '2017-03-02 12:22:32', 'Li Si', 1, 'Very good stuff!'),
    new Comment(3, 1, '2017-04-02 11:22:22', 'Wang Wu', 2, 'Really good stuff!'),
    new Comment(4, 2, '2017-05-02 22:22:22', 'Zhao Liu', 3, 'Still good stuff!')
];

app.use('/',express.static(path.join(__dirname,'..','client')));

app.get('/api/products',(req,res)=>{
    let result = products;
    let params = req.query;
    if(params.title){
        result = result.filter((p)=>p.title.indexOf(params.title)!=-1);
    }
    if(params.price && result.length>0){
        result = result.filter((p)=>p.price<=parseInt(params.price));
    }
    if(params.category && params.category != "-1" && result.length>0){
        result = result.filter((p)=>p.categories.indexOf(params.category)!=-1);
    }
    res.json(result);
});

app.get('/api/products/:id',(req,res)=>{
    res.json(products.find((product)=>product.id==req.params.id))
});

app.get('/api/products/:id/comments',(req,res)=>{
    res.json(comments.filter((comment: Comment)=>comment.productId==req.params.id))
});

const server = app.listen(8000,"localhost", ()=>{
    console.log("server is running the address is the http://localhost:8000");
});

const subscriptions = new Map<any, number[]>();

const wsServer = new Server({port:8085});
wsServer.on("connection",websocket =>{
    //websocket.send("this message sent by server!");
    websocket.on('message',message => {
        let messageObj = JSON.parse(message);
        let productIds = subscriptions.get(websocket) || [];
        subscriptions.set(websocket, [...productIds, messageObj.productId]);
    });
});

const currentBids = new Map<number, number>();

setInterval(() => {

    products.forEach( p => {
        let currentBid = currentBids.get(p.id) || p.price;
        let newBid = currentBid + Math.random() * 5;
        currentBids.set(p.id, newBid);
    });

    subscriptions.forEach((productIds:number[],ws)=>{
        if(ws.readyState === 1){
            let newBids = productIds.map(pid=>({
                productId: pid,
                bid: currentBids.get(pid)
            }));
            ws.send(JSON.stringify(newBids));
        }else{
            subscriptions.delete(ws);
        }

    });

},5000);