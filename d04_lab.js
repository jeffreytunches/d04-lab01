/* 1. Declare variables that are examples of the
 five primitive types. For example, assign
 true to booleanValue, since true is a boolean
 value. Show two different ways to make a
 variable undefined! */
​
var booleanValue    = true;
var numberValue     = 11;
var stringValue     = "this is s string value";
var nullValue       = null;
var undefinedValue  = car;
var undefinedValue2 = 3/0;
​
​
/* 2. In your console, use the typeof operator on
 each of the above variables. For example: */
​
console.log (typeof(true));
console.log (typeof(11));
console.log (typeof("this is a string value"));
console.log (typeof(null));
console.log (typeof(car));
console.log (typeof(3/0));
​
/* 3. Which of the above variables does typeof NOT
 show the expected primitive type? This is
 a bug in JavaScript! It has not been fixed
 since a lot of code online depends on it. */
​
var undefinedValue2
​
/* Mia, Albert, and Tony are going to a party.
 Set "attendees" to an array of their names. */
​
var attendee1 = {name: "Mia"};
var attendee2 = {name: "Albert"};
var attendee3 = {name: "Tony"};
var arr = [];

arr[0] = attendee1.name;
arr[1] = attendee2.name;
arr[2] = attendee3.name;
​
​
/* Create the same array in a different way --
 by creating a new Array object. */
​
var attendee1 = {name: "Mia"};
var attendee2 = {name: "Albert"};
var attendee3 = {name: "Tony"};
var arr = [attendee1.name, attendee2.name, attendee3.name];
attendees = arr;
​
​
/* Access the third element in the array. */
​
var attendee1 = {name: "Mia"};
var attendee2 = {name: "Albert"};
var attendee3 = {name: "Tony"};
console.log(attendee3.name)
​
/* Write a statement which sorts the array. */
​
var attendee1 = {name: "Mia"};
var attendee2 = {name: "Albert"};
var attendee3 = {name: "Tony"};
arr = [attendee1.name, attendee2.name, attendee3.name];
attendees = arr;
array.sort(arr) /*this is as far as i got*/
