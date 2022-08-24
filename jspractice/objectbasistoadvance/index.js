let obj = {
    name:"bhaskar",
    job:"web developer",
    livein:"kotipi"
}

const obj1 = Object.fromEntries(
    Object.entries(obj).map(([key,value]) => [key.toUpperCase(),value] )
)

console.log(obj1);
let obj2=Object.fromEntries(
    Object.entries(obj1).map(([key,val]) => [key,val.replace(' ','_')] )
)

console.log(obj2);


var getMax = function (str) {
    var max ='',
        maxChar = '';
     str.split('').forEach(function(char){
       if(str.split(char).length >= max) {
           max = str.split(char).length-1;
           maxChar = char;
        }
     });
     return {maxChar,max};
    };
console.log(getMax("bhaaskar aaa"));

