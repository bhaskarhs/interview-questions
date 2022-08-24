// // str =bhaskar
// // ans = b:1,h:1,a:2,s:1,k:1,r:1
// function howManyRepeated(str){
//     const result = [];
//     const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
//     if (strArr != null) {
//       strArr.forEach((elem) => {
//         result.push(elem[0]);

//       });
//     }
//     return result;
//   }
//   console.log(...howManyRepeated("bhaskarhs"));
// let res={}
// let string = "bhaskarreddy"
// string.split('').forEach(elem => res[elem] ? res[elem]++:res[elem]=1  )

// console.log(res);

