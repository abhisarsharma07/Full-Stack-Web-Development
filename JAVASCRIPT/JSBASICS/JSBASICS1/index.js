console.log("hello hi!!");
let d=5;
console.log(d);
// Three wAys to create variable

// #1

console.log("var");
var l = 10;
console.log(l);

l= 20;
console.log(l);

{
  var t = 30;
}
console.log(t);

// #2 - Let

console.log("Let");
let b = 10;
console.log(b);

// let b = 20; - Error
b = 20;
console.log(b);

{
  let bx = 40;
  console.log(bx);
}
// console.log(ba); - Error

// #3 
console.log("const");

const c = 10;
console.log(c);

// c = 20; //Error
console.log(c);

// Data Types 

// Primitive Data Types 
// #1 - String
let firstName = "priyansh";
let lastName = 'patel';
let fullName = firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);

// #2 - Number 
let num = 10.6;
console.log(num);

num = 10;
console.log(num);

// #3 - Boolean
let bool = true;
bool ? console.log("True") : console.log("False");

// #4 - Undefined
let x;
console.log(x);

// #5 - Null
let y = null;
console.log(y);

// Non - Primitive 
// #1 - Arary 

let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr = ['my','name','is','Priyansh'];
console.log(arr);
console.log(arr[0]);

// #2 - Object 

let obj = {
    "Name" : 'Priyansh',
    "Age" : 20
};

console.log(obj["Name"]);


// #1 - Arithemetic Operator 
// + - / * % ++ -- 

console.log("Arithemetic Operator");
let num1 = 10;
let num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log("Post and Pre Increment and Decrement");
console.log(num1++ + ++num2); // 11 21 31
console.log(++num1 + num2--); // 12 20 33 
console.log(num1-- - num2--); // 11 19 -8
console.log(num1-- - --num2); // 10 18 -7
console.log(++num1 - --num2); // 11 17 -6  
console.log(++num1 + --num2); // 12 16 28

// #2 - Assignment Operator 
// = += -= *= /= %=

console.log("Assignment Operator");
let a = 5;
console.log(a); //5
a+=a;
console.log(a); //10
a-=4;
console.log(a); //6
a*=5;
console.log(a); //30
a/=2;
console.log(a); //15
a%=7
console.log(a); //1

// #3 - Comparison Operator 
console.log("Comparison Operator")
// == === != !== > < >= <= 
let n1 = 5;
let n2 = '5';

console.log(n1 == n2);
console.log(n1 === n2);
console.log(n1 != n2);
console.log(n1 !== n2);
console.log(n1 >= n2);
console.log(n1 <= n2);
console.log(n1 > n2);
console.log(n1 < n2);

// #4 - Bitwise Operators
// & | ^ ~ << >> >>> 

console.log("Bitwise Operators");
let bo = 10;

console.log(bo & 3); //2
console.log(bo | 3); //11 
console.log(bo ^ 3); //9
console.log(~bo); //
console.log(bo >> 1); //5
console.log(bo << 1); //20
// console.log(bo >>> 1); //

// #5 - Logical Operator 
// && || ! 
let lo1 = true; 
let lo2 = false;

console.log(lo1 && lo2); //False
console.log(lo1 || lo2); //True
console.log(!lo1) // False
console.log(!lo2) // True


// #6 - Turnary Operator 
let age = 18;
age > 18 ? console.log("You can Vote"): console.log("You can not vote");

// If Else 
// #1 - Single If Else
let number = 10;
if(number > 10)
{
    console.log("Number is greater than 10");
}
else 
{
    console.log("Number is lesser or equal to 10");
}

// #2 - Multiple if else 
if(number < 10)
{
    console.log("Number is lesser than 10");
}
else if(number > 10)
{
    console.log("Number is greater than 10");   
}
else{
    console.log("Number is equal to 10");
}
let weekNumber = 4;
switch (weekNumber) {
    case 1:
        console.log("Monday");
        break;
    
    case 2:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("Wednesday");
        break;
    
    case 4:
        console.log("Thursday");
        break;
    
    case 5:
        console.log("Friday");
        break;
    
    case 6:
        console.log("Saturday");
        break;    
    
    case 7:
        console.log("Sunday");
        break;
    
    default:
        console.log("Invalid")
}

let numa = 100;
for (let i = 1; i <= numa; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
  if (i % 10 == 0) console.log("\n");
}
let i = 10;
while(i>0)
{
    console.log(`${5*i}`);
    i--;
}
let j = 1;
do
{
    console.log(`${5*j}`);
    j--;
}while(j>10)