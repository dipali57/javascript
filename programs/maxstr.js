

const findLongestWord = (sentence) => {

    const words = sentence.split(' ');
    //console.log(s[0].length);
    let largeWord = '';

    for(let i=0; i<words.length; i++) {
        if(words[i].length > largeWord.length) {
            largeWord= words[i];
            //str = s[i];
        }
    }
    return largeWord;
    };
    
    console.log(findLongestWord("Hi Iam Saikrishna Iam a UI Developer"));
            