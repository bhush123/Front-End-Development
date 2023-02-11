//event loop --

//event loop means when call stack is empty that time call back function is sent to the call stack from queue by event loop. event loop constantly checks whether call stack is empty or not if call stack is empty then call back function pushes inside the call stack by event loop from queue and then executes.
//means event loop decides when setTimeout function will be executed.

// setTimeout() method is not a part of javascript it is part of browser so when setTimeout goes into the call stack firstly then call stack sends the 
// setTimeout function to the web Api and then in settimeout function has two argument call back function and delay as soon as timer expires means reches to 0 second ,then api sends the call back function to 
// inside the queue and when call stack is empty that time event loop sends the call back function inside the call stack and then it will executes.

// setTimeout function does not executes immediately it will take some time if we given the '0' delay also.
// means it will print at last . till then remaining functions and codes will be executed and after all process done of settimeout then settimeout function will executes.


//diagram in note book for understanding the concept of event loop.


//eg.................

// function abc(){
    
//     function b(){
//         console.log('setTimeout for this function')
//     }
//     setTimeout(b , 2000)

//     console.log('first')
//     console.log('second')
//     console.log('third')
// }
// abc()


//eg..............

// function abc(){
    
//     function b(){
//         console.log('setTimeout for this function')
//     }
//     setTimeout(b , 0)                   //setTImeout function does not executes immediately if we given 0 seconds delay as well.it executes after all functions.

//     console.log('first')
//     console.log('second')
//     console.log('third')
// }
// abc()


/////we can write like this..

//eg.................

// function abc(){
    
//     setTimeout(function b(){
//         console.log('setTimeout for this function')
//     }, 2000)

//     console.log('first')
//     console.log('second')
//     console.log('third')
// }
// abc()



//eg.................
//java script executes the code line by line known as synchronous.

// function abc(){
//     console.log('After timeout')
// }

// console.log('me first')                  

// function print(){
//     console.log('me second')

// }
// setTimeout(abc , 2000)              //setTimeout function will send inside the browser api from the call stack.
// print()

// console.log('me third')









//promises and promise chaining----------------------------------------------
//
//promoise is just an object.
//promises makes the asynchronous code to synchronous code. means if our code executing in asynchronous manner then promises makes that code synchronous.
//synchronous means code executes line by line.means in synchronous code our code strart executing from first line and then second line,third line so on.
//asynchronous means code does not executes line by line,somtimes executes first line and sometimes directly executes line number eight or any number of line.
 
//promise object having a call back function and that call back function has two parameters resolve and reject.

//promise object having three methods such as ,   
//  .then()     .then() method executes when we write resolve(1) inside promise object. firstly promise object executes and after that .then() method executes.
//  .catch()    
//  .finally()

//    //these all methods takes a call back function.


//eg.....................

// console.log('me first')
// let pr =new Promise((resolve, reject) => {           //new Promise() is a contructor function that's why calls automatically at the time of Promise object creation. 
//   setTimeout(() => {
            
//     console.log('me second')

//   },2000)                                            //this is a example of asynchronous code.
// })

// console.log('me third')




//eg....................by using promises that's why code executes line by line over here.

// console.log('me first')
// let pr =new Promise((resolve, reject) => {
//     setTimeout(() => {
              
//       console.log('me second')                  
//       resolve(1)
      
//     },2000)                                 //this is a example of synchronous code by using promise object.
//   })                                         //we can see here how promise objects makes asynchronous code to synchronous code.
  
//  pr.then(() =>{console.log('me third')})
  
  

//eg..................................................

// let pr =new Promise((resolve, reject) => {
//     setTimeout(() => {
              
//       console.log(' i am promise object')
//       //resolve(1)                            //when we write resolve(1) after that then method executes.
//       reject(1)                                //when we write reject(1) after that catch method executes.
      
//     },2000)
//   })
  
//  pr.then(() =>{console.log('i am resolve')}).catch(() =>{console.log('i am reject')})
  
  
  
  



 //eg..................................................

// let pr =new Promise((resolve, reject) => {
//     setTimeout(() => {
              
//       console.log(' i am promise object')
//       //resolve(1)                            //when we write resolve(1) after that then method executes.  resolve for .then()
//       reject(1)                                //when we write reject(1) after that catch method executes.  reject for  .catch()
      
//     },2000)
//   })
  
//  pr.then(() =>{console.log('i am executes for resolve')}).catch(() =>{console.log('i am executes for reject')}).finally(()=>{console.log('i am executes for both resolve as well as reject ')})
  
  
  
  

// //eg................................................

// let pr =new Promise((resolve, reject) => {
//     setTimeout(() => {
              
//       console.log('me first')
//       resolve('i am resolve message')    //if we want to access or show the message which is present  inside resolve for that we just have to pass one parameter or variable inside .then() method. variable we can write anything such as data or result or x etc. 
      
//     },2000)
//   })
  
//  pr.then((data) =>{
//     console.log(data)
//     console.log('me second')})
  
  




//eg................................................

// let pr =new Promise((resolve, reject) => {
//     setTimeout(() => {
              
//       console.log('me first')
//       reject('i am resolve message')    //if we want to access or show the message which is present  inside reject for that we just have to pass one variable or parameter inside .catch() method. variable we can write anything such as data or result or x etc. 
      
//     },2000)
//   })
  
//  pr.catch((data) =>{
//     console.log(data)
//     console.log('me second')})
  
  





//eg............................................

// function printNum(num){
//     return new Promise((resolve, reject) => {
//         if(num % 2 == 0){
//             resolve("num is even")
//         }
//         else{
//              reject("num is odd")
//         }
//     })
// }

// printNum(24).then((data) =>{console.log(data)}).catch((data) =>{console.log(data)})                //num is even
// //printNum(27).then((data) =>{console.log(data)}).catch((data) =>{console.log(data)})                  //num is odd







//eg.....................................

// let prA = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//     resolve('A')
//    },1000)
// })

// let prB = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve('B')
//    },2000)
// }) 

// let prC = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve('C')
//    },3000)
// }) 

// let prD = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve('D')
//    },4000)
// }) 

// prA.then((result) =>{console.log(result)})    //A
// prB.then((result) =>{console.log(result)})    //B
// prC.then((result) =>{console.log(result)})    //C
// prD.then((result) =>{console.log(result)})    //D


//we can aslo do this above example in a simple way by using promise chaining.it will reduces many line of codes.
//promise chaining is better way than above example because in promise chaininig we can write our multiple line code in single line .

////promise chaining ------============================

//eg.........
// function callPromise(Alphabet){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log(Alphabet)
//             resolve(1)                  //to write resolve is mandatory if we want executes .then() method. 

//         },2000)
//     })
// }
// callPromise('A').then(() =>{return callPromise('B')}).then(() =>{return callPromise('C')}).then(() =>{return callPromise('D')})  // this is the promise chaining .we can write our multiple line code in single line by using promise chaining.



//eg......

// function callPromise(Alphabet){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log(Alphabet)
//             resolve(1)                  //to write resolve is mandatory if we want executes .then() method. 

//         },2000)
//     })
// }
// callPromise('A').then(() =>{ callPromise('B')}).then(() =>{ callPromise('C')}).then(() =>{ callPromise('D')})  // this is the promise chaining .we can write our multiple line code in single line by using promise chaining.






//----------------------------------------------------------------




























































































