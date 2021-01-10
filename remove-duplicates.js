// Implement a function to delete all duplicated characters in a string and 
// keep only the first occurrence of each character. For example, if the 
// input is string “google”, the result after deletion is “gole”. Test your 
// program with a sentence as well such as "google all that you think can 
// think of".

const HashMap = require('./hash-map');

const removeDupes = string => {
    // Force string to lowercase
    let lowerCaseStr = string.toLowerCase();
    // Create new Hashmap instance
    let existingChars = new HashMap();
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;

    // Make a string var to return
    let returnStr = '';
    
    // Iterate through the string
    for(let i = 0; i < string.length; i++) {
        // If the key exists move forward to next character
        if(string[i] === ' ') {
            returnStr += ' ';
            continue;
        } else if(existingChars.get(lowerCaseStr[i])) {
            continue;
        } else {
            // Set the key and values to the current char
            existingChars.set(lowerCaseStr[i], lowerCaseStr[i]);
            // Add the original value to the return str
            returnStr += string[i];
        }
    }
    return returnStr;
}