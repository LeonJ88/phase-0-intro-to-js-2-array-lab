// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
    cats.push("Ralph");
}

function destructivelyPrependCat () {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat () {
    cats.shift();
}

function appendCat (name) {
    const appendNewCats = [...cats, name];
    return appendNewCats
}

function prependCat (name) {
    const prependNewCats = [name, ...cats];
    return prependNewCats
}

function removeLastCat() {
    return cats.slice(0, cats.length -1);
}

function removeFirstCat () {
    return cats.slice(1);
}