let a =[4,10,[2,5,9],20]
let sum =0
let b = a.flat()
console.log(b);

for(let i =0 ;i<b.length;i++){
          sum += b[i]
}
console.log(sum);