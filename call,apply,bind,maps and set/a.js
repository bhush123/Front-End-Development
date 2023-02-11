//'this' is used somewhere inside the function.
//we don't know the value of 'this'.
//value of 'this' is determined during the run time when the function is executed.
//value of 'this' referes to the object from where the function is called.


// function sayHii(){        // sayHii() function is present in window or global object that's why 'this' referes to the window object.and value of 'this' also will be window object here.
//     console.log(this)
// } //                            window or global object are same thing.

// let sayHiiArrow = () =>{    // sayHiiArrow()=> function is present in window or global object that's why 'this' referes to the window object.and value of 'this' also will be window object here.
//     console.log(this)
// }

// let user = {           //  sayHiiObject() function is present in user object that's why 'this' referes to the user object.and value of 'this' also will be user object here.
//     firstName : 'Bhushan',
//     sayHiiObject() {
//         console.log(this)
//     }
// }


// sayHii()         //it will show window object.
// sayHiiArrow()    //it will show window object.
// user.sayHiiObject()   //it will show user object.




// let user = {
//     name : 'Bhushan',
//     sayHii(){
//         console.log(this.name)      //'this' referes or pointing  to current running  object from where it is called.and value of 'this' determined at run time.
//     }
    
// }
// user.sayHii()        //Bhushan





// let user = {     //object 1.
//     name : 'Bhushan',    //key : value  -----> pairs known as property.
//     sayHii(){
//         console.log(this.name)     
//     }
    
// }
     
// let admin = {     //object 2.
//     name : 'prateek'
// }

// user.sayHii()             //---'this' pointing to the user object here  //Bhushan
// user.sayHii.call(admin)  //---'this' pointing or refering  to the admin object here//prateek

//call() method is used to access another object property by using function calling and 'this'keyword and function and 'this'  present in same  object.






// function hello(){        //if we not defined function inside any object then system will be considered  function is present in window object or global object.
//     console.log('hello' ,this.firstName)
// }
// //window.hello()     //hello undefined
// //hello()            //hello undefined
 


// let admin = {
//     firstName : 'Bhushan'
// }

// hello.call(admin)     //hello Bhushan





// function hello(a,b){        
//     console.log('hello' ,this.firstName)  //hello Bhushan
//     console.log(a, b)                      //78 78
// }

// let admin = {
//     firstName : 'Bhushan'
// }

// hello.call(admin, 78,78)       






// function hello(a,b,c){        
//     console.log('hello' ,this.firstName)  //hello Bhushan
//     console.log(a, b ,c)                      //78 78 99
// }

// let admin = {
//     firstName : 'Bhushan'
// }

// hello.apply(admin, [78, 78, 99])      //call method and apply method working is same but only difference call method passes argument in normal way and apply method passes the argument in square bracket or in the form  of array.  





//bind method returns a function with new value of 'this'

//  function hello(){        
//         console.log('hello' ,this.firstName)     //hello Bhushan
                      
//     }

//     let admin = {
//     firstName : 'Bhushan'
// }

// // let newhellow = hello.bind(admin)
// // newhellow()

// hello.bind(admin)()







//  function hello(a ,b ){        
//         console.log('hello' ,this.firstName)  //hello Bhushan 
//         console.log(a, b)                    // 78 78
                      
//     }

//     let admin = {
//     firstName : 'Bhushan'
// }

// // let newhellow = hello.bind(admin)
// // newhellow(78,78)

// hello.bind(admin)(78,78)



//call,apply,bind mehtods are used to re-bind the value of 'this' to another object. ///prefer this defination to tell interviever.




// var message = 'Hello Earth'         //this variable present in window object or global object.  window or global are same thing.
// const obj ={              ///object
//     message : 'Hello World'
// }

// function print(){                 //print() function present in window object or global object.
//     console.log(this.message)
    // }

 // print()             //  Hello Earth .  here 'this' pointing to the window object because function also will be present in window object.
// print.call(obj)     //  Hello World .  here 'this' pointing  to the obj object beacause call() method used here.
// print.apply(obj)    //  Hello World  . here 'this' pointing  to the obj object beacause apply() method used here.
// print.bind(obj)()     //  Hello World  . here 'this' pointing  to the obj object beacause bind() method used here.



//------maps--------------/////////////

//map is the collection of keyed data item just like an object .the main differnce between map and object 
//is that a map allows any type of keys but object allows key type only string.

//key : value   -------this pairs known as property.


// let MyMap = new Map()        //we created here map.

// MyMap.set(1 , 'NumberType')          //we can write keys in any type like string type , number type , Boolean type etc. but only in map not in object because in object keys type only should be string .
// MyMap.set('1' , 'StringType')        //here '1' is a key and 'StringType' is a value.
// MyMap.set(true , 'booleanType')      //here  true is a key and 'booleanType' is a value.
// MyMap.set(2 , 'NumberType')

// console.log(MyMap)     //{1 => 'NumberType', '1' => 'StringType', true => 'booleanType', 2 => 'NumberType'}
// console.log(MyMap.get(true))   //booleanType
// console.log(MyMap.get(2))       //NumberType

// MyMap.delete(true)  // true key will be deleted from map.
// console.log(MyMap)   //{1 => 'NumberType', '1' => 'StringType', 2 => 'NumberType'}

// MyMap.clear()      //map will be empty now.
// console.log(MyMap)    //{size: 0}

// MyMap.set(1 , 'Bhushan').set(2 ,'Divyani').set(3 , 'Bhushya')      //its chainabale.
// console.log(MyMap)     //1 => 'Bhushan', 2 => 'Divyani', 3 => 'Bhushya'}
    






// let fruitMap = new Map([
// ['banana',40],
// ['kiwi',150],
// ['apple',200],
// ['Orange', 50] 
// ])

// console.log(fruitMap)  //{'banana' => 40, 'kiwi' => 150, 'apple' => 200, 'Orange' => 50}

// console.log(fruitMap.keys())             //this keys() method for fetching the keys from map// {'banana', 'kiwi', 'apple', 'Orange'}
// console.log(fruitMap.values())        // this values() method for fetching the values from map. //{40, 150, 200, 50}

// let valueArray = Array.from(fruitMap.values())
// let KeyArray = Array.from(fruitMap.keys())
// console.log(fruitMap.values())    //{40, 150, 200, 50}
// console.log(fruitMap.keys())      //{'banana', 'kiwi', 'apple', 'Orange'}



//  for(let key of fruitMap){      //we can write item as well instead of key here.
//     console.log(key)
   
// }

// for(let key of fruitMap.keys()){     //fetches the all key.
//     console.log(key)                   
// }


// for(let value of fruitMap.values()){       //fetches the all value.
//     console.log(value)
// }



// fruitMap.forEach(( key ,value) => {    //fetches the all key and value.
//     console.log(key, value)
// })