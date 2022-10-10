const pathVariables = location.pathname.split("/");
const pokemonName = pathVariables.pop();



// todo start the battle against this pokemon
// fetch data about this specific pokemon

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then(response => response.json())
.then(pokemon => {
    console.log(pokemon);
    const whoWon = Math.random();

    if (whoWon >= 0.5) {
        console.log("I won");
    } else {
        console.log("I lost");
    }
    // once the battle is over then post the result to my backend 

});










