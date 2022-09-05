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
    anyCallbackFunction(name);
}


