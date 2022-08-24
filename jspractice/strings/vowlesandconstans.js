// How do you count a number of vowels and consonants in a given string? 

/* 
str ="bhaskar"
vowles = a,
constants = bhskr
*/

// function toFindVowles(str){
//     let vowels =0
//     let constants =0
//     vowels = str.match(/[aeiou]/gi).length
//     constants = str.length - vowels
//     console.log(vowels,constants); 
// }

// toFindVowles("ajsdkjweiwoiweuUV")

// How do you count the occurrence of a given character in a string? 

/*  
s = "bhaksar"
a count in str

*/

// function tocountCharOccurance(string,character){
//     let count =0
//     for(let i=0 ;i<string.length;i++){
//         if(string[i] == character){
//             count++
//         }
//     }
//     return count
// }

// console.log(tocountCharOccurance("bhaskar",'a'));

// console.log(tocountCharOccurance("bhaskar reddy",'y'))


// Finding the first non-repeated character
// first go through the string and split it. loop thrpugh the astring
// compare the string with index and charat postion 

let string = "asdbhasd"
let a=[]
for(let i=0 ; i<string.length;i++){
    let char = string.charAt(i)
    if(string.indexOf(char) == i && string.indexOf(char,i+1)==-1){
        a.push(char)
    }
  
}
console.log(a[0]);










