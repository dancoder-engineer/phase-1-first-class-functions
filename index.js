function add (a, b) {
    return a + b;
}

function receivesAFunction(callback) {
    let a=5;
    let b=7;
    callback(a,b);
}

function returnsANamedFunction(things) {
    const doThings = function (things) { return `Today I studied coding and ${things}.`; }
    return doThings;
}

function returnsAnAnonymousFunction(things) {
    return function (things) { return `Today I studied coding and ${things}.`; }
}