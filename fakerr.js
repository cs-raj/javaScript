import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

function empTemplate(firstName, email){
    this.firstName = firstName;
    this.email = email;
    return this;
}

function numEmp(numberOfEmployee){
    console.log(numberOfEmployee);
    console.log(typeof numberOfEmployee);
    if(typeof numberOfEmployee == "string"){
        console.log("Input Number not a string");
        // return;
    }
    if(numberOfEmployee<1){
        console.log("Number of employee is less than 1")
    }
    const arr = [];
    for(let i=0;i<numberOfEmployee;i++){
        console.log(typeof i);
        console.log(i);
        //const emp = new empTemplate(faker.name.fullName(),faker.internet.email());
        arr.push(new empTemplate(faker.name.fullName(),faker.internet.email()));

    }
    console.log(arr);
}
//whenver creating fucntion think of all the values that goes into it
//Write the cases for it while writing the function itselfs
//ask this question while creating a function
//Input to function
//Return type
numEmp("abc");


//What are JS array MDN
//Modules
//Callback is the most import thing use it understand it properly
//Don't share the code while they are struggling 
