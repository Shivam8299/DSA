let input = require('readline-sync')
let a = input.question('enter thre first string >>>')
let b = input.question('enter thre second string >>>')

if(a.length !== b.length){
    console.log(`given string ${a} and ${b} are not anagrams`)
}
else{
    let sortedA = a.split('').sort().join('')
    let sortedB = b.split('').sort().join('')
    // console.log(sortedA, sortedB)

    if(sortedA === sortedB){
        console.log(`given string ${a} and ${b} are anagrams`)
    }
    else {
        console.log(`given string ${a} and ${b} are not anagrams`)
    }
}