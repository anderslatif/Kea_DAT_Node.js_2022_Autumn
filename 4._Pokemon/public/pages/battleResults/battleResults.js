fetch("/api/battleresults/winsandlosses")
.then(response => response.json())
.then(results => {
    console.log(results);
    const winsP = document.getElementById("wins");
    const lossesP = document.getElementById("losses");

    winsP.innerText = results.wins;
    lossesP.innerText = results.losses;
});
