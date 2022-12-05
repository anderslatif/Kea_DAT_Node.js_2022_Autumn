/* 
Why: Javascript is single-threaded
If we didn't write asynchronous code we would have blocking code. 

Use cases of asynchronous code:
- Data traveling over a network (fetch)
- Reading and writing to files.
- import when asynchronously calling URLs.
- Interacting with a database. 
- Heavy calculations. 
- Encryption/Decryption. 
- Event listeners (DOM).

Basically anything that takes time (since we don't want to block and prevent other code from running).

Solution 1: 
Callback functions. 
Problem: Callback hell, Pyramid of doom

Solution 2:
Introducing promises!
Can have two different states:
- Pending
- Fulfilled
        - Resolved, Rejected

Solution 3:
Introducing async/await. 
Again syntactic sugar. 
*/

new Promise((resolve, reject) =>  {
    try {
        // throw Error;
        resolve("Yay");
    } catch (stackTrace) {
        reject("Nay");
    }
})
.then(successMessage => console.log(successMessage))
.catch(errorMessage => console.log(errorMessage));


function howAwesomeAmI(name) {
    return new Promise((resolve, reject) => {
        resolve(`${name} is very awesome`);
    });
}

howAwesomeAmI("Anders")
.then(answer => console.log(answer)); 



function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                // throw new Error("Bad")
                resolve("Good");
            } catch {
                reject("Bad");
            }
        }, 3000);
    });
}

// somethingGoodSomethingBad()
// .then(shouldBeGood => console.log(shouldBeGood))
// .catch(shouldBeBad => console.log(shouldBeBad));

// const shouldBeGood = await somethingGoodSomethingBad();

// IIFE
(async function asyncAwaitExample() {
    try {
        const shouldBeGood = await somethingGoodSomethingBad();
        const awesomeMessage = await howAwesomeAmI("Emilie");

        console.log(shouldBeGood, awesomeMessage);
    } catch (errorMessage) {
        console.log(errorMessage);
    }

})()

const shouldBeGood = async () => {
    return await somethingGoodSomethingBad()
}
console.log(shouldBeGood());
