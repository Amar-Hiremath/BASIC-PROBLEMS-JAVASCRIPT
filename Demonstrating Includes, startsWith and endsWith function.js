//Explore the includes function 
const sentence =  `Hey it's amar, how is it going`
const word = `amar`
console.log(`the word " ${word} "${sentence.includes(word) ? ` is` : `is not`} in the sentence`);

// Explore startsWith function
const sentence = `amar hiremath is a good stock market trader`;
const word = `amar`;
console.log(` the sentence "${sentence.startsWith(word)? `does` : `does not`}" starts with  "${word}" `);

//Explore endsWith function
const sentence = `amar hiremath is a good stock market trader`;
const word = `trader`;
console.log(` the sentence "${sentence.endsWith(word)? `does` : `does not`}" ends with  "${word}" `);
