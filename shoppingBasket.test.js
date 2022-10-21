const Candy = require('./candy');
const ShoppingBasket = require("./shoppingBasket");

describe ('ShoppingBasket', () => {
  it('returns an empty shopping basket', () => {
    const basket = new ShoppingBasket();
    expect(basket).toEqual( {"candies": []} );
  });

  it('adds the item to the basket', () => {
    const basket = new ShoppingBasket();
    const mars = new Candy('Mars', 4.99);
    expect(basket.addItem(mars)).toStrictEqual();
  });

  it('gives us the total cost of the basket', () => {
    const basket = new ShoppingBasket();
    const mars = new Candy('Mars', 4.99);
    basket.addItem(mars);
    expect(basket.getTotalPrice()).toStrictEqual( 4.99 );
  });

  it('gives us the total cost of multiple items in the basket', () => {
    const basket = new ShoppingBasket();
    const mars = new Candy('Mars', 4.99);
    basket.addItem(mars);
    const starbar = new Candy('Starbar', 3.99);
    basket.addItem(starbar);
    expect(basket.getTotalPrice()).toStrictEqual( 8.98 );
  });

  it('gives us the total cost of multiple items in the basket', () => {
    const basket = new ShoppingBasket();
    const mars = new Candy('Mars', 4.99);
    basket.addItem(mars);
    const starbar = new Candy('Starbar', 3.99);
    basket.addItem(starbar);
    basket.addItem(starbar);
    expect(basket.getTotalPrice()).toStrictEqual( 12.97 );
  });
});
