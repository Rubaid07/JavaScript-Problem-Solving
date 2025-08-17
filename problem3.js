// Check for Palindrome

const palindrome = (word) => {
    const orginalWord = word.toLowerCase();
    const reverseWord = orginalWord.toLowerCase().split('').reverse().join('');

    if(orginalWord === reverseWord){
        console.log(true);
        return;
    } else {
        console.log(false);
        return;
    }
}

let myWord = "madam"
palindrome(myWord);