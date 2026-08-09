/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/
const applyDiscount = (prices, rate) => {
  const newPrice = prices.map((price) => price - (price * 10) / 100);
  return newPrice;
};
let prices = [5000, 10000, 2500];
let rate = 10;
console.log(applyDiscount(prices,rate));
