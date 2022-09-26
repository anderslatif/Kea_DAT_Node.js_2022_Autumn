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


// task make sure that the server actually runs on the port in the environment variable if defined
const PORT = 8080;

console.log(process.env.PORT);

const server = app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
