/////******strings*******//////

//string is used to store textual data or characters.
//string is primitive data type and starting index of the string is 0.

//ways of writing strings is javaScript

// let singleQuote='Divyani'
// let doubleQuote="Bhushan"
// let baclticks=`Sontakke`
// console.log(singleQuote, doubleQuote, baclticks) //Divyani Bhushan Sontakke


// let amount=100        //we can do this only usiing backticks not with single and double quote` `.
// console.log(`we have to pay the ${amount}rs till tommarrow morning`)  //we have to pay the 100rs till tommarrow morning

// let abc='bhushan'
// let message=`That guy is my best friend name is ${abc}...`
// console.log(message)   //That guy is my best friend name is bhushan...



// let guestList=`List:  //we can do this only using with backticks.
// Bhushan               //we can not do this using single and double qoute.
// Divyani
// Bhushan
// Sontakke
// Dadaji`
// console.log(guestList)    

//o/p
//List:  
// Bhushan               
// Divyani
// Bhushan
// Sontakke
// Dadaji


 

// let students="StudentList:\n 1)BHushan\n 2)karthik\n 3)yogesh\n 4)vishal\n"
// console.log(students)    //if we want print each element at new line then we can use also this method backslash \n.

//o/p
// StudentList:
// 1)BHushan
// 2)karthik
// 3)yogesh
// 4)vishal


// let Boys="StudentList: 1)BHushan 2)karthik 3)yogesh 4)vishal" 
// console.log(Boys)   //without using backslash \n.  //StudentList: 1)BHushan 2)karthik 3)yogesh 4)vishal

//Multiple lines in the code but in the console it shows in a single line.
//for better readablity in code.
// let str = "hiii \        //backslash is mandatory here.
// I'am Bhushan sontakke \
// from maharashtra"
// console.log(str)   // hiii I'am Bhushan sontakke from maharashtra


// let str1 = "hello\nguys"
// let str2 = `hello
// guys`
// console.log(str1==str2) //true   
// console.log(str1===str2) //true  


// let str1 = "bhushan"   //string datatype
// let str2 = 'bhushan'     //string datatype
// console.log(str1==str2) //true   
// console.log(str1===str2) //true  



// let str1 = "bhushan"   
// let str2 = 'Dhushan'     
// console.log(str1==str2) //false 
// console.log(str1===str2) //false


// let str1 = "12345"   //string datatype
// let abc = 12345     //number datatype
// console.log(str1==abc) //true   //compares with value it will neglect the quote.
// console.log(str1===abc) //false  //compares with datatype


//escape characters..........................................
//we can not write same quote again inside that we have already declared.
// " bhushan "sontakke" pune "   //we can not write like this it shows the error.
// ' bhushan 'sontakke' pune '  //we can not write like this it shows the error.
//" bhushan 'sontakke' pune "    //we can write like this.
//' bhushan "sontakke" pune '    //we can write like this.

// let str = 'Hello,how are you doing "bhushan" ok boss?'       
// console.log(str)  //Hello,how are you doing "bhushan"?


//string length............................................................

// let str = "Bhushan"
// console.log(str.length)     //7

// let str1 = " Bhushan "       //inside qoutes if we  given any space then it will assume in length and takes index also.
// console.log(str1.length)  //9   


//Accessing String characters...............................................
//[] or charAt()

// let str = "Bhushan"
// console.log(str[0])  //B
// console.log(str[1])  //h
// console.log(str.charAt[2])    //u


//  let str = " Bhushan "
//  console.log(str[0])  //does not show anything here only empty space 
//  console.log(str[1])  //B
//  console.log(str[2])  //h



//Strings are immutable in js..........................................

// let str = 'Bhushan'
// str = 'Divyani'      //reassigned the string here
// console.log(str)      //Divyani

// let str = 'Bhushan'
// str[1] = 'D'   //BDushan //it is not possible means we can reassign all string that present inside the quote but not can change single letter,so we can say strings are immutable.
// console.log(str) //Bhushan

     
//concatination of string, [+, concat]  
//concat method is used to adds two or more string and return single new string.

// let str1 = 'Bhushan'
// let str2 = 'Divyani'
// let newStr = str1.concat(' ',str2)
// console.log(newStr)  // Bhushan Divyani


// let str1 = 'Bhushan'
// let str2 = 'Divyani'
// console.log(str1 +" " +str2)    //Bhushan Divyani


//string methods..........................................................

//indexof()....................................................
//this method is used to find the index of given element.
//W i d g e t   w i t h     id     string
//0 1 2 3 4 5 6 7 8 9 10 11 12     indices or index

// let str = 'Widget with id'    //index start from 0.  and length for measuring start from 1.
// console.log(str.length)  //14
// console.log(str.indexOf('id')) //1
// console.log(str.indexOf('id',2))//12   // ,2 means it will be considered after 2 index if found 'id' then returns the index of id.
// console.log(str.indexOf('with'))//7
// console.log(str.indexOf('t'))//5
// console.log(str.indexOf('t',5))//5    
// console.log(str.indexOf('t',6))//5  //,6 means we have to find index of 't' after 6 index. 
// console.log(str.indexOf('bh')) //-1  //if element not present in string that we provided then it shows the -1. 
// console.log(str.indexOf('Widget'))//0  //if you given whole word then you will get starting index of that word.


//includes()--------------------------------returns boolean value--------------------------------
//includes() method checks the element present or not in string that  element we provided.if present then returns true otherwise false. 

// let str = 'Bhushan Sontakke'               
// console.log(str.includes('o'))    //true
// console.log(str.includes('O'))    //false
// console.log(str.includes('a',6))  //true


//slice()-----------------------------------------------------------------
//slice() method returns string element beteween two index that we provides but last index element not to be considered.

// let str = 'Bhushan Sontakke' 
// console.log(str.slice(3, 9))  //shan s      3 is starting point and 9 is ending point but ending point element not to be considered.
// console.log(str.slice(2, 3))  //u
// console.log(str.slice( 3))  //shan sontakke    if we given only strating point then will print element till the end from starting point.
// console.log(str.slice(-4, -1))  //akk       
// console.log(str.slice(-1))  //e                B   h    u     s   h    a     n       s   o   n   t   a   k   k  e                             
//                                              -16  -15  -14  -13  -12  -11  -10  -9  -8  -7  -6  -5  -4  -3  -2 -1
//                                              starting  ----------------------> ending




//substring()---------------------------------------------------------------
//substring() method works same like slice method.but does not work with negative index.

// let str = 'Bhushan Sontakke'
// console.log(str.substring(3,5))  //sh
// console.log(str.substring(-5,-3))  //substring does not work with negative indices.



//split()---------split works with string only------------------------------------------------------------
//split() method is used to converts string into an array.

// let str = 'hii how are you'
// let resultArr = str.split(' ')     //split have an argument comma and space in between.
// console.log(resultArr)       //['hii','how','are','you'] // string to array //array elements seperated by comma.
//                                  0      1     2     3    //length of array is 4.
// console.log(resultArr.join('-')) // hii-how-are-you //array to string //join have an argument hyphen and comma //join method is used to convert array into string. join method only works with array.
                                


// let str = 'hii how are you'
// let resultArr = str.split( )  //  length of array is 1.
// console.log(resultArr)        //['hii how are you']    index is 0.


// let str = 'hii how are you'          
// let resultArr = str.split('o')  // 'o' will remove from string.  
// console.log(resultArr)          // 'hii h'----one part 
// //                              // 'w are y'----second part
// //                              // 'u'  --------third part
// //                              // ['hii h', 'w are y', 'u']  final  array output.




// let str = 'divyani'          
// let resultArr = str.split('i')  // 'i' will remove from string.  
// console.log(resultArr)          // 'd'----one part 
// //                              // 'vyan'---second part
//                                 //  ''   ----third part
//                              //['d', 'vyan', '']
//                              //  0     1      2   //array length is 3.
                      

// let str = 'Dyaneshwari'           
// let resultArr = str.split('a')  // 'a' will remove from string.  
// console.log(resultArr)          // 'Dy'-----one part
//                              // 'neshw'-----second part     
//                              //  'ri'-------third part
//                              //  ['Dy', 'neshw', 'ri']





// let str = 'what*are*you*doing'
// resultArr = str.split('*')      // ['what', 'are', 'you', 'doing'] .....string to array. 
// console.log(resultArr)

// console.log(resultArr.join(' '))   //whta are you doing      .........array to string 

// let str1 = 'what-are-you-doing'
// console.log(str1.split('-'))    // ['what', 'are', 'you', 'doing']



// let str = 'Bhushan Sudhakar sontakke'
// let resultArr = str.split(' ')    //converting string to array
// console.log(resultArr)     //['Bhushan', 'sudhakar', 'sontakke']

// //now we have to print each element in new line

// console.log(resultArr.join('\n'))      //Bhushan
// //                                     //sudhakar
// //                                     //sontakke


// let str = 'what*are*you*doing'        //split and join method are chainable means we can use one after other.
// console.log(str.split('*').join('-'))   // what-are-you-doing   

//reverse() method-----------------------------------------------------
//reverse methos is used to reverse the array and string.
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.reverse())      //[9,8,7,6,5,4,3,2,1]


// let str = 'I Love You'
// console.log(str.split(' ').reverse())   //['You', 'Love', .'I']


//reverse the string

// let str = 'hello'
// let revstr = ''

// for(let i=str.length-1; i>=0; i--)
// { 
//      revstr = revstr + str[i]
// }
// console.log(revstr)


//replace()--------------------------------------------------------------
//replace() method is used to replace the string element that you want.
//replaces only the first occurence
// let str = 'Bhushan is good guy and Bhushan working as software devloper'
// let result = str.replace('Bhushan','john')
// console.log(result)         //john is good guy and Bhushan working as software devloper
// //                            

//replaceAll() method is used to replace the string element that you want.
//replaces all the occurence of string.
// let str = 'Bhushan is good guy and Bhushan working as software devloper'
// let result = str.replaceAll('Bhushan','john')
// console.log(result)    


//trim()-----------------------------------------------------------------
//trim method is used to remove the spaces before and after the string element.

// let str =  '                      Bhusahn                          '
// console.log(str) //               Bhushan
// console.log(str.trim())// Bhushan



//toUppercase()  and toLowercase() methods--------------------------------------------------------
//toUppercase() method is used to convert the lowercase to uppercase.
//toLowerCase() method is used to convert the uppercase to lowercase.

// let str = 'bhushan sontakke'
// console.log(str.toUpperCase())   //BHUSHAN SONTAKKE



// let str1 = 'BHUSHAN SONTAKKE'
// console.log(str1.toLowerCase())   //bhushan sontakke















