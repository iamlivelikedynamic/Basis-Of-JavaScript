var a = 10;
console.log(typeof a);

var myFriendName = "Vicky";
var myLocation = 'Rajeev Nagar';
var mySkill = `Full Stack Web Developer `;
console.log("---------------");
console.log(myFriendName);
console.log(myLocation);
console.log(mySkill);

console.log("---------------");

console.log(typeof myFriendName);
console.log(typeof myLocation);
console.log(typeof mySkill);
console.log("---------------");
console.log("---------------");

var isLogedIn =true;
var isLaptop =false;
console.log(isLaptop);
console.log(isLogedIn);

console.log("---------------");
console.log("---------------");

console.log("****************");
console.log("****************");
console.log("****************");
console.log("****************");
console.log("****************");
// Keyword ====>> var --> Global & Functional 

var cost = 349;
// Concept of Functional Scope 
function Great(){
    var myTeacherName = "NITISH Sir";
    var myName = "Dhirendra Jha ";

    console.log(myTeacherName);
}
Great();
console.log(cost);
console.log(myName);
console.log("---------------");


// Var ==> REDECLARATION ALLOWED
var cost = 349;
console.log(cost);
console.log("---------------");
var cost = 499;
console.log(cost);
console.log("---------------");
console.log("****************");

// Var ====>> Reassignment Allowed;
// memory declaration same hi rahega dono ka (myName) ka......
var myName = "Dhirendra Jha";
console.log(myName);
console.log("---------------");
myName = "Prashant Shekhar"
console.log(myName);

console.log("****************");
console.log("****************");
console.log("****************");
console.log("****************");
console.log("****************");

// Let ====> Block Scope

{
    let price = 349;
    console.log(price);
}
console.log(price);   //ReferenceError: price is not defined.

console.log("****************");
console.log("****************");


{
    // Let ==> REDECLARATION ALLOWED
let cost = 349;
console.log(cost);
console.log("---------------");
// let cost = 499;      // SyntaxError: Identifier 'cost' has already been declared
console.log(cost);
console.log("---------------");
console.log("****************");
}
console.log("****************");
console.log("****************");


{
// let ==> Reassignment ALLOWED.....
let cost = 349;
console.log(cost);
console.log("---------------");
cost = 499;
console.log(cost);
console.log("---------------");
console.log("****************");
}