"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var ws_1 = require("ws");
var app = express();
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var Comment = /** @class */ (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
var products = [
    new Product(1, 'First Product', 1.99, 3.5, 'This is the description of first product.', ['electronic']),
    new Product(2, 'Second Product', 2.99, 2.5, 'This is the description of second product.', ['electronic', 'hardware']),
    new Product(3, 'Third Product', 3.99, 3.5, 'This is the description of third product.', ['hardware']),
    new Product(4, 'Fourth Product', 4.99, 4.5, 'This is the description of fourth product.', ['book']),
    new Product(5, 'Fifth Product', 5.99, 5, 'This is the description of fifth product.', ['electronic', 'hardware']),
    new Product(6, 'Sixth Product', 6.99, 1, 'This is the description of six product.', ['book'])
];
var comments = [
    new Comment(1, 1, '2017-02-02 22:22:22', 'Zhang San', 3, 'Good stuff!'),
    new Comment(2, 1, '2017-03-02 12:22:32', 'Li Si', 1, 'Very good stuff!'),
    new Comment(3, 1, '2017-04-02 11:22:22', 'Wang Wu', 2, 'Really good stuff!'),
    new Comment(4, 2, '2017-05-02 22:22:22', 'Zhao Liu', 3, 'Still good stuff!')
];
app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.get('/api/products', function (req, res) {
    var result = products;
    var params = req.query;
    if (params.title) {
        result = result.filter(function (p) { return p.title.indexOf(params.title) != -1; });
    }
    if (params.price && result.length > 0) {
        result = result.filter(function (p) { return p.price <= parseInt(params.price); });
    }
    if (params.category && params.category != "-1" && result.length > 0) {
        result = result.filter(function (p) { return p.categories.indexOf(params.category) != -1; });
    }
    res.json(result);
});
app.get('/api/products/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
app.get('/api/products/:id/comments', function (req, res) {
    res.json(comments.filter(function (comment) { return comment.productId == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("server is running the address is the http://localhost:8000");
});
var subscriptions = new Map();
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    //websocket.send("this message sent by server!");
    websocket.on('message', function (message) {
        var messageObj = JSON.parse(message);
        var productIds = subscriptions.get(websocket) || [];
        subscriptions.set(websocket, productIds.concat([messageObj.productId]));
    });
});
var currentBids = new Map();
setInterval(function () {
    products.forEach(function (p) {
        var currentBid = currentBids.get(p.id) || p.price;
        var newBid = currentBid + Math.random() * 5;
        currentBids.set(p.id, newBid);
    });
    subscriptions.forEach(function (productIds, ws) {
        if (ws.readyState === 1) {
            var newBids = productIds.map(function (pid) { return ({
                productId: pid,
                bid: currentBids.get(pid)
            }); });
            ws.send(JSON.stringify(newBids));
        }
        else {
            subscriptions.delete(ws);
        }
    });
}, 5000);
