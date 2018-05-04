# Auction
This is an online auction website demo.

## Features:
1. I wrote it with a Angular2 tutorial and update code to Angular4 myself.
2. The product infomation is given from expressjs server as an observable flow. 
3. The server is implemented by expressjs and client implemented by nodejs.
4. People can follow the online price of certain producted which is generated randomly by server itself.
5. People can filter products according to name, price and category.

## How to run?
1. Clone the repository.
2. run `npm install` in server folder
3. cd in to server folder and use command `nodemon build/auction_server.js`
4. You can see everything in `http://localhost:8000/`

## Modify the code
1. The source code is in `client` folder. Feel free to make a change.
2. Use `ng build` to make product code.
3. Copy everything in `dist` to client folder in `server` folder.

## Technology stack
Angular4, ExpressJS

## Resources:
- [Angular Docs](https://angular.io/)
- [Expressjs](https://expressjs.com/)
