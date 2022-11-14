import express from "express";
const app = express();

// import path from "path";
// app.use(express.static(path.resolve("../client/dist")));

import cors from "cors";
app.use(cors());

const animals = ["🦩", "🐶", "🦍", "🦄", "🦄", "🦚"];

app.get("/api/animals", (req, res) => {
    res.send({ data: animals });
});

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));
