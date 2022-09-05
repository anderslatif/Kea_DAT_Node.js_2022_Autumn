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


function genericActionExecutor(anyCallbackFunction, name) {
    // execute some code ...
    return anyCallbackFunction(name);
}

const spitting = (name) => `${name} is spitting.`;

// task Write a single line below without changing the above.
// task the output to the terminal should be: Amanda is spitting. 
// task don't call spitting directly.. use spitting as a callback function
console.log(genericActionExecutor(spitting, "Amanda"));
