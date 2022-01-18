export let mageLevelTwoSpells = [];

export default class MageLevelTwoSpells {
    constructor (name, range, duration, effect) {
        this.name = name;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
    }
};

let continualLight = new MageLevelTwoSpells ("Continual Light", 120, 999, "Volume of 60 foot diameter");
let detectEvil = new MageLevelTwoSpells ("Detect Evil", 60, 2, "Everything within 60 feet");
let invisibility = new MageLevelTwoSpells ("Invisibility", 240, 999, "One creature or object");
let esp = new MageLevelTwoSpells ("ESP", 60, 12, "All thoughts in one direction");
let knock = new MageLevelTwoSpells ("Knock", 60, 1, "One lock or bar");
let levitate = new MageLevelTwoSpells ("Levitate", 0, 6, "The mage only");
let locateObject = new MageLevelTwoSpells ("Locate Object", 60, 2, "One object within range");
let mirrorImage = new MageLevelTwoSpells ("Mirror Image", 0, 6, "The mage only");
let phantasmalForce = new MageLevelTwoSpells ("Phantasmal Force", 999, "20 foot volume");
let webSpell = new MageLevelTwoSpells ("Web", 10, 48, "A volume of 10 by 10 by 10");
let wizardLock = new MageLevelTwoSpells ("Wizard Lock", 10, 999, "One portal or lock");


export { continualLight, detectEvil, invisibility, esp, knock, levitate, locateObject, mirrorImage, phantasmalForce, webSpell, wizardLock }