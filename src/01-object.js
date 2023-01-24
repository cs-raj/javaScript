//Objects hold data
//Gives structure to the data requirement of the application
const headerInformation = {

};

//what exactly is an object
const obj1 = {
   // key1:value1
};
//Collection of key value pairs
//value can be anything.
//Key either has to be some string

const emp = {
    "firstName": "raj",
    "lastName":"pandey"
};

//How to create multiple object with same structure
//In Js we perfrom something with function and return value
//In js function always returns something
//By default function returns undefined
//function can return anything
function createEmployee(firstName, lastName){
    console.log("Creating the employee object");
    const template = {
        firstName:firstName,
        lastName:lastName,
        company: "Contentstack",
        isIntern: true
    };
    return template 
}
const emp1 = createEmployee("thor","odinson");
console.log(emp1);

const emp2 = createEmployee("tony","stark");
console.log(emp2);

emp1.firstName = "jane";
console.log(emp1);
console.log(emp2);