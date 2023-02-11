// const a=300;             //if we declared the variable once by using const keyword then we can not reinitialize the vale of a variable.despite if we try to reassigning the value of variable a then we found the error.
// console.log(" a value is" +a);   




// var b=40;      //but here if we declared the variable by using var keyword then  we can reinitialize the value of b variable.
// console.log('b value is' +b);

// b=700;
// console.log("b value is " +b);

// let c=600;
// console.log("c value is "+c);

// c=9090;
// console.log("c value is "+c);




//1)

// let a=20;
// let b=30;

// a!=b ? console.log(true): console.log(false);   //ternary operater




//2)

// var a=10;
// let b=10;

// {
//     a=20;
//     b=20;                   //here we reinitialized the value of a and b.
//     console.log(a);      //20
//     console.log(b);      //20
// }
//     console.log(a);       //20
//     console.log(b);       //20



//3)

// var a=10;
// let b=10;

// function abc()
// {
//     a=20;
//     b=20;
// }

// console.log(a);       //10
// console.log(b);       //10      because we not called the function that's why these  value will print.


//4)

// var a=10;
// let b=10;

// function abc()
// {
//     a=20;
//     b=20;
// }

// abc();          // here we called the  function abc().that's why those values are present in block that all printed.

// console.log(a);    //20
// console.log(b);    //20


//5)

// let a="Bhushan";
// let b=35;

// console.log(typeof(a));    //for checking the type of values.  means string or number.
// console.log(typeof(b));


//6)


//console.log(a);
//console.log(b);     //if we write the console.log() before the variable declaration then value will not print and we get the undefined value for var declaration because var is in global scope and reference error for let and const declarations because let and const is in block scope .
// console.log(c);



//var   a=100;
//let   b=40;
// const c=20;



//7)

// var   a=100;
// let   b=40;
// const c=20;


// console.log(a);  //here we get the value because we declared the variable before console.log() and also assigned the values to all .
// console.log(b);
// console.log(c);



//8)

// console.log(name);  //undefined

// var name="Bhushan";
// console.log(name);  //Bhushan

// function abc()
// {
//     name="Divyani";
//     console.log(name);
// }

// abc();






