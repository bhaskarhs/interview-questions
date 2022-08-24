// all the shapes like one side pyramid
// left half pyramid
    function leftHalfPyramid(n){
        let printlefthalf='*'
        //looping the array
        for(let i=1;i<n;i++){
            printlefthalf += i
            //to print the string or pattern
            // for(j=1 ; j<i;j++){
                
            // }
        console.log(printlefthalf);
        }
      
    }

   leftHalfPyramid(5)

// 2nd approach
// function leftHalfPyramid1 (n) {
//     let string=''
//     for(i=1;i<=n;i++){
//         for(j=0;j<i;j++){
//             // console.log(i);
//             string +=i
//         }
//       string +='\n'
//     }
//     console.log(string);
// }
// leftHalfPyramid1(5)

//right half pyramid
// function righthalfpyramid(n){
//     console.log(n);
//     let str = ''
//     // for looping the number of rows
//     for(let i=0;i<=n;i++){
//         //to print the spaces n-i spaces
//         for(let j=0; j < n-i; j++){
//             str += ' ' 
//         }
//         //to print the pattern that for 1st row 1 * ,
//         for(let k=0;k< i;k++){
//             str += '*'
//         }
//        str += '\n' 
//     }
//    console.log(str); 
//     //for printing the pattern

// }
// righthalfpyramid(6)

// // full triangle
// function triangle(n){
//     let strt = '';
//     //outer loop for number of rows
//     for(i=0;i<n;i++){
//         //first inner loop for number of spaces is n-i
//         for(j=0;j<n-i;j++){
//             strt += ' '
//         }
//         //for printing the patterns 2i +1 
//         for(k=0;k< (2*i)+1 ; k++){
//             strt += '*'
//         }
//         //to come to next line 
//         strt +='\n'
//     }
//    console.log(strt);
// }
// triangle(5)
// square

// plus symbol should try

// rectang