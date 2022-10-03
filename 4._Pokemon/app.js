import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

import fs from "fs";

const navComponent = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const frontpagePage = navComponent + frontpage + footerComponent;


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/battle", (req, res) => {
    const randomPokemon = "pikachu";
    res.redirect(`battle/${randomPokemon}`);
});

app.get("/battle/:pokemonName", (req, res) => {
    res.sendFile(path.resolve("public/battle/battle.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("public/contact/contact.html"));
});

app.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(result => res.send({ data: result }));
});



const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
