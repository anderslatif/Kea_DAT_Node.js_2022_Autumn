// import express
const express = require("express");
// instantiate the library express
const app = express();

// another way to import in a single line:
// const app = require("express")();


// route     // callback function
app.get("/", (request, response) => {
    response.send({ message: "Created my first route. Check." });
});

        // endpoint
app.get("/deers", (req, res) => {
    res.send({ size: "BIG" });
});

app.get("/deers/:id", (req, res) => {
    if (Number(req.params.id) === 1) {
        res.send({ name: "Bambi", theBestAndOGDeer: true });
    } else {
        res.send({ errorMessage: "I don't know that deer" });
    }
});

// ways to send data with GET
// this also works for all HTTP methods
// 1.
// path variables
// /deers/{id}

// 2.
// query parameters (query string)
// /deers?key=value&key2=value2

app.get("/actors", (req, res) => {
    console.log(req.query.name);
    res.send({
        message: "Information about the actor",
        ...req.query
    });
});



app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});

