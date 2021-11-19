//Exercise #1
// Define two arrays, evens and odds filled with even
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds
 let arrOdd = [1,7,13,45,39];
 let arrEven = [4, 78, 22, 6];

 let newArr = [...arrOdd, ...arrEven]
 console.log(newArr);






//Exercise #2
// Define an object favoriteFoods that has keys representing three of
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your
// imaginary friend what their favorite foods are.
// Use the spread operator to build a final allFoods with the
// items from the two objects you just built
const favFood = {
  burgers: 'Five Guys',
  koreanBBQ: 'O2 BBQ',
  tacos: 'Tulcimexx'
}
const friendFav = {
  steak: 'Ruth Chris',
  friedChiken: 'Crown Fried',
  pizza: '6 Line Pizzeria'
}
let allFoods = { ...favFood, ...friendFav }
console.log(allFoods);




// Exercise #3
// Define your favorite movie character in an object
// with three keys: name, age, and hometown
// Use destructuring to extract all three keys into variables
// log all three variables
// Use the spread operator to extract two of the keys but not the third
// store and log this new set of variables
// Now we are going to give this person a pet
// Use destructuring to do the following
// 1) add a pet object to your person
// 2) define three variables (age, breed, name) outside of the object
// 3) add those variables to your pet
// log the most important thing about it: the pet's name
const favChar = {
  name: 'Barry Lyndon',
  age: '24',
  hometown:'Ballybarry, Ireland',
}

let {name, age, hometown} = favChar;
console.log(name);
console.log(age);
console.log(hometown);

const pet = {}

const character = {...favChar, pet}
let petName = 'Arnow';
let petAge = 36;
let petBreed = 'Indian Star Tortoise';

favChar.pet = {petName, petAge, petBreed}

console.log(favChar.pet);
