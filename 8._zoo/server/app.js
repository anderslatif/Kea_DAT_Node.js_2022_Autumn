import express from "express";
const app = express();

// import path from "path";
// app.use(express.static(path.resolve("../client/dist")));


app.get("/api/test", (req, res) => {
    res.send({ message: "You found me" });
});

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));
