/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "dog";
animal["name"] = "Luna";
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "woof";
noises.push("bark");
noises.unshift("howl");
noises.push("cry");
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
animal.noises = noises;
noises.push("pant");
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var cat = {species: 'cat', name: 'Tino', noises: ['meow', 'hiss', 'yawn', 'cough']};
animals.push(cat);
var fish = {species: 'fish', name: 'Nemo', noises: ['blub', 'woosh', 'splash', 'gasp']};
animals.push(fish);
console.log(animals);
console.log(animals.length);

var friends = [];//I used an array because it is just compiling the friends in a list and there is no key to match to a value.
function getRandomFriend(){
    return animals[Math.floor(Math.random() * (animals.length))]["name"];
}
friends.push(getRandomFriend());

console.log(friends);
animals[0].friends = friends;
console.log(animals);

/////////////////////////
/////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
