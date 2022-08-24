// comparing the two string after sorting each other
// if two strings are equal then they are anagram 

function anagram (a,b){
    if(a.length !== b.length){
        console.log("invalid string");
    }
    
        let str1 = a.split('').sort().join('')
        let str2 = b.split('').sort().join('')
    
    if(str1 == str2) {
        console.log("anagram");
    }else{
        console.log("not a anagram");
    }
    
}

anagram("bhaskar","rabhsk")