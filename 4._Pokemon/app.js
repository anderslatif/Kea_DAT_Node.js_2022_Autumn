import express from "express";
const app = express();

app.use(express.static("public"));

import pokemonRouter from "./routers/pokemonRouter.js";
app.use(pokemonRouter);

import { renderPage, injectData } from "./util/templateEngine.js";

const frontpagePage = renderPage("/frontpage/frontpage.html", 
{ 
    tabTitle: "Pokemon", 
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` 
});

const contactPage = renderPage("/contact/contact.html");

const battlePage = renderPage("/battle/battle.html", {
    cssLink: `<link rel="stylesheet" href="/pages/battle/battle.css">` 
});

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

const randomPokemon = ["pikachu", "slowpoke", "ditto"];
app.get("/battle", (req, res) => {   
    res.redirect(`battle/${randomPokemon[Math.floor(Math.random() * randomPokemon.length)]}`);
});

app.get("/battle/:pokemonName", (req, res) => {
    const pokemonName = req.params.pokemonName;
    const battlePageWithData = injectData(battlePage, { pokemonName });
    res.send(battlePageWithData.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`));
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});



const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});


function addA(someString) {
    return someString + "A";
}
