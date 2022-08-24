//filter the number in the given array
//to count the number of elements repeated
// let count={};
// let element=[23,32,23,32,40,2,2,20]
// element.forEach(i =>count[i]?count[i]++:count[i]=1);
// console.log(count);

//for loop
let element=[2,2,2,3]
let obj={}
for(i=0;i<element.length;i++){ 
   var k = 0
   
    for(j=0;j<element.length;j++){   
        if(element[i] === element[j]){
            k = k+1;
            
        }
    }
    console.log(e,k);
}

