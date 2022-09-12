const express = require("express");
const app = express();

app.use(express.static("public"));

console.log(require("./package.json"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});



app.listen(8080, () => console.log("Server is running on port", 8080));
