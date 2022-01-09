

class Hamburger {
  static MENU = {
    SMALL: {
      price: 50,
      callories: 20,
    },
    MEDIUM: {
      price: 75,
      callories: 30,
    },
    BIG: {
      price: 100,
      callories: 40,
    },
  } 

  static TOPPING = {
    cheese: {
      price: 10,
      callories: 20,
  },
    salad: {
      price: 20,
      callories: 5,
  },
    potatoes: {
      price: 15,
      callories: 10,
  },
    spicy: {
      price: 15,
      callories: 0,
  },
    mayo: {
      price: 15,
      callories: 5,
  },
  }

constructor(hamburger) {
  this.hamburger = Hamburger.MENU[hamburger];
  if (this.hamburger === undefined){
    this.hamburger === null;
  }else{
    this.hamburger = Hamburger.MENU[hamburger];
  }
};

get getCallories() {
  return this.hamburger.callories;
};

get getPrice() {
  return this.hamburger.price;
};

/**
   * @param {string} topping
   */
set setTopping (topping) {
  if (Hamburger.TOPPING[topping]) {
    this.hamburger.price += Hamburger.TOPPING[topping].price;
    this.hamburger.callories += Hamburger.TOPPING[topping].callories;
  }else{
    alert("There is no Topping, which you chose");
  }
}
};

const hamb = new Hamburger("BIG");
hamb.setTopping = "potatoes";
console.log("Price with sauce:" +hamb.getPrice);
console.log("Callories with sauce:" +hamb.getCallories);













