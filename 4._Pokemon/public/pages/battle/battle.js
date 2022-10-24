// const pathVariables = location.pathname.split("/");
// const pokemonName = pathVariables.pop();




fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then(response => response.json())
.then(pokemon => {
    console.log(pokemon);
    

    const battlingPokemonImage = document.getElementById("battling-pokemon-sprite");
    battlingPokemonImage.src = pokemon.sprites.other.dream_world.front_default;

    const iWon = Math.random() >= 0.5;
    const whoWonHeader = document.getElementById("who-won");
    if (iWon) {
        whoWonHeader.innerText = "You won!";
    } else {
        whoWonHeader.innerText = "You lost!";
    }

    const body = { 
        pokemonBattled: pokemon.name,
        iWon 
    };

    fetch("/api/battles", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" }
    });

});









