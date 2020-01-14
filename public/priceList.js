module.exports = {
getPrice: function getPrice(cart) {
    if (cart.itemName == "Epli Poster N.1"){
      cart.price=10;
    } 
    else if (cart.itemName == "Epli Poster N.2") {
      cart.price=20;
    }
    else if (cart.itemName == "Epli Mug N.1") {
      cart.price=30;
    }
    else if (cart.itemName == "Epli Mug N.2") {
      cart.price=40;
    }
    else if (cart.itemName == "Epli Daki N.1") {
      cart.price=50;
    }
    else if (cart.itemName == "Epli Daki N.2") {
      cart.price=60;
    }
    else if (cart.itemName == "Super Rare Epli Fanart") {
      cart.price=70;
    }
    else if (cart.itemName == "Redacted") {
      cart.price=80;
    }
  }
}
