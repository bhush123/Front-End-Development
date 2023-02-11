//first class functions - those fuctions can be treated like variables known as first class function.

//Higher order functions - higher order functions are functions that take other function as arguments.
//higher order function takes callback as an argument.



// let greetings = function(){      
//     console.log('hello world')
// }


// function random (callback){       //higher order function
//   callback()                        //hello world
// }
// random(greetings)          //greeting is callback function here.



//greetings -----callback function  (one function passes as an argument to the other function known as callback function  . here greetings is one function and random is other function)
//random   -----higher order function    (takes the greeting function as  an argumrnt known as higher order function)



//Dry principle - Do not reapeat yourself.

// function square(n){
//     return n * n
// }
// console.log(square(4))   //16


//copy first array to the empty array.

// let arr = [1,2,3,4,5,6,7]        //with element array
// let output = []                 //empty array
// function copyArrayMultiplyBy2(array){
    
//     for( let i= 0; i< array.length; i++){
//         output.push(array[i] *2)
//     }
//     return output
// }
// console.log(copyArrayMultiplyBy2(arr))    //[2, 4, 6, 8, 10, 12, 14]




// let arr = [1,2,3,4,5,6,7]
// let output = []         
// function copyArrayAndAddBy2(array){
    
//     for( let i= 0; i< array.length; i++){
//         output.push(array[i] + 2)
//     }
//     return output
// }
// console.log(copyArrayAndAddBy2(arr))    //[3, 4, 5, 6, 7, 8, 9]



//////////////////////////

// let arr = [1,2,3,4,5]
// let output =[]

// function copyArrayAndManipulate(array , instruction){
//   for(let i = 0; i < array.length ; i++){
//     output.push(instructions(array[i]))
//   }
//   return output
// }


// function multiplyBy2(input){          //instruction
//     return input *2
// }

// console.log(copyArrayAndManipulate(arr, multiplyBy2))   //[2, 4, 6, 8, 10]




// let arr = [1,2,3,4,5]
// let output =[]

// function copyArrayAndManipulate(array , instruction){
//   for(let i = 0; i < array.length ; i++){
//     output.push(instruction(array[i]))
//   }
//   return output
// }

// function AddBy2(input){          //instruction
//     return input + 2
// }
// console.log(copyArrayAndManipulate(arr, AddBy2))   //[3, 4, 5, 6, 7]





// let arr = [1,2,3,4,5]
// let output =[]

// let squreOperation = (array , instruction) => {
//   for(let i = 0; i < array.length ; i++){
//     output.push(instruction(array[i]))
//   }
//   return output
// }

// //  let square = (input)=> {
// //     return input *input
// //  }        

//  let square = input =>  input * input     

//  console.log(squreOperation(arr, square))   //[1, 4, 9, 16, 25]






////////////////////

// function sayHii(){
//     return function (){
//         console.log('Hello')
//     }
// }
// let result = sayHii()       //calling using variable
// result()               //Hello





// function sayHii(){
//     return function (){
//         console.log('Hello')
//     }
// }
// sayHii()()          //Hello




// function sayHii(){
//     return function (){
//         console.log('Second')    //Second
//         return function (){
//             console.log('Third')  //Third
//         }
//     }
// }

// sayHii()()()            //currying





















































































































