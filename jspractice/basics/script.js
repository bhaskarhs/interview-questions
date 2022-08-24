// // to check the array 
// let a = [1,2]
// a.length =0 
// console.log(a[0]);

// // sorting techniques with the use of  build in sort method


// let arr =[-10,802,100,01,23,-100,0]
// // sortedarr = arr.sort()
// // when we sort method with using the call back function only the 
// // first two elements or sorted rest will be same as initial 
// // to sort array we need use call back function 
// let sortedarr1 = arr.sort((a,b)=>b-a)
// // console.log(sortedarr);
// console.log(sortedarr1)

// let a=b=0
// // function foo(){
// //     let a=b=0
// //     a++;
// //     return a
// // }

// // console.log(foo())
// b++

// console.log(typeof a,typeof b,a,b)

let a = [[1, 2], [3, 4]];
let b = [[2, 3], [4, 5]];
let c=[[],[]];
for (let i = 0; i < a.length; i++) {
for (let j = 0; j < a[i].length; j++) {
c[i][j] = a[i][j] * b[j][i];
 }
}
console.log(c);