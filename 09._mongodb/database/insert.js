import db from "./connection.js";

const { insertedId } = await db.salesPeople.insertOne({ name: "Karl", salary: 9000 }); 

console.log(insertedId);