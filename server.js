const priceModule = require("./public/priceList");

const express = require("express");
const expressSession = require("express-session");
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());

class Item {
    constructor(Name,Count) {
      this.itemName = Name;
      this.price = 0;
      this.count = Count;
    }
  }

app.use(expressSession({
    secret: "super-safe-secret", // used to create session IDs
    resave: false, // do not save already saved values during each request
    saveUninitialized: true // forces an uninitialized session to be stored
}));

  app.get('/home', function(req, res) {
    
    var cart = req.session.cart || [];
    var totalPrice = getTotalPrice(cart);

    res.render(__dirname + "/public/index.html", {totalPrice:totalPrice});
  });

app.get('/cart', function(req, res) {
res.sendFile(__dirname + "/public/cart.html");
});

app.post("/intoBasket", (req, res) => {
    if (!req.session.cart) {
    var cart = req.session.cart = [];  
    }
    
    var newItem= new Item(req.body.basketButton,1);

    var isPresent = req.session.cart.filter(cart => (cart.itemName === req.body.basketButton));
    var objectIndex = req.session.cart.findIndex(cart => (cart.itemName === req.body.basketButton));
    if (isPresent.length!=0){
        req.session.cart[objectIndex].count=req.session.cart[objectIndex].count+1;
        newItem.count = req.session.cart[objectIndex].count;
    }

    if (isPresent.length==0){
        req.session.cart.push(newItem);
    }
    res.redirect('/home');
});


app.get('/getBasket', function(req, res) {

    var cart = req.session.cart || [];
    var totalPrice = getTotalPrice(cart);

    
    var cart = JSON.stringify(req.session.cart || []);
    getTotalPrice(cart);

    res.render(__dirname + "/public/cart.html", {cart:cart,totalPrice:totalPrice});
  
  });
app.post('/updateBasket', function(req, res) {

  for(var i = 0; i < req.session.cart.length; i++){
    req.session.cart[i].count = (parseInt(req.body["Item"+i]));
 }
 console.log(req.session.cart[1].count);
 res.redirect("/getBasket");
});

const server = app.listen(9999, () => {
    console.log("server started");
});

app.listen(8080, () => console.log("listening on 8080"));

function getTotalPrice(cart){
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++){

    priceModule.getPrice(cart[i]);
    totalPrice = totalPrice + cart[i].price * cart[i].count; 
  }
  console.log(totalPrice);
  return totalPrice;
}