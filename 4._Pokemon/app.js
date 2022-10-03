import express from "express";
const app = express();

app.use(express.static("public"));

import { renderPage, battlePage } from "./util/templateEngine.js";

const frontpagePage = renderPage("/frontpage/frontpage.html", 
{ 
    tabTitle: "Pokemon", 
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` 
});

const contactPage = renderPage("/contact/contact.html");

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/battle", (req, res) => {
    const randomPokemon = "pikachu";
    res.redirect(`battle/${randomPokemon}`);
});

app.get("/battle/:pokemonName", (req, res) => {
    res.send(battlePage.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`));
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
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
