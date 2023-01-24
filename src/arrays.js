//no concept of pointer in javascript
const arr = [];
function EmployeeObject(firstName, lastName, emailId){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
}

function copyEmployeeObject(empObject){
    const newObj = new Object(empObj);
    console.log(newObj);
    console.log(typeof(newObj));
    arr.push(newObj);
    return this;
}

const empObj = new EmployeeObject('thor','odinson','thor@gmail.com');
arr.push(empObj);
copyEmployeeObject(empObj);
console.log("thor");
console.log(arr);
empObj.firstName = "jane";
console.log(arr);