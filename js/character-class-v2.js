//import other js modules to access

import { finalCharacter, continueChapterThreeFour, attackingMonsters } from './js_v14-3.js';
import Weapon from './weapon-class-v2.js';
import { steelSword, shortBow, staff, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword } from './weapon-class-v2.js';
import Armor from './armor-class-v2.js';
import { chainMail, leatherArmor, robes, noArmor, plateMail, reinforcedLeather, platedLeather, reinforcedRobes, enchantedRobes, obsidianPlateMail } from './armor-class-v2.js';
import Specialty from './specialty-class-v2.js';
import { noSpecialty, warrior, masterArcher, highMage, dragonWarrior } from './specialty-class-v2.js';

//exports Character class for other module access

export default class Character {
    constructor(name, specialty, armor, weapon, inventory1, inventory2, inventory3) {
        this.name = name;
        this.specialty = specialty;
        this.armor = armor;
        this.weapon = weapon;
        this.inventory1 = inventory1;
        this.inventory2 = inventory2;
        this.inventory3 = inventory3;
    };

    //updates & initiates Character creation

    characterUpdate() {
        let characterInfo =  document.querySelector("#character-info");
        characterInfo.innerHTML = `
        <div id='character-stats'>
            <fieldset class='char-info-module'>
                <legend class='player-dashboard'>Player Data</legend>
                <h4 id='char-name' class='char-info-label'>Name: <span class="character-display-info">${this.name}</span></h4>
                <h4 id='char-specialty' class='char-info-label'>Specialty <span class="character-display-info">: ${this.specialty.name}</span></h4>
                <h4 id='char-hp' class='char-info-label'>Health Points:  <span class="character-display-info">${this.specialty.healthPoints}</span></h4> 
                <h4 id='char-armor' class='char-info-label'>Armor:  <span class="character-display-info">${this.armor.name}</span></h4> 
                <h4 id='char-armor-points' class='char-info-label'>Armor Points:  <span class="character-display-info">${this.armor.armorPoints}</span></h4>
                <h4 id='char-weapon' class='char-info-label'>Weapon:  <span class="character-display-info">${this.weapon.name}</span></h4>
                <h4 id='char-damage' class='char-info-label'>Damage:  <span class="character-display-info">${this.weapon.damage}</span></h4>
                <h4 id='char-spell1' class='char-info-label'>Spell 1:  <span class="character-display-info">${this.specialty.spell1.name}</span></h4>
                <h4 id='char-spell2' class='char-info-label'>Spell 2:  <span class="character-display-info">${this.specialty.spell2.name}</span></h4>
            </fieldset>
        </div>
        <div id='character-inventory'>
            <fieldset  class='char-info-module'>
                <legend class='player-dashboard'>Inventory</legend>
                <h4 id='char-items' class='char-info-label'>Item 1: <span class='character-display-inv1'>${this.inventory1.name}</span></h4>
                <h4 id='char-items' class='char-info-label'>Item 2: <span class='character-display-inv2'>${this.inventory2.name}</span></h4>
                <h4 id='char-items' class='char-info-label'>Item 3: <span class='character-display-inv3'>${this.inventory3.name}</span></h4>
            </fieldset>
        </div>    
            
            
            `; 
    }
    
    //confirms to attack monsters and populates monster-info section

    confirmAttack(enemy1, enemy2) {
        this.enemy1 = enemy1;
        this.enemy2 = enemy2;
        
        let fightMonster = document.getElementById('dialogue');
        
        fightMonster.innerHTML = `<p>You Attack!</p>`;
        

            
       
//----------------TRYING TO EITHER REMOVE OR CHANGE COLOR OF ATTACK BUTTON IF MONSTER1 IS DEAD-------------

        if (this.enemy1.healthPoints === 'Dead') {
            let removeMonsterOneAttackButton = document.querySelector('.attack-monster-one');
            removeMonsterOneAttackButton.classList.add('monster1-dead');
            let removeMonsterOneSpellAttack = document.querySelector('.spell2-monster-one');
            removeMonsterOneSpellAttack.classList.add('monster1-dead');
        } else if (this.enemy2.healthPoints === 'Dead') {
            let removeMonsterTwoAttackButton = document.querySelector('.attack-monster-two');
            removeMonsterTwoAttackButton.classList.add('monster1-dead');
            let removeMonsterTwoSpellAttack = document.querySelector('.spell2-monster-two');
            removeMonsterTwoSpellAttack.classList.add('monster1-dead');
        }; 
//----------------------------------------------------------------------------------------------------------
        let monsterInfo = document.querySelector('#monster-info');
        monsterInfo.innerHTML = `
        <div class="monster" id="monster-one">
            <fieldset class='monster-info-module'>
                <legend class='monster-dashboard'>Monster 1</legend>
                <h4 id="monster-one-type">Monster Type: ${enemy1.name}</h4>
                <h4 id="monster-one-hp">Health Points: ${enemy1.healthPoints}</h4> 
                <h4 id="monster-one-ap">Armor Points: ${enemy1.armorPoints}</h4>
                <h4 id="monster-one-damage">Damage: ${enemy1.damage}</h4>     
            </fieldset>  
        </div>
        <div class="monster" id="monster-two">
            <fieldset class='monster-info-module'>
                <legend class='monster-dashboard'>Monster 2</legend>
                <h4 id="monster-two-type">Monster Type: ${enemy2.name}</h4>
                <h4 id="monster-two-hp">Health Points: ${enemy2.healthPoints}</h4> 
                <h4 id="monster-two-ap">Armor Points: ${enemy2.armorPoints}</h4>
                <h4 id="monster-two-damage">Damage: ${enemy2.damage}</h4> 
            </fieldset>        
        </div>
        `;     
    };    

    //attacking monster 1

    weaponAttackMonster1(monster1, weapon) {
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (self.enemy1.healthPoints === 'Dead' && self.enemy2.healthPoints === 'Dead') {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
            };            
        
        };        
        this.monster1 = monster1;
        this.weapon = weapon;
                 
        let attackDialogue = document.getElementById("dialogue");
        attackDialogue.innerHTML = `
        You attack the ${this.monster1.name} with your ${this.weapon.name} and cause ${this.weapon.damage} points of damage.`;        
        

         

        //CHECKING ATTACK INTERACTION
        
        if (this.monster1.healthPoints - this.weapon.damage > 0) {        
            this.monster1.healthPoints = this.monster1.healthPoints - this.weapon.damage;
            let updatedMonsterHP = document.querySelector("#monster-one-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4>`;
            


            self.monster1.monsterAttack.apply(null, arguments);
            
           
        } else if (this.monster1.healthPoints - this.weapon.damage <= 0 || this.monster1.healthPoints === 'Dead') {
            this.monster1.healthPoints = 'Dead';
            
            let monsterOneStatus = document.querySelector('#monster-one');
            let defeatMonster1 = document.querySelector('#dialogue');
            monsterOneStatus.innerHTML = `
            <div class="monster" id="monster-one">
                <fieldset class='monster-info-module'>
                    <legend class='monster-dashboard'>Monster 1</legend>
                    <h4 id="monster-one-type">Monster Type: ${this.monster1.name}</h4>
                    <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4> 
                    <h4 id="monster-one-ap">Armor Points: ${this.monster1.armorPoints}</h4>
                    <h4 id="monster-one-damage">Damage: ${this.monster1.damage}</h4>    
                </fieldset>   
            </div>`;
            defeatMonster1.innerHTML = `
            <p>Congratulations, you defeated the Monster 1!</p>`;

//----------------------------trying to remove monster attack button--------------//

           let removingMonster1Button = document.getElementsByClassName('attack-monster-one');
           removingMonster1Button[0].classList.add('monster1-dead')
            
//-------------------------------------------------------------------//
            };
        
            
            

            confirmMonstersDead();    
             
    }


    weaponAttackMonster2(monster2, weapon) {
        let self = this;
        let confirmMonstersDead = (enemy2) => {            
            //console.log(self.enemy1.name);
            console.log(self.enemy2.name);
        
            console.log("checking function" + " " + self.enemy2.healthPoints);
        
            if (self.enemy2.healthPoints === 'Dead' && self.enemy1.healthPoints === 'Dead') {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;
            
            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
            };            
        };
        
        this.monster2 = monster2;
        this.weapon = weapon;

        let attackDialogue = document.getElementById("dialogue");
        attackDialogue.innerHTML = `
        You attack the ${this.monster2.name} with your ${this.weapon.name} and cause ${this.weapon.damage} points of damage.`;
        
        //CHECKING ATTACK INTERACTION
        if (this.monster2.healthPoints - this.weapon.damage > 0) {        
            this.monster2.healthPoints = this.monster2.healthPoints - this.weapon.damage;
            let updatedMonsterHP = document.querySelector("#monster-two-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4>`;
            self.monster2.monsterAttack.apply(null, arguments);
            
            } else if (this.monster2.healthPoints - this.weapon.damage <= 0 || this.monster2.healthPoints === 'Dead') {
                this.monster2.healthPoints = 'Dead';
                
                let monsterTwoStatus = document.querySelector('#monster-two');
                let defeatMonster2 = document.querySelector('#dialogue');
                monsterTwoStatus.innerHTML = `
                <div class="monster" id="monster-two">
                    <fieldset class='monster-info-module'>
                        <legend class='monster-dashboard'>Monster 2</legend>
                        <h4 id="monster-two-type">Monster Type: ${this.monster2.name}</h4>
                        <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4> 
                        <h4 id="monster-two-ap">Armor Points: ${this.monster2.armorPoints}</h4>
                        <h4 id="monster-two-damage">Damage: ${this.monster2.damage}</h4>   
                    </fieldset>    
                </div>`;
                defeatMonster2.innerHTML = `
                <p>Congratulations, you defeated the Monster 2!</p>`;    
                let removingMonster2Button = document.getElementsByClassName('attack-monster-two');
                removingMonster2Button[0].classList.add('monster1-dead')        
                };
                confirmMonstersDead();                 
    }

    spell2AttackMonster1(monster1, spell2) {
        console.log('Casting Spell Two on Monster One');
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (self.enemy1.healthPoints === 'Dead' && self.enemy2.healthPoints === 'Dead') {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
            };            
        
        };        
        this.monster1 = monster1;
        this.spell2 = spell2;
                 
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        You cast ${this.specialty.spell2.name} on the ${this.monster1.name} and cause ${this.specialty.spell2.damage} points of damage.`;
        
        console.log(this.specialty.spell2.damage);
                
        //CHECKING ATTACK INTERACTION
        if (this.monster1.healthPoints - this.specialty.spell2.damage > 0) {        
            this.monster1.healthPoints = this.monster1.healthPoints - this.specialty.spell2.damage;
            let updatedMonsterHP = document.querySelector("#monster-one-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4>`;
            self.monster1.monsterAttack.apply(null, arguments);
        
        } else if (this.monster1.healthPoints - this.specialty.spell2.damage <= 0 || this.monster1.healthPoints === 'Dead') {
            this.monster1.healthPoints = 'Dead';
            
            let monsterOneStatus = document.querySelector('#monster-one');
            let defeatMonster1 = document.querySelector('#dialogue');
            monsterOneStatus.innerHTML = `
            <div class="monster" id="monster-one">
                <fieldset class='monster-info-module'>
                    <legend class='monster-dashboard'>Monster 1</legend>
                    <h4 id="monster-one-type">Monster Type: ${this.monster1.name}</h4>
                    <h4 id="monster-one-hp">Health Points: ${this.monster1.healthPoints}</h4> 
                    <h4 id="monster-one-ap">Armor Points: ${this.monster1.armorPoints}</h4>
                    <h4 id="monster-one-damage">Damage: ${this.monster1.damage}</h4>    
                </fieldset>   
            </div>`;
            defeatMonster1.innerHTML = `
            <p>Congratulations, you defeated the Monster 1!</p>`;     
            let removingMonster1SpellButton = document.getElementsByClassName('spell2-monster-one');
            removingMonster1SpellButton[0].classList.add('monster1-dead')       
            };            
            confirmMonstersDead();
    }

    spell2AttackMonster2(monster2, spell2) {
        console.log('Casting Spell Two on Monster Two');
        let self = this;
        let confirmMonstersDead = (enemy1) => {            
        
        //checking if both monsters are dead   

            if (self.enemy1.healthPoints === 'Dead' && self.enemy2.healthPoints === 'Dead') {
            console.log('both dead');
        
            let defeatedMonsters = document.querySelector('#dialogue');
            let removeFightModule = document.querySelector('#fight-module');
                
            removeFightModule.innerHTML = `<p>You won!</p>`;
            defeatedMonsters.innerHTML = `
            <p>Congratulations, you defeated the monster(s)!</p>
            <input type="submit" id="start-chapter-three-four" value="Continue">`;                    
        
            removeFightModule.innerHTML = ` `;

            var startChapterThreeFour = document.querySelector("#start-chapter-three-four");
            startChapterThreeFour.addEventListener('click', continueChapterThreeFour, false);
            };            
        
        };        
        this.monster2 = monster2;
        this.spell2 = spell2;
                 
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        You cast ${this.specialty.spell2.name} on the ${this.monster2.name} and cause ${this.specialty.spell2.damage} points of damage.`;
        
        console.log(this.specialty.spell2.damage);
                
        //CHECKING ATTACK INTERACTION
        if (this.monster2.healthPoints - this.specialty.spell2.damage > 0) {        
            this.monster2.healthPoints = this.monster2.healthPoints - this.specialty.spell2.damage;
            let updatedMonsterHP = document.querySelector("#monster-two-hp");
            updatedMonsterHP.innerHTML = `
            <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4>`;
            self.monster2.monsterAttack.apply(null, arguments);
        
        } else if (this.monster2.healthPoints - this.specialty.spell2.damage <= 0 || this.monster2.healthPoints === 'Dead') {
            this.monster2.healthPoints = 'Dead';
            
            let monsterTwoStatus = document.querySelector('#monster-two');
            let defeatMonster2 = document.querySelector('#dialogue');
            monsterTwoStatus.innerHTML = `
            <div class="monster" id="monster-two">
                <fieldset>
                    <legend class='monster-dashboard'>Monster 2</legend>
                    <h4 id="monster-two-type">Monster Type: ${this.monster2.name}</h4>
                    <h4 id="monster-two-hp">Health Points: ${this.monster2.healthPoints}</h4> 
                    <h4 id="monster-two-ap">Armor Points: ${this.monster2.armorPoints}</h4>
                    <h4 id="monster-two-damage">Damage: ${this.monster2.damage}</h4>   
                </fieldset>    
            </div>`;
            defeatMonster2.innerHTML = `
            <p>Congratulations, you defeated the Monster 2!</p>`;    
            let removingMonster2SpellButton = document.getElementsByClassName('spell2-monster-two');
            removingMonster2SpellButton[0].classList.add('monster1-dead')               
            };                        
            confirmMonstersDead();
    }

    spell1Heal() {
        console.log('Casting Heal Spell');
        console.log(finalCharacter.specialty.spell1.healing)
        let healedCharHP = document.querySelector("#char-hp");
        finalCharacter.specialty.healthPoints += finalCharacter.specialty.spell1.healing;
        if (finalCharacter.specialty.healthPoints >= finalCharacter.specialty.maxHealthPoints) {
            finalCharacter.specialty.healthPoints = finalCharacter.specialty.maxHealthPoints;
            }   
        healedCharHP.innerHTML = `
        <h4 id='char-hp' class='char-info-label'>Health Points: <span class="character-display-info">${finalCharacter.specialty.healthPoints}</span></h4>
        `;
        
        let attackDialogue = document.querySelector("#dialogue");
        attackDialogue.innerHTML = `
        You cast ${finalCharacter.specialty.spell1.name} and heal ${finalCharacter.specialty.spell1.healing} health points.`;

        let castedHealSpell = document.querySelector('.spell1-heal');
        //castedHealSpell.remove();

        //WORKS, BUT NEED TO IMPLEMENT ALERT WINDOW WHEN MONSTERS ATTACK AND NOT RESET FIGHT MODULE
        castedHealSpell.style.visibility = "hidden"
        setTimeout(function() {
            castedHealSpell.style.visibility = "visible"}, 60000);
        }


        // try to hide the spell button with setTimeout() method //
        // document.getElementById("button").onclick = function(){
        //     doSingle();
        //     document.getElementById("button").style.visibility = "hidden"
        //     setTimeout(function(){
        //       document.getElementById("button").style.visibility = "visible"
        //     }, 1000)
        //   };
        //   function doSingle() {
        //      // your function
        //   };
        // }

    

    

};

