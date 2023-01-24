// Two ways to write functions in js
// ES5 and ES6
// Two Questions to ask
// Input to the functions
// Return type of function
// We will only have one return value -- A lot of things can be put into the single variable which will be returned
// What all things can a function return 
// Can only return one thing
// Ensure the property on which you are working is present in the result
// When number of parameters passed into function call is > no. arguements the extra parameters will be ignored
// Careful when working with properties
// Deeply complex objects can be sent out of functions
// LImitation we can only return one thing from functions
// name of the fucntion is reference to the function itself
// When returning a function from a function use the name only do not call the function
// What can be an input to a function? Anything
// we can pass function as an arguement
function addition(n1,n2){
    // What is the type of arguements
    // number
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        console.log("Functions expects number as input");
    }
    return {
        input: [n1,n2],
        sum: n1+n2
    }
}
console.log(addition(10,289920900));


const returnFucntion = function(){
    var result = 10+10+20;
    const internalFunction = function(){
        console.log("Internal Function");
    }
    return internalFunction;
}

const t = returnFucntion();
console.log(typeof t);
t();

const functionRef = returnFucntion; //Here functionRef refers to returnFunction iself // Name of the function gives definition of the function itself
// === means comparing the value and the types
//Callback is a function passed as an arguement
// It is executed whent he function to which it is passed is executed first and depending upon its condition callback function is executed 
const callBackFunction = function() {
    console.log("I am a call back bunction");
}

const cb = callBackFunction;
function whatIsCallBack(cb){
    console.log("some processing");
    if( Date.now()%2===0){
        cb();
    }
}
whatIsCallBack(cb);
// Using Anonymous function
whatIsCallBack(function(){console.log("This is defined on run")});


//Array
//isArray() -- functions
// For instance methode we need instace to use this function
//When prototype is used it is the property of the instance i.e. that method can be used by a class itself.
// If protottuype is not mentioned then the only instance that use it is the person class itself.

// Let's be technically correct right from the beginning itself.

const names = ['a','b','c','d'];
const callback = function(element, index, fullArray){
    console.log("welcome ",element);
}

names.forEach(callback);

function ekisDin(arr){
    const doublePaisa = arr.map((item)=>item*2);

    return doublePaisa;
}
const arr = [1,3,4,5,6,7];
// console.log(ekisDin(arr));
// Map will always return something the number of element in map will always be equal to number of element in the array

console.log(arr.filter((item)=>item%2==0));
console.log(arr.filter(function(item){
    if(item%2==0){
        return item;
    }
    else{
        console.log("In reeturn ");
        return undefined;
    }
}));
// break forEach mein nahi chalta

// Yeh teeno acche se karo
// ForEach
// Map
// Filter
// Tryout string from mdn
// Solve the exercise that nirav will give
// template strings
var res = 0;
const num1 = [1,2,3,4,5,6,7,8,89,0,9];
console.log(num1.forEach((item)=>{
    //console.log(res);
    //console.log(item);
    res+=item;
    }));
    console.log(res);
console.log(num1.every((item)=>item%2==0));
console.log(num1.some((item)=>item%2==0));