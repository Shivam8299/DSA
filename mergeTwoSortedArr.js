let array1 = [1,3,6,8,11,46];
let array2 = [4,6,7,8,9,33,55,77];
let mergedArr = [];
let i=0;
let j=0;
while(i<array1.length && j<array2.length){
    if(array1[i]> array2[j]){
        mergedArr.push(array2[j])
        j++
    }
    else{
        mergedArr.push(array1[i])
        i++
    }
}
if(i<array1.length){
    while(i<array1.length){
        mergedArr.push(array1[i])
        i++
    }
}
if(j<array2.length){
    while(j<array2.length){
        mergedArr.push(array2[j])
        j++
    }
}

console.log(mergedArr)

