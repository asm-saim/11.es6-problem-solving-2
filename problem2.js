/*
  Problem 1: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/
const findUserById = (users, id) => {
  const matchedObj = users.find((user) => user.id === id);
  if (matchedObj) return matchedObj;

  return "User not found";
};
let users = [
  { id: 1, name: "Rafi" },
  { id: 2, name: "Karim" },
];
let id = 2;

console.log(findUserById(users, id));

/*
  Problem 2: Shopping Cart Total (reduce)
  getCartTotal(cart) — sum price * qty across every item in the cart
  using reduce().


  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/

// Accumulator -> 0
// Pen -> Accumulator =  0 + (20 * 3) = 60
// Notebook -> Accumulator = 60 + (50 * 2)
// Accumulator -> 160

const getCartTotal = (cart) => {
  const totalCost = cart.reduce((accumulator, element) => {
    return accumulator + element.price * element.qty;
  }, 0);

  return totalCost;
};

let cart = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "Notebook", price: 50, qty: 2 },
];
console.log(getCartTotal(cart));
