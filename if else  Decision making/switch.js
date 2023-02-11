
// The JavaScript Switch Statement
// The switch statement is used to perform different actions based on different conditions.

// Syntax
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }




//take the age the variable
//age < 18 = child
//greater than 18 but less than 40 = adult 
//age is gtreater than 40 =old age

// let age=30;

// switch(true)        //if u compare variable in switch block then use directly true in switch(true)
// {
//     case age<18: 
            
//                 console.log("Child");
           
//     break;

//      case 18>age<40:

//                console.log("Adult");

//     break;
    
//     case age>40:

//               console.log("older age");

//     break;
    
//     default:

//              console.log("i don't know the age");
//        break;

           
// }



//take variable name as day ,its possible values are 0 1 2 3 4 5
// 1=monday,
// 2=tuesday, so on 5= saturday.

// let Day=3;

// switch(Day)
// {
//     case 1: 
//                console.log("Monday");
//     break;

//     case 2: 
//                console.log("Tuesday");
//     break;

//     case 3: 
//                 console.log("Wensday");
//     break;

//     case 4: 
//                  console.log("Thusday");
//     break;

//     case 5:
//                  console.log("Friday");
//     break;

//     default:    
//                  console.log("Sunday");


// }




////////

// let a=5;

// switch(true)    //whenever you are having condition or variable inside the switch block with cases then you should write true in switch.
// {
//     case (a<2 && a==4):
//         console.log("yes i am less than 2");
//     break;                 //if you not write break statement then all cases will be printed so must to write break statement.

//     case a>5:
//         console.log("yes i am greater than 5");
//     break;
    
//     case a==5:
//         console.log("yes i am equal to 5");
//     break;
    
//     default:
//         console.log("unknown");   //never write any condition in default case.
//     break;    

// }

//if you are having more than three conditions please prefer to use switch case.