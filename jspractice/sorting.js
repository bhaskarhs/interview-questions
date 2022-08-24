let a = [1,2,3]
let b = ['h',5,6]
// let res1 = new Array(a+b)
// console.log(res1);
// // let res2 = a.push(b) // to add an array direct push is not needed
// // console.log(res2);
// let res3 = [...a,...b] // which gives the new array
// console.log(res3);

// let res4 = a.concat(b)
// console.log("c",res4);
// let res2 = [...a]
// for(i=0;i < a.length;i++){
//     console.log(b[i]);
//     res2.push(b[i])
// }
// console.log("p",res2);

function toSortArray(arr){
    for(let i=0;i<arr.length ;i++){
        for(j=i;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j]= temp
            }
        }
        // console.log(arr);
    }
    return arr
}

function toMergeArra(arr1,arr2){
    if(arr1.length && arr2.length >0){
         return toSortArray(arr1.concat(arr2))
    }
    else{
        return "pass the array"
    }
   
}
console.log(toMergeArra([5,34,0,23],[9,10,2,45]))



// what is dns?
// what is ipaddress?
// how gives us ipaddress?
// domain means?
// 