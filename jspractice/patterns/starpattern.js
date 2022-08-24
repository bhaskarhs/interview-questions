/*   
*
* *
* * *
* * * *
*/

let str =''

for(i=0;i<4;i++){
  str +=  '*'  + ' '
  console.log(str);
}
console.log(str);

// print using

// 2nd pattern 

/* 
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/

for(i=6;i>0;i--){
    let output =''
    for(j=i;j>0;j--){
        output += i + ' '
        // console.log(output);
    }
    console.log(output)
}

// right pyramid
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//  to print full triangle


