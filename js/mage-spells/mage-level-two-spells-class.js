import
{
    finalCharacter
} from "../js_v14-3.js";

import { toggleShowSpellList } from "../js_v14-3.js";

export let mageLevelTwoSpells = [];

export default class MageLevelTwoSpells
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
};

//completed
let continualLight = new MageLevelTwoSpells("Continual Light", 2, 120, 999, "Volume of 60 foot diameter", function () { console.log('Casting'); }, "continual-light", true, 0, true);


let detectEvil = new MageLevelTwoSpells("Detect Evil", 2, 60, 2, "Everything within 60 feet", function () { console.log('Casting'); }, "detect-evil", false, 0, true);

//completed
let invisibility = new MageLevelTwoSpells("Invisibility", 2, 240, 999, "The mage only", function () { console.log('Casting'); }, "invisibility", true, 0, false);


let esp = new MageLevelTwoSpells("ESP", 2, 60, 12, "All thoughts in one direction", function () { console.log('Casting'); }, "esp", false, 0, false);


let knock = new MageLevelTwoSpells("Knock", 2, 60, 1, "One lock or bar", function () { console.log('Casting'); }, "knock", false, 0, false);


let levitate = new MageLevelTwoSpells("Levitate", 2, 0, 6, "The mage only", function () { console.log('Casting'); }, "levitate", false, 0, false);


let locateObject = new MageLevelTwoSpells("Locate Object", 2, 60, 2, "One object within range", function () { console.log('Casting'); }, "locate-object", false, 0, true);

//completed
let mirrorImage = new MageLevelTwoSpells("Mirror Image", 2, 0, 6, "The mage only", function () { console.log('Casting'); }, "mirror-image", true, 0, false);

//battle spell
let phantasmalForce = new MageLevelTwoSpells("Phantasmal Force", 2, 999, 12, "20 foot volume", function () { console.log('Casting'); }, "phantasmal-force", true, 0, true);

//completed
let web = new MageLevelTwoSpells("Web", 2, 10, 48, "A volume of 10 by 10 by 10", function () { console.log('Casting'); }, "web", true, 0, true);


let wizardLock = new MageLevelTwoSpells("Wizard Lock", 2, 10, 999, "One portal or lock", function () { console.log('Casting'); }, "wizard-lock", false, 0, false);


let detectInvisible = new MageLevelTwoSpells("Detect Invisible", 2, 10, 6, "Detect invisibility", function () { console.log('Casting'); }, "detect-invisible", false, 0, true);

continualLight.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Continual Light, but the words won't come to your mind.</p>`;
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
        dialogue.innerHTML = `<p>You cast Contiual Light, which which affects a 60 foot area.</p>`;

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
                let removeBlindM1 = monster1.status.filter((x) => "Blind");
                monster1.status.splice(removeBlindM1); //removing Blind after function call
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
            }, 60000);

            finalCharacter.activeSpellStatuses.push(blindTimer);
            //end of setTimeout

        } else if ((attackedMonster === "Monster 2" && monster2.healthPoints > 0 && isBlindedM2 === false) || (attackedMonster === "Monster 2" && (monster2.healthPoints > 0 && isBlindedM2 === false)))
        {
            dialogue.innerHTML += `<p>${monster2.name} is blinded.</p>`;
            monster2.status.push('Blind');
            let monster2Status = document.querySelector("#monster-two-status");
            monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`

            let blindTimer2 = setTimeout(function ()
            {
                let removeBlindM2 = monster2.status.filter((x) => "Blind");
                monster2.status.splice(removeBlindM2);
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

            }, 60000);

            finalCharacter.activeSpellStatuses.push(blindTimer2);

        } else if (attackedMonster === "Monster 2")
        {
            dialogue.innerHTML += `<p>${monster2.name} was not affected.</p>`;
        } else if (attackedMonster === "Monster 1")
        {
            dialogue.innerHTML += `<p>${monster1.name} was not affected.</p>`;
        }
    }
}

detectEvil.castSpell = function ()
{
    console.log('Casting Detect Evil')
}

invisibility.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    console.log('Casting Invisibility')
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Invisibility, but the words won't come to your mind.</p>`;
        toggleShowSpellList();

    } else if (finalCharacter.status.includes("Invisible"))
    {
        dialogue.innerHTML = `<p>You are already invisible.</p>`;
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
        dialogue.innerHTML += `<p>You cast Invisibility, which makes you invisible.</p>`;

        finalCharacter.status.push("Invisible");
        console.log(finalCharacter.status);

        dialogue.innerHTML += `<p> You are invisible and will remain that way unless you attack or cast a spell.</p>`;

        let addInvisibilityStatus = document.querySelector(".invisibility-status");


        addInvisibilityStatus.classList.toggle('hide-status')


        // let playerStatus = document.querySelector("#char-status");
        // playerStatus.innerHTML = `<h4 id="char-status" class="char-info-label">Status: 
        // <span class="character-display-info">${finalCharacter.status}</span>
        // </h4>`

        let invisibilityTimer = setTimeout(function ()
        {
            finalCharacter.status.splice(finalCharacter.status.indexOf("Invisible"), 1);
            if (!addInvisibilityStatus.classList.contains("hide-status"))
            {
                addInvisibilityStatus.classList.toggle('hide-status');
            }

            // playerStatus.innerHTML = `<h4 id="char-status" class="char-info-label">Status: 
            //     <span class="character-display-info">${finalCharacter.status}</span>
            //     </h4>`
            console.log('Invisibility removed from player')
        }, 30000);

        finalCharacter.activeSpellStatuses.push(invisibilityTimer);
        //end of setTimeout           
    }
}

esp.castSpell = function ()
{
    console.log('Casting ESP')
}

knock.castSpell = function ()
{
    console.log('Casting Knock')
}

levitate.castSpell = function ()
{
    console.log('Casting Levitate')
}

locateObject.castSpell = function ()
{
    console.log('Casting Locate Object')
}

mirrorImage.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    console.log('Casting Mirror Image');
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Mirror Image, but the words won't come to your mind.</p>`;
        toggleShowSpellList();

    } else
    {
        this.numberOfUses -= 1;

        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }
        toggleShowSpellList();
        finalCharacter.mirrorImages = Math.ceil(Math.random(1) * 4);
        finalCharacter.greyOutAttackButtons(monster1, monster2, finalCharacter.mirrorImages);
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You cast Mirror Image, which which created ${finalCharacter.mirrorImages} more image(s) of you.</p>`;


        // let addMirrorImageStatus = document.querySelector('#char-status');

        if (!finalCharacter.status.includes("Mirror Image"))
        {
            finalCharacter.status.push('Mirror Image')
            console.log(finalCharacter.status)
        }



        let addMirrorImageStatus = document.querySelector(".mirror-image-status");
        if (addMirrorImageStatus.classList.contains("hide-status"))
        {
            addMirrorImageStatus.classList.toggle('hide-status');
        }


        // addMirrorImageStatus.innerHTML = `
        // <h4 id='char-status' class='char-info-label'>Status: <span class="character-display-info">${finalCharacter.status.join(', ')}        
        // </span></h4>
        // `
    }

    let mirrorImageTimer = setTimeout(function ()
    {
        let removeMirrorImage = finalCharacter.status.filter((x) => "Mirror Image");
        finalCharacter.status.splice(removeMirrorImage); //removing Mirror Image after function call

        let removeMirrorImageStatus = document.querySelector(".mirror-image-status");

        if (!removeMirrorImageStatus.classList.contains('hide-status'))
        {
            removeMirrorImageStatus.classList.toggle('hide-status');
        }

        // let updateCharacterStatus = document.querySelector("#char-status");
        // updateCharacterStatus.innerHTML = `
        // <h4 id='char-status' class='char-info-label'>Status: <span class="character-display-info">${finalCharacter.status
        //     }</span></h4>`;
        console.log('Mirror Image removed from player')
        console.log("Statuses: ", finalCharacter.status)
    }, 30000);

    finalCharacter.activeSpellStatuses.push(mirrorImageTimer);
}

phantasmalForce.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    console.log('Casting Phantasmal Force')
    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Phantasmal Force, but the words won't come to your mind.</p>`;
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
            let phantasmalForceScreen = document.querySelector('#phantasmalForce');
            console.log(phantasmalForceScreen)
            phantasmalForceScreen.classList.toggle('phantasmalForce-hide');
            let cancelPhantasmalForce = document.querySelector('[name="ph-cancel"]');
            cancelPhantasmalForce.addEventListener('click', function () { phantasmalForceScreen.classList.toggle('phantasmalForce-hide') }, false)
            console.log(cancelPhantasmalForce);
            console.log(phantasmalForceScreen.classList)
            toggleShowSpellList();




            finalCharacter.spell2AttackMonster1(monster1, monster2, continueNextChapter, this.damage, this.name);
        } else if (attackedMonster === "Monster 2")
        {
            toggleShowSpellList();




            finalCharacter.spell2AttackMonster2(monster1, monster2, continueNextChapter, this.damage, this.name);
        }

        //add random monsters/items in an array to pick which one attacks?
        //Troll lasts 1d4 turns
        //monsters attack the troll first, if it's hit, it disappears
        //Magic Missile
        //Fireball
        //Lightning Bolt 
        //Boulder
        //if it's a monster, how long does it last?
        //when does the phantasmal force disappear?
        //Monster is AC 9 and disappears when hit
        //if mage moves, takes any damage, or fails saving throws, it disappears
        //no real damage is inflicted (falls unconcious if hp = 0). 
        //recipient THINKS it is turned to stone/falls unconcious/etc.
        //wears off in 1-4 turns



        toggleShowSpellList();

        finalCharacter.greyOutAttackButtons(monster1, monster2);
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You cast Phantasmal Force and create a Troll to attack the monsters.</p>`;
    }
}

web.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    console.log('Casting Web');

    //casts a web and prevents monsters from attacking like a sleep spell
    //Giants and other creatures with great strength can break through a web in 2 rounds. 
    //A human of average Strength (a score of 9-12) will take 2-8 (2d4) turns to
    //break through the web. 

    if (this.numberOfUses <= 0)
    {
        let dialogue = document.querySelector('#fight-module-dialogue');
        dialogue.innerHTML = `<p>You try to cast Web, but the words won't come to your mind.</p>`;
        toggleShowSpellList();

    } else
    {
        this.numberOfUses -= 1;

        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }

        toggleShowSpellList();

        let isWebbedM1 = monster1.status.some((x) => x === "Web");
        let isWebbedM2 = monster2.status.some((x) => x === "Web");
        console.table(isWebbedM1, monster2.status, monster1.status, isWebbedM2)
        console.log(isWebbedM2)

        //checking if M1 is alive -

        if ((monster1.healthPoints > 0 && isWebbedM1 === false))
        {
            dialogue.innerHTML += `<p>${monster1.name} is stuck in the web.</p>`;
            monster1.status.push('Web');
            let monster1Status = document.querySelector("#monster-one-status");
            monster1Status.innerHTML = `<h4 id="monster-one-status">Status: ${monster1.status.join(', ')}</h4>`

            //need to make variable, push to an array, and then call the function expression

            let webTimer = setTimeout(function ()
            {
                let removeWebM1 = monster1.status.filter((x) => "Web");
                monster1.status.splice(removeWebM1); //removing Web after function call
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
                console.log('Web removed m1')
                console.log(monster1.status)

            }, 30000);

            finalCharacter.activeSpellStatuses.push(webTimer);
            //end of setTimeout
        }

        if ((monster2.healthPoints > 0 && isWebbedM2 === false))
        {
            dialogue.innerHTML += `<p>${monster2.name} is stuck in the web.</p>`;
            monster2.status.push('Web');
            let monster2Status = document.querySelector("#monster-two-status");
            monster2Status.innerHTML = `<h4 id="monster-two-status">Status: ${monster2.status.join(', ')}</h4>`

            let webTimer2 = setTimeout(function ()
            {
                let removeWebM2 = monster2.status.filter((x) => "Web");
                monster2.status.splice(removeWebM2);
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
                console.log('Web removed m2');
                console.log(monster2.status)

            }, 30000);

            finalCharacter.activeSpellStatuses.push(webTimer2);
        }
    }
}

wizardLock.castSpell = function ()
{
    console.log('Casting Wizard Lock')
}

detectInvisible.castSpell = function ()
{
    console.log('Casting Detect Invisibility')
}

export { continualLight, detectEvil, invisibility, esp, knock, levitate, locateObject, mirrorImage, phantasmalForce, web, wizardLock, detectInvisible }