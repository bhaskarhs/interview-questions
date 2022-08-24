// How do you check if a string contains only digits

// use regular expression and match the string if matched string is eqaul to str then it is ture else it is false

let str ="12341q"
str.match(/[0-9]/g).length === str.length ?console.log(true):console.log(false);