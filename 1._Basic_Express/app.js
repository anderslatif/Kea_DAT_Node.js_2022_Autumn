const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send({ message: "Created my first route. Check." });
});

app.listen(8080);
