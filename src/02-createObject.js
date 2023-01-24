//using function constructor
function Employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = "Contentstack";
    this.isIntern = true;
    return this;
}

const emp1 =new  Employee("raj","p");
//when something is declared as modeul it becomes self contained piece of code
//Variables cannot be accessed