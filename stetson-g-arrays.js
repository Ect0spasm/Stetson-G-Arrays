/*
Arrays [0]
*/

//Organizing and storing ordered information; is foundational to programming.


//Lists can organize real life data
/*
How to make it:
1. Make a bed
2. Doing things
3. You get it
*/

//Now it's time to write a list in Javascript as an array
let newYearsResolution = ['Keep a journal', 'Take a falconry class', 'Learn Kubernetes'];
let howTo = ['Make a bed', 'Doing things', 'You get it'];

//Arrays are Javascript's way of making lists.
/*
Arrays can store any data types (including strings, numbers, and booleans)
Like lists, they are ordered
*/

//Creating an array
/*
One way is to use an array literal.
It creates am array by wrapping items in [square brackets]
Arrays can store any data type

Each element within an array is called an element.
Each element is seperated by comma
*/

//practice
const hobbies = ['Gaming', 'guitar', 'art'];
console.log(hobbies);



//Accessing Elements
/*
Every element has a numbered position called an index.
You can access indv. items by using theit index, its like referencing
 an item based on its position (or number) 
 Javascript arrays are zero-indexed. meaning they start counting from 0 instead of 1.
*/



//Practiuce
    listItem = [0];
    console.log(listItem);
    listItem = [2];
    listItem = [3];




//Updating Elements
/*
    We learned how to access elements inside an array from the last exercise
    Once we have acces to an element in an array, we can update its value 
*/
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';
console.log(seasons);


//Practice
/*
    change each value in newYearsResolutions array without directly editing the array 
    at the top of the script to what I want to accopmplish
    Then console.log to check the modified array
*/



/*
Arrays [1]
*/

// Arrays with let and const
/*
    Variables declared with let can be reassigned.
    Variables declared with const keyword cannot be reassigned. 
    However, elements in an array declared with const remain mutable.
        The contents can change but cannot reassign a new array
*/
let condiments = ["Ketchup", "mustard", "Relish"];
condiments[0] = 'Mayo';
console.log(condiments);
let condiments = ['Mayo']

const utensils = ['fork', 'spoon', 'knife']
utensils[2] = ['spork']


//The .length property
/*
    Length is a built in property for arrays.
    It returns the number of items in the array.
*/
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions.length);
console.log(newYearsResolutions[newYearsResolutions.length -1])


//
/*
Dot notation, chaining a period with the property name to the array
*/
console.log(condiments.length);
console.log()

//The .push() Method
/*
    Some built in JavaScript arrays that make common tasks
    like adding and removing elements more straightforward.
    .push() allows us to add items to the end of an array
*/
const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];



//How does .push() work?
/*
    Access it through dot notation
    Then call it a  function
    .push() can take a single argument or multiple seperated by commas
    .push() changes, or Mutates itemTracker
*/
const chores = [];
chores.push('laundry', 'cleaning')
console.log(chores)



//The .pop() Method
/*
    Removes the last item of an array:
*/
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
//calling .pop() removed item 2 from the end of the array.

/*
    .pop() doesn't take any arguments, only removes the last element of an array
Returns the value of the last element.
Mutates the initial array
*/
const removed = chores.pop();
console.log(chores);
console.log(removed);


//
/*

*/



//
/*

*/



//
/*

*/