// Find Even Numbers in an Array

const evenNumber = (arr) => {
    const evenNumberArray = []; 
    for (let i = 0; i < arr.length; i ++) {
        if(arr[i]%2 === 0){
            evenNumberArray.push(arr[i]);
        }
    }
    return evenNumberArray
}
const number = [1, 2, 3, 4, 5, 6]
console.log(evenNumber(number));