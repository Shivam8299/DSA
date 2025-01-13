let array = [1,2,3,4,5,6,7,8,9];
let target = 1;
let low = 0;
let high = array.length-1;
while(low <= high){
    let mid = Math.floor(low + (high - low) / 2);
    if(target === array[mid]){
        console.log(`yes, this is target value ${array[mid]}`);
        break;
    }
    else if (target > array[mid]){
        low = mid+1;
    }
    else{
        high = mid-1
    }
}
if(low > high ){
    console.log(`target value is not present in the given array`)
}