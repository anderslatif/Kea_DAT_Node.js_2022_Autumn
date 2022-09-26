fetch("/pokemon")
.then(response => response.json())
.then(result => console.log(result));

const pokemonDiv = document.getElementById("pokemon");



/* fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => response.json())
.then(result => {
    result.results.forEach(pokemon => {
        const pokemonIndividualDiv = document.createElement("div");        
        const pokemonNameP = document.createElement("p");
        pokemonNameP.innerText = pokemon.name;

        pokemonIndividualDiv.appendChild(pokemonNameP);
        pokemonDiv.appendChild(pokemonIndividualDiv);
    });
    
});
 */
