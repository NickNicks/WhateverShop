module.exports = {
getPrice: function getPrice(cart) {
    if (cart.itemName == "Item 1"){
      cart.price=10;
    } 
    else if (cart.itemName == "Item 2") {
      cart.price=20;
    }
    else if (cart.itemName == "Item 3") {
      cart.price=30;
    }
    else if (cart.itemName == "Item 4") {
      cart.price=40;
    }
    else if (cart.itemName == "Item 5") {
      cart.price=50;
    }
    else if (cart.itemName == "Item 6") {
      cart.price=60;
    }
    else if (cart.itemName == "Item 7") {
      cart.price=70;
    }
    else if (cart.itemName == "Item 8") {
      cart.price=80;
    }
  }
}
