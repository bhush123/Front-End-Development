///objects--In object we can store different types of data that's why object is non-primitive data type.

//JavaScript variables are containers for data values.
//Objects are variables too. But objects can contain many values.


//syntax of object.......

// let use = {          
//     //key : value  -----key and value pair called as properties.
// //                      key type is always string if we not provide quate they assume it.
// //                      value can have  any type.
//     name : 'Bhushan',
//      'age' : 22,             
//   mobile : 9604380494,
//   'address': 'Pune'
//
// }
//



// let user = {

//     name :'Bhushan',         //this is our object
//     age  : 22,
//     address:'Amravati'
    
// }
// //we have two ways to access is object
// console.log(user.age)    //22   //first way to access in object
// console.log(user['age'])   //22   //second way to access in object



//we can create the javascript object by way.
//1) using object literal syntax.
//2) using object constructor function syntax.


// let user = {}    //using object literal syntax

// user.name = 'Bhushan'
// user.age = 22
// user.address = 'Amaravati'
// user.contact = 9604380494

// console.log(user)     //{name: 'Bhushan', age: 22, address: 'Amaravati', contact: 9604380494}



// let user =new Object()  //using object constructor function syntax.

// user.name = 'Bhushan'
// user.age = 22
// user.address = 'Amaravati'
// user.contact = 9604380494

// console.log(user) //{name: 'Bhushan', age: 22, address: 'Amaravati', contact: 9604380494}
// delete user.age
// console.log(user)  //{name: 'Bhushan', address: 'Amaravati', contact: 9604380494}



// let user = {
    
//     name : 'Bhushan',
//     age : 22,
//     address: 'Amravati',
//     contact : 9604380494
// }
// console.log(user['contact'])   //9604380494


// let fruit = 'apple'

// let obj = {
//     [fruit + 'computers']: true       //computed properties
// }
// console.log(obj)  //{applecomputers: true}
// console.log(obj.applecomputers)   //true
// console.log(obj.name)   //undefined    //because object has no such type of data in it.



// let user = {

//         name : 'Bhushan',
//         age : 22,
//         address: 'Amravati',
//         contact : 9604380494

// }
// console.log('age'in user)   //true    //it is the method of checking the property present or not in oobject.
// console.log('place'in user)  //false  //it returns the boolean value.


//looping in object
//for in loop

// let user = {

//        name : 'Bhushan',
//         age : 22,
//     address : 'Amravati',
//     contact : 9604380494

// }

// for(let key in user){

//     console.log(key, user[key])

//     console.log(key)

    

// }


// let salaries = {

//     Bhushan : 25000,
//     Rutvik  : 40000,
//     karthik : 50000,
//     Roshan  : 10000
// }

// let sum = 0
// for(key in salaries){
// sum = sum + salaries[key]   //sum += salaries[key]

// }
// console.log(sum)    //125000


//multiply only the numeric values with 2.

// let menu = {

//     width:200,
//    height:300,
//     name :'Bhushan'
// }


// for(let key in menu){
    
//     if(typeof menu[key]=== 'number'){

//     menu[key] = menu[key] * 2
    
//     }
  
// }
// console.log(menu)  //{width: 400, height: 600, name: 'Bhushan'}



//------Object referencing  and copying 

// let message = 'hello'
//     phrase  = message + 'world'    
//     console.log(message)     //hello
//     console.log(phrase)      //helloworld
   


// let user = {           //firstly object will be created in memory or ram and every object has unique reference or address.considered this object reference is 100 ,user and admin variables pointing the 100 th location object so if we changed anything in admin or user variables then  it will changes in object and will print the same output because both variables pointing the same object of 100 th location. 

//     name : 'Bhushan'
// }

// admin = user
// console.log(user)     //{name : 'Bhushan}
// console.log(admin)    //{name : 'Bhushan}

// admin.name = 'Mahindra575'      //reassigning

// console.log(user)     //{name : 'Mahindra575'}  //because user and admin variable pointing to the same object which is created inside the momory or ram so  if we changed anything in admin variable  it will be stored in object and user also pointing that  object so it will print same output .
// console.log(admin)    //{name : 'Mahindra575'}
// console.log(user === admin)  //true .because this both variable pointing the same object or object reference.
 


// let user = {}   //first object ,this object has unique memory location or address or reference considered 100.
// let admin = {}  //second object ,this object has unique memory location or address or reference considered 200.

// console.log(user === admin)     //false. because both variables are pointing the different reference.
//                                 //user variable pointing to the first object reference.
//                                 //admin variable pointing to the second object reference. 
 


//copy the first object data inside the another  object .

// let user = {     //first object

//        name : 'Bhushan',
//         age : 22,
//     address : 'Amravati',
//     contact : 9604380494

// }
// console.log(user) //{name: 'Bhushan', age: 22, address: 'Amravati', contact: 9604380494}


// let admin = {}     //second object

// for(let key in user){              //using for loop
       
//     admin[key] = user[key]
// }

// console.log(admin)  //{name: 'Bhushan', age: 22, address: 'Amravati', contact: 9604380494}




// let user = {     //first object

//     name : 'Bhushan',
//     age  : 22
// }
// console.log(user)

// let clone = {}     //second object
  
// Object.assign(clone, user)          //using object assined method.
// console.log(clone)  

// clone.address = 'Amravati'
// console.log(clone)


//spread operator ... (spread operator denoted by three dots)
//spread operator is used for copy or cloning one object data to another object.
///spread operator is very important 
//clone means --to create a product that is very similar to another.

// let user = {     //first object

//        name : 'Bhushan',
//         age : 22,
//     address : 'Amravati',
//     contact : 9604380494

// }

// let clone = {...user  ,lastname : 'Sontakke'}   //second object
// console.log(user)
// console.log(clone)



//spread oprator also used for array to combines or coping one array to another.
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,0]
// let arr3 =[...arr1, ...arr2]
// console.log(arr3)


// let obj1 = {name :'Bhushan',x:22}
// let obj2 = {name :'Divyani',y:20}


// let obj3 = {...obj1, ...obj2}
// console.log(obj3)       //{name: 'Divyani', x: 22, y: 20}

//if we are having same name variable like name in both object then it will be considered last object variiable means name :'Divyani'.


// let obj1 = {name :'Bhushan',z:22}
// let obj2 = {name :'Divyani',y:20}
// let obj3 = {name :'BHush',y:23}
// let obj4 = {...obj1, ...obj2 , ...obj3}
// console.log(obj4)       //{name: 'BHush', z: 22, y: 23}
