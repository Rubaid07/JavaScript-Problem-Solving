// Capitalize First Letter of Each Word

const capitalizedLetter = (str) => {
    const words = str.split(' ');
    const capitalizedWords = [];

    for(let i = 0; i < words.length; i++){
        const word = words[i];
        if(word.length > 0){
            const capitalizedWord = word[0].toUpperCase() + word.slice(1);
            capitalizedWords.push(capitalizedWord);
        } else {
            capitalizedWords.push('')
        }
    }
    return capitalizedWords.join(' ');
}
const string = "hello world"
console.log(capitalizedLetter(string));