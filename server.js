const express = require("express");
const expressSession = require("express-session");

const app = express();
app.use(express.static('public'));



app.use(expressSession({
    secret: "super-safe-secret", // used to create session IDs
    resave: false, // do not save already saved values during each request
    saveUninitialized: true // forces an uninitialized session to be stored
}));

/*app.get("/test", (req, res) => {
    if(req.session.count == undefined) {
        req.session.count = 0;
    }
    res.send(`
        <html><body>
            <button onclick="fetch('/intobasket')">+1</button>
            <a href="getBasket">Go to other page</a>
        </body></html>`)
});*/

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
  });


app.get("/intoBasket1", (req, res) => {
    if (!req.session.cart) {
    var cart = req.session.cart = [];  
    }
    req.session.cart.push("item1");
    res.end();
});

app.get("/intoBasket2", (req, res) => {
    if (!req.session.cart) {
    var cart = req.session.cart = [];  
    }
    req.session.cart.push("item2");
    res.end();
});

app.get("/getBasket", (req, res) => {
    var cart = req.session.cart || [];  
    res.send(`<div>Count: <span id="counter">${cart[0]}</span></div
    <div>Count: <span id="counter">${cart[1]}</span></div
    <div>Count: <span id="counter">${cart[2]}</span></div`)


});

const server = app.listen(9999, () => {
    console.log("server started");
});

app.listen(8080, () => console.log("listening on 8080"));