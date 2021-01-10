// Write an algorithm to group a list of words into anagrams. For example, 
// if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], 
// the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], 
// ['acre', 'race']].

const HashMap = require('./hash-map');

const anagrams = array => {
    // Create hashmap instance
    let combinations = new HashMap();

    // Iterate through each word
    array.forEach(word => {
        // Sort the characters of the word
        let sortedWord = word.split('').sort().join('');
        // If no key
        if(!combinations.get(sortedWord)) {
            combinations.set(sortedWord, [word]);
        } else {
            // Add word to key value
            combinations.set(sortedWord, [...combinations.get(sortedWord), [word]]);
        }
    });
    // Set return array
    let returnArr = [];
    // Iterate through slots
    combinations._hashTable.forEach(slot => {
        // If slot is empty
        if(slot) {
            // Add array to returnArr
            return returnArr;
        }
    })
}