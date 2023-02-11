//Arthemetic Operators are used to  performe some basic operation with help of addition,substraction.multiplication etc.

//1) +    Addition
//2) -    Substraction 
//3) *    Multiplication 
//4) %    Mod(reminder)
//5) /    Division   
//5) ++   Increment
//6) --   Decrement
//7) **   Exponentiation


//Increment
//++a pre-increment.
//a++ post-increment.

//Decrement
//--b pre-decrement
//b-- post decrement.


//1)

// let c=10;
// let count=c++;
// console.log(c);   //11
// console.log(count);  //10



//2)

// let c=10;
// let count=++c;
// console.log(c);   //11
// console.log(count);  //11


//3)

// let c=10;
// let count=c--;
// console.log(c);   //9
// console.log(count);  //10


//4)

// let c=10;
// let count=--c;  
// console.log(c);   //9
// console.log(count);  //9


//5)

// let a=10;
// console.log(a);   //10
// console.log(a++); //10
// console.log(a);   //11

//6)

// let a=10;

// console.log(a);      //10
// console.log(a--);    //10
// console.log(a);      //9
// console.log(a++);    //9
// console.log(++a);    //11
// console.log(--a);    //10


//Addition

//1)

// let a=10,b=49,c=458;

// console.log("Addition is ="+(a+b+c)); //517


//2)

// let a=90,
//     b=20,
//     c=20;

//     function Addition()
//     {   a=30;     
//         b=40;            //these all value here reassigned or reinitialized.
//         c=20;
//         console.log("Addition is ="+(a+b+c));   //90
//     }

//     Addition();

//     console.log(a+b+c);    //90


//3)  

    // function Addition()
    // {  let a=30,    
    //        b=40,                           //this variable can not access the out side of the block because we declared inside the block and that we declared inside the block called as block scope or function scope or in short local variable.
    //        c=20;
    
    //        a=20;  //here we reinitialized the values.
    //        b=20;
    //        c=20;
            
    //     console.log("Addition is ="+(a+b+c));  //90 
    // }

    // Addition();     //call the function of Addition().

    // console.log("Addition is ="+(a+b+c));     //reference error will show here.      


 //4)
 
  
//  let a=20;

//  function Addition()
//  {
//     var b=30, c=30, d;

//     d=b+c;

//     console.log(d);    //60

//  }
 
//  Addition();

//  console.log(d);    //reference error because d is declared inside the block.



//5)

// let a=20, d;

//  function Addition()
//  {
//     var b=30, c=30;

//     d=b+c;

//     console.log(d);  //60

//  }
 
//  Addition();

//  console.log(d);    //60    here succefully runed this statement because here d is declared outside the block.


//Substraction

// let a=30;     //or let a=30, b=40, c=b-a;
// let  b=40;
// let  c=b-a;

// console.log("Substraction is "+c);   //10//


//Mltiplication

// let a=30, b=30, c=a*b;

// function multiplication()
// {
//     console.log("Multiplication is "+c)     //900
// }

// multiplication();



//Division

// let a=50, b=30, c=a/b;

// function Division()
// {
//     console.log("Division is "+c)     //1.67
// }

// Division();





//Reminder

// let a=50, b=30, c=a%b;

// function reminder()
// {
//     console.log("Reminder is "+c)     //20
// }

// reminder();