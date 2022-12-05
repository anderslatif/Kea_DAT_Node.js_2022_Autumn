import db from "./connection.js";


const { deletedCount } = await db.salesPeople.deleteOne({ name: "Karl" });

console.log(deletedCount);
