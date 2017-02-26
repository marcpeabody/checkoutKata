const {expect, something} = require('chai');
const Checkout = require('../lib/checkout');

describe('Checkout', function() {
  let checkout;

  beforeEach(function(){
    checkout = new Checkout();
  });

  it('gives price for single item', function() {
    expect(checkout.scan("A")).to.equal(50);
    expect(checkout.scan("B")).to.equal(30);
    expect(checkout.scan("C")).to.equal(20);
    expect(checkout.scan("D")).to.equal(15);
  });


  it('starts with a total of zero', function() {
    expect(checkout.total).to.equal(0);
  });
  it('keeps a running total of scanned items', function() {

    checkout.scan("B");
    checkout.scan("C");

    expect(checkout.total).to.equal(50);
  });

  it('totals a series of items', function(){
    expect(checkout.scanMultiple("")).to.equal(0);
    expect(checkout.scanMultiple("A")).to.equal(50);
    expect(checkout.scanMultiple("AAAA")).to.equal(200);
    expect(checkout.scanMultiple("AAAA")).to.equal(200);
    expect(checkout.scanMultiple("ABCDA")).to.equal(165);
  });

  it('still keeps running totals', () => {
    checkout.scanMultiple("");
    checkout.scanMultiple("AA");
    checkout.scanMultiple("BB");
    expect(checkout.total).to.equal(160);
  })
});
