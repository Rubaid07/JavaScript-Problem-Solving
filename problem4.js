// Find the Maximum Number

const maxNumber = (arr) => {
    if(arr.length === 0){
        return null
    }
    return Math.max(...arr);
}
console.log(maxNumber([5, 1, 9, 3]));