const pokemonDiv = document.getElementById("pokemon");

/* setTimeout(() => {
    // window.location.href = "/battle";
    window.location.replace("battle");
}, 3000); */

fetch("/api/pokemon")
.then(response => response.json())
.then(result => {
    result.data.results.forEach(pokemon => {
        const pokemonIndividualDiv = document.createElement("div");        
        const pokemonNameP = document.createElement("p");
        pokemonNameP.innerText = pokemon.name;

        const battleLink = document.createElement("a");
        battleLink.setAttribute("href", `/battle/${pokemon.name}`);
        const battleButton = document.createElement("button");
        battleButton.textContent = `Battle ${pokemon.name}!`;
        battleLink.appendChild(battleButton);

        pokemonIndividualDiv.appendChild(pokemonNameP);
        pokemonDiv.appendChild(pokemonIndividualDiv);
        pokemonDiv.appendChild(battleLink);
    });
    
});


