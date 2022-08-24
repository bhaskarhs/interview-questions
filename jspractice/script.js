// // Write a function that takes a string (a) and a number (n) as argument
// // Return the nth character of 'a'
// function myFunction(a, n) {
// let string = a

// return string.charAt(n)
// }
// var log = myFunction("heelo",2)

// console.log(log);

// // Remove first n characters of string

function removeString (a){
    return a.slice(0,3)
}
console.log(removeString("last"))

// // slice in array
// // slice can be used in for both string and array to modify it. 

// // excat first half of string to be printed
// function excatHalfofstring(a){
//     let n = a.length/2
//     console.log(Math.round(n));
//     return a.slice(0,n)
// }
// console.log(excatHalfofstring("abcdefgh"))


//  number is even i.e 4 is even 5 is not even

// function numberEven(n){
//     if(n % 2 == 0){
//         return console.log("n is even");
//     }else{
//         console.log("n is odd");
//     }

//     return console.log("number");
// }

// console.log(numberEven(5))
// console.log(numberEven(4))

// print array of event numer from 1 to 10

// function evennumber (limit){

//     for(i = 1; i<=limit ;i++){
//         // console.log(i);
//         if(i % 2==0){
//             console.log("i is ",i);
//         }
//         else{ 
//             console.log(i);
//         }
//     }
// }
// evennumber(100)

// whole number 

// function wholeNumber (number) {
//     if(wholeNumber/2 !== 0){
//         console.log(`number is a whole number  ${number}`);
//     }
// }

// wholeNumber(3)
// wholeNumber(10)

// function numbertodigits (number) {
//     var string = number.toString()
//     var array = []

//     for(i = 0 ; i< string.length;i++){
//         array.push(string[i])
//     }
//     return array
// }

// console.log(numbertodigits("bhaskar"))

// var n = "bhaskar!@"
// nr = n.replace(/[!@#$%^&*(),./]/g,'9')
// console.log(nr);
// let n ="bhaskar"
// console.log([...n+''].map(n=>n));

// var string = "bhaskar#%$"
// var replacedString = string.replace(/[#@!$%^&*?.,{}]/g,'_')
// var r1= string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'q')
// console.log(replacedString,r1);

// var string = "!@#haskar1234"
// string1 = string.replace(/[^a-zA-Z0-9]/g,'_');
// console.log(string,string1);


// Clear up the chaos behind these strings

// reverse the string

// let a = "string"
// var t =[...a]
// var r = t.reverse().join("")
// console.log(r);

// // // reverse an array

// console.log(arrayreverse([1,2,3,4,5]))

// function arrayreverse (array){
//     console.log(array);
//     var a=[]
//     for(i=array.length-1;i>=0;i--){
//         a.push(array[i])
//     }
//     return a
// }


// Count number of negative values in array

// var a =[1,3,6,1,3,4]
// a.pop()
// console.log(a);

// remove duplicates in Array

// var arr = [1,23,3,2,3,2,1,10,23,0,11,21]

// // // expceted = [1,23,3,2,10,0,11,21]

// console.log([...new Set(arr)]);

// // using filter
// function duplicates(arr){
//     console.log(arr);
//     var duparr = arr.filter((c,index) => {
//          return arr.indexOf(c) !== index
//     })
//     // console.log(duparr);
// }

// console.log(duplicates([1,23,3,2,3,2,1,10,23,0,11,21]));

// using for loop

// let chars =[1,23,3,2,3,2,1,10,23,0,11,21];

// let dupChars = chars.filter((c, index) => {
//     return chars.indexOf(c) == index;
// });

// console.log(dupChars);



// // sorting

// var arr = [32,1,3,0,120,12]

// expected [0,1,3,12,32,120]

// var s = arr.sort((a,b) => b-a)
// console.log(s);

// // using for loop

// function asort(arr= [11,3,32,4,23,12,0]){
//     for (let i = 0; i < arr.length; i++) {
//         for(let j =0 ; j<i;j++){
//             if(arr[i] >  arr[j]){
//                 var x = arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=x
//             }
//         }
        
//     }
//     console.log(arr);
// }

// asort()

// function bsort(arr=[0,20,90,-1,12]){
//     for(i=arr.length;i>0;i--){
//         for(j=i;j>0;j--){
//             if(arr[i] > arr[j]){
//                 var x = arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=x
//             }
//         }
//     }
//     console.log(arr);
// }

// bsort()





// average

// function averagenumber (arr) {
//     let avg =0;
//     for(i=0;i<arr.length;i++){
//         avg += arr[i] 
//     }
//     return avg/arr.length

// }
// a1=[10,40,100]
// console.log(averagenumber(a1))

// larget in arr


// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= array[0];

// for (i=0; i<=array.length;i++){
//     if (array[i]<largest) {
//         largest=array[i];
//     }
// }
// console.log(largest);

// objects
// let obj = {
//     content:"asia",
//     country:"india"
// }

// console.log(obj.country);

// let data = {
//     "messages": [{
//         "msgFrom": "13223821242",
//         "msgBody": "Hi there"
//     }, {
//         "msgFrom": "Bill",
//         "msgBody": "Hello!"
//     },{
//         "msgFrom": "Bill", 
//     }]
// }

// let arr1 =[]
// data.messages.forEach(element => {
    
//     arr1.push(element)
// });

// console.log(arr1);
// let q = arr1.filter( x =>
//     x.msgBody !== undefined
// )
// console.log(q);

// api calls

// let api = fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(e => console.log(e))

// // console.log(api);

// let array = ;

// function sort_array(array){
//     for(i=0;i>array.length;i++){ //1
//         for(j=0;i>i;j++){ //1
//             var x = array[i]
//             array[i] = array[j]
//             array[j]= x
//         }  
//     }
//     return array
// }

// let y = sort_array([56,78,98,5,77,3])

// console.log(y);

// web pack and babel usage in react
// webpack act difference in development and in production 
// sorting of string , sorting of number 
// removing one array element in other array element that a,b is the array removing the array of b element in array of a
// inverse of matrix 
// event bobling in javascript 
// promises in js
// reducer 
// regex in js
// object 
// deep and shalow copy 
// pass by argument and pass by

// DS and AL
// 

// reverse string

// function reversestring(str){
//     temp=''
//     for(i=str.length-1;i>=0;i--){
//         temp +=str[i]
//     }
//     str = temp
//     return str
// }
// console.log(reversestring("hello"))
// // console.log(str)

// // factorial
// function factorial(n){
//     let fact =1;
//     for(let i=1;i<=n;i++){
//         fact *=i
//     }
//     return fact
// }

// console.log(factorial(20))

// converting for loop into recursive 

// function recursivefactorial(n){

//     // default cause
//     if(n == 0){
//         return 1
//     } 
//     else return (n*recursivefactorial(n-1)) 

// }
// console.log(recursivefactorial(5))

// function tofindlongestword(para){
//     let word = para.split(' ')
//     // console.log(word);
//     let max= '';
//     for(let i=0;i<word.length;i++){
//         console.log(word[i]);
//         if(word[i].length > max){
//              max = word[i].length
//         }
//     }
    
//     return max
// }
// function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let maxLength = 0;
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//       }
//     }
  
//     return maxLength;
//   }


// console.log(tofindlongestword("longest word in paragraph"))







// function x(){
//   setTimeout(function(){
//       console.log('i value',i);
//   },1000)
//   var i =1;
// }
// x()

let date =  new Date()
let time = date.getHours()
let min = date.getMinutes()
console.log(date.getUTCMinutes());
// console.log(date.now());
console.log(time,min);
let d = new Date().toString()
console.log(d);

































