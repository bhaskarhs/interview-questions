let string = "Hello Bhaskar, Welcome to this Javascript Guide!"

// split reverse join
console.log(string.split('').reverse().join(''));

function wordsReverser(string){
    var arr = string.split("");
    var output = [];
    let str = ''
    for(var i = arr.length - 1;  i >= 0; i--){
        output.push(arr[i]);
        str += arr[i]
    }
    console.log(str);
  return output.join("");
}


console.log(wordsReverser(string))
// console.log(revarr);


// anagrams 

var firstWord = "Mary";
var secondWord = "Army";
function anagrams(firstWord,secondWord){
    if(firstWord.length !== secondWord.length){
        return false
    }
    let a =firstWord.split('').sort().join('')
    let b = secondWord.split('').sort().join('')
    console.log(a,b);

    return a===b
}

console.log(anagrams(firstWord,secondWord))

// call stack, 
// execution stack,

// var a =10; 

// call, bind, and apply method 

// turtling.
// async and defer
// multiply 2 numbers and return the product without using the operator and for loop


// sport_preferences
let sport_preferences =[ { sport_id: '265f0714-f14c-11e8-909d-373b3f7daf25',
level_id: 'cbfe162c-f13f-11e8-becb-73a9b351c959' },
{ sport_id: '265f0a52-f14c-11e8-90a3-8f5925852a79',
level_id: 'cbfe162c-f13f-11e8-becb-73a9b351c959' } ]

let array =[] ;
sport_preferences.forEach(mobile => {
    for (let key in mobile) {
        console.log(`${key}: ${mobile[key]}`);
        if(key == 'sport_id'){
            array.push(mobile[key])

        }
    }
});

console.log(array);

