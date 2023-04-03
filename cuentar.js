const restaurantBill = (bill) => {
    const tax = bill * 0.1;
  
    const cuentaamigas = bill + tax;
  
    return `$${cuentaamigas / 5}`;
  };
  
  module.exports = restaurantBill;
  