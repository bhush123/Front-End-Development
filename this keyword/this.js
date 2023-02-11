// let user = {      
//    name : 'Bhushan',
//     age : 22,
// contact : 9604380494,
//   admin : function(){           //method
//     console.log("hello World")  //hello World
//   }
// }
// console.log(user)    //{name: 'Bhushan', age: 22, contact: 9604380494, admin: ƒ}
// console.log(user.admin)  //ƒ (){ console.log("hello World")}  //it shows function defination.
// user.admin()      //calling the method inside the object 
 
//if we write the function defination inside the object then known as method.


// function admin(){           //normal function
//     console.log("hello World")    //hello World
//   }

//   admin()       //calling from here    




// let user = {      
//    name : 'Bhushan',
//     age : 22,
// contact : 9604380494,
//   peter : function(){           //method
//     console.log('hii',user.name)  //hii Bhushan     
//     console.log('hii',admin.name)  //hii Bhushan   //because both varibles pointing to the same object.
    
//   }
// }

// let admin = user 
// console.log(admin)   //{name: 'Bhushan', age: 22, contact: 9604380494, peter: ƒ}

// user.peter()       //hii Bhushan
// //                 //hii Bhushan

// admin.peter()      //hii Bhushan
// //                 //hii Bhushan






// let user = {      
//    name : 'Bhushan',
//     age : 22,
// contact : 9604380494,
//   peter : function(){           //method
//     console.log('hii',this.name)  
//   }
// }

// admin = user
// //console.log(user)    //{name: 'Bhushan', age: 22, contact: 9604380494, peter: ƒ}
// //console.log(admin)   //{name: 'Bhushan', age: 22, contact: 9604380494, peter: ƒ}
// //user.peter()      //hii Bhushan
// //admin.peter()     //hii Bhushan


// user = null     //null value is not a zero its an empty value.
// //user.peter()    //TypeError: Cannot read properties of null (reading 'peter')
// admin.peter()    //hii Bhushan 






// let user = {
//   name :'Bhushan',
//   score : 0,     //1,2,3,4
//   incrementedScore(){    //method
//     this.score++
//   }

// }

// console.log(user.score)  //0

// user.incrementedScore()  
// user.incrementedScore()
// user.incrementedScore()
// user.incrementedScore()

// console.log(user.score)  //4




// function peter(){
//   console.log('hii',this.name)
// }

// let user = {
//   name :'Bhushan'
// }

// let admin = {
//   name :'Divyani'
// }

// user.funcUser = peter       //we created new key and assingning a function.
// user.funcUser()  //hii Bhushan

// admin.funcAdmin = peter      //we created new key and assingning a function.
// admin.funcAdmin()   //hii Divyani   //because pointing current running object.


//value of 'this' is defined during runtime and it referes to the object from where it is called.





// var name = 'Amar'  //global variable 
// function peter(){
//   console.log(this)  //inside a normal fiunction , 'this' keyword refers to the global object means window object in window object we can see name = Amar  . 
//   console.log('hii',this.name) //hii Amar
// }

// let user = {
//   name :'Bhushan'
// }

// let admin = {
//   name :'Divyani'
// }

// user.funcUser = peter       //we created new key and assingning a function.
// //user.funcUser()  //hii Bhushan

// admin.funcAdmin = peter      //we created new key and assingning a function.
// //admin.funcAdmin()   //hii Divyani   //because pointing current running object.

// peter()   



// var name ='Ayush'  //global variable .it will be inside window object internally.
// //                 //in window object all global variable are present.
// let user = {
//     name :'Bhushan',
//     peter : ()=>{     //'this' inside an arrow function it refers to the window object means it will print global variable name= ayush.
//       console.log(this.name)
//     }
//   }

// user.peter()




// let ladder = {      //object
//   step: 0,
//    up(){            //method
//     this.step++
//    },

//    down(){          //method
//    this.step--
//    },

//    showstep(){         //method
//     console.log(this.step)
//    }
// }

// ladder.up()          //1
// ladder.up()          //2
// ladder.down()        //1
// ladder.down()        //0
// ladder.down()        //-1
// ladder.showstep()              //-1
// ladder.up()           //0
// ladder.up()           //1
// ladder.up()           //2
// ladder.showstep()               //2






// const obj = {
//   message : 'hello world',

//   getMessage(){
//     const message = 'hii'    //beacause this message just a variable.
//     return this.message    //hello world
//   }
// }

// let result = obj.getMessage()
// console(result)



// let obj ={
//    who : 'world',
//    greet : function (){
//     console.log(`hello ,${this.who}`)   //hello world
// },
//    farewell : () => {
//     console.log(`GoodByee, ${this.who}`)  //Goodbyee undefined   //'this' inside an arrow function it refers to the window object means takes only global variable and here globle variable is not declared or present  outside the object.
//    }
//   }

//   obj.greet()
//   obj.farewell()

















