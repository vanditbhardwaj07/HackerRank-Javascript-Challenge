function vowelsAndConsonants(s) {
    var vowels = [];
    var consonants = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] ==='a'||s[i] === 'e'||s[i] === 'i'||s[i] === 'o'||s[i] === 'u'){
            vowels.push(s[i]);
        }
        else {
            consonants.push(s[i]);
        }
    }
    for(let val of vowels) {
        console.log(val);
    }
    for(let val of consonants) {
        console.log(val);
    }
}