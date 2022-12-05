// console.log(add(5, 28));

// gets hoisted
function add(a, b) {
    return a + b;
}
                            // anonymous function after the equal sign.. does not have a name
const addAnonymousFunction = function (a, b) {
    return a + b;
};

const addArrowFunction = (a, b) => {
    return a + b;
};

const addArrowFunctionCompact = (a, b) => a + b;


function genericActionExecutor(anyCallbackFunction, genericName) {
    // execute some code ...
    return anyCallbackFunction(genericName);
}

const spitting = (name) => `${name} is spitting.`;

// task Write a single line below without changing the above.
// task the output to the terminal should be: Amanda is spitting. 
// task don't call spitting directly.. use spitting as a callback function
// console.log(genericActionExecutor(spitting, "Amanda"));

// task create a function that allows Malte to shoot and call it. 
// task result should be: Malte is shooting. 
const shooting = (name) => `${name} is shooting.`;
// console.log(genericActionExecutor(shooting, "Malte"));

// Create a SINGLE statement below that console logs "Murat" is running away. 
console.log(genericActionExecutor((name) => `${name} is running away`, "Murat"));