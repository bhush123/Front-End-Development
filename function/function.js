// let a=10, b=30;

// function add()
// {
//     console.log(a+b);    //40
// }

// add();   //calling the function from here.




// function add(a,b)
// {
//     console.log(a+b);

// }

// add(10,30);  //calling the function and passing the parameters from here to the function.




// function add(a,b)
// {
//     console.log(a+b);

// }

// add(10,30);     
// add(40,30);  
// add(50,60);  
// add(10,60);  
// add(60,30);  



// arguments:the values which we pass to a variable :10,30,40,30 etc.
//parameters:the value which function uses to do the operation :a and b are parameters.


//if there is block of code that we need to reuse we put it inside the function.
//functions are reusable blocks of code.



//eg.1)

// var a;
// console.log(a);
// a=100;
// console.log(a);


//eg.2)

// var a=10;
// console.log(a);


//eg.3)

// function abc()
// {
//     console.log("inside abc");        //inside abc.

// }

// abc();


//eg.4)

// function add(a,b)
// {
//     console.log(a+b);      //9

// }

// add(4,5)



//eg.5)

// function add(a,b)
// {
//     return a+b;

// }

// var result=add(4,5);

// console.log(result);       //9




//eg.6)

// console.log(result);             // undefined because we wrote console statement before initialization.
// var result=add(4,5);

// function add(a,b)
// {
//     return a+b;

// }


//eg.7)


// var result=add(4,5);

// console.log(result);       //9

// function add(a,b)
// {
//     return a+b;

// }



//eg.8)

// function abc()
// {
//     var a=10;
//     var b=20;

//     console.log(a,b ,"inside abc");     //10 20 inside abc
// }

// abc();

// console.log(a,b, "outside abc");       //reference error     

  

   //if we declared the variable inside the function and try to access those variables outside of the function then it will generate the reference error.
  //if we write the console statement before intialization or declaration then it will gives the output udefined value.



  //eg.9)

//   function abc()
//   {
//     var a=10;
//     var b=20;
//     console.log(a,b);     //10 20
//     console.log(x);       //10


//   }
//   var x=10;    // global scope   10
//   abc();
  

//eg.10)


// function abc()
// {
//   var a=10;
//   var b=20;
//   console.log(a,b);     //10 20
//   console.log(x);       //undefined


// }
   
// abc();
// var x=10;        //here we wrote the x after function call that's why o/p will be undefined.



//eg.11)

// var x=10;
// function a()
// {
//     var y=20;
//     function b()
//     {
//         console.log(x,y);      //10 20
//     }
//     b();
// }

// a();



//eg.12) anonymous function.

// var f1=function ()     //those functions having no any name then we can say anonymous function.
// {
//    console.log("anonymous function");  

// }

// f1();      //calling is possible from here.

//console.log(f1);


//eg.13)

// f1();  //calling is not possible from here because f1() is not function its a variable that's why it will show exception f1 is not function.

// var f1=function ()          //anonymous function we can call only bottom of the function defination not top of the function defination.
// {
//    console.log("anonymous function");

// }



//eg.14)now we have normal function


// function abc()       //this is the normal function defination we can call of this function either top of the function defination or bottom of the function defination.
// {
//   console.log("Normal Function");

// }

// abc();         //functio  calling from bottom.


// abc();    //function calling from top.
// function abc()       
// {
//   console.log("Normal Function");

// }

    
//anonymous functions and arrow functions are not hoisted means calling is not possible when we try to call from top of the function defination and only calling possible from bottom of the function defination .


///arrow functions

//eg.15)

// var f=()=>
// {
//   console.log("arrow function");     //arrow funtion
// }

// f();        //here we are calling from bottom of the function defination and its possible.



// f();      //here we are trying to call the function from the top of the function defination so its not posiible.

// var f=()=>
// {
//   console.log("arrow function");     //it will show the exception f is not function.
// }


//eg.16)

// var add=(a,b)=>               //arrow function
// {
//   return a+b;

// }

// console.log(add(4,5))          //9


//or also we can write arrow function like this without curly bracket and return keyword .

// var add=(a,b)=> a+b         //implicit return: only we can do this when the single statement inside the function is return.
// console.log(add(4,5))          //9

//semicolon is not mandatory in javascript at end of statement.



//eg.17)

// function multiplyby2(n)   //now we have single parameter.
// {
//   return n*2
// }
// console.log(multiplyby2(5))     //10


//by arrow functiion


// var multiplyby2= n =>n*2           //in the case of single parameter ,the parathesis can also be removed. paranthesis means bracket.
// console.log(multiplyby2(5))         //but when we have two parameter then we can not be removed the parantheis if we did then it will show error.



//eg.18)


// var a=10

// function abc()
// {
//   var a=40
//   console.log(a)         //40
// } 

// abc()




//eg.19)

// var x=10

// function a()
// {
//   var x=20

//   function b()
//   {
//     var x=30
//     console.log(x ,'b')     //30
//   }
//   b()
//   console.log(x ,'a')    //20
// }
// console.log(x ,'global')      //10
// a()



