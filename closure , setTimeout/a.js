//closure concept______________________or nested functions concept

//A closure is an inner function that has access to the outer function's variables.

//or

//A closure is a function having access to the parent lexical scope.it preserve the data from outside.

//for every closure we have three scopes-
//1) Local scope (own scope)
//2) Outer function scope
//3) Global scope

//eg.......
// function outer(){                       //outer is a parent function of inner function or parent lexical environment of inner function.
//     let a = 7878            //outer function variable
//     console.log(a,'outer function')     //7878

//     function inner(){          //inner function that has access to the outer function's variables known as closure.

//     console.log(a ,'inner function')        //7878

//     }
//     inner()

// }
// outer()  //calling





//eg....
// function outer(){
//     let a = 7878         
    
//      function inner(){          
//       let b = 20
//     console.log(a ,'inner function')        
//     console.log(b ,'inner function')        

//     }
//     inner()    //caling to the inner function from here.
    
//     console.log(a,'outer function')  
//     console.log(b , 'outer function')     //ReferenceError: b is not defined    //here we tried to access inner variable by outer function.          
// //                     //outer function can not access to the inner function variables.but inner function can access to the outer function variables known as closure.

// }
// outer()  //calling  to outer function from here





// //eg.......

// function outer(){
//     let num = 5
//   console.log(num, 'outer')               //5 'outer'
//     function inner(){
//         console.log(num, 'inner')        //5 'inner'
//     }
//     return inner                //if we write return keyword anywhere means it returns the final value of our logic after executing the code.
    
// }

// // let result = outer()    
// // result()                 //first method to call inner function by declaring variable.

//  outer()()              //second method to call inner function 





//  //eg.......

// function outer(){
//     let num = 5
//   console.log(num, 'outer')               //5 'outer'
   
//   return function inner(){             //if we write return keyword anywhere means it returns the final value of our logic after executing the code.
//         console.log(num, 'inner')        //5 'inner'
//     }
    
// }
// outer()()              //both functions are  calling from here.




//  //eg.......

//  let a = function (){   //a function without name known as anonymous function.
//     let num = 5
//   console.log(num, 'outer')               //5 'outer'
   
//   return function (){             //if we write return keyword anywhere means it returns the final value of our logic after executing the code.
//         console.log(num, 'inner')        //5 'inner'
//     }
    
// }
// a()()              //both functions are  calling from here.




//  //eg.......

//  let a = function (num){   //a function without name known as anonymous function.
//    let m = 40
//   console.log(num, m ,  'outer')               //20 40 'outer'
   
//   return b = (n) => {             //if we write return keyword anywhere means it returns the final value of our logic after executing the code.
//         console.log(num , m , n , 'inner')        //20 40 7878 'inner'
//     }
    
// }
// a(20)(7878)              //both functions are  calling from here.




// //eg.......

//  let a = function (num){   //a function without name known as anonymous function.
//    let m = 40
//   console.log(num, m ,  'outer')               //20 40 'outer'
   
//  //           //if we write return keyword anywhere means it returns the final value of our logic after executing the code.

//  return b = n => console.log(num , m , n , 'inner')        //20 40 7878 'inner'
    
//     //                                                    //we passed the single parameter to the arrow function that's why we  can remove the curly braces and paranthesis over here.
// }
// a(20)(7878)              //both functions are  calling from here.






//eg.......................

// let a = 20
// function extraOuter()
// {
//     let b = 30
//      function outer()
//     {
//          function inner()
//         {
//             console.log(a, b)   //20 30   //here inside inner function has no any a and b variable declared so inner function takes the a and b variables from parent lexical environment means it will take the variable from other function .and this is the closure.
//         }
//         inner()
//     }
//     outer()
// }
// extraOuter()





//eg.......................   closure or nested functions

// let a = 20
// function extraOuter()                      //1st functiion
// {
//     console.log(a, 'extarOuter')
//     let b = 30
//     return function outer()               //2nd functiion
//     {    let c = 40
//         console.log(b,'outer')
   
//         return function inner()           //3rd functiion
//         {
//             console.log(a, b ,c , 'inner')   //20 30 40
//         }
//     }
// }
// extraOuter()()()




//eg......................
// function makeCounter(){
//     let count = 0
        
//      return function (){
//         console.log( count++)      //0 
//         console.log( count++)     //1
//         console.log( count++)     //2
//     }
// }

// makeCounter()()





//eg......................
// function makeCounter(){
//     let count = 0

//     return function (){
//         return count++
//     }
// }

// let result1 = makeCounter()
// console.log(result1())      //0
// console.log(result1())      //1
// console.log(result1())      //2        

// //                                 both variable have independent referces that's why count start again from 0.
// let result2 = makeCounter()
// console.log(result2(), 'result2')         //0
// console.log(result2())                    //1
// console.log(result2())                    //2
// console.log(result2())                    //3








//eg......................
// function makeCounter(){
//     let a = 5
//   //                                 //TypeError: makeCounter(...) is not a function
//     function counter (){

//         console.log(a)
//   //                              //we can not do this it shows error. see below example.
//     }
// }
// makeCounter()()



//eg......................

// function makeCounter(){
//     let a = 5
                                 
//     function counter (){

//         console.log(a)            //5
        
//     }
//     return counter                     //we can write return keyword either at the end of function or at the starting of function.
// }
// makeCounter()()



// //eg......
// function makeCounter(){
//     let a = 5
                                 
//     return function counter (){

//         console.log(a)
        
//     }
    
// }
// makeCounter()()




//eg... ...

// function makeCounter(){
//     let a = 5 
                                 
//     return function counter (){

//         return a
        
//     }
    
// }

// let result = makeCounter()
// console.log(result())               //5




//eg...........
// function makeCounter(){
//     let a = 5 
                                 
//      function counter (){
//   //                              //counter function takes 'a' variable from parent lexical environment means from makeCounter function because a is present in makeCounter function so makeCounter function is parent lexical environment of counter function.
//         console.log(a)             //5
        
//     }
//     counter()

    
// }
// makeCounter()

          


// //eg......
// function makeCounter(){
//     let a = 5
//     console.log(a,'makeCounter')
   
//     return function counter (){

//         console.log(a, 'counter')
        
//     }
    
// }

// let result = makeCounter()       //5 'makeCounter'





//eg......
// function makeCounter(){
//     let a = 5
//     console.log(a,'makeCounter')
   
//     return function counter (){              //return is mandatory if not write then will show error .type error makeCounter is not a function.

//         console.log(a, 'counter')
        
//     }
    
// }

// let result = makeCounter()  //5 'makeCounter'   //it will call to the makeCounter
// result()                     //5 'counter'  //it will call the counter function






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//setTimeout()--the setTimeout() method sets a timer which executes a function once after the timer expires.
//syntax :  setTimeout(call back function or function , milliseconds or delay )
//1000 milliseconds = 1 second 
//2000 milliseconds = 2 second 
//setTimeout() method executes the call back function after delay expires.
//setTimeout()method takes the two things first is call back function and second is delay.
//setTimeout() method takes time to executes not executes immediately firstly remaining code and functions will be executed and then at the last setTimeout() method executes if we given delay as 0 seconds as well.
//eg...........

// function admin(){
//     console.log('Good Morning')
// }
// setTimeout(admin ,3000)     //setTimeout() method executes the admin  function after timer expire or after 3 seconds.



//we can write also like this....
//eg..........

// setTimeout(function admin(){
//   console.log('Good Morning')
// },3000)




//eg.............

// setTimeout(() => {
//   console.log('Good Morning')
// },0)

// console.log('first print me')           //  first print me
// console.log('second print me')           // second print me
// console.log('third print me')            // third print me
// //                                       // Good morning



//eg............
// let abc = function (){

//     let a = 100
   
//     setTimeout(function(){
//         console.log(a ,'after 3 seconds')
//     },3000)

//     console.log('hiii',a)
// }
// abc()





//eg................

// function looping(){
//     for(let i = 1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i)
//         },2000)
//     }
// }
// looping()


//eg.....................

// function looping(){
//     for(let i = 1; i<=5; i++){
//         function abc(x){
//         setTimeout(function(){
//             console.log(x)
//         },x * 2000) //        x * 2000 means  every parameter takes 2 seconds for printing.
//     }
//     abc(i)
//  }    
// }
// looping()




//eg................................

// function looping(){
//     for(var i = 1; i<=5; i++){
//         function abc(x){
//         function b(){
//             console.log(x)
//         } 
//         setTimeout(b , x * 2000)      //here we are giving 2 seconds timer for every parameter.that's why every parameter prints after 2 seconds one by one.
//     }
//     abc(i)        //calling abc function from here
//  }    
// }
// looping()      //calling looping() function from here



//eg....................
// function looping(){
//         for(let i = 1; i<=5; i++){
//             function abc(x){
//             function b(){
//                 console.log(x)
//             } 
//             setTimeout(b , 2000)      //here we given 2 seconds common timer for all parameter that's why all parameter print together after 2 seconds .
//         }
//         abc(i)        //calling abc function from here
//      }    
//     }
//     looping()      //calling looping() function from here
    
    
    

















































