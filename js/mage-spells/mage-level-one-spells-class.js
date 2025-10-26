import
{
    finalCharacter
} from "../js_v14-3.js";

import { toggleShowSpellList } from "../js_v14-3.js";

export let mageLevelOneSpells = [];

export default class MageLevelOneSpells
{
    constructor (name, level, range, duration, effect, castingEffect, className, useBattle, damage, isAreaEffect, numberOfUses = 0)
    {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.castingEffect = castingEffect;
        this.className = className;
        this.useBattle = useBattle;
        this.damage = damage;
        this.isAreaEffect = isAreaEffect;
        this.numberOfUses = numberOfUses;

    }
    castingSpell(monster1, monster2, continueNextChapter)
    {
        toggleShowSpellList();
        finalCharacter.spell2AttackMonster1(monster1, monster2, continueNextChapter);
    }
};

//completed charm person
let charmPerson = new MageLevelOneSpells("Charm Person", 1, 120, 0, "Charms one person", function casting() { console.log('casting') }, "charm-person", true, 6, false);

let detectMagic = new MageLevelOneSpells("Detect Magic", 1, 0, 2, "Detects magic within 60 feet", function () { console.log('casting') }, "detect-magic", false, 0, false);

let floatingDisc = new MageLevelOneSpells("Floating Disc", 1, 0, 6, "Creates an invisible disc that can carry 5000 cn", function () { console.log('casting') }, "floating-disc", false, 0, false);

let holdPortal = new MageLevelOneSpells("Hold Portal", 1, 10, [2, 12], "On door, gate, or similar portal", function () { console.log('casting') }, "hold-portal", false, 0, false);

//complete light 
let light = new MageLevelOneSpells("Light", 1, 120, 6, "Volume of 30 feet diameter", function () { console.log('casting') }, "light", true, 0, true);

//completed magic missile
let magicMissile = new MageLevelOneSpells("Magic Missile", 1, 150, 0.1, "Creates one or more arrows", function () { console.log('casting') }, "magic-missile", true, 8, false);

//comleted protection from evil
let protectionFromEvil = new MageLevelOneSpells("Protection from Evil", 1, 0, 6, "The mage only", function () { console.log('casting') }, "protection-from-evil", true, 0, false);

let readLanguages = new MageLevelOneSpells("Read Languages", 1, 0, 2, "The mage only", function () { console.log('casting') }, "read-languages", false, 0, false);

//completed shield
let shield = new MageLevelOneSpells("Shield", 1, 0, 2, "The mage only", function () { console.log('casting') }, "shield", true, 0, false);

//completed sleep
let sleep = new MageLevelOneSpells("Sleep", 1, 240, [4, 16], "2-16 Hit Dice of leaving creatures within a 40 foot square area", function () { console.log('casting') }, "sleep", true, 0, true);

//completed ventriloquism
let ventriloquism = new MageLevelOneSpells("Ventriloquism", 1, 60, 2, "One item or location", function () { console.log('casting') }, "ventriloquism", true, 0, false);

let readMagic = new MageLevelOneSpells("Read Magic", 1, 0, 0, "The mage only", function () { console.log('casting') }, "read-magic", false, 0, false);

//CREATING METHODS TO INDIVIDUAL SPELLS AND NOT TO THE ENTIRE SPELL PROTOTYPE

ventriloquism.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    console.log('Casting Ventriloquism')
    console.log(attackedMonster, attackedMonster.status)
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Ventriloquism, but the words won't come to your mind.</p>`;
        toggleShowSpellList();
    } else
    {
        this.numberOfUses -= 1;

        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }

        if ((attackedMonster === "Monster 1" && monster1.status.includes("Charmed")) || (attackedMonster === "Monster 1" && monster1.status.includes("Sleep")))
        {
            dialogue.innerHTML = `<p>You cast Ventriloquism, but nothing happens.</p>`;
            toggleShowSpellList();
            finalCharacter.greyOutAttackButtons(monster1, monster2);

        } else if ((attackedMonster === "Monster 2" && monster2.status.includes("Charmed")) || (attackedMonster === "Monster 2" && monster2.status.includes("Sleep")))
        {
            dialogue.innerHTML = `<p>You cast Ventriloquism, but nothing happens.</p>`;
            toggleShowSpellList();
            finalCharacter.greyOutAttackButtons(monster1, monster2);
        }
        else if ((attackedMonster === "Monster 1") && (monster1.healthPoints > 0))
        {
            toggleShowSpellList();
            if (confirm(`You cast Ventriloquism, and cause a distraction and the ${monster1.name} is caught offguard increasing your chances of hitting, do you want to take the initiative and attack the ${monster1.name}?`))
            {
                finalCharacter.weaponAttackMonster1(monster1, monster2, finalCharacter.weapon, continueNextChapter, 2, 2)
            } else
            {
                dialogue.innerHTML = `<p>You cast Ventriloquism, and cause a distraction and the ${monster1.name} is caught offguard, but you decide not to attack</p>`;
                finalCharacter.greyOutAttackButtons(monster1, monster2);
            }

        } else if ((attackedMonster === "Monster 2") && (monster2.healthPoints > 0))
        {
            toggleShowSpellList();
            if (confirm(`You cast Ventriloquism, and cause a distraction and the ${monster2.name} is caught offguard increasing your chances of hitting, do you want to take the initiative and attack the ${monster2.name}?`))
            {
                finalCharacter.weaponAttackMonster2(monster1, monster2, finalCharacter.weapon, continueNextChapter, 2, 2)
            } else
            {
                dialogue.innerHTML = `<p>You cast Ventriloquism, and cause a distraction and the ${monster2.name} is caught offguard, but you decide not to attack</p>`;
                finalCharacter.greyOutAttackButtons(monster1, monster2);
            }
        } else
        {
            dialogue.innerHTML = `<p>You cast Ventriloquism, but nothing happens.</p>`;
        }
    }
}

detectMagic.castSpell = function ()
{
    console.log('Casting Detect Magic')
}

floatingDisc.castSpell = function ()
{
    console.log('Casting Floating Disc')
}

holdPortal.castSpell = function ()
{
    console.log('Casting Hold Portal')
}

light.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Light, but the words won't come to your mind.</p>`;
        toggleShowSpellList();

    } else
    {
        this.numberOfUses -= 1;

        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }
        toggleShowSpellList();

        finalCharacter.greyOutAttackButtons(monster1, monster2);
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You cast Light, which affects a 30 foot area.</p>`;

        let isBlindedM1 = monster1.status.some((x) => x === "Blind");
        let isBlindedM2 = monster2.status.some((x) => x === "Blind");

        //checking if M1 is alive -

        if ((attackedMonster === "Monster 1" && monster1.healthPoints > 0 && isBlindedM1 === false) || (attackedMonster === "Monster 1" && (monster1.healthPoints > 0 && isBlindedM1 === false)))
        {
            dialogue.innerHTML += `<p>${monster1.name} has been blinded.</p>`;
            monster1.status.push('Blind');
            let monster1Status = document.querySelector("#monster-one-status");
            monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>`

            //need to make variable, push to an array, and then call the function expression

            let blindTimer = setTimeout(function ()
            {
                // let removeBlindM1 = monster1.status.filter((x) => "Blind");
                // monster1.status.splice(monster1.status.indexOf("Blind"), 1);
                // monster1.status.splice(removeBlindM1); //removing Blind after function call
                monster1.status.splice(monster1.status.indexOf("Blind"), 1);

                let updateM1Status = document.querySelector("#monster-one");
                updateM1Status.innerHTML = `
                <div class="monster" id="monster-one">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 1</legend>
                        <h4 id="monster-one-type">Monster Type: ${monster1.name}</h4>
                        <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
                        <h4 id="monster-one-ap">Armor Class: ${monster1.armorClass}</h4>
                        <h4 id="monster-one-damage">Damage: ${monster1.damage}</h4>
                        <h4 id="monster-one-status">Status: ${monster1.status}</h4>
                    </fieldset>   
                </div>`;
                console.log('Blind removed m1')
            }, 30000);

            finalCharacter.activeSpellStatuses.push(blindTimer);

            let blindTimerObject = {
                id: blindTimer,
                name: "Light Timer 1"
            };

            finalCharacter.activeSpellStatuses.push(blindTimerObject);
            console.log(finalCharacter.activeSpellStatuses)

            //end of setTimeout

        } else if ((attackedMonster === "Monster 2" && monster2.healthPoints > 0 && isBlindedM2 === false) || (attackedMonster === "Monster 2" && (monster2.healthPoints > 0 && isBlindedM2 === false)))
        {
            dialogue.innerHTML += `<p>${monster2.name} is blinded.</p>`;
            monster2.status.push('Blind');
            let monster2Status = document.querySelector("#monster-two-status");
            monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`

            let blindTimer2 = setTimeout(function ()
            {
                monster2.status.splice(monster2.status.indexOf("Blind"), 1);
                // let removeBlindM2 = monster2.status.filter((x) => "Blind");
                // monster2.status.splice(removeBlindM2);
                let updateM2Status = document.querySelector("#monster-two");
                updateM2Status.innerHTML = `
                <div class="monster" id="monster-two">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 2</legend>
                        <h4 id="monster-two-type">Monster Type: ${monster2.name}</h4>
                        <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
                        <h4 id="monster-two-ap">Armor Class: ${monster2.armorClass}</h4>
                        <h4 id="monster-two-damage">Damage: ${monster2.damage}</h4>
                        <h4 id="monster-two-status">Status: ${monster2.status}</h4>
                    </fieldset>   
                </div>`;
                console.log('blind removed m2')

            }, 30000);

            finalCharacter.activeSpellStatuses.push(blindTimer2);
            let blindTimerObject2 = {
                id: blindTimer2,
                name: "Light Timer 2"
            };

            finalCharacter.activeSpellStatuses.push(blindTimerObject2);

            console.log(finalCharacter.activeSpellStatuses)

        } else if (attackedMonster === "Monster 2")
        {
            dialogue.innerHTML += `<p>${monster2.name} was not affected.</p>`;
        } else if (attackedMonster === "Monster 1")
        {
            dialogue.innerHTML += `<p>${monster1.name} was not affected.</p>`;
        }
    }
}

readLanguages.castSpell = function ()
{
    console.log('Casting Read Languages')
}

readMagic.castSpell = function ()
{
    console.log('Casting Read Magic')
}

magicMissile.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{

    //SETTING TIMEOUT TO TEST CANCELING AND PASSING TWO TIMEOUTS

    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Magic Missile, but the words won't come to your mind.</p>`;
        toggleShowSpellList();
    } else
    {
        this.numberOfUses -= 1;

        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }

        if (attackedMonster === "Monster 1")
        {
            toggleShowSpellList();
            finalCharacter.spell2AttackMonster1(monster1, monster2, continueNextChapter, this.damage, this.name);
        } else if (attackedMonster === "Monster 2")
        {
            toggleShowSpellList();
            finalCharacter.spell2AttackMonster2(monster1, monster2, continueNextChapter, this.damage, this.name);
        }
    }
}

shield.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Shield, but the words won't come to your mind.</p>`;
        toggleShowSpellList();
    } else if (finalCharacter.status.includes("Shield"))
    {
        dialogue.innerHTML = `<p>You are already shielded by this spell.</p>`;
        toggleShowSpellList();
    } else
    {
        this.numberOfUses -= 1;
        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }
        toggleShowSpellList();
        console.log("Casting Shield spell");
        finalCharacter.greyOutAttackButtons(monster1, monster2);
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You cast Shield and reduce your Armor Class to 4</p>`;
        let oldAC = finalCharacter.armorClass;
        finalCharacter.armorClass = 4;

        //adding status icon to player status module

        finalCharacter.status.push("Shield");

        let addShieldStatus = document.querySelector(".shield-status");
        addShieldStatus.classList.remove('hide-status')

        let shieldTimer = setTimeout(function ()
        {
            finalCharacter.armorClass = oldAC;
            finalCharacter.status.splice(finalCharacter.status.indexOf("Shield"), 1);
            let removeShieldStatus = document.querySelector(".shield-status");
            removeShieldStatus.classList.add('hide-status')
            console.log("shield spell removed");
            console.log(finalCharacter.status)
        }, 120000);

        finalCharacter.activeSpellStatuses.push(shieldTimer)
    }
}

protectionFromEvil.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Protection From Evil, but the words won't come to your mind.</p>`;
        toggleShowSpellList();
    } else
    {
        this.numberOfUses -= 1;
        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }
        toggleShowSpellList();
        finalCharacter.greyOutAttackButtons(monster1, monster2);
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You cast Protection From Evil and increase your Saving Throws by 1 and reduce Monster Hit Rolls by 1</p>`;

        for (let i = 0; i < monster1.hitRoll.length; i++)
        {
            monster1.hitRoll[i][1] = monster1.hitRoll[i][1] + 1;
            if (monster1.hitRoll[i][1] > 20)
            {
                monster1.hitRoll[i][1] = 20;
            }
        }

        monster1.status.push("Protection from Evil");
        let monster1Status = document.querySelector("#monster-one-status");
        monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>`;

        if (monster2.name !== " ")
        {
            for (let i = 0; i < monster2.hitRoll.length; i++)
            {
                monster2.hitRoll[i][1] = monster2.hitRoll[i][1] + 1;
                if (monster2.hitRoll[i][1] > 20)
                {
                    monster2.hitRoll[i][1] = 20;
                }
            }

            monster2.status.push("Protection from Evil");
            let monster2Status = document.querySelector("#monster-two-status");
            monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`

            let protectionFromEvilTimer2 = setTimeout(function ()
            {
                for (let i = 0; i < monster2.hitRoll.length; i++)
                {
                    monster2.hitRoll[i][1] = monster2.hitRoll[i][1] - 1;
                }
                monster2.status.splice(monster2.status.indexOf("Protection from Evil"), 1);
                // let removeProtFromEvilM2 = monster2.status.filter((x) => "Protection from Evil");
                // monster2.status.splice(removeProtFromEvilM2);
                let updateM2Status = document.querySelector("#monster-two");
                updateM2Status.innerHTML = `
                    <div class="monster" id="monster-two">
                        <fieldset class='monster-info-module'>
                            <legend class='monster-dashboard'>Monster 2</legend>
                            <h4 id="monster-two-type">Monster Type: ${monster2.name}</h4>
                            <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
                            <h4 id="monster-two-ap">Armor Class: ${monster2.armorClass}</h4>
                            <h4 id="monster-two-damage">Damage: ${monster2.damage}</h4>
                            <h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>
                        </fieldset>   
                    </div>`;
            }, 60000);
            console.log("protFromEvilTimer2", protectionFromEvilTimer2);
            let protectionFromEvilObject2 = {
                name: "protectionFromEvilTimer2",
                id: protectionFromEvilTimer2
            }

            console.log(protectionFromEvilObject2)
            finalCharacter.activeSpellStatuses.push(protectionFromEvilTimer2);
        }

        let protectionFromEvilTimer = setTimeout(function ()
        {
            for (let i = 0; i < monster1.hitRoll.length; i++)
            {
                monster1.hitRoll[i][1] = monster1.hitRoll[i][1] - 1;
            }
            monster1.status.splice(monster1.status.indexOf("Protection from Evil"), 1);

            // let removeProtFromEvilM1 = monster1.status.filter((x) => "Protection from Evil");
            // monster1.status.splice(removeProtFromEvilM1);
            let updateM1Status = document.querySelector("#monster-one");
            updateM1Status.innerHTML = `
                <div class="monster" id="monster-one">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 1</legend>
                        <h4 id="monster-one-type">Monster Type: ${monster1.name}</h4>
                        <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
                        <h4 id="monster-one-ap">Armor Class: ${monster1.armorClass}</h4>
                        <h4 id="monster-one-damage">Damage: ${monster1.damage}</h4>
                        <h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>
                    </fieldset>   
                </div>`;
        }, 60000);
        finalCharacter.activeSpellStatuses.push(protectionFromEvilTimer);

        let protectionFromEvilObject = {
            name: "protectionFromEvilTimer",
            id: protectionFromEvilTimer
        }

        console.log(protectionFromEvilObject)


        console.log("protFromEvilTimer", protectionFromEvilTimer)

    }
}

charmPerson.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    console.log(attackedMonster)
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Charm Person, but the words won't come to your mind.</p>`;
        toggleShowSpellList();
    } else
    {
        let isCharmedM1 = monster1.status.some((x) => x === "Charmed");
        let isCharmedM2 = monster2.status.some((x) => x === "Charmed");

        console.log(monster1.status);
        console.log(monster2.status)

        this.numberOfUses -= 1;
        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }
        toggleShowSpellList();

        finalCharacter.greyOutAttackButtons(monster1, monster2);

        if ((attackedMonster === "Monster 1" && monster1.healthPoints <= 0) || (attackedMonster === "Monster 1" && isCharmedM1 === true))
        {
            dialogue.innerHTML = `<p>You cast Charm Person, but the spell had no effect.</p>`;

        } else if ((attackedMonster === "Monster 2" && monster2.healthPoints <= 0) || (attackedMonster === "Monster 2" && isCharmedM2 === true))
        {
            dialogue.innerHTML = `<p>You cast Charm Person, but the spell had no effect.</p>`;

        } else if (attackedMonster === "Monster 1" && monster1.healthPoints > 0)
        {
            let dialogue = document.querySelector('#fight-module-dialogue');
            dialogue.innerHTML = `<p>You cast Charm Person on the ${monster1.name}.</p>`;
            console.log("Charming Monster 1")
            monster1.status.push('Charmed');
            let monster1Status = document.querySelector("#monster-one-status");
            monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>`

            // WORKING TO PULL SET TIMEOUT OUT OF SPELL CASTING AND MAKING IT'S OWN F(X)

            let charmTimer = setTimeout(function ()
            {
                monster1.status.splice(monster1.status.indexOf("Charmed"), 1);
                // let removeCharmM1 = monster1.status.filter((x) => "Charmed");
                // monster1.status.splice(removeCharmM1);
                let updateM1Status = document.querySelector("#monster-one");
                updateM1Status.innerHTML = `
                <div class="monster" id="monster-one">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 1</legend>
                        <h4 id="monster-one-type">Monster Type: ${monster1.name}</h4>
                        <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
                        <h4 id="monster-one-ap">Armor Class: ${monster1.armorClass}</h4>
                        <h4 id="monster-one-damage">Damage: ${monster1.damage}</h4>
                        <h4 id="monster-one-status">Status: ${monster1.status}</h4>
                    </fieldset>   
                </div>`;

            }, 60000);

            finalCharacter.activeSpellStatuses.push(charmTimer);
            // WORKING TO PULL SET TIMEOUT OUT OF SPELL CASTING AND MAKING IT'S OWN F(X)

        } else if (attackedMonster === "Monster 2" && monster2.healthPoints > 0)
        {
            let dialogue = document.querySelector('#fight-module-dialogue');
            dialogue.innerHTML = `<p>You cast Charm Person on the ${monster2.name}.</p>`;
            console.log("charming monster 2")
            monster2.status.push('Charmed');
            let monster2Status = document.querySelector("#monster-two-status");
            monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`

            let charmTimer2 = setTimeout(function ()
            {
                monster2.status.splice(monster2.status.indexOf("Sleep"), 1);
                // let removeCharmM2 = monster2.status.filter((x) => "Charmed");
                // monster2.status.splice(removeCharmM2);
                let updateM2Status = document.querySelector("#monster-two");
                updateM2Status.innerHTML = `
                <div class="monster" id="monster-two">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 1</legend>
                        <h4 id="monster-two-type">Monster Type: ${monster2.name}</h4>
                        <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
                        <h4 id="monster-two-ap">Armor Class: ${monster2.armorClass}</h4>
                        <h4 id="monster-two-damage">Damage: ${monster2.damage}</h4>
                        <h4 id="monster-two-status">Status: ${monster2.status}</h4>
                    </fieldset>   
                </div>`;
                console.log('charm removed m2')

            }, 60000);

            finalCharacter.activeSpellStatuses.push(charmTimer2);
        }
    }
}

sleep.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Sleep, but the words won't come to your mind.</p>`;
        toggleShowSpellList();

    } else
    {
        this.numberOfUses -= 1;

        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }
        toggleShowSpellList();

        finalCharacter.greyOutAttackButtons(monster1, monster2);
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You cast Sleep, which affects a 40 foot area.</p>`;

        let isSleepingM1 = monster1.status.some((x) => x === "Sleep");
        let isSleepingM2 = monster2.status.some((x) => x === "Sleep");

        //checking if M1 is alive -

        if ((monster1.healthPoints > 0 && monster1.hitDice[0] < 4 && isSleepingM1 === false) || (monster1.healthPoints > 0 && monster1.hitDice[0] === 4 && monster1.hitDice[1] > 1 && isSleepingM1 === false))
        {
            dialogue.innerHTML += `<p>${monster1.name} fell asleep.</p>`;
            monster1.status.push('Sleep');
            let monster1Status = document.querySelector("#monster-one-status");
            monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>`

            //need to make variable, push to an array, and then call the function expression

            let sleepTimer = setTimeout(function ()
            {
                // let removeSleepM1 = monster1.status.filter((x) => "Sleep");
                monster1.status.splice(monster1.status.indexOf("Sleep"), 1); //removing sleep after function call
                let updateM1Status = document.querySelector("#monster-one");
                updateM1Status.innerHTML = `
                <div class="monster" id="monster-one">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 1</legend>
                        <h4 id="monster-one-type">Monster Type: ${monster1.name}</h4>
                        <h4 id="monster-one-hp">Hit Points: ${monster1.healthPoints}<progress class='monster-hp-prog-bar' max="${monster1.startingHealthPoints}" value="${monster1.healthPoints}"></progress></h4> 
                        <h4 id="monster-one-ap">Armor Class: ${monster1.armorClass}</h4>
                        <h4 id="monster-one-damage">Damage: ${monster1.damage}</h4>
                        <h4 id="monster-one-status">Status: ${monster1.status}</h4>
                    </fieldset>   
                </div>`;
                console.log('sleep removed m1')
            }, 30000);

            finalCharacter.activeSpellStatuses.push(sleepTimer);
            //end of setTimeout

        } else if (monster1.healthPoints > 0)
        {
            dialogue.innerHTML += `<p>${monster1.name} is not affected.</p>`;

        } else 
        {
            // alert('NEED TO FIX CONDITIONAL LINE 377 MAGE-LEVEL-ONE-SPELLS-CLASS')
        }

        //checking if M2 is alive - need to check if HD < 4+1 to be affected

        if ((monster2.healthPoints > 0 && monster2.hitDice[0] < 4 && isSleepingM2 === false) || (monster2.healthPoints > 0 && monster2.hitDice[0] === 4 && monster2.hitDice[1] > 1 && isSleepingM2 === false))
        {
            dialogue.innerHTML += `<p>${monster2.name} fell asleep.</p>`;
            monster2.status.push('Sleep');
            let monster2Status = document.querySelector("#monster-two-status");
            monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`

            let sleepTimer2 = setTimeout(function ()
            {
                // let removeSleepM2 = monster2.status.filter((x) => "Sleep");
                monster2.status.splice(monster2.status.indexOf("Sleep"), 1); //removing sleep after function call
                let updateM2Status = document.querySelector("#monster-two");
                updateM2Status.innerHTML = `
                <div class="monster" id="monster-two">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 2</legend>
                        <h4 id="monster-two-type">Monster Type: ${monster2.name}</h4>
                        <h4 id="monster-two-hp">Hit Points: ${monster2.healthPoints}<progress class='monster-hp-prog-bar' max="${monster2.startingHealthPoints}" value="${monster2.healthPoints}"></progress></h4> 
                        <h4 id="monster-two-ap">Armor Class: ${monster2.armorClass}</h4>
                        <h4 id="monster-two-damage">Damage: ${monster2.damage}</h4>
                        <h4 id="monster-two-status">Status: ${monster2.status}</h4>
                    </fieldset>   
                </div>`;
                console.log('sleep removed m2')

            }, 30000);

            finalCharacter.activeSpellStatuses.push(sleepTimer2);

        } else if (monster2.healthPoints > 0)
        {
            dialogue.innerHTML += `<p>${monster2.name} is not affected.</p>`;

        } else
        {
            // //TRIGGERS WHEN FIRST BATTLE WITH ONLY ONE MONSTER STARTS
            // alert('NEED TO FIX CONDITIONAL LINE 419 MAGE-LEVEL-ONE-SPELLS-CLASS')
        }
    }
}

export { charmPerson, detectMagic, floatingDisc, holdPortal, light, magicMissile, protectionFromEvil, readLanguages, shield, sleep, ventriloquism, readMagic };