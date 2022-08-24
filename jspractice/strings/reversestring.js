//reverse a string
// let string = 
// with inbuild method 
// console.log(string.split('').reverse().join(''));
// //with loop
// function reverseStringwithForLoop(string){
//     let reversestring =''
//     for(let i=string.length-1;i>=0;i--){
//         reversestring += string[i]
//     }
//     return reversestring
// }

// console.log(reverseStringwithForLoop("bhaskar"))


// //rescurssion

// function stringreverserecu(str) {
//     let revstr = ''
//     if(str == ''){
//         return ''
//     }
//     else{
//         return stringreverserecu(str.substr(1)) + str.charAt(0)
//     }
// }

// console.log(stringreverserecu("bhaskar"));


let string ="bhaskar"
// console.log()

let p = "i am bhaskar"
console.log(p.split(' ').reverse().join(' '));

let obj = {
    name:"bhaskar",
    job:"web developer",
    livein:"kotipi"
}

let a =Object.fromEntries(Object.entries(obj).map(([key,value]) => [key.toUpperCase(),value.capitalize()] ))
console.log(a);