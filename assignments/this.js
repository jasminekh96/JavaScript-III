/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Windown Binding: if no other rule applies, it will then default to window binding, not something you do on purpose.  
* 2. Implicit Binding: you look to the left of the dot notation and that is what the 'this' keyword is working with.
* 3. New Binding: You use the 'new' keyword to create a new object and 'this' will refer to what the new object is, must capitalize. 
* 4. Explicit Binding: You are telling JavaScript to point at that specific value using call, apply, or bind. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function dog() {
	console.log(this);
}
dog();
// Principle 2

// code example for Implicit Binding
let myDog = {
	name    : 'Buddha',
	species : '🐕🐻',
	weight  : '100lbs',
	sound   : 'woof woof',
	speak   : function() {
		console.log(this.sound);
	},
};

myDog.speak();

// Principle 3

// code example for New Binding
function Animal(favorite) {
	this.animal = favorite;
}
let myFavoriteAnimal = new Animal('Sloth');
console.log(`My favorite animal is a ${myFavoriteAnimal.animal} because they sleep all day!`);
// Principle 4

// code example for Explicit Binding
function dog() {
	console.log(this.woof);
}
let myDog = {
	name : 'Buddha',
	woof : 'woof woof 🐕!',
};
dog.call(myDog);

//Example from Justin
// function person(attributes) {
//     this.name = attributes,
//     this.tagLine = function () {
//         return `Hey, my name is ${this.name}`
//     }
// }

// const Max = new person('Max')

// console.log(Max.tagLine())
// Example 3
// function freakyFriday(messedUp) {
// 	this.greeting = `Houston, we have a problem!`;
// 	this.name = messedUp;
// 	this.speak = function(param1, param2, param3) {
// 		return `${this.name}, ${this.greeting}, I love ${param1}, ${param2}, and ${param3}`;
// 	};
// }
// const ourLikes = [ 'React', 'Javascript', 'HTML' ];
// const Tess = new freakyFriday('Jamie Lee Curtis');
// const Anna = new freakyFriday('Lindsay Lohan');

// console.log(Tess.speak());
// console.log(Anna.speak());

// console.log(Tess.speak.call(Anna, ...ourLikes));
// console.log(Anna.speak.apply(Tess, ourLikes));
