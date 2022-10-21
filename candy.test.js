const Candy = require("./candy");

describe ('Candy', () => {
  it('creates a new candy', () => {
    const mars = new Candy('Mars', 4.99)
    expect(mars).toEqual( {"name": "Mars", "price": 4.99 } );
  });

  it('returns the name of the candy', () => {
    const mars = new Candy('Mars', 4.99)
    expect(mars.getName()).toStrictEqual( "Mars" );
  });

  it('returns the price of the candy', () => {
    const mars = new Candy('Mars', 4.99)
    expect(mars.getPrice()).toStrictEqual( 4.99 );
  });
});

