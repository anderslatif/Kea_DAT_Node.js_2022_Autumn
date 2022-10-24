import { Router } from "express";
import battleRouter from "./battleRouter.js";

/* 
reduce 
(acc, element)

[1, 2, 4, 5]

0. acc = 0
1. acc = 0, element = 1, return acc + element
2. acc = 1, element = 2, return acc + element
3. acc = 3, element = 4, return acc + element
4. acc = 7, element = 5, return acc + element
Finished: 12

*/

const router = Router();

router.get("/api/battleresults/winsandlosses", (req, res) => {
    const winsAndLosses = battleRouter.battleResults.reduce((acc, battleResult) => {
        battleResult.iWon? acc.wins++ : acc.losses++;
        return acc;
    }, { wins: 0, losses: 0 });
    
    res.send(winsAndLosses);
});

router.get("/api/battleresults/pokemonbattled", (req, res) => {
// todo return an object of the following structure 
/* 
    {
        pokemonName: number,
        pokemonName: number,
        pokemonName: number,
        ....
    }
*/
});


export default router;
