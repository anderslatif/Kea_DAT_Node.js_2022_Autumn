import express from "express";
const app = express();

/* Middleware functions */
function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

function guidingButler(req, res, next) {
    console.log("This way, sir.");
    next();
}

/* Setup middleware */
app.use(ipLogger);
app.use("/room", guidingButler);


function guardMiddleware(req, res, next) {
    if (!req.query && req.query.name !== "Anders") {
        res.send({ message: "You are not Anders! Go away." });
    }

    req.fullname = "Anders Latif";
    next();
}

app.get("/frontdoor", guardMiddleware, (req, res) => {
    res.send({ message: `Please enter, ${req.fullname}` });
});


app.get("/room", (req, res, next) => {
    console.log("Room 1");
    next();
    // res.send({ message: "You are in room 1" });
});

app.get("/room", (req, res, next) => {
    console.log("Room 2");
    res.send({ message: "You are in room 2" });
});

app.get("/inlinemiddleware", (req, res, next) => next(), (req, res, next) => res.send({ "message": "OK" }));

app.get("*", (req, res) => {
    res.send(`<h1>404</h1><br><h3>Could not find the page.</h3>`);
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
