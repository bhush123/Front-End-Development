//Bitwise Oerator..

// &	AND	  - a&b
// |	OR	  - a|b
// ^	XOR	  - a^b
// ~	NOT	Inverts all the bits  - ~a
// <<	left shift	- a << b
// >>	right shift	- a >> b
// >>>	right shift - a >>> b



//logical gates

//AND &

// A  B  C
// 0  0  0
// 0  1  0
// 1  0  0
// 1  1  1


//OR |

// A  B  C              
// 0  0  0
// 0  1  1
// 1  0  1
// 1  1  1


//1)bitwise &

// let a=5, b=6;

//     //8421  it is method of binary conversion .
// //5-> 0101   
// //6-> 0110
//    // 0100     //4

// console.log(a&b);  //4


//2) bitwise |

// let a=5, b=6;

//     //8421  it is method of binary conversion .
// //5-> 0101   
// //6-> 0110
//    // 0111     //7

// console.log(a|b);  //7


// //3) XOR
// let a=5, b=6;

//     //8421  it is method of binary conversion .
// //5-> 0101   
// //6-> 0110
//    // 0011    //3   //in the case of XOR  those numbers are same result will be zero(1 1=0, 0 0=0, 1 0=1, 0 1=1)

// console.log(a^b);  //3



//8421 method only work for these three operators.not work for <<,>>,~ etc.