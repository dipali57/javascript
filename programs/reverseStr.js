const findReverse = (sampleString) => {
    let reversString = '';
    for(let i=sampleString.length-1 ; i>=0; i--) {
        reversString += sampleString[i];
    }
    console.log(reversString)
};
    
    findReverse("Hello Iam Saikrishna Ui Developer");
            