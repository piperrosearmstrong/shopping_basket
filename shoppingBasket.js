const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.candies = [];
  }

  addItem(candy) {
    this.candies.push(candy);
  }

  getTotalPrice() {
    let total = 0
    this.candies.forEach((candy) => total += candy.getPrice());
    return total;
  }
}

module.exports = ShoppingBasket;