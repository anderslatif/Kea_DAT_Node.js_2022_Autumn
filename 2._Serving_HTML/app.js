import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

// can't do this ever... must read as a file
// import packageJSON from "./package.json"
// console.log(packageJSON);
// can't use this anymore in module type syntax
// require("./package.json")

import { incrementVisitorCounter } from "./geocitiesUtil.js";

app.get("/", (req, res) => {
    console.log("Visitors since the server started", incrementVisitorCounter());
    // Can't use __dirname as it only works in common js
    // res.sendFile(__dirname + "/public/frontpage/frontpage.html");
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
});


app.listen(8080, () => console.log("Server is running on port", 8080));
