import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"));
});

app.get("/pokemon", (req, res) => {
    res.send({ data: ["Slowpoke"] });
});

app.listen(8080, (error) => {
    console.log("Server is running on port", 8080);
});
