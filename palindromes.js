// Write an algorithm to check whether any anagram of some string is a
// palindrome. Given some string, "acecarr", the algorithm should return
// true, because the letters in "acecarr" can be rearranged to the anagram
// "racecar", which itself is a palindrome. In contrast, given the
// word "north", the algorithm should return false, because there's
// no anagram for "north" that would be a palindrome.

const HashMap = require('./hash-map');

const palindromes = string => {
    // Helper function that checks if string is palindrome
    const _isPalindrome = string => {
        let head = 0;
        let tail = string.length - 1;
        let palindrome = true;
        while( tail > head && palindrome) {
            if(string[head] !== string[tail]) {
                return false;
            }
            head++;
            tail--;
        }
        return true;
    };

    // Use regular expression to get rid of any special characters
    const removeSpec = /[^A-Za-z0-9]/g;

    // Lowercase string and remove special characters
    const testStr = string.toLowerCase().replace(removeSpec, '');

    // Check if string is palindrome
    if(_isPalindrome(testStr)) return true;

    // Set storage levels for characters
    const chars = new HashMap();
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;

    // Store the doubled string into hashmap
    for(let i = 0; i < testStr.length; i++) {
        // Store string for each rotation
        rotation = '';
        for(let j = 0; j < string.length; j++) {
            // Add the characters to rotation string 
            rotation += chars.get((j + 1) % string.length);
        }
        // Check for palindrome
        if(_isPalindrome(rotation)) return true;
    }
    return false;
}
