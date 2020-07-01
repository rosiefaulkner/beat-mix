// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

// a function called toggleDrum that takes two arguments: a string representing the array name ('kicks', 'snares', 'hiHats', or 'rideCymbals'), and an index number. This function should flip the boolean value in the correct array at the specified index.

let toggleDrum = (drumsString, booleanIndex) => {
    drumsString.splice(booleanIndex, 1, true);
    return drumsString;
}

// console.log(toggleDrum(snares, 3));

// A function named clear that takes an array name string and sets all values in the correct array to false.

let clear = (arrayNameString) => {
    if(arrayNameString){
        for(let i=0; i<arrayNameString.length; i++){
            if(arrayNameString[i] == true){
                arrayNameString.splice(arrayNameString[i], 1, false);
            } 
        }
    }
}

// console.log(clear(snares));

// A function named invert that takes an array name string and flips the boolean value of all elements in the correct array.

let invert = (bools) => {
    for (let i=0; i<bools.length; i++){
        bools[i] = !bools[i];
    }
    return bools;
}

