function findSmallestWord(sentence) {
    let words = sentence.split(' ')
    let smallWord = words[0];
    
    for(let i=1; i< words.length ; i++){
        if(words[i].length < smallWord.length) {
            smallWord = words[i];
        }
    }
    
    console.log(smallWord)
    }
    
    findSmallestWord('The quick a brown');
                                                            
                                                          
          