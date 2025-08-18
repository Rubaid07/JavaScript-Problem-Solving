// Count Vowels in a String

const countVowel = (str)=> {
    let count = 0
    const vowel = "aeiouAEIOU";
    for(let i = 0; i < str.length; i ++){
        if(vowel.includes(str[i])){
            count ++;
        }
    }
    return count;
}
const str = "programming"
console.log(countVowel(str));