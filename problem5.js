// Remove Duplicates from an Array

const removeDuplicate = (arr) => {
    const newArray = []
    for(let i = 0; i < arr.length; i++){
        if(!newArray.includes(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);