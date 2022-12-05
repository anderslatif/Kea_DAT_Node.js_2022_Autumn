import db from "./connection.js";

const allShoes = await db.shoes.find().toArray();
// console.log(allShoes);

const richSalesPeople = await db.salesPeople.find({ salary: { $gt: 2000 } }).toArray();

console.log(richSalesPeople[0].salary);
console.log(richSalesPeople);
