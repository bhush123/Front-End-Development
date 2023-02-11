// //create an array using literals

// let arr=[1,2,3,4,5,6,7,8];

// console.log(arr);

// console.log("Array element of index 5  ",arr[5]);      //6



// //create an array using new keyword or constructor function

// let arr=new Array(1,2,3,4,5,6,7,8);         //lenth of an array is 8.

// console.log(arr);          



///pop,push,shift,unshift ....these are some array methods for removing and adding the element of the array.

//eg.1)pop methods -remove tha last element from array.

// let arr=["a","b","c","d",23,46,78,90];

// console.log("Before removing the element ",arr);

// arr.pop();

// console.log("After removing the element at the end of array  " ,arr)


//eg.2)push methods -adds the element at the last of an array.

// let arr=["a","b","c","d",23,46,78,90];

// console.log("Before adding the element ",arr);

// arr.push(7878);

// console.log("After adding  the element at the beginning of array  " ,arr)



// eg.3)shift method removes the element at the beginning.

// let arr=["a","b","c","d",23,46,78,90];

// console.log("Before removing the element ",arr);

// arr.shift();

// console.log("After removing the element at the beginning of array  " ,arr);



//eg.4)unhsift() methods adds the element at beginning of the arry.


// let arr=["a","b","c","d",23,46,78,90];

// console.log("Before removing the element ",arr);

// arr.unshift("Bhushsn");

// console.log("After adding the element at the beginning of array  " ,arr);




//eg.5) to know about length of array.

// let a=[10,20,30,40,50,60,70,80,90];

// console.log("length of array is ",a.length);   //9


//eg.6)  if we want to set the element at any particular index.

// let arr=[1,2,3,4,5,6,7];

// console.log(arr);

// arr[12]=300;
// console.log(arr);


// console.log(arr[9]);       //undefined
// console.log(arr[12]);      //300
// console.log(arr[13]);      //undefined


////Array....

//eg.1)

// var arr=[1,2,3,4,5,6,7,8]

// console.log(arr)


//eg.2)

// var arr=[1,2,3,4,"bhushan",4,"byy",[1,2,3,4,"diu"],45,67,99]

// console.log(arr , "first array")

// console.log(arr[5], 'first array element')

// console.log(arr.length, 'first array length')

// console.log(arr[4],arr[7][4], "first array element & second array element ")

// console.log(arr[7].length, 'second array length')

// console.log(arr[7][3], 'second array element')




//Array methods-push
//              pop
//              shift
//              unshift
//              indexOf
//              slice
//              




//eg.3)

//push- adds the elements to the end of the array and secondly it returns the new length of the array.

// let arr=[1,2,3,4,5]
// console.log(arr, 'before adding the element at the end of the array')

// arr.push("bhushan")

// console.log(arr ,'after adding the array element ')

// arr.push(2,3,4,5,6)

// console.log(arr)


//eg.4)pop- remove the elements to the end of the array and secondly it returns the new length of the array.



// let arr=[1,2,3,4,5,6,7,8,9]

// console.log(arr ,"before removing the element ")

// arr.pop()

// console.log(arr ,"after removing the element")

// console.log(arr.pop())



//eg.5)

// let fruits = ['apple','banana','orange','kiwi']

// console.log(fruits)        //[apple,banana,orange,kiwi]

// fruits.pop()               
// console.log(fruits)        //[apple,banana,orange]
// console.log(fruits.pop())  //orange
// console.log(fruits)        //[apple,banana]
// console.log(fruits.push('strawberry')) //3  after adding new element length of array
// console.log(fruits.push('melon'))      //4  after adding new element length of array
// console.log(fruits)         //[apple,banana,strawberry,melon]       





// let fruits = ['apple','banana','orange','kiwi']     //now length is 4

// console.log(fruits.push('strawberry'))  //it returs the new length  5
// console.log(fruits)                     //it returns the all elements of the array.



//eg.6)

//shift-remove the new element to the beggining of the array.
///unshift-adds the element to the beggining of the array and retuns the new length of the array.


// let arr = ['apple','banana','orange','kiwi'] 

// console.log(arr)      
// arr.shift()          //remove beggining element
// console.log(arr)                  
// console.log(arr.unshift(7878,2000)) // add new element at beggining and returns its size.
// console.log(arr)          


//indexOf------(returns the first index at which a given elements occurs) we can fetch the index of an element of this method.

// eg.7)
// let arr = ['apple','orange','banana','kiwi'] 

// let result = arr.indexOf('banana')
// console.log(result)      //2


// //eg.8)
// let arr = ['apple','orange','banana','kiwi','banana','melon','banana','onion' ,'banana'] 

// let result = arr.indexOf('banana',3)   
// console.log(result)      //  4


// console.log(arr.indexOf('banana',6))  



//eg.8)

//slice method.............................................

//slice method fetches the elements of array between that indices which we provided.

// let arr=['apple','banana','melon','strawberry','grapes','pineapple']
// result=arr.slice(1,6) //not considering the last index element that you given.
// console.log(result)


// let arr=['apple','banana','melon','strawberry','grapes','pineapple']
// result=arr.slice(4) //.it shows after 4 index element.
// console.log(result)

// let arr=['apple','banana','melon','strawberry','grapes','pineapple']

// result=arr.slice(-4) //.it shows before 4 index element.
// console.log(result)


//eg.9)  include method........................................
//includes method checks the element present or not of an array and returns boolean value if present retuns true otherwise false.

// let arr=[1,2,3,4,5,6,8,9]
// result=arr.includes(5) //true
// console.log(result)


// let arr=[1,2,3,4,5,6,8,9]
// result=arr.includes(12) //false
// console.log(result)


//eg.10) lastIndexOf.......................................

//if we are having multiple same name element of an array and we want to check last index Of that element.

// let arr=['apple','banana','melon','strawberry','banana','grapes','pineapple','banana','onion','banana','apple']
// result=arr.lastIndexOf('banana') 
// console.log(result)    //9


//eg.11) findIndex.........................................

//whenever you give a function to another function ,that is  known as call back function.


// function cb()
// {
//     //condition
// }
//  result=arr.findIndex(cb)
//  console.log(result)

// let arr=[1,2,3,4,5,6,7,8,9]
// function abc(element)    //we can write anyname instead of element like item,num,etc it will take array values.
// {                        //element means element have all values of array and checks one by one value until the condition satisfy,then will stop the checking condition if satisfy and return the index.
//     return element>5

// }
// result=arr.findIndex(abc)
// console.log(result)        // it  returns the 6 element index means 5.



//eg.12) concat() method.....................................

//concat method joins the two or more different array,and returns the new array with combining of two differnt array.

// let arr1=[100,200,300,400,500,'Bhushan']
// let arr2=['Divyani',600,700,800,900,1000]
// result=arr1.concat(arr2)
// console.log(result)

// let arr1=[100,200,300,400,500,'Bhushan']
// let arr2=['Divyani',600,700,800,900,1000]
// let arr3=[100,200,300,400,500,'Bhushan']
// let result=arr1.concat(arr2,arr3)
// console.log(result)



//eg.13) toString() method...........................................
//toString() method converts an array to a string of (comma separated) array values.

// let arr=[1,2,4,5,'a','23k']
// result=arr.toString()
// console.log(result)


//eg.14) join() method................................................

//The join() method convert all array elements into a string.

// let arr=['apple','banana','grapes','onion','melon','pineapple']
// result=arr.join(' # ')
// console.log(result)


// let arr=['apple','banana','grapes','onion','melon','pineapple']
// result=arr.join('-')
// console.log(result)


// let arr=['apple','banana','grapes','onion','melon','pineapple']
// result=arr.join(' ')
// console.log(result)



//eg.15) some() method.............................................
//some method means if one condition satisfied then it will return true.


// let arr=[1,2,3,4,5,6,7,8,9]
// function Even(element)           //element means we are passing parameter from array one by one for checking the condition.
// {                               //if conditon satisfy then it returns boolean value.
//     return element % 2 === 0    //checking condition
// }
// result = arr.some(Even)
// console.log(result)                 //true


// let arr=[1,3,5,7,9]
// function Even(element)                //we are using here call back function.
// {
//     return element % 2 === 0
// }
// result = arr.some(Even)
// console.log(result)                     //false



// let arr=[1,2,3,4,5,6,7,8,9]               //by using arrow function
                                             
//  result =arr.some((element) =>{            //call back function means one function using as parameter to an another function.
    
//     return element % 2 === 0               //here in some function we used the arrow function.

//  })
//  console.log(result)


// result=arr.some(element => element % 2 === 0)      //if we have single parameter then we can remove the paranthesis,curly and return keyword as well.
// console.log(result)



// eg.16) every() method.....................................

//returns true if every element of the array satisfies the given conditiion.

// let arr=[1,2,3,4,5,6,7,8,9]
// function checkEven(element)
// {
//     return element % 2 === 0

// }
// result=arr.every(checkEven)
// console.log(result)            //false 


// let arr=[1,2,3,4,5,6,7,8,9]
// result=arr.every((element)=>{
//     return element % 2=== 0
// })
// console.log(result)            //false


// let arr=[2,4,6,8,10,12,14]
// result=arr.every(item=>              //we can give any name element, item value etc .it will take value from array atomatically.
//      item % 2=== 0
// )
// console.log(result)               //true


// let arr=[2,4,6,8,10,12,14]
// result=arr.every(item=>             
//      item < 15
// )
// console.log(result)    //true



//eg.17) check the length of string........................

// let str='Bhushan'
// console.log(str.length)                //7


//
// let arr=['apple','banana','srawberry','papaya','pear','melon']
// result=arr.some(element => element.length<5)
// console.log(result)                  //true beacause pear length is 4



//eg.18) filter() method.....................................

//returns a new array with the new elements that satisfy the given condition.

// let arr=[1,2,3,4,5,6,7,8,9,0]
// function greaterThan4(element){
//     return element>4
// }
// result=arr.filter(greaterThan4)
// console.log(result)               //[5,6,7,8,,8,9]


// let arr=[1,2,3,4,5,6,7,8,9,0]
// result=arr.filter(element=>element>4)
// console.log(result)


//filter out odds element  by usin arrow function and call back function.

// let arr=[1,2,3,4,5,6,7,8,9,0]
// result=arr.filter(element=>element % 2 !==0)
// console.log(result)


//eg.19) map() method......................................

// returns a new array populated with results of the callback function

//normal way
// let arr=[1,2,3,4,5,6,7,8,9]       //rarly uses this way
// let newArr=[]

// for(let i=0; i<arr.length; i++)
// {
//      newArr.push(arr[i] * 2)
// }
// console.log(newArr)


//using map......

// let arr=[1,2,3,4,5,6,7,8,9]

// function doubleEle(element){
//     return element * 2
// }
// result=arr.map(doubleEle)
// console.log(result)


// let arr=[1,2,3,4,5,6,7,8,9]        //map by using arrow function and call function.
// result=arr.map(element => element * 2)
// console.log(result)


//return a new array which adds 5 to each element

// let arr=[1,2,4,5,6,7,8,9]
// result=arr.map(element => element + 5)
// console.log(result)



//eg.20) forEach()method.............................................

//forEach--executes a provided function once for each element in the array.


//using forloop
// let arr=[1,2,3,4,5,6,7,8,9]
// for(let i=0; i<arr.length; i++)
// {
//     console.log(arr[i] * 2)
// }


//using forEach
// let arr=[1,2,3,4,5,6,7,8,9]
// arr.forEach(element =>{
//     console.log(element*2)      //forEach method does not return new array.
// }) 


//sum of all elements that present in array.
// let arr=[1,2,3,4,5,6,7,8,9]
// let sum=0;
// arr.forEach((element) =>{
//     sum = sum + element         //sum +=element
// })
// console.log(sum)                      //45



//using forloop
// let arr=[1,2,3,4,5,6,7,8,9]
// for(let i=0; i<arr.length; i++)
// {
//    sum+=element
// }
//console.log(sum)                    //45



//eg.21)reduce() method.................................................

//reduce function reducess the array to a single value and return the sum of all elements in single value.means sum of all elements.
//reduce fuction has two argument(cb function ,initialvalue of accumulator)   
//cb function has (accumulator ,current)   cb-call back function.  current means element of array it will take automatically in it.we can use there element ,item etc instead of current.

// let arr=[1,2,3,4,5,6,7,8,9]
// let initialvalue=0;   //initialvalue of acccumulator.
// result=arr.reduce(function(accumulator,current){
//     return accumulator=accumulator + current

// },initialvalue)
// console.log(result)        //45



// let arr=[1,2,3,4,5,6,7,8,9]
// let initialvalue=0;   //initialvalue of acccumulator.
// result=arr.reduce((accumulator,element)=>{               //here we are using arrow function but can not remove the paranthesis because here we are having two parameter in arrow function like accumulator and element.
//      accumulator=accumulator + current             //we can remove paranthesis,curly baraces,return keyword wehen we are having only one parameter for the arrow function.
//      return=accumulator
// },initialvalue)
// console.log(result)        //45




// let arr=[1,2,3,4,5,6,7,8,9]
// let initialvalue=0   //initialvalue of accummulator

// let squringElement=arr.map(element=>element*element)      //squringElement
// console.log(squringElement)

// let evenElement=arr.filter(element=>element % 2 === 0)    //evenElement filtering
// console.log(evenElement)

// let sumOFelement=arr.reduce(function(accumulator,element){     //sumOF all element in single value.
//     return accumulator +=element
// },initialvalue)
// console.log(sumOFelement)



//filter,map and reduce are chainable means we can use one after other.

// let arr=[1,2,3,4,5,6,7,8,9]
// let initialvalue=0   //initialvalue of accummulator
// let sumOFelement=arr.map(element=>element*element).filter(element=>element % 2 === 0).reduce(function(accumulator,element){     
//     return accumulator +=element
// },initialvalue)
// console.log(sumOFelement)


//homework

//let salary=[100,200,300,400,500,600]
//filter out salaries greater than 300
//double the filtered salaries
//find out the total salary


// let salary=[100,200,300,400,500,600]

// let newArr=salary.filter(element => element > 300)
// console.log(newArr)        //[400,500,600]          filter function return new array and filter the element on the basis of provided  condition.

// let doubleArr=newArr.map(element => element * 2)
// console.log(doubleArr)       //[800,1000,1200]      map function returns new array on the basis of given condition.

// let totalsalary=doubleArr.reduce(function(accumulator,element){
//     return accumulator += element                                     //accumulator = accumulator + element
// },0)                                        //we can give initial value 0 direct here.
// console.log(totalsalary, 'total salary in single value')   //3000       reduce function returns the single value after adding all the element of the array.







// spread operator ... (spread operator denoted by three dots)
// spread operator is used for copy or cloning one object data to another object.
// /spread operator is very important 
// clone means --to create a product that is very similar to another.

// let user = {     //first object

//        name : 'Bhushan',
//         age : 22,
//     address : 'Amravati',
//     contact : 9604380494

// }

// let clone = {...user  ,lastname : 'Sontakke'}   //second object
// console.log(user)
// console.log(clone)



// spread oprator also used for array to combines or coping one array to another.
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,0]
// let arr3 =[...arr1, ...arr2]
// console.log(arr3)


// let obj1 = {name :'Bhushan',x:22}
// let obj2 = {name :'Divyani',y:20}


// let obj3 = {...obj1, ...obj2}
// console.log(obj3)       //{name: 'Divyani', x: 22, y: 20}

// if we are having same name variable like name in both object then it will be considered last object variiable means name :'Divyani'.


// let obj1 = {name :'Bhushan',z:22}
// let obj2 = {name :'Divyani',y:20}
// let obj3 = {name :'BHush',y:23}
// let obj4 = {...obj1, ...obj2 , ...obj3}
// console.log(obj4)       //{name: 'BHush', z: 22, y: 23}







