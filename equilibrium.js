const input = require('readline-sync');
const size = Number(input.question('Enter the length of the array >>> '));

let array = [];
for (let i = 0; i < size; i++) {
    array.push(Number(input.question(`Enter the ${i + 1} element of the array =>> `)));
}

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

let leftSum = 0;
let found = false;

for (let i = 0; i < array.length; i++) {
    let rightSum = sum - leftSum - array[i];

    if (leftSum === rightSum) {
        console.log(`Equilibrium point found: ${array[i]} at index ${i}`);
        found = true;
        break;
    }

    leftSum += array[i];
}

if (!found) {
    console.log('No equilibrium point exists in the array.');
}
