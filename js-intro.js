// // ASSESSMENT 1: INTRO TO JAVASCRIPT
// // Coding practical questions

// // Please read all questions thoroughly
// // Psuedo coding is highly recommended

// // --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// // Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// //create a function called checkBoilingPoint
 checkBoilingPoint = (temp) => {
// function checkBoilingPoint (temperature){
    if(temp === 212){
        return temp + " is at boiling point"
    }else if(temp < 212){
        return temp + " is below boiling point"
    }else {
        return temp + " is above boiling point"
    }
}
console.log(checkBoilingPoint(temp1));
console.log(checkBoilingPoint(temp2));
console.log(checkBoilingPoint(temp3));



// // --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// // // Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

const mult5 = (array) => {
    let newArr = []
    for(let i=0; i<array.length; i++){
        newArr.push(array[i] * 5)
    }
    return newArr
}

console.log(mult5(myNumbers1));

// // --------------------3) Create a function that multiplies each number in the array by 5 using map.
// // Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

multi5 = (array) => {
    let newArr = array.map(value => value * 5)
    return newArr
}
console.log(multi5(myNumbers2));


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

    onlyVowels = (array) => {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return array
    .split('')
    .filter(char => !vowels.includes(char))
    .join('');

}

console.log(onlyVowels(stringWithVowels1));
console.log(onlyVowels(stringWithVowels2));


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// // Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function removeVowels(str){
if(!(typeof str === "string")){
return "Not a string"
}

var withoutVowel = ""
for(var i=0; i<str.length; i++){
if(!vowels.includes(str[i])){
withoutVowel = withoutVowel + str[i]
}
}
return withoutVowel
}

console.log(removeVowels(notAString1))
console.log(removeVowels(notAString2))



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

var onlyCats = toonimals.filter(value => value.animal === "cat")
console.log(onlyCats)

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

var onlyNonCatNames = []
toonimals.filter((value) => {
if(value.animal!=="cat"){
onlyNonCatNames.push(value.name)
}
})

console.log(onlyNonCatNames)