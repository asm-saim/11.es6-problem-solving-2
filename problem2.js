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
