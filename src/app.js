//First the index.html file is loaded and then the files which are included in the header are loaded
// ./ means on the same server, It represents the place where server is actually running
//Browser will request index file first. The source file will be request next
//Once the script file is loaded we can access variable in browser itself
console.log("Hello World");

//Agenda of todays session
//Variables
//Objects
//Functions
//Combination of Objects and function

// Variable
// Primitives -- booolean, null, number, string, undefined
// Objects -- arrays, objects, dates, functions, wrappers(string, boolean, numbers)

// (ES5) var,  (ES6)let, const 
// typeof -- is operator // to get the datatype of variable
var num1 = 100;
var num2 = 200;
var num3 = num1; //Here the value is getting copied
num1 = 150;

//Primitive type will hold its value in the memory location and for every new  variable new memory location would be created.

var firstName = "Raj"; //Strings can either be object or primitives

var b1 = true;

//Undefined implies there is no value stored in the variable
//When something new is created undefined is assigned to it. ??Careful with it 
var lastName;


//Objects
//Arrays

var emp1 = {
    firstName:"Raj",
    lastName:"P."
};
var emp2 = emp1; //This is the place where emp2 referenced to emp1 memory block.
emp2.lastName = "P."

//Objects are "Reference"
//Everything in JavaScript in an Object, Almost Everything

//Array
console.log("value in error ",l1); //We get the value as undefined and not the error
//This is hoisting
//Allows using the name of variable before it is declared and initialized
var num = [10,20,30,40];
var num2 = num;

// function funtion_name(function parameter/arguements){
    //business logic
//}

//JS is scripting language
//It work line by line

let l1 = [10,20,30,40]; //It means for l1 the value can change. 
const l11 = [20,20]; //It means for l11 value cannot change. constanst
//const -- > value cannot be reassgined
//let --> value can be reassigned
//both const and let prevent hoisting
//JS is loosely typed
//Careful when assigning value to variables.

// => fat arrow notation
//Assigning a function to a variable name
//function are also objects and can be used as variable
// const printNameES6 = () =>{§
    //
//}
//Get comfortable with basics