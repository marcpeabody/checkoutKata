

class Checkout {

  constructor() {
    this.pricing = {A:50, B:30, C:20, D:15 }
    this.total = 0;
  }

  scan(item) {
    const itemPrice = this.pricing[item];
    this.total += itemPrice;
    return itemPrice;
  
  }
  scanMultiple (items){
    const itemArray = items.split("");

    let multipleTotal = 0;
    itemArray.forEach((item) => {
      multipleTotal += this.scan(item)
    });

    return multipleTotal;
    // return itemArray.map(item => {
    //   return this.scan(item);
    // }).reduce((x,y) => {
    //   return x+y;
    // }, 0);
  }
}

module.exports = Checkout;
