
export default class ClericLevelThreeSpells {
    constructor (name, level, range, duration, effect, castingEffect, IDName) {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.castingEffect = castingEffect;
        this.IDName = IDName;
    }
};

let continualLightCleric = new ClericLevelThreeSpells ("Continual Light", 3, 120, 999, "Sphere of light 60 feet across", function() {console.log('Casting');}, "continual-light-cleric");
let cureBlindnessCleric = new ClericLevelThreeSpells ("Cure Blindess", 3, 0, 999, "One living creature", function() {console.log('Casting');}, "cure-blindness-cleric");
let cureDiseaseCleric = new ClericLevelThreeSpells ("Cure Disease", 3, 30, 999, "One living creature within range", function() {console.log('Casting');}, "cure-disease-cleric");
let growthOfAnimalsCleric = new ClericLevelThreeSpells ("Growth of Animals", 1, 120, 12, "Doubles the size of one animal", function() {console.log('Casting');}, "growth-of-animals-cleric");
let locateObjectCleric = new ClericLevelThreeSpells ("Locate Object", 3, 0, 6, "Detects one object within 120 feet", function() {console.log('Casting');}, "locate-object-cleric");
let removeCurseCleric = new ClericLevelThreeSpells ("Remove Curse", 3, 0, 999, "Removes any one curse", function() {console.log('Casting');}, "remove-curse-cleric");
let speakWithTheDeadCleric = new ClericLevelThreeSpells ("Speak With the Dead", 3, 10, 1, "Cleric may ask three questions", function() {console.log('Casting');}, "speak-with-the-dead-cleric");
let strikingCleric = new ClericLevelThreeSpells ("Striking", 3, 30, 1, "1d6 points of damage on 1 weapon", function() {console.log('Casting');}, "striking-cleric");


export { continualLightCleric, cureBlindnessCleric, cureDiseaseCleric, growthOfAnimalsCleric, locateObjectCleric, removeCurseCleric, speakWithTheDeadCleric, strikingCleric };