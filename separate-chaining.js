// Write another hash map implementation as above, but use separate chaining 
// as the collision resolution mechanism.

// Test your hash map with the same values from the lotr hash map.

const HashMap = require('./hash-map');

const characters = [
    {"Hobbit": "Bilbo"},
    {"Hobbit": "Frodo"},
    {"Wizard": "Gandalf"}, 
    {"Human": "Aragorn"}, 
    {"Elf": "Legolas"}, 
    {"Maiar": "The Necromancer"},
    {"Maiar": "Sauron"}, 
    {"RingBearer": "Gollum"}, 
    {"LadyOfLight": "Galadriel"}, 
    {"HalfElven": "Arwen"},
    {"Ent": "Treebeard"}
];

const separateChaining = array => {
    // Create instance
    const lotr = new HashMap();
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;

    // Fill map with characters
    characters.forEach(char => {
        let charType = Object.keys(char)[0];
        let charName = char[charType];
        lotr.put(charType, charName);
    });
    // Log values
    console.log(lotr);
    console.log(lotr.get('Maiar'));
    console.log(lotr.get('Hobbit'));
}