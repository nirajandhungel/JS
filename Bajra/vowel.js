let words = ["hello",  'cooperation', 'sky', 'people']

function findConsecutiveVowels(words){
    let regex = 'aeiouAEIOU';
    let returnWord;
    for (let word of words){
        for(let i =0; i<word.length -1; i++){
            if(regex.includes(word[i]) && regex.includes(word[i+1])) {
                returnWord = word;
                break;
            }
        }
        if(returnWord) break;

    }
    if(!returnWord) return "No words"
    return returnWord;

}


console.log(findConsecutiveVowels(words)); 