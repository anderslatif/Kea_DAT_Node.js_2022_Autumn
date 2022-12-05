import db from "./connection.js";

const { matchedCount } = await db.salesPeople.updateMany(
    { name: "Karl"},
    { $set: { employeeOfTheMonth: true }}
);

console.log(matchedCount);
