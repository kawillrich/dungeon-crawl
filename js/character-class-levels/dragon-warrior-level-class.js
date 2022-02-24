import { charmPerson, detectMagic, floatingDisc, holdPortal, light, magicMissile, protectionFromEvil, readLanguages, shield, sleep, ventriloquism, readMagic } from '../mage-spells/mage-level-one-spells-class.js'
import { continualLight, detectEvil, invisibility, esp, knock, levitate, locateObject, mirrorImage, phantasmalForce, web, wizardLock, detectInvisible  } from '../mage-spells/mage-level-two-spells-class.js';
import { clairvoyance, dispelMagic, fireBall, fly, haste, holdPerson, infravision, invisibilityTenFoot, lightningBolt, protectionFromEvilTenFoot, protectionFromNormalMissiles, waterBreathing } from './mage-spells/mage-level-three-spells-class.js'

//==============================================end imports===============================================//


export default class DragonWarriorLevels {
    constructor (level, specialtySkills, numberOfSpells) {
        this.level= level;        
        this.specialtySkills = specialtySkills;
        this.numberOfSpells = numberOfSpells;
        
    }
};


let dragonWarriorVeteran = new DragonWarriorLevels (
    
    {
        name: "Dragon Warrior Veteran",
        level: 1,
        maxXP: 2499,
        savingThrows: [       
            { name: "Poison or Death Ray", score: 13},
            { name: "Magic Wand", score: 14},
            { name: "Turn to Stone or Paralysis", score: 13},
            { name: "Dragon Breath", score: 16},
            { name: "Spells or Magic Staff", score: 15},
        ],

        hitRolls: [
            [9, 10],
            [8, 11],
            [7, 12],
            [6, 13],
            [5, 14],
            [4, 15],
            [3, 16],
            [2, 17],
            [1, 18],
            [0, 19]    
        ]
    }, 
    {
        "First Level Mage Spells": " ",
        "Second Level Mage Spells": " ",
        "Third Level Mage Spells": " ",
        },
        [1, 0, 0], 
    );    

       

export { dragonWarriorVeteran };