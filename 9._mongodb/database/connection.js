import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

await client.connect();

const shoesDB = client.db("shoes");


export default {
    shoes: shoesDB.collection("shoes"),
    salesPeople: shoesDB.collection("salesPeople")
};
