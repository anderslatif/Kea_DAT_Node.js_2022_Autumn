'use strict';

// Never EVER do this!!!
// totalGlobalVariable = "Malte";
// var globalVariable = "Malte";

// variable decleration
const me = {
    name: "Anders"
};
const hobbies = [];
hobbies.push("Music");
me.hobbies = hobbies;
console.log(me);


{
    let someValue = true;
    {
        let someValue = false;
    }
    // console.log(someValue);
}

{
    var someValue = true;
    {
        var someValue = false;
    }
    // console.log(someValue);
}

/* for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
} */

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
