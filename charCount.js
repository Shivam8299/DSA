let intput = require('readline-sync')
const str = intput.question('enter a string >>  ')

let res = {}
for(let char of str){
    if(!res[char]){
        res[char]=1;
    }
    else {
        res[char]+= 1
    }
}

console.log(res)