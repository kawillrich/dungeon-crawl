//imports modules

//weapon imports
import Weapon from "./weapon-class-v2.js";
import {
  fists,
  normalSword,
  shortBow,
  silverSword,
  twoHandedBroadSword,
  longBow,
  ebonyBow,
  mahoganyStaff,
  gemStaff,
  noWeapon,
  obsidianSword,
  woodenClub,
  dagger,
  silverDagger,
  battleAxe,
  handAxe,
  crossBow,
  shortSword,
  mace,
  javelin,
  poleArm,
  sling,
  spear,
  warHammer,
} from "./weapon-class-v2.js";

//armor imports
import Armor from "./armor-class-v2.js";
import {
  chainMail,
  leatherArmor,
  robes,
  noArmor,
  scaleMail,
  plateMail,
  bandedMail,
  obsidianPlateMail,
} from "./armor-class-v2.js";

//spell imports
import Spell from "./spell-class-v2.js";
import {
  noSpell,
  mediumHealing,
  majorHealing,
  earthStrike,
  lightening,
  minorHealing,
  fireStorm,
  dragonFang,
  fireArrows,
} from "./spell-class-v2.js";

//specialty imports
import Specialty from "./specialty-class-v2.js";
import {
  adventurer,
  warrior,
  highMage,
  dragonWarrior,
  elf,
  dwarf,
  halfling,
  cleric,
  thief,
} from "./specialty-class-v2.js";

//character imports
import Character from "./character-class-v2.js";

//moster imports
import Monster from "./monster-class-v2.js";
import {
  smallWolf,
  wolf1,
  wolf2,
  goblin,
  goblin1,
  goblin2,
  noMonster,
  fireBeetle,
  hobGoblin,
  bugBear,
  bugBear1,
  kobold,
  kobold1,
} from "./monster-class-v2.js";

//inventory imports
import Inventory from "./inventory-class-v1.js";
import {
  raynardsCoin,
  farmersNote,
  noItem,
  eloisesRing,
  torch,
  backPack,
  holySymbol,
  holyWater,
  smallHammer,
  ironSpikes,
  garlic,
  grapplingHook,
  lantern,
  mirrorHandSized,
  oil,
  poleWooden,
  rationsIron,
  rationsStandard,
  rope,
  sackSmall,
  sackLarge,
  stakesAndMallet,
  thievesTools,
  tinderBox,
  waterskin,
  wine,
  wolfsbane,
} from "./inventory-class-v1.js";

//class-level-imports

import { traveller } from "./character-class-levels/adventurer-level-class.js";

import {
  fighterVeteran,
  fighterWarrior,
  fighterSwordmaster,
} from "./character-class-levels/fighter-level-class.js";
import {
  veteranMedium,
  warriorSeer,
  swordMasterConjurer,
} from "./character-class-levels/elf-level-class.js";
import { dragonWarriorVeteran } from "./character-class-levels/dragon-warrior-level-class.js";

//mage spell imports
import {
  charmPerson,
  detectMagic,
  floatingDisc,
  holdPortal,
  light,
  magicMissile,
  protectionFromEvil,
  readLanguages,
  shield,
  sleep,
  ventriloquism,
  readMagic,
} from "./mage-spells/mage-level-one-spells-class.js";
import {
  continualLight,
  detectEvil,
  invisibility,
  esp,
  knock,
  levitate,
  locateObject,
  mirrorImage,
  phantasmalForce,
  web,
  wizardLock,
  detectInvisible,
} from "./mage-spells/mage-level-two-spells-class.js";
import {
  clairvoyance,
  dispelMagic,
  fireBall,
  fly,
  haste,
  holdPerson,
  infravision,
  invisibilityTenFoot,
  lightningBolt,
  protectionFromEvilTenFoot,
  protectionFromNormalMissiles,
  waterBreathing,
} from "./mage-spells/mage-level-three-spells-class.js";

//cleric spell imports
import {
  cureLightWoundsCleric,
  detectEvilCleric,
  detectMagicCleric,
  purifyFoodAndWaterCleric,
  lightCleric,
  removeFearCleric,
  protectionFromEvilCleric,
  resistColdCleric,
} from "./cleric-spells/cleric-level-one-spells-class.js";
import {
  blessCleric,
  findTrapsCleric,
  holdPersonCleric,
  knowAlignmentCleric,
  resistFireCleric,
  silence15ftCleric,
  snakeCharmCleric,
  speakWithAnimalCleric,
} from "./cleric-spells/cleric-level-two-spells-class.js";
import {
  continualLightCleric,
  cureBlindnessCleric,
  cureDiseaseCleric,
  growthOfAnimalsCleric,
  locateObjectCleric,
  removeCurseCleric,
  speakWithTheDeadCleric,
  strikingCleric,
} from "./cleric-spells/cleric-level-three-spells.js";

import * as Utilities from "./Utilities/utilityFunctions.js";

//achievement imports
//import { noAchievements, killedFarmWolves, spokeToRaynard } from './achievements-v1.js';

//==============================================end imports===============================================//

//inializing character default values

let windowViewportHeight, windowViewportWidth, visualViewportHeight, visualViewportWidth;

visualViewportHeight = visualViewport.height;
visualViewportWidth = visualViewport.width;

windowViewportHeight = window.innerHeight;
windowViewportWidth  = window.innerWidth;

console.log("visual Height: " + visualViewportHeight)
console.log("visual Width: " + visualViewportWidth)
console.log("Viewport Height: " + windowViewportHeight)
console.log("Viewport Width: " + windowViewportWidth)

window.addEventListener(
  "load",
  function () {
    window.scrollTo(0, 0);
    let containerElement = document.querySelector("#container");      
    containerElement.style.width = "100dvh";
    containerElement.style.height = "100dvh";
  },
  false
);

window.addEventListener("resize", function() {
  window.scrollTo(0, 0);
  let containerElement = document.querySelector("#container");  
  containerElement.style.width = "100dvh";
  containerElement.style.height = "100dvh";  
})

let images;

let adventurerImage = 4;
let charAchievements = {};
let attributes = [];
let supplies = [
  torch,
  backPack,
  holySymbol,
  holyWater,
  smallHammer,
  ironSpikes,
  garlic,
  grapplingHook,
  lantern,
  mirrorHandSized,
  oil,
  poleWooden,
  rationsIron,
  rationsStandard,
  rope,
  sackSmall,
  sackLarge,
  stakesAndMallet,
  thievesTools,
  tinderBox,
  waterskin,
  wine,
  wolfsbane,
];

let strength = {
  name: "Strength",
  score: 9,
  adjustment: 0,
  dashArrayAdj: function () {
    let dashAdj = 150 - this.score * 8;
    return dashAdj;
  },
};

let intelligence = {
  name: "Intelligence",
  score: 9,
  adjustment: 0,
  dashArrayAdj: function () {
    let dashAdj = 150 - this.score * 8;
    return dashAdj;
  },
};

let wisdom = {
  name: "Wisdom",
  score: 9,
  adjustment: 0,
  dashArrayAdj: function () {
    let dashAdj = 150 - this.score * 8;
    return dashAdj;
  },
};

let dexterity = {
  name: "Dexterity",
  score: 9,
  adjustment: 0,
  dashArrayAdj: function () {
    let dashAdj = 150 - this.score * 8;
    return dashAdj;
  },
};

let constitution = {
  name: "Constitution",
  score: 9,
  adjustment: 0,
  dashArrayAdj: function () {
    let dashAdj = 150 - this.score * 8;
    return dashAdj;
  },
};

let charisma = {
  name: "Charisma",
  score: 9,
  adjustment: 0,
  dashArrayAdj: function () {
    let dashAdj = 150 - this.score * 8;
    return dashAdj;
  },
};

attributes.unshift(
  strength,
  intelligence,
  wisdom,
  dexterity,
  constitution,
  charisma
);

export let finalCharacter = new Character(
  "Traveler",
  adventurer,
  noArmor,
  noWeapon,
  noItem,
  noItem,
  noItem,
  noItem,
  charAchievements,
  adventurerImage
);
finalCharacter.inventory = [];

//Player sheet tab initialization
function openItem(e, linkName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(linkName).style.display = "block";
  e.currentTarget.className += " active";
}

let normalEquipmentLink = document.querySelector("#normal-equipment-link");
normalEquipmentLink.addEventListener(
  "click",
  function (e) {
    openItem(e, "normal-equipment");
  },
  false
);

let magicalEqiupmentLink = document.querySelector("#magical-equipment-link");
magicalEqiupmentLink.addEventListener(
  "click",
  function (e) {
    openItem(e, "magical-equipment");
  },
  false
);

let spellsLink = document.querySelector("#spells-link");
spellsLink.addEventListener(
  "click",
  function (e) {
    openItem(e, "spells");
  },
  false
);

let treasureLink = document.querySelector("#treasure-link");
treasureLink.addEventListener(
  "click",
  function (e) {
    openItem(e, "treasure");
  },
  false
);

document.getElementById("normal-equipment-link").click();

//Animation data

let canvas = document.getElementById("canvas2");
let ctx = canvas.getContext("2d");
let CANVAS_WIDTH = (canvas.width = 0);
let CANVAS_HEIGHT = (canvas.height = 0);
const playerImage = new Image();
playerImage.src = "images/character-spritesheet-v5.svg";
const spriteWidth = 64;
const spriteHeight = 64;
let frameX = 0;
let frameY = 4;
let gameFrame = 0;
const staggerFrames = 8;
let reqAnim;

export function render() {
  frameY = finalCharacter.characterImage;
  canvas = document.getElementById("canvas2");
  ctx = canvas.getContext("2d");
  CANVAS_HEIGHT = 100;
  CANVAS_WIDTH = 100;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth * 2,
    spriteHeight * 2
  );
  requestAnimationFrame(render);
}

export function animate() {
  frameY = finalCharacter.characterImage;
  if (document.querySelector(".attack-monster-one")) {
    document.querySelector(".attack-monster-one").disabled = true;
  }
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth * 1.5,
    spriteHeight * 1.5
  );

  if (gameFrame % staggerFrames == 0) {
    if (frameX < 6) {
      frameX++;
    } else if (frameX >= 6) {
      frameX = 0;
      if (document.querySelector(".attack-monster-one")) {
        document.querySelector(".attack-monster-one").disabled = false;
      }
      return;
    }
  }
  gameFrame++;
  reqAnim = requestAnimationFrame(animate);
}

export function stopAnimate() {
  window.cancelAnimationFrame(reqAnim);
}

//initialized and clears selectedSpecialty
let selectedSpecialty = "";

//select enter game button and add event listener for beginIntro()
let enterGame = document.querySelector("#enter-game");

let setTimeoutArray = [];
let dialogueDiv = document.querySelector("#dialogue");
let dialogueIterator = 0;
let typingSpeed = 3;
      
enterGame.addEventListener("click", 
  function() { 
    this.remove();
    beginChapterOneZero(); 
  }, false);

//set dialogue variable to #dialogue

//set dialogue text to display
let chapterOneZeroText = 
  `In the ruins of Elsier, there are rumors of a large treasure being guarded 
  by the Nightfang Dragon, known as Soul Stealer. Soul Stealer is an ancient 
  species of dragon with black scales, obsidian-like talons, and silver eyes 
  that can see in the dark as if it were daytime. It is said that Soul Stealer 
  breathes black fire that is able to burn through *almost* anything....`;

let chapterConfig = {
  thisChapterNumber: "1-0",
  thisChapterDialogue: chapterOneZeroText,
  buttonText: "Continue",
  setTimeoutArray: [],
  dialogueIterator: 0,
  typingSpeed: 3,
  dialogueDiv: document.querySelector('#dialogue'),
  nextChapterFunction: beginChapterOneOne
}

let chapterOneOneText = 
  `You have decided that your training and preparation have readied you for the challenge to venture to the ruins, in hopes of defeating the dragon and obtaining his treasure. You have grown up a lot since your youth. Now, at age 26, you feel you are at your physical peak. Mentally, you have already taken the leap of faith and prepared your belongings - basic supplies: food, water, armor, a weapon, and 
  a survival kit. `;

function beginChapterOneZero () { 
  console.log('chapter one zero');
  chapterConfig.nextChapterFunction = beginChapterOneOne;
  $("#welcome-title").animate({
      fontSize: "0px"}, 300).next().animate({
      width: "0px",
      height: "0px"}, 300).slideUp(300).next().dequeue(); 
    Utilities.continueTextAnimation(
      chapterConfig);  
}

let chapterOneTwoText = "Chapter 1-2";

function beginChapterOneOne() {
  console.log("chapter one one");
  
  chapterConfig.thisChapterNumber = "1-1",
  chapterConfig.thisChapterDialogue = chapterOneOneText,
  chapterConfig.nextChapterFunction = beginChapterOneTwo;

  console.log(chapterConfig.thisChapterDialogue)

  $("#welcome-title").animate({
      fontSize: "0px"}, 300).next().animate({
      width: "0px",
      height: "0px"}, 300).slideUp(300).next().dequeue(); 
    Utilities.continueTextAnimation(
      chapterConfig);  
}


function beginChapterOneTwo() {
  console.log("chapter one two");
  chapterConfig.thisChapterNumber = "1-2",
  chapterConfig.thisChapterDialogue = chapterOneTwoText,
  chapterConfig.nextChapterFunction = beginChapterOneThree;
  $("#welcome-title").animate({
      fontSize: "0px"}, 300).next().animate({
      width: "0px",
      height: "0px"}, 300).slideUp(300).next().dequeue(); 
    Utilities.continueTextAnimation(
      chapterConfig);  
}

function beginChapterOneThree() {
  console.log("1-3");
}

function createDialogueDiv(dialogueInput) { 
  dialogue.textContent = "";
  let dialogueDiv = document.createElement("div");
  dialogueDiv.id = `dialogue-div-${continueButtonSequence}`;
  dialogueDiv.textContent = dialogueInput + " " + continueButtonSequence;
  dialogue.appendChild(dialogueDiv);
  dialogueDiv.appendChild(createButton(dialogueInput));
}

let introContinue = function () {
  let introContinueButton = document.querySelector('#intro-continue-button');
  introContinueButton.style.display = "none";
  introContinueButton.remove();

  $("#welcome-title").animate({fontSize: "0px"}, 300);
  $(".welcome-title").slideUp(300).children().slideUp(300);
  setTimeoutArray = [];
  dialogueIterator = 0;
  dialogue.innerHTML = "";
  let innerDialogueDiv = document.createElement('span');
  innerDialogueDiv.id = "inner-dialogue-div";
  innerDialogueDiv.style.fontSize = "1.75rem";

  let continueBreak = document.createElement('br');

  dialogue.appendChild(continueBreak);


  dialogue.appendChild(innerDialogueDiv);
  introContinueTwo();
}
 
function introContinueTwo() {
  let innerText = document.querySelector('#inner-dialogue-div')

  if (dialogueIterator < introContinueDialogue.length) {
    innerText.innerHTML += introContinueDialogue.charAt(dialogueIterator);
    dialogueIterator++;
    setTimeoutArray.push(setTimeout(introContinueTwo, typingSpeed));
  }

  else {
    for (let i = 0; i < setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    setTimeoutArray = [];

    addContinueButton();
  }  
}

function addContinueButton() {
  let addNewContinueButton = document.createElement("button");
  addNewContinueButton.id = "new-continue-button";
  addNewContinueButton.textContent = "Continue";
  addNewContinueButton.type = "button";
  addNewContinueButton.addEventListener("click", function(newButton) {
    newButton.target.remove();
    introContinueThree(newButton)
  }, false);
    
  let containerDiv = document.querySelector("#container");
  containerDiv.appendChild(addNewContinueButton);
  let newButton = document.querySelector("#new-continue-button");
  return newButton;
}

let introContinueDialogue2 = `Your father, Edwin, and your Mother, Alena, have raised you well. 
                             Your father taught you how to handle your skills and how to defend yourself. 
                             He spent many nights with you, hiking, camping, and living in the woods. Your mother
                             taught you how to mend clothes, forage edible foods, and how to take care of your 
                             wounds. But did they prepare you for this?.... What's your name?`

function introContinueThree(newButton) {
  $("#inner-dialogue-div").animate({fontSize: "0px"}, 300)
  
  dialogueIterator = 0;
  setTimeoutArray = [];
  let dialogue = document.querySelector("#dialogue");
  dialogue.removeChild(document.querySelector("#inner-dialogue-div"));
  introContinueFour();
}

function introContinueFour() {
  let submitNameButton = document.querySelector("#submit-name-div");
  submitNameButton.classList.remove("not-visible");
  let introContinueButton = document.querySelector("#intro-button-container");
  // introContinueButton.remove();
  introContinueButton.style.display = "none";
  

  if (dialogueIterator < introContinueDialogue2.length) {
    dialogue.innerHTML += introContinueDialogue2.charAt(dialogueIterator);
    dialogueIterator++;
    setTimeoutArray.push(setTimeout(introContinueFour, typingSpeed));
  }

  else {
    for (let i = 0; i < setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    setTimeoutArray = [];
    addSubmitNameButton();
  }  

}

function addSubmitNameButton() {
  console.log("addSubmitNameButton");
  let confirmStart = document.querySelector("#confirm-start");
  confirmStart.style.display = "block";
  confirmStart.style.gridArea = "dialogue";
}

function checkUsername() {
  let checkName = document.querySelector("#character-name");
  let checkNameLength = checkName.value;
  let usernameMessage = document.querySelector("#username-message");
  if (checkNameLength.length < 3) {
    usernameMessage.textContent = "Name must be at least 3 characters.";
  } else {
    usernameMessage = "";
    charNameSubmitted();
  }
}

function charNameSubmitted() {
  let submitNameButton = document.querySelector("#submit-name");
  submitNameButton.removeEventListener("click", checkUsername, false);
  submitNameButton.classList.add("disabled");
  submitNameButton.style.display = "none";
  window.scrollTo(0, 0);

  let confirmStart = document.querySelector("#confirm-start");
  submittedCharName = document.querySelector("#character-name").value;
  confirmStart.style.display = "none";
  rollAttributes();
}

//asks to start game

//ADDING ABILITY SCORE GENERATOR FUNCTION

function rollAttributes() {
  $("#submit-name").addClass("disabled");

  let goldPieces = (Math.ceil(Math.random() * 15) + 3) * 10;
  finalCharacter.treasure = {
    gold: {
      type: "Gold Pieces",
      gpValue: 1,
      quantity: goldPieces,
    },
    gems: {
      type: "Gems",
      gpValue: 10,
      quantity: 0,
    },
    electrum: {
      type: "Electrum Pieces",
      gpValue: 2,
      quantity: 0,
    },
    silver: {
      type: "Silver Pieces",
      gpValue: 0.1,
      quantity: 0,
    },
    copper: {
      type: "Copper Pieces",
      gpValue: 0.01,
      quantity: 0,
    },
  };
  //create new div/span to contain welcome message  
  
  let getCharName = document.querySelector("#dialogue");
  getCharName.innerHTML = "";
  let welcomeMessage = document.createElement("span");
  welcomeMessage.id = "welcome-message";
  let containerDiv = document.querySelector("#container");
  containerDiv.appendChild(welcomeMessage);
   
  welcomeMessage.textContent = `
    Welcome, ${submittedCharName}, please roll your Attribute Scores. The maximum score is 18 and the lowest score is 7. Select 'Confirm' when done.`;

  getCharName.innerHTML += `

    <div id="stats"><h3><b>Attributes</b></h3>
        <div class="ability-score-grid-container">            

            <div class="ability-score-header-grid-item ability-score-number-header-grid-item" id="header-stat"><b>Score</b></div>
            <div class="ability-score-header-grid-item ability-score-title-header-grid-item"><b>Attribute</b></div>
            <div class="ability-score-header-grid-item ability-score-header-adjustment-grid-item" id="header-stat-adjustment"><b>Adjustment</b></div>
           
            <div class="ability-score-grid-item ability-score-number-grid-item" id="strength-stat">9</div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Strength</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="strength-stat-adjustment">0</div>

            <div class="ability-score-grid-item ability-score-number-grid-item" id="intelligence-stat"></div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Intelligence</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="intelligence-stat-adjustment">0</div>

            <div class="ability-score-grid-item ability-score-number-grid-item" id="wisdom-stat"></div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Wisdom</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="wisdom-stat-adjustment">0</div>

            <div class="ability-score-grid-item ability-score-number-grid-item" id="dexterity-stat"></div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Dexterity</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="dexterity-stat-adjustment">0</div>

            <div class="ability-score-grid-item ability-score-number-grid-item" id="constitution-stat"></div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Constitution</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="constitution-stat-adjustment">0</div>

            <div class="ability-score-grid-item ability-score-number-grid-item" id="charisma-stat"></div>
            <div class="ability-score-grid-item ability-score-title-grid-item">Charisma</div>
            <div class="ability-score-grid-item ability-score-adjustment-grid-item" id="charisma-stat-adjustment">0</div>
           
        </div>
    </div>
 
    <p id="dialogue-paragraph">Choose your attributes.</p>    
  `;

  let generateNewAttributeScores = document.createElement("button");
  generateNewAttributeScores.id = "generate-attributes";
  generateNewAttributeScores.textContent = "Roll";

  let confirmNewAttributeScores = document.createElement("button");
  confirmNewAttributeScores.id = "confirm-attributes";
  confirmNewAttributeScores.textContent = "Confirm";

  containerDiv.appendChild(generateNewAttributeScores);
  containerDiv.appendChild(confirmNewAttributeScores);

  let getCharStrength = document.querySelector("#strength-stat");
  getCharStrength.innerHTML = strength.score;

  let getCharIntelligence = document.querySelector("#intelligence-stat");
  getCharIntelligence.innerHTML = intelligence.score;

  let getCharWisdom = document.querySelector("#wisdom-stat");
  getCharWisdom.innerHTML = wisdom.score;

  let getCharDexterity = document.querySelector("#dexterity-stat");
  getCharDexterity.innerHTML = dexterity.score;

  let getCharConstitution = document.querySelector("#constitution-stat");
  getCharConstitution.innerHTML = constitution.score;

  let getCharCharisma = document.querySelector("#charisma-stat");
  getCharCharisma.innerHTML = charisma.score;

  let rollNewAttributes = document.querySelector("#generate-attributes");
  rollNewAttributes.addEventListener("click", generateNewAttributes, false);

  let confirmAttributes = document.querySelector("#confirm-attributes");
  confirmAttributes.addEventListener("click", confirmingAttributes, false);
}

function generateNewAttributes() {
  attributes[0].score = Math.ceil(Math.random() * 12) + 6;
  attributes[1].score = Math.ceil(Math.random() * 12) + 6;
  attributes[2].score = Math.ceil(Math.random() * 12) + 6;
  attributes[3].score = Math.ceil(Math.random() * 12) + 6;
  attributes[4].score = Math.ceil(Math.random() * 12) + 6;
  attributes[5].score = Math.ceil(Math.random() * 12) + 6;

  let getCharStrength = document.querySelector("#strength-stat");
  getCharStrength.innerHTML = attributes[0].score;

  let getCharIntelligence = document.querySelector("#intelligence-stat");
  getCharIntelligence.innerHTML = attributes[1].score;

  let getCharWisdom = document.querySelector("#wisdom-stat");
  getCharWisdom.innerHTML = attributes[2].score;

  let getCharDexterity = document.querySelector("#dexterity-stat");
  getCharDexterity.innerHTML = attributes[3].score;

  let getCharConstitution = document.querySelector("#constitution-stat");
  getCharConstitution.innerHTML = attributes[4].score;

  let getCharCharisma = document.querySelector("#charisma-stat");
  getCharCharisma.innerHTML = attributes[5].score;

  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].score === 3) {
      attributes[i].adjustment = -3;
    } else if (attributes[i].score === 4 || attributes[i].score === 5) {
      attributes[i].adjustment = -2;
    } else if (
      attributes[i].score === 6 ||
      attributes[i].score === 7 ||
      attributes[i].score === 8
    ) {
      attributes[i].adjustment = -1;
    } else if (attributes[i].score > 8 && attributes[i].score < 13) {
      attributes[i].adjustment = 0;
    } else if (attributes[i].score > 12 && attributes[i].score < 16) {
      attributes[i].adjustment = 1;
    } else if (attributes[i].score > 15 && attributes[i].score < 18) {
      attributes[i].adjustment = 2;
    } else if (attributes[i].score === 18) {
      attributes[i].adjustment = 3;
    }
  }

  let getCharStrengthAdj = document.querySelector("#strength-stat-adjustment");
  if (attributes[0].adjustment > 0) {
    getCharStrengthAdj.innerHTML = `+${attributes[0].adjustment}`;
  } else {
    getCharStrengthAdj.innerHTML = attributes[0].adjustment;
  }

  let getCharIntelligenceAdj = document.querySelector(
    "#intelligence-stat-adjustment"
  );
  if (attributes[1].adjustment > 0) {
    getCharIntelligenceAdj.innerHTML = `+${attributes[1].adjustment}`;
  } else {
    getCharIntelligenceAdj.innerHTML = attributes[1].adjustment;
  }

  let getCharWisdomAdj = document.querySelector("#wisdom-stat-adjustment");
  if (attributes[2].adjustment > 0) {
    getCharWisdomAdj.innerHTML = `+${attributes[2].adjustment}`;
  } else {
    getCharWisdomAdj.innerHTML = attributes[2].adjustment;
  }

  let getCharDexterityAdj = document.querySelector(
    "#dexterity-stat-adjustment"
  );
  if (attributes[3].adjustment > 0) {
    getCharDexterityAdj.innerHTML = `+${attributes[3].adjustment}`;
  } else {
    getCharDexterityAdj.innerHTML = attributes[3].adjustment;
  }

  let getCharConstitutionAdj = document.querySelector(
    "#constitution-stat-adjustment"
  );
  if (attributes[4].adjustment > 0) {
    getCharConstitutionAdj.innerHTML = `+${attributes[4].adjustment}`;
  } else {
    getCharConstitutionAdj.innerHTML = attributes[4].adjustment;
  }

  let getCharCharismaAdj = document.querySelector("#charisma-stat-adjustment");
  if (attributes[5].adjustment > 0) {
    getCharCharismaAdj.innerHTML = `+${attributes[5].adjustment}`;
  } else {
    getCharCharismaAdj.innerHTML = attributes[5].adjustment;
  }
}

function confirmingAttributes() {
  window.scrollTo(0, 0);
  let rollNewAttributes = document.querySelector("#generate-attributes");

  let confirmAttributes = document.querySelector("#confirm-attributes");

  rollNewAttributes.style.pointerEvents = "none";
  rollNewAttributes.style.cursor = "not-allowed";
  rollNewAttributes.style.disabled = true;
  rollNewAttributes.style.opacity = 0.5;

  confirmAttributes.style.pointerEvents = "none";
  confirmAttributes.style.cursor = "not-allowed";
  confirmAttributes.style.disabled = true;
  confirmAttributes.style.opacity = 0.5;

  finalCharacter.attributes = attributes;

  let changeDialogue = document.querySelector("#dialogue");
  changeDialogue.innerHTML = `
    <p>You have successfully selected your attributes. Now select an Alignment.</p><br>
    <div id="alignment-container"> 
        <div class="alignment-item" id="alignment-selection-container">
            <div id="lawful-container-item" class="alignment-container-item">
                <input type="radio" class="alignment-radio" name="alignment" value="lawful" id="lawful" checked="checked" autofocus/>
                <label for ="lawful" class="alignment-label">Lawful</label>
            </div>
            <div id="neutral-container-item" class="alignment-container-item">
                <input type="radio"  class="alignment-radio" name="alignment" value="neutral" id="neutral" />
                <label for="neutral" class="alignment-label">Neutral</label>
            </div>
            <div id="chaotic-container-item" class="alignment-container-item">
                <input type="radio"  class="alignment-radio" name="alignment" value="chaotic" id="chaotic" />
                <label for="chaotic" class="alignment-label">Chaotic</label>
            </div>
        </div>
        
        <div class="alignment-item" id="alignment-description-container">
            <div id="lawful-description" class="alignment-description">Lawful characters believe that everything should follow an order, and that obeying rules is the natural way of life. 
            Lawful creatures will try to tell the truth, obey laws, and care about all things. Lawful characters always try to keep their promises. They will try to obey laws as long as 
            such laws are fair and just. If a choice must be made between the benefit of the group or an individual, a Lawful character will usually choose the group.
            </div>

            <div id="neutral-description" class="alignement-description hidden no-display">Neutral characters believe that the world is a balance between Law and Chaos. It is important that neither side get
            too much power and upset this balance. The individual is important, but so it the group; the two sides must work together. A Neutral character is most interested in personal
            survival. Such characters believe in their own wits and abilities rather than luck.
            </div>

            <div id="chaotic-description" class="alignment-description hidden no-display">Chaotic characters are the opposite of Lawful characters. They believe that life is random, and that chance and 
            luck rule the world. Everything happens by accident and nothing can be predicted. Laws are made to be broken, as long as a person can get away with it. It is not important to 
            keep promises, and lying and telling the truth are both useful. To a Chaotic creature, the individual is the most important of all things. Selfishness is the normal way of 
            life, and the group is not important.
            </div>    
        </div>
        <button id="beginAdventure" class="alignment-description">Continue</button>
    </div>
    `;

  let lawfulSelected = document.querySelector("#lawful");
  lawfulSelected.checked = true;
  finalCharacter.alignment = "Lawful";

  let neutralSelected = document.querySelector("#neutral");
  let chaoticSelected = document.querySelector("#chaotic");

  lawfulSelected.addEventListener("click", updateAlignmentDescription, false);
  neutralSelected.addEventListener("click", updateAlignmentDescription, false);
  chaoticSelected.addEventListener("click", updateAlignmentDescription, false);

  let beginningAdventure = document.querySelector("#beginAdventure");
  beginningAdventure.addEventListener("click", startGame, false);
}

function updateAlignmentDescription() {
  let selectedAlignment = document.querySelector(
    'input[name="alignment"]:checked'
  ).value;

  let updateAlignmentDescElement = document.querySelector(
    "#alignment-description-container"
  );
  if (selectedAlignment === "lawful") {
    finalCharacter.alignment = "Lawful";
    updateAlignmentDescElement.innerHTML = `
      Lawful characters believe that everything should follow an order, and that obeying rules is the natural way of life. 
      Lawful creatures will try to tell the truth, obey laws, and care about all things. Lawful characters always try to keep their promises. They will try to obey laws as long as 
      such laws are fair and just. If a choice must be made between the benefit of the group or an individual, a Lawful character will usually choose the group.
        `;
  } else if (selectedAlignment === "neutral") {
    finalCharacter.alignment = "Neutral";
    updateAlignmentDescElement.innerHTML = `
      Neutral characters believe that the world is a balance between Law and Chaos. It is important that neither side get
      too much power and upset this balance. The individual is important, but so it the group; the two sides must work together. A Neutral character is most interested in personal
      survival. Such characters believe in their own wits and abilities rather than luck.
        `;
  } else if (selectedAlignment === "chaotic") {
    finalCharacter.alignment = "Chaotic";
    updateAlignmentDescElement.innerHTML = `
      Chaotic characters are the opposite of Lawful characters. They believe that life is random, and that chance and 
      luck rule the world. Everything happens by accident and nothing can be predicted. Laws are made to be broken, as long as a person can get away with it. It is not important to 
      keep promises, and lying and telling the truth are both useful. To a Chaotic creature, the individual is the most important of all things. Selfishness is the normal way of 
      life, and the group is not important.
            `;
  }
}

//TEST FUNCTION TO START GAME - creates player info
function startGame() {
  
  $("#character-info").css({margin: "0px"}).animate({width: "98%", height: "0px"}, 300).slideDown(300).next().dequeue();
  window.scrollTo(0, 0);
  let strengthPlusAdjustment;
  let intelligencePlusAdjustment;
  let wisdomPlusAdjustment;
  let dexterityPlusAdjustment;
  let constitutionPlusAdjustment;
  let charismaPlusAdjustment;

  let maximizeMonsterInfo = document.querySelector("#monster-info");
  maximizeMonsterInfo.classList.remove("minimized");

  let maximizeCanvasAreaMonster = document.querySelector(
    "#canvas-area-monster"
  );
  maximizeCanvasAreaMonster.classList.remove("minimized");

  let maximizeCanvas3 = document.querySelector("#canvas3");
  maximizeCanvas3.classList.remove("minimized");

  let maximizeContainer2 = document.querySelector("#container-2");
  maximizeContainer2.classList.remove("minimized");

  let maximizePlayerSheet = document.querySelector("#player-sheet");
  maximizePlayerSheet.classList.remove("minimized");

  let maximizeMap = document.querySelector("#map");
  maximizeMap.classList.remove("minimized");

  let minimizeHeader = document.querySelector("#header");
  minimizeHeader.classList.add("minimized");

  let maximizeCanvas4 = document.querySelector("#canvas4");
  maximizeCanvas4.classList.remove("minimized");

  if (attributes[0].adjustment > 0) {
    strengthPlusAdjustment = `+${attributes[0].adjustment}`;
  } else {
    strengthPlusAdjustment = attributes[0].adjustment;
  }

  if (attributes[1].adjustment > 0) {
    intelligencePlusAdjustment = `+${attributes[1].adjustment}`;
  } else {
    intelligencePlusAdjustment = attributes[1].adjustment;
  }

  if (attributes[2].adjustment > 0) {
    wisdomPlusAdjustment = `+${attributes[2].adjustment}`;
  } else {
    wisdomPlusAdjustment = attributes[2].adjustment;
  }

  if (attributes[3].adjustment > 0) {
    dexterityPlusAdjustment = `+${attributes[3].adjustment}`;
  } else {
    dexterityPlusAdjustment = attributes[3].adjustment;
  }

  if (attributes[4].adjustment > 0) {
    constitutionPlusAdjustment = `+${attributes[4].adjustment}`;
  } else {
    constitutionPlusAdjustment = attributes[4].adjustment;
  }

  if (attributes[5].adjustment > 0) {
    charismaPlusAdjustment = `+${attributes[5].adjustment}`;
  } else {
    charismaPlusAdjustment = attributes[5].adjustment;
  }

  let newStartGameDialogue = document.querySelector("#character-info");
  newStartGameDialogue.style.backgroundImage = "none";

  newStartGameDialogue.innerHTML = `
        <div id='character-stats'>
          <fieldset class='char-info-module'>
            <legend class='player-dashboard'>Player Data</legend>

              <h4 id='char-name' class='char-info-label'>Name: <span class="character-display-info">${submittedCharName}</span></h4>

              <h4 id='char-specialty' class='char-info-label'>Specialty: <span class="character-display-info">${
                finalCharacter.specialty.name
              }</span></h4>

              <h4 id='char-level' class='char-info-label'>Level: <span class="character-display-info">${
                finalCharacter.specialty.characterLevel.level.level
              }</span></h4>


             
                
              <h4 id='char-armor' class='char-info-label'>Armor: 
                <span class="armor-tooltip">
                  <span class="character-display-info">${
                    finalCharacter.armor.name
                  }</span>
                  <span class="armor-tooltiptext">Armor Class: ${
                    finalCharacter.armor.armorClass
                  }</span>
                </span>
              </h4> 

              <h4 id='char-weapon' class='char-info-label'>Weapon: 
                <span class="weapon-tooltip">
                  <span class="character-display-info">${
                    finalCharacter.weapon.name
                  }</span>
                  <span class="weapon-tooltiptext">Damage: ${
                    finalCharacter.weapon.damage
                  }</span>
                </span>
              </h4>           

                                        
              
          </fieldset>
        </div>

        <div id='character-attributes'>
          <fieldset class='char-info-module-attributes'>
              <legend class='player-dashboard'>Attributes</legend>
              <h4 id='char-strength' class='char-info-label'>
                <span class='character-display-attributes-str'>${finalCharacter.attributes[0].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-str'>${
                  finalCharacter.attributes[0].score
                }</span>
                <span class='character-display-attributes-scores-adj-str'>${strengthPlusAdjustment}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                  <circle class="circle-str-background" cx="50" cy="50" r="30"/>
                  <circle class="circle-str" cx="50" cy="50" r="30" stroke-dashoffset="${strength.dashArrayAdj()}"/>
                  
                  </svg>

              </h4>
                <h4 id='char-intelligence' class='char-info-label'>
                <span class='character-display-attributes-int'>${finalCharacter.attributes[1].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-int'>${
                  finalCharacter.attributes[1].score
                }</span>
                <span class='character-display-attributes-scores-adj-int'>${intelligencePlusAdjustment}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                  <circle class="circle-int-background" cx="50" cy="50" r="30"/>
                  <circle class="circle-int" cx="50" cy="50" r="30" stroke-dashoffset="${intelligence.dashArrayAdj()}"/>
                  
                </svg>
              </h4>
              <h4 id='char-wisdom' class='char-info-label'>
                <span class='character-display-attributes-wis'>${finalCharacter.attributes[2].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-wis'>${
                  finalCharacter.attributes[2].score
                }</span>
                <span class='character-display-attributes-scores-adj-wis'>${wisdomPlusAdjustment}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                <circle class="circle-wis-background" cx="50" cy="50" r="30"/>
                <circle class="circle-wis" cx="50" cy="50" r="30" stroke-dashoffset="${wisdom.dashArrayAdj()}"/>
                
                </svg>
              </h4>
              <h4 id='char-dexterity' class='char-info-label'>
                <span class='character-display-attributes-dex'>${finalCharacter.attributes[3].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-dex'>${
                  finalCharacter.attributes[3].score
                }</span>
                <span class='character-display-attributes-scores-adj-dex'>${dexterityPlusAdjustment}</span>
                
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">                  
                  <circle class="circle-dex-background" cx="50" cy="50" r="30"/>
                  <circle class="circle-dex" cx="50" cy="50" r="30" stroke-dashoffset="${dexterity.dashArrayAdj()}"/>
                </svg>                

              </h4>
              <h4 id='char-constitution' class='char-info-label'>
                <span class='character-display-attributes-con'>${finalCharacter.attributes[4].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-con'>${
                  finalCharacter.attributes[4].score
                }</span>
                <span class='character-display-attributes-scores-adj-con'>${constitutionPlusAdjustment}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">                
                <circle class="circle-con-background" cx="50" cy="50" r="30"/>
                <circle class="circle-con" cx="50" cy="50" r="30" stroke-dashoffset="${constitution.dashArrayAdj()}"/>
              </svg>
              </h4>
              <h4 id='char-charisma' class='char-info-label'>
                <span class='character-display-attributes-cha'>${finalCharacter.attributes[5].name.slice(
                  0,
                  3
                )}</span>
                <span class='character-display-attributes-scores-cha'>${
                  finalCharacter.attributes[5].score
                }</span>
                <span class='character-display-attributes-scores-adj-cha'>${charismaPlusAdjustment}</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
                
                               
                <circle class="circle-cha-background" cx="50" cy="50" r="30"/>
                <circle class="circle-cha" cx="50" cy="50" r="30" stroke-dashoffset="${charisma.dashArrayAdj()}"/>
                
                </svg>
              </h4>
          </fieldset>
        </div>        
        
        <div id="character-canvas">
          <fieldset class= 'canvas-info-module-player'>
            <legend class='canvas-dashboard'>Player</legend>
            <canvas id="canvas2" height="100" width="100"></canvas>
          </fieldset>
        </div>

        <div id="character-statuses">
          <fieldset class = "status-info-module-player">
            <img class="container-item protection-from-evil-status hide-status"></img>
            <img src="/images/gui/statuses/shield-status.png" class="container-item shield-status hide-status"></img>
            <img src="/images/gui/statuses/invisibility-status.png" class="container-item invisibility-status hide-status"></img>
            <img src="/images/gui/statuses/mirror-image-status.png" class="container-item mirror-image-status hide-status"></img>
            <img class="container-item detect-invisibility-status hide-status"></img>
            <img class="container-item fly-status hide-status"></img>
            <img class="container-item haste-status hide-status"></img>
            <img class="container-item invisibility-10-status hide-status"></img>
            <img class="container-item protection-from-evil-10-status hide-status"></img>
            <img class="container-item protection-from-missiles-status hide-status"></img>
            <img class="container-item hide-status"></img>
            <img class="container-item hide-status"></img>
            <legend class="statuses-dashboard">Statuses</legend>              
          </fieldset>
        </div>

        <div id="character-saving-throws">
          <fieldset class = "saves-info-module-player">
            <legend class="saves-dashboard">Saves</legend>
              <h4 class="saving-throws">Poison or Death Ray: <span class="saving-throw-score">${
                finalCharacter.specialty.characterLevel.level.savingThrows[
                  "Poison or Death Ray"
                ]
              }</span></h4>
              <h4 class="saving-throws">Magic Wand: <span class="saving-throw-score">${
                finalCharacter.specialty.characterLevel.level.savingThrows[
                  "Magic Wand"
                ]
              }</span></h4>
              <h4 class="saving-throws">Stone or Paralysis: <span class="saving-throw-score">${
                finalCharacter.specialty.characterLevel.level.savingThrows[
                  "Turn to Stone or Paralysis"
                ]
              }</span></h4>
              <h4 class="saving-throws">Dragon Breath: <span class="saving-throw-score">${
                finalCharacter.specialty.characterLevel.level.savingThrows[
                  "Dragon Breath"
                ]
              }</span></h4>
              <h4 class="saving-throws">Spells or Magic Staff: <span class="saving-throw-score">${
                finalCharacter.specialty.characterLevel.level.savingThrows[
                  "Spells or Magic Staff"
                ]
              }</span></h4>
          </fieldset>
        </div>

      </div>        
      
       <div id="character-afflictions">
          <fieldset class = "afflictions-info-module-player">
            <legend class="afflictions-dashboard">Afflictions</legend>
            
            </fieldset>
        </div>

        <div id="character-menu">
          <fieldset class = "menu-info-module-player">
            <legend class="menu-dashboard">Menu</legend>
            
            </fieldset>
        </div>

        <div id="character-hitpoints">
          <fieldset class = "hitpoints-info-module-player hp-grid-container">
            <legend class="hitpoints-dashboard">Hitpoints</legend>
              </fieldset>
            <div class="ac-guage">
              <div class="ac-guage-value">${
                finalCharacter.armorClass -
                finalCharacter.attributes[3].adjustment
              } 
              </div>  
              
              <div class="ac-guage-text">AC
              </div>
            
              <svg class="circle-ac-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">                  
                <circle class="circle-ac-background"/>
                <circle class="circle-ac"/>
              </svg>
            </div>

            <div class="hitpoints-guage">
              <div class="hitpoint-guage-value-current">
                ${
                  finalCharacter.specialty.healthPoints +
                    finalCharacter.attributes[4].adjustment <=
                  0
                    ? 0
                    : finalCharacter.specialty.healthPoints +
                      finalCharacter.attributes[4].adjustment
                }
              

              </div>  
              <div class="hitpoint-guage-value-total">${
                finalCharacter.specialty.healthPoints +
                  finalCharacter.attributes[4].adjustment <=
                0
                  ? 0
                  : finalCharacter.specialty.healthPoints +
                    finalCharacter.attributes[4].adjustment
              }</div>                            

              
              <svg  class="circle-hp-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">                  
                <circle class="circle-hitpoints-background"/>
                <circle class="circle-hitpoints"/>
              </svg>
            </div>

            <div class="xp-guage">
              <div class="xp-guage-value-current">${
                finalCharacter.specialty.characterExperience
              }</div>  
                <div class="xp-guage-value-total">${
                  finalCharacter.specialty.characterLevel.level.maxXP
                }</div>
                <svg class="circle-xp-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">                  
                  <circle class="circle-xp-background"/>
                  <circle class="circle-xp"/>
                </svg>
            </div>            
          
        </div>


        `;
  console.log(finalCharacter);

  let showInventory = () => {
    let accumulator = "";

    for (let i = 0; i < finalCharacter.inventory.length; i++) {
      accumulator += `${finalCharacter.inventory[i].name} <br>`;
    }
    return accumulator;
  };

  let updatedInventory = document.querySelector("#normal-equipment-list");
  updatedInventory.innerHTML = `${showInventory()}`;

  let updateTreasure = document.querySelector(".char-coins");
  updateTreasure.innerHTML = `
    <span id="char-gp" class="char-treasure">Gold: </span><span">${finalCharacter.treasure.gold.quantity}</span></br>
    <span id="char-ep" class="char-treasure">Electrum: </span><span>${finalCharacter.treasure.electrum.quantity}</span></br>
    <span id="char-sp" class="char-treasure">Silver: </span><span>${finalCharacter.treasure.silver.quantity}</span></br>
    <span id="char-cp" class="char-treasure">Copper: </span><span>${finalCharacter.treasure.copper.quantity}</span></br>
    <span id="char-gems" class="char-treasure">Gems: </span><span>${finalCharacter.treasure.gems.quantity}</span></br>
  `;

  showInventory();
  render();

  let chapterOne = document.querySelector("#dialogue");
  chapterOne.innerHTML = `
        <p>After a good night's sleep, you wake up in your room in the Blue Blade Inn. The inn is located in Gryphon's Keep, a small, 
        run-down fortress town built in the old days before the Golden Age. As your eyes open and you look around, you observe 
        your small, but well kept room. You chose this inn because you know the innkeeper, Raynard Helmsforger, is a meticulous (well-organized) man 
        and he understands the importance of rest for someone like you. Raynard himself was an adventurer in his youth. At that time, 
        he was lean, agile, and had the dexterity (relfexes) of a panther. Looking at him now, you wouldn't necessarily know that, but 
        his reputation precedes him, and everyone from your village of Everglade Forest knows his past.</p>
        
        <p>You sit up and stretch - feeling good from a full night's sleep. You close your eyes, take a deep breath in, and then 
        exhale. As you breath out, you remember the training your father taught you - breathe in....hold...exhale...pause. This simple
        act, as you know, allows you to focus your thoughts and dispel any doubt and negativity you may have wandering in your mind. You
        feel the fresh air coming in and the exhale of any wasted thoughts. This focus and training is part of what has allowed you to 
        act so effective and swiftly. During training, you noticed how the others would let the worry and doubt consume them...and ultimately
        prevent them from becoming focused, patient, and ready.  </p>
        
        <p>As you conduct your breathing Kata, you remember your parents, your brother, Kiyan, and your sister, Avalera. You feel as though
        everything you've done in life has taken you up to this point. Then, with your clear and focused mind, you begin 
        preparing and packing your things.</p>
        
        <p>What is your Class?</p>
        
        <input type = "radio"  class="class-radio" name="selected-specialty" value="fighter" id="fighter"/>         
        <label for=  "fighter" class="class-label">Fighter</label>             
        
        <input type = "radio" class="class-radio" name="selected-specialty" value="mage" id="mage"/> 
        <label for=  "mage" class="class-label">Magic-User</label>
        
        <input type = "radio" class="class-radio" name="selected-specialty" value="thief" id="thief"/> 
        <label for=  "thief" class="class-label">Thief</label>
        
        <input type = "radio" class="class-radio" name="selected-specialty" value="dwarf" id="dwarf"/> 
        <label for=  "dwarf" class="class-label">Dwarf</label>
        
        <input type = "radio" class="class-radio" name="selected-specialty" value="elf" id="elf"/> 
        <label for=  "elf" class="class-label">Elf</label>
        
        <input type = "radio" class="class-radio" name="selected-specialty" value="halfling" id="halfling"/> 
        <label for=  "halfling" class="class-label">Halfling</label>
       
        <input type = "radio" class="class-radio" name="selected-specialty" value="cleric" id="cleric"/>
        <label for = "cleric" class="class-label">Cleric</label>

        <input type = "radio" class="class-radio dragonwarrior" name="selected-specialty" value="dragonwarrior" />
        <label for = "dragonwarrior" id="dragonwarrior"></label>
        </p>`;

  let submittingCharSpecialtyFighter = document.querySelector("#fighter");
  submittingCharSpecialtyFighter.addEventListener(
    "click",
    logCharSpecialty,
    false
  );

  let submittingCharSpecialtyMage = document.querySelector("#mage");
  submittingCharSpecialtyMage.addEventListener(
    "click",
    logCharSpecialty,
    false
  );

  let submittingCharSpecialtyDragon = document.querySelector(".dragonwarrior");
  submittingCharSpecialtyDragon.addEventListener(
    "click",
    logCharSpecialty,
    false
  );

  let submittingCharSpecialtyCleric = document.querySelector("#cleric");
  submittingCharSpecialtyCleric.addEventListener(
    "click",
    logCharSpecialty,
    false
  );

  let submittingCharSpecialtyThief = document.querySelector("#thief");
  submittingCharSpecialtyThief.addEventListener(
    "click",
    logCharSpecialty,
    false
  );

  let submittingCharSpecialtyElf = document.querySelector("#elf");
  submittingCharSpecialtyElf.addEventListener("click", logCharSpecialty, false);

  let submittingCharSpecialtyHalfling = document.querySelector("#halfling");
  submittingCharSpecialtyHalfling.addEventListener(
    "click",
    logCharSpecialty,
    false
  );

  let submittingCharSpecialtyDwarf = document.querySelector("#dwarf");
  submittingCharSpecialtyDwarf.addEventListener(
    "click",
    logCharSpecialty,
    false
  );
}

//updates character attributes
//return out finalCharacter?
function logCharSpecialty() {
  selectedSpecialty = document.querySelector(
    'input[name="selected-specialty"]:checked'
  ).value;
  if (selectedSpecialty === "fighter") {
    finalCharacter.name = submittedCharName;
    finalCharacter.specialty = warrior;
    finalCharacter.armor = leatherArmor;
    finalCharacter.weapon = shortSword;
    finalCharacter.inventory = [];
    finalCharacter.enchantedItem = noItem;
    finalCharacter.characterImage = 2;
    finalCharacter.armorClass =
      finalCharacter.armor.armorClass - finalCharacter.attributes[3].adjustment;
    finalCharacter.characterUpdate();
  } else if (selectedSpecialty === "mage") {
    finalCharacter.name = submittedCharName;
    finalCharacter.specialty = highMage;
    finalCharacter.armor = robes;
    finalCharacter.weapon = fists;
    finalCharacter.inventory = [];
    finalCharacter.enchantedItem = noItem;
    finalCharacter.characterImage = 3;
    finalCharacter.armorClass =
      finalCharacter.armor.armorClass - finalCharacter.attributes[3].adjustment;

    finalCharacter.specialty.characterLevel.specialtySkills[
      "First Level Mage Spells"
    ] = [];
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Second Level Mage Spells"
    ] = [];
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Third Level Mage Spells"
    ] = [];
    finalCharacter.characterUpdate();
  } else if (selectedSpecialty === "dragonwarrior") {
    finalCharacter.name = submittedCharName;
    finalCharacter.specialty = dragonWarrior;
    finalCharacter.armor = obsidianPlateMail;
    finalCharacter.weapon = obsidianSword;
    finalCharacter.inventory = [];
    finalCharacter.enchantedItem = eloisesRing;
    finalCharacter.characterImage = 0;
    finalCharacter.armorClass =
      finalCharacter.armor.armorClass - finalCharacter.attributes[3].adjustment;

    finalCharacter.specialty.characterLevel.specialtySkills[
      "First Level Mage Spells"
    ] = [];
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Second Level Mage Spells"
    ] = [];
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Third Level Mage Spells"
    ] = [];
    finalCharacter.characterUpdate();
  } else if (selectedSpecialty === "thief") {
    finalCharacter.name = submittedCharName;
    finalCharacter.specialty = thief;
    finalCharacter.armor = leatherArmor;
    finalCharacter.weapon = shortBow;
    finalCharacter.inventory = [];
    finalCharacter.enchantedItem = noItem;
    finalCharacter.characterImage = 1;
    finalCharacter.armorClass =
      finalCharacter.armor.armorClass - finalCharacter.attributes[3].adjustment;

    finalCharacter.characterUpdate();
  } else if (selectedSpecialty === "cleric") {
    finalCharacter.name = submittedCharName;
    finalCharacter.specialty = cleric;
    finalCharacter.armor = leatherArmor;
    finalCharacter.weapon = mace;
    finalCharacter.inventory = [];
    finalCharacter.enchantedItem = noItem;
    finalCharacter.characterImage = 4;
    finalCharacter.armorClass =
      finalCharacter.armor.armorClass - finalCharacter.attributes[3].adjustment;

    finalCharacter.characterUpdate();
  } else if (selectedSpecialty === "dwarf") {
    finalCharacter.name = submittedCharName;
    finalCharacter.specialty = dwarf;
    finalCharacter.armor = leatherArmor;
    finalCharacter.weapon = normalSword;
    finalCharacter.inventory = [];
    finalCharacter.enchantedItem = noItem;
    finalCharacter.characterImage = 6;
    finalCharacter.armorClass =
      finalCharacter.armor.armorClass - finalCharacter.attributes[3].adjustment;

    finalCharacter.characterUpdate();
  } else if (selectedSpecialty === "elf") {
    finalCharacter.name = submittedCharName;
    finalCharacter.specialty = elf;
    finalCharacter.armor = leatherArmor;
    finalCharacter.weapon = shortBow;
    finalCharacter.inventory = [];
    finalCharacter.enchantedItem = noItem;
    finalCharacter.characterImage = 5;
    finalCharacter.armorClass =
      finalCharacter.armor.armorClass - finalCharacter.attributes[3].adjustment;

    finalCharacter.specialty.characterLevel.specialtySkills[
      "First Level Mage Spells"
    ] = [];
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Second Level Mage Spells"
    ] = [];
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Third Level Mage Spells"
    ] = [];
    finalCharacter.characterUpdate();
  } else if (selectedSpecialty === "halfling") {
    finalCharacter.name = submittedCharName;
    finalCharacter.specialty = halfling;
    finalCharacter.armor = leatherArmor;
    finalCharacter.weapon = shortBow;
    finalCharacter.inventory = [];
    finalCharacter.enchantedItem = noItem;
    finalCharacter.characterImage = 7;
    finalCharacter.armorClass =
      finalCharacter.armor.armorClass - finalCharacter.attributes[3].adjustment;

    finalCharacter.characterUpdate();
  } else {
  }
  beginJourney();
}

let submittedCharName = document.querySelector("#submit-name");
submittedCharName.addEventListener("click", checkUsername, false);

//confirms your specialty and continues the gameplay

function beginJourney() {
  var readyBeginJourney = document.querySelector("#dialogue");
  let readyBeginJourneyButton = document.querySelector("#dialogue #ready");
  if (readyBeginJourneyButton === null) {
    let createReadyButton = document.createElement("input");
    createReadyButton.type = "submit";
    createReadyButton.value = "Confirm";
    createReadyButton.id = "ready";
    readyBeginJourney.appendChild(createReadyButton);
    var beginningGame = document.querySelector("#ready");
    beginningGame.addEventListener("click", beginChapterTwo, false);
  } else {
    return;
  }
}

//CHAPTER TWO

function beginChapterTwo() {
  if (
    finalCharacter.specialty.name === "High Mage" ||
    finalCharacter.specialty.name === "Elf"
  ) {
    pickMageSpells();
  } else if (finalCharacter.specialty.name === "Cleric") {
    pickClericSpells();
  } else {
    showInventory();

    let JSONcharacter = JSON.stringify(finalCharacter);
  }
  finalCharacter.specialty.healthPoints =
    finalCharacter.specialty.healthPoints +
    finalCharacter.attributes[4].adjustment;
  finalCharacter.specialty.maxHealthPoints =
    finalCharacter.specialty.maxHealthPoints +
    finalCharacter.attributes[4].adjustment;

  let chapterTwo = document.querySelector("#dialogue");
  chapterTwo.innerHTML = `
    <p>As you pack up your belongings, you know your ${finalCharacter.specialty.name} training will serve you well. You pick up your ${finalCharacter.weapon.name} and slide your 
    hand along it. You remember how much time and effort you put into practicing to become proficient (skilled) with it. You don (put on) your ${finalCharacter.armor.name} and 
    and the smell brings you back to your training, remembering what it feels like when you get hit, and how it feels on your body when you strike. These familiar
    memories make you feel at home and bring a reassurance to your mind about what you are about to do. Others have left on the same journey, and none have returned.  
    Are you better than them? Will you make it? Or will you share their fate? As you complete preparing, you finish a small bit of tea and some bread with cheese you prepared 
    for breakfast, knowing you must have a good breakfast for the long walk ahead of you.</p>
    <p>After finishing the last of your breakfast, you head down to the main floor of the inn. You see the innkeeper, Raynard, sitting at the counter. You've already paid for 
    one night of sleep, would you like to speak with Raynard on your way out?</p> 
    <input type="submit" id="talk-raynard-yes" value="Yes"><input type="submit" id="talk-raynard-no" value="No"><br>    
    `;

  // let castingSpell = document.querySelector('#cast-spell');
  // castingSpell.addEventListener('click', finalCharacter.specialty.characterLevel.specialtySkills.mageFirstLevelSpells.magicMissile.castingEffect, false);

  var talkToRaynardYes = document.querySelector("#talk-raynard-yes");
  talkToRaynardYes.addEventListener("click", talkToRaynard, false);

  var talkToRaynardNo = document.querySelector("#talk-raynard-no");
  talkToRaynardNo.addEventListener("click", startChapterThreeOne, false);
}

//populating inventory

function showInventory() {
  alert("Purchase your inventory");
  window.scrollTo(0, 0);

  let totalItems = [
    torch,
    backPack,
    holySymbol,
    holyWater,
    smallHammer,
    ironSpikes,
    garlic,
    grapplingHook,
    lantern,
    mirrorHandSized,
    oil,
    poleWooden,
    rationsIron,
    rationsStandard,
    rope,
    sackSmall,
    sackLarge,
    stakesAndMallet,
    thievesTools,
    tinderBox,
    waterskin,
    wine,
    wolfsbane,
  ];

  //creating items to populate into supply page
  for (let i = 0; i < totalItems.length; i++) {
    //create <li>
    let newItemList = document.createElement("li");

    //get parent <ul>
    let getULInventory = document.querySelector(".inventory-list");

    //append <li> to the <ul>
    getULInventory.appendChild(newItemList);

    //get entire <li> node list
    let getNewLI = document.querySelectorAll(".inventory-list li");

    //create variable to use as an added class
    let classifiedName = totalItems[i].name.split(" ").join("-").toLowerCase();
    let commaRemovedClassifiedName = classifiedName.split(",").join("");
    let parensRemovedClassifiedName = commaRemovedClassifiedName
      .split(")")
      .join("");
    let parensRightRemoved = parensRemovedClassifiedName.split("(").join("");
    let apostropheRemoved = parensRightRemoved.split("'").join("");

    //add newly created class to the <li> node list
    getNewLI[i].classList.add(`item-${apostropheRemoved}`);
    getNewLI[i].classList.add("inventory-list-item");
    getNewLI[i].classList.add("item-tooltip"); //adding class to start lining up tooltips
    getNewLI[i].setAttribute("data-value", totalItems[i].dataName);

    let updateNewLI = document.querySelectorAll(".inventory-list li");
    let addNewLITextContent = document.createTextNode(
      `${totalItems[i].name} (${totalItems[i].cost} gp)`
    );
    updateNewLI[i].appendChild(addNewLITextContent);
  }

  let updateNewLIInput = document.querySelectorAll(".inventory-list li");

  //creating increase and decrease buttons (number input type doesn't work because you can hold it down)

  for (let j = 0; j < updateNewLIInput.length; j++) {
    let buttonClassifiedName = supplies[j].name
      .split(" ")
      .join("-")
      .toLowerCase();
    let buttonCommaRemovedClassifiedName = buttonClassifiedName
      .split(",")
      .join("");
    let buttonParensRemovedClassifiedName = buttonCommaRemovedClassifiedName
      .split(")")
      .join("");
    let buttonParensRightRemoved = buttonParensRemovedClassifiedName
      .split("(")
      .join("");
    let buttonApostropheRemoved = buttonParensRightRemoved.split("'").join("");

    let inputListUl = document.querySelector("input-list");

    let inputItemList = document.querySelectorAll(".inventory-list-item");
    let suppliesName = supplies[j].name;
    let costName = supplies[j].cost;

    let addNewButtonIncrease = document.createElement("button");

    addNewButtonIncrease.setAttribute(
      "class",
      `quantity-increase quantity-change`
    );
    addNewButtonIncrease.setAttribute(
      "data-name",
      `increase-${buttonApostropheRemoved}`
    );
    addNewButtonIncrease.setAttribute(
      "data-link",
      `change-qty-${buttonApostropheRemoved}`
    );
    addNewButtonIncrease.setAttribute("data-cost", costName);
    addNewButtonIncrease.textContent = "+";

    let addNewButtonDecrease = document.createElement("button");

    addNewButtonDecrease.setAttribute(
      "class",
      `quantity-decrease quantity-change`
    );
    addNewButtonDecrease.setAttribute(
      "data-name",
      `decrease-${buttonApostropheRemoved}`
    );
    addNewButtonDecrease.setAttribute(
      "data-link",
      `change-qty-${buttonApostropheRemoved}`
    );
    addNewButtonDecrease.setAttribute("data-cost", costName);
    addNewButtonDecrease.textContent = "-";

    inputItemList[j].prepend(addNewButtonIncrease);
    inputItemList[j].prepend(addNewButtonDecrease);

    let newItemQty = document.createElement("li");
    newItemQty.setAttribute("class", "current-item-qty");
    newItemQty.setAttribute(
      "data-link",
      `change-qty-${buttonApostropheRemoved}`
    );
    newItemQty.setAttribute("data-qty", 0);
    newItemQty.setAttribute("data-value", supplies[j].dataName);

    newItemQty.textContent = 0;

    //get parent <ul>
    let getQtyULInventory = document.querySelector(".input-list");

    //append <li> to the <ul>
    getQtyULInventory.appendChild(newItemQty);

    //get entire <li> node list
  }
  let getNewLIQty = document.querySelectorAll(".new-item-qty");

  for (let k = 0; k < getNewLIQty.length; k++) {
    getNewLIQty[k].textContent = 0;
  }

  let showInventory = document.querySelector(".hide-inventory-container");
  showInventory.classList.add("show-inventory-container");

  let selectingInputValues = document.querySelectorAll(".quantity-change");

  for (let k = 0; k < selectingInputValues.length; k++) {
    selectingInputValues[k].addEventListener(
      "click",
      function (e) {
        addingTotalInventoryCost(e);
      },
      false
    );
  }

  let totalGoldPieces = document.querySelector("#total-gold");
  totalGoldPieces.textContent = `${finalCharacter.treasure.gold.quantity}`;

  let availableGoldPieces = document.querySelector("#available-gold");
  availableGoldPieces.textContent = `${finalCharacter.treasure.gold.quantity}`;

  let submitBuyingItems = document.querySelector("#buy-items");
  submitBuyingItems.addEventListener(
    "click",
    function () {
      selectInventory(finalCharacter);
    },
    false
  );

  // selectInventory();
}

function addingTotalInventoryCost(e) {
  let maxGold = finalCharacter.treasure.gold.quantity;
  // let getValues = document.querySelectorAll('.current-item-qty');

  let getSiblingQty = document.querySelector(
    `li[data-link="${e.target.dataset.link}"]`
  );
  let retrievedDataLink = getSiblingQty.dataset.qty;
  let parsedRetrievedLink = parseInt(retrievedDataLink);

  // let siblingStep = parseInt(getSiblingQty.dataset.qty);

  if (e.target.classList.contains("quantity-increase")) {
    let parsedTargetCost = parseInt(e.target.dataset.cost);
    let updatedAvailableGold = document.querySelector("#available-gold");

    getSiblingQty.setAttribute("data-qty", parsedRetrievedLink + 1);

    updatedAvailableGold.textContent -= parsedTargetCost;

    getSiblingQty.textContent = `${parsedRetrievedLink + 1}`;

    if (
      e.target.classList.contains("quantity-increase") &&
      updatedAvailableGold.textContent < 0
    ) {
      alert("You don't have enough gold.");
      updatedAvailableGold.textContent =
        parseInt(updatedAvailableGold.textContent) + parsedTargetCost;
      getSiblingQty.setAttribute("data-qty", parsedRetrievedLink);
      getSiblingQty.textContent = parsedRetrievedLink;
    }
  }

  if (e.target.classList.contains("quantity-decrease")) {
    let parsedTargetCost = parseInt(e.target.dataset.cost);

    let updatedAvailableGold = document.querySelector("#available-gold");
    getSiblingQty.setAttribute("data-qty", parsedRetrievedLink - 1);
    let numberedUpdatedGold = updatedAvailableGold.textContent;
    let parsedUpdatedGold = Number(numberedUpdatedGold);

    let newTotal = Number(parsedUpdatedGold + parsedTargetCost);

    updatedAvailableGold.innerHTML = `<span id="available-gold">${newTotal}</span>`;

    getSiblingQty.textContent = `${parsedRetrievedLink - 1}`;

    let totalGoldPiecesContent = document.querySelector("#total-gold");
    let parsedTotalGold = Number(totalGoldPiecesContent.textContent);

    if (
      (e.target.classList.contains("quantity-decrease") &&
        newTotal > parsedTotalGold) ||
      retrievedDataLink - 1 < 0
    ) {
      updatedAvailableGold.textContent =
        parseInt(updatedAvailableGold.textContent) - parsedTargetCost;
      getSiblingQty.setAttribute("data-qty", parsedRetrievedLink);
      getSiblingQty.textContent = parsedRetrievedLink;
    }
  }

  let finalTreasureAmount = document.querySelector("#available-gold");
  finalCharacter.treasure.gold.quantity = parseInt(
    finalTreasureAmount.textContent
  );
}

function selectInventory(finalCharacter) {
  // finalCharacter.treasure = finalGold;
  window.scrollTo(0, 0);

  ///GETTING ENTIRE NODE LIST
  let purchasedSupplies = document.querySelectorAll(".current-item-qty"); //node list of all 23 items

  let x = 0;

  for (let i = 0; i < purchasedSupplies.length; i++) {
    //node list of all 23 items
    let updatedSuppliesName = purchasedSupplies[i].getAttribute("data-value");
    let parsedSuppliesValue = purchasedSupplies[i].getAttribute("data-qty");

    if (parsedSuppliesValue > 0) {
      //this is selecting only the items with a qty greater than 0

      finalCharacter.inventory.push(eval(updatedSuppliesName)); //this is correctly adding only the supply item that has a qty over 0, but the qty is not carrying over correctly
    }
  }

  //start adding inventory tooltips

  for (let i = 0; i < purchasedSupplies.length; i++) {
    let purchasedSuppliesValue2 = purchasedSupplies[i].getAttribute("data-qty"); //retrieves qty for all 23 node items

    if (purchasedSuppliesValue2[i] == 0) {
    } else {
      let addedItemSpan = document.createElement("span");

      //NEED TO ONLY GET THE ACTUAL PURCHASED ITEMS, NOT ENTIRE NODE LIST OF ALL ITEMS

      let purchasedSuppliesValue3 =
        purchasedSupplies[i].getAttribute("data-qty");

      if (purchasedSuppliesValue3 > 0) {
        finalCharacter.inventory[x].qty = purchasedSuppliesValue3;

        addedItemSpan.innerHTML = `<span class="supply-item-tooltiptext">Desc: ${finalCharacter.inventory[x].description}<br>
        Qty: ${finalCharacter.inventory[x].qty}<br>
        </span>
        `;

        let newID = finalCharacter.inventory[x].dataName;
        addedItemSpan.setAttribute("id", newID);
        addedItemSpan.classList.add("supply-item-tooltip");
        let itemSpanBreak = document.createElement("br");
        addedItemSpan.appendChild(itemSpanBreak);
        let newTextName = finalCharacter.inventory[x].name;
        let addedItemTextNode = document.createTextNode(newTextName);
        addedItemSpan.prepend(addedItemTextNode);

        let itemList = document.querySelector("#normal-equipment-list");
        itemList.appendChild(addedItemSpan);

        x += 1;
      }
    }
  }

  //end adding inventory tooltips

  let showInventory = () => {
    window.scrollTo(0, 0);
    let accumulator = "";

    for (let i = 0; i < finalCharacter.inventory.length; i++) {
      accumulator += `${finalCharacter.inventory[i].name} <br>`;
    }
    return accumulator;
  };

  showInventory();

  let startChapter = function () {
    let getInventoryElement = document.querySelector(
      ".hide-inventory-container"
    );
    getInventoryElement.classList.remove("show-inventory-container");

    let updateTreasure = document.querySelector(".char-coins");
    updateTreasure.innerHTML = `
      <span id="char-gp" class="char-treasure">Gold: </span><span">${finalCharacter.treasure.gold.quantity}</span></br>
      <span id="char-ep" class="char-treasure">Electrum: </span><span>${finalCharacter.treasure.electrum.quantity}</span></br>
      <span id="char-sp" class="char-treasure">Silver: </span><span>${finalCharacter.treasure.silver.quantity}</span></br>
      <span id="char-cp" class="char-treasure">Copper: </span><span>${finalCharacter.treasure.copper.quantity}</span></br>
      <span id="char-gems" class="char-treasure">Gems: </span><span>${finalCharacter.treasure.gems.quantity}</span></br>
    `;
  };

  startChapter();
}

//end inventory

function pickMageSpells() {
  window.scrollTo(0, 0);

  alert("Pick Mage Spells");
  let showMageSpellsList = document.querySelector(".hide-mage-container");
  showMageSpellsList.classList.add("show-mage-spells");
  selectLevelOneMageSpells();
  selectLevelTwoMageSpells();
  selectLevelThreeMageSpells();
}

function selectLevelOneMageSpells() {
  if (finalCharacter.specialty.characterLevel.numberOfSpells[0] > 0) {
    let mageFirstLevelSpells = document
      .getElementById("mage-first-level-spell-list")
      .getElementsByTagName("input");
    let limit = finalCharacter.specialty.characterLevel.numberOfSpells[0];
    for (let i = 0; i < mageFirstLevelSpells.length; i++) {
      mageFirstLevelSpells[i].onclick = function () {
        let checkedcount = 0;
        for (let i = 0; i < mageFirstLevelSpells.length; i++) {
          checkedcount += mageFirstLevelSpells[i].checked ? 1 : 0;
          let updatedCheckedSpells = document.querySelector(
            ".first-level-selected-spells"
          );
          updatedCheckedSpells.textContent = `You have selected ${checkedcount} spell(s)     
            `;
        }
        if (checkedcount > limit) {
          checkedcount = limit;
          let updatedCheckedSpells2 = document.querySelector(
            ".first-level-selected-spells"
          );
          updatedCheckedSpells2.textContent = `You have selected ${checkedcount} spell(s)     
            `;
          alert("You can select maximum of " + limit + " spell(s).");
          this.checked = false;
        }
      };
    }
    let numberOfLevelOneSpells = document.querySelector(
      ".number-of-first-level-mage-spells"
    );
    numberOfLevelOneSpells.innerHTML = `
      <div class="number-of-first-level-mage-spells">You can choose ${finalCharacter.specialty.characterLevel.numberOfSpells[0]} spell(s)</div><br>
      `;
  } else {
    let mageFirstLevelSpells = document
      .getElementById("mage-first-level-spell-list")
      .getElementsByTagName("input");
    for (let i = 0; i < mageFirstLevelSpells.length; i++) {
      mageFirstLevelSpells[i].classList.add("grey-out");
    }
  }
}

function selectLevelTwoMageSpells() {
  if (finalCharacter.specialty.characterLevel.numberOfSpells[1] > 0) {
    let mageSecondLevelSpells = document
      .getElementById("mage-second-level-spell-list")
      .getElementsByTagName("input");
    let limit = finalCharacter.specialty.characterLevel.numberOfSpells[1];
    for (let i = 0; i < mageSecondLevelSpells.length; i++) {
      mageSecondLevelSpells[i].onclick = function () {
        let checkedcount = 0;
        for (let i = 0; i < mageSecondLevelSpells.length; i++) {
          checkedcount += mageSecondLevelSpells[i].checked ? 1 : 0;
          let updatedCheckedSpells = document.querySelector(
            ".second-level-selected-spells"
          );
          updatedCheckedSpells.textContent = `You have selected ${checkedcount} spell(s)     
            `;
        }
        if (checkedcount > limit) {
          checkedcount = limit;

          let updatedCheckedSpells2 = document.querySelector(
            ".second-level-selected-spells"
          );
          updatedCheckedSpells2.textContent = `You have selected ${checkedcount} spell(s)     
            `;
          alert("You can select maximum of " + limit + " spell(s).");
          this.checked = false;
        }
      };
    }
    let numberOfLeveltwoSpells = document.querySelector(
      ".number-of-second-level-mage-spells"
    );
    numberOfLeveltwoSpells.innerHTML = `
      <div class="number-of-second-level-mage-spells">You can choose ${finalCharacter.specialty.characterLevel.numberOfSpells[1]} spell(s)</div><br>
      `;
  } else {
    let removeMageSecondLevelSpells = document.querySelector(
      "#mage-second-level-spell-list"
    );
    removeMageSecondLevelSpells.classList.add("hide-mage-container");
    let mageSecondLevelSpells = document
      .getElementById("mage-second-level-spell-list")
      .getElementsByTagName("input");
    for (let i = 0; i < mageSecondLevelSpells.length; i++) {
      mageSecondLevelSpells[i].classList.add("grey-out");
    }
  }
}

function selectLevelThreeMageSpells() {
  if (finalCharacter.specialty.characterLevel.numberOfSpells[2] > 0) {
    let mageThirdLevelSpells = document
      .getElementById("mage-third-level-spell-list")
      .getElementsByTagName("input");
    let limit = finalCharacter.specialty.characterLevel.numberOfSpells[2];
    for (let i = 0; i < mageThirdLevelSpells.length; i++) {
      mageThirdLevelSpells[i].onclick = function () {
        let checkedcount = 0;
        for (let i = 0; i < mageThirdLevelSpells.length; i++) {
          checkedcount += mageThirdLevelSpells[i].checked ? 1 : 0;
          let updatedCheckedSpells = document.querySelector(
            ".third-level-selected-spells"
          );
          updatedCheckedSpells.textContent = `You have selected ${checkedcount} spell(s)     
            `;
        }
        if (checkedcount > limit) {
          checkedcount = limit;
          let updatedCheckedSpells2 = document.querySelector(
            ".third-level-selected-spells"
          );
          updatedCheckedSpells2.textContent = `You have selected ${checkedcount} spell(s)     
            `;
          alert("You can select maximum of " + limit + " spell(s).");
          this.checked = false;
        }
      };
    }
    let numberOfLevelthreeSpells = document.querySelector(
      ".number-of-third-level-mage-spells"
    );
    numberOfLevelthreeSpells.innerHTML = `
      <div class="number-of-third-level-mage-spells">You can choose ${finalCharacter.specialty.characterLevel.numberOfSpells[2]} spell(s)</div><br>
      `;
  } else {
    let removemageThirdLevelSpells = document.querySelector(
      "#mage-third-level-spell-list"
    );
    removemageThirdLevelSpells.classList.add("hide-mage-container");
    let mageThirdLevelSpells = document
      .getElementById("mage-third-level-spell-list")
      .getElementsByTagName("input");
    for (let i = 0; i < mageThirdLevelSpells.length; i++) {
      mageThirdLevelSpells[i].classList.add("grey-out");
    }
  }
}

let submitAllMageSpellsButton = document.querySelector(
  "#submit-all-mage-spells"
);
submitAllMageSpellsButton.addEventListener("click", submitAllMageSpells, false);

function submitAllMageSpells() {
  let selectedAllSpells = document.querySelectorAll(".mage-spells");

  for (let i = 0; i < selectedAllSpells.length; i++) {
    //TRYING TO ADD SPELLS TO EACH RESPECTIVE SPELL LEVEL OBJECT ON PLAYER
    if (
      selectedAllSpells[i].checked === true &&
      selectedAllSpells[i].classList.contains("mage-one-spells")
    ) {
      //FIND INDEXOF VALUE (I.E. "MAGIC MISSILE") IN MAGE LEVEL 1 SPELL ARRAY , THEN PUSH ONTO PLAYER.LEVELONESPELLS)
      let newSpell = eval(selectedAllSpells[i].value);
      finalCharacter.specialty.characterLevel.specialtySkills[
        "First Level Mage Spells"
      ].push(newSpell);
      newSpell.numberOfUses = 2;
    }

    if (
      selectedAllSpells[i].checked === true &&
      selectedAllSpells[i].classList.contains("mage-two-spells")
    ) {
      let newSpell = eval(selectedAllSpells[i].value);
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Second Level Mage Spells"
      ].push(newSpell);
      newSpell.numberOfUses = 4;
    }

    if (
      selectedAllSpells[i].checked === true &&
      selectedAllSpells[i].classList.contains("mage-three-spells")
    ) {
      let newSpell = eval(selectedAllSpells[i].value);
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Third Level Mage Spells"
      ].push(newSpell);
      newSpell.numberOfUses = 1;
    }
  }

  for (
    let i = 0;
    i <
    finalCharacter.specialty.characterLevel.specialtySkills[
      "First Level Mage Spells"
    ].length;
    i++
  ) {
    let addedSpell = document.createElement("li");
    addedSpell.classList.add("spell-tooltip");

    let addedSpellSpan = document.createElement("span");
    addedSpellSpan.innerHTML = `<span class="spell-tooltiptext">Range: ${finalCharacter.specialty.characterLevel.specialtySkills["First Level Mage Spells"][i].range}<br>
            Duration: ${finalCharacter.specialty.characterLevel.specialtySkills["First Level Mage Spells"][i].duration}<br>
            Effect: ${finalCharacter.specialty.characterLevel.specialtySkills["First Level Mage Spells"][i].effect}</span>
            `;

    let newID =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "First Level Mage Spells"
      ][i].className;
    addedSpell.setAttribute("id", newID);
    let newTextName =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "First Level Mage Spells"
      ][i].name;
    let addedSpellTextNode = document.createTextNode(newTextName);
    addedSpell.appendChild(addedSpellTextNode);
    addedSpell.appendChild(addedSpellSpan);

    let spellList = document.querySelector("#spells-level-1");
    spellList.appendChild(addedSpell);
  }

  for (
    let i = 0;
    i <
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Second Level Mage Spells"
    ].length;
    i++
  ) {
    let addedSpell = document.createElement("li");
    addedSpell.classList.add("spell-tooltip");

    let addedSpellSpan = document.createElement("span");
    addedSpellSpan.innerHTML = `<span class="spell-tooltiptext">Range: ${finalCharacter.specialty.characterLevel.specialtySkills["Second Level Mage Spells"][i].range}<br>
            Duration: ${finalCharacter.specialty.characterLevel.specialtySkills["Second Level Mage Spells"][i].duration}<br>
            Effect: ${finalCharacter.specialty.characterLevel.specialtySkills["Second Level Mage Spells"][i].effect}</span>
            `;

    let newID =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Second Level Mage Spells"
      ][i].className;
    addedSpell.setAttribute("id", newID);
    let newTextName =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Second Level Mage Spells"
      ][i].name;
    let addedSpellTextNode = document.createTextNode(newTextName);
    addedSpell.appendChild(addedSpellTextNode);
    addedSpell.appendChild(addedSpellSpan);

    let spellList = document.querySelector("#spells-level-2");
    spellList.appendChild(addedSpell);
  }

  for (
    let i = 0;
    i <
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Third Level Mage Spells"
    ].length;
    i++
  ) {
    let addedSpell = document.createElement("li");
    addedSpell.classList.add("spell-tooltip");

    let addedSpellSpan = document.createElement("span");
    addedSpellSpan.innerHTML = `<span class="spell-tooltiptext">Range: ${finalCharacter.specialty.characterLevel.specialtySkills["Third Level Mage Spells"][i].range}<br>
            Duration: ${finalCharacter.specialty.characterLevel.specialtySkills["Third Level Mage Spells"][i].duration}<br>
            Effect: ${finalCharacter.specialty.characterLevel.specialtySkills["Third Level Mage Spells"][i].effect}</span>
            `;

    let newID =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Third Level Mage Spells"
      ][i].className;
    addedSpell.setAttribute("id", newID);
    let newTextName =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Third Level Mage Spells"
      ][i].name;
    let addedSpellTextNode = document.createTextNode(newTextName);
    addedSpell.appendChild(addedSpellTextNode);
    addedSpell.appendChild(addedSpellSpan);

    let spellList = document.querySelector("#spells-level-3");
    spellList.appendChild(addedSpell);
  }

  // END
  let showPickSpellsButton = document.querySelector(".hide-mage-container");
  showPickSpellsButton.classList.remove("show-mage-spells");
  window.scrollTo(0, 0);
  showInventory();
}

function pickClericSpells() {
  alert("Pick Cleric Spells");
  let showClericSpellsList = document.querySelector(".hide-cleric-container");
  showClericSpellsList.classList.add("show-cleric-spells");
  selectLevelOneClericSpells();
  selectLevelTwoClericSpells();
  selectLevelThreeClericSpells();
}

function selectLevelOneClericSpells() {
  if (finalCharacter.specialty.characterLevel.numberOfSpells[0] > 0) {
    let clericFirstLevelSpells = document
      .getElementById("cleric-first-level-spell-list")
      .getElementsByTagName("input");
    let limit = finalCharacter.specialty.characterLevel.numberOfSpells[0];
    for (let i = 0; i < clericFirstLevelSpells.length; i++) {
      clericFirstLevelSpells[i].onclick = function () {
        let checkedcount = 0;
        for (let i = 0; i < clericFirstLevelSpells.length; i++) {
          checkedcount += clericFirstLevelSpells[i].checked ? 1 : 0;
          let updatedCheckedSpells = document.querySelector(
            ".first-level-selected-spells-cleric"
          );
          updatedCheckedSpells.textContent = `You have selected ${checkedcount} spell(s)     
            `;
        }
        if (checkedcount > limit) {
          checkedcount = limit;
          let updatedCheckedSpells2 = document.querySelector(
            ".first-level-selected-spells-cleric"
          );
          updatedCheckedSpells2.textContent = `You have selected ${checkedcount} spell(s)     
            `;
          alert("You can select maximum of " + limit + " spell(s).");
          this.checked = false;
        }
      };
    }
    let numberOfLeveloneSpells = document.querySelector(
      ".number-of-first-level-cleric-spells"
    );
    numberOfLeveloneSpells.innerHTML = `
      <div class="number-of-first-level-cleric-spells">You can choose ${finalCharacter.specialty.characterLevel.numberOfSpells[0]} spell(s)</div><br>
      `;
  } else {
    let clericFirstLevelSpells = document
      .getElementById("cleric-first-level-spell-list")
      .getElementsByTagName("input");
    for (let i = 0; i < clericFirstLevelSpells.length; i++) {
      clericFirstLevelSpells[i].classList.add("grey-out");
    }
  }
}

function selectLevelTwoClericSpells() {
  if (finalCharacter.specialty.characterLevel.numberOfSpells[1] > 0) {
    let clericSecondLevelSpells = document
      .getElementById("cleric-second-level-spell-list")
      .getElementsByTagName("input");
    let limit = finalCharacter.specialty.characterLevel.numberOfSpells[1];
    for (let i = 0; i < clericSecondLevelSpells.length; i++) {
      clericSecondLevelSpells[i].onclick = function () {
        let checkedcount = 0;
        for (let i = 0; i < clericSecondLevelSpells.length; i++) {
          checkedcount += clericSecondLevelSpells[i].checked ? 1 : 0;
          let updatedCheckedSpells = document.querySelector(
            ".second-level-selected-spells-cleric"
          );
          updatedCheckedSpells.textContent = `You have selected ${checkedcount} spell(s)     
            `;
        }
        if (checkedcount > limit) {
          checkedcount = limit;
          let updatedCheckedSpells2 = document.querySelector(
            ".second-level-selected-spells-cleric"
          );
          updatedCheckedSpells2.textContent = `You have selected ${checkedcount} spell(s)     
            `;
          alert("You can select maximum of " + limit + " spell(s).");
          this.checked = false;
        }
      };
    }
    let numberOfLeveltwoSpells = document.querySelector(
      ".number-of-second-level-cleric-spells"
    );
    numberOfLeveltwoSpells.innerHTML = `
      <div class="number-of-second-level-cleric-spells">You can choose ${finalCharacter.specialty.characterLevel.numberOfSpells[1]} spell(s)</div><br>
      `;
  } else {
    let removeclericSecondLevelSpells = document.querySelector(
      "#cleric-second-level-spell-list"
    );
    removeclericSecondLevelSpells.classList.add("hide-cleric-container");
    let clericSecondLevelSpells = document
      .getElementById("cleric-second-level-spell-list")
      .getElementsByTagName("input");
    for (let i = 0; i < clericSecondLevelSpells.length; i++) {
      clericSecondLevelSpells[i].classList.add("grey-out");
    }
  }
}

function selectLevelThreeClericSpells() {
  if (finalCharacter.specialty.characterLevel.numberOfSpells[2] > 0) {
    let clericThirdLevelSpells = document
      .getElementById("cleric-third-level-spell-list")
      .getElementsByTagName("input");
    let limit = finalCharacter.specialty.characterLevel.numberOfSpells[2];
    for (let i = 0; i < clericThirdLevelSpells.length; i++) {
      clericThirdLevelSpells[i].onclick = function () {
        let checkedcount = 0;
        for (let i = 0; i < clericThirdLevelSpells.length; i++) {
          checkedcount += clericThirdLevelSpells[i].checked ? 1 : 0;
          let updatedCheckedSpells = document.querySelector(
            ".third-level-selected-spells-cleric"
          );
          updatedCheckedSpells.textContent = `You have selected ${checkedcount} spell(s)     
            `;
        }
        if (checkedcount > limit) {
          checkedcount = limit;
          let updatedCheckedSpells2 = document.querySelector(
            ".third-level-selected-spells-cleric"
          );
          updatedCheckedSpells2.textContent = `You have selected ${checkedcount} spell(s)     
            `;
          alert("You can select maximum of " + limit + " spell(s).");
          this.checked = false;
        }
      };
    }
    let numberOfLevelthreeSpells = document.querySelector(
      ".number-of-third-level-cleric-spells"
    );
    numberOfLevelthreeSpells.innerHTML = `
      <div class="number-of-third-level-cleric-spells">You can choose ${finalCharacter.specialty.characterLevel.numberOfSpells[2]} spell(s)</div><br>
      `;
  } else {
    let removeclericThirdLevelSpells = document.querySelector(
      "#cleric-third-level-spell-list"
    );
    removeclericThirdLevelSpells.classList.add("hide-cleric-container");
    let clericThirdLevelSpells = document
      .getElementById("cleric-third-level-spell-list")
      .getElementsByTagName("input");
    for (let i = 0; i < clericThirdLevelSpells.length; i++) {
      clericThirdLevelSpells[i].classList.add("grey-out");
    }
  }
}

let submitAllClericSpellsButton = document.querySelector(
  "#submit-all-cleric-spells"
);
submitAllClericSpellsButton.addEventListener(
  "click",
  submitAllClericSpells,
  false
);

function submitAllClericSpells() {
  let selectedAllSpells = document.querySelectorAll(".cleric-spells");

  for (let i = 0; i < selectedAllSpells.length; i++) {
    //TRYING TO ADD SPELLS TO EACH RESPECTIVE SPELL LEVEL OBJECT ON PLAYER
    if (
      selectedAllSpells[i].checked === true &&
      selectedAllSpells[i].classList.contains("cleric-one-spells")
    ) {
      //FIND INDEXOF VALUE (I.E. "MAGIC MISSILE") IN Cleric LEVEL 1 SPELL ARRAY , THEN PUSH ONTO PLAYER.LEVELONESPELLS)
      let newSpell = eval(selectedAllSpells[i].value);
      finalCharacter.specialty.characterLevel.specialtySkills[
        "First Level Cleric Spells"
      ].push(newSpell);
    }

    if (
      selectedAllSpells[i].checked === true &&
      selectedAllSpells[i].classList.contains("cleric-two-spells")
    ) {
      let newSpell = eval(selectedAllSpells[i].value);
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Second Level Cleric Spells"
      ].push(newSpell);
    }

    if (
      selectedAllSpells[i].checked === true &&
      selectedAllSpells[i].classList.contains("cleric-three-spells")
    ) {
      let newSpell = eval(selectedAllSpells[i].value);
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Third Level Cleric Spells"
      ].push(newSpell);
    }
  }

  for (
    let i = 0;
    i <
    finalCharacter.specialty.characterLevel.specialtySkills[
      "First Level Cleric Spells"
    ].length;
    i++
  ) {
    let addedSpell = document.createElement("li");
    addedSpell.classList.add("spell-tooltip");

    let addedSpellSpan = document.createElement("span");
    addedSpellSpan.innerHTML = `<span class="spell-tooltiptext">Range: ${finalCharacter.specialty.characterLevel.specialtySkills["First Level Cleric Spells"][i].range}<br>
        Duration: ${finalCharacter.specialty.characterLevel.specialtySkills["First Level Cleric Spells"][i].duration}<br>
        Effect: ${finalCharacter.specialty.characterLevel.specialtySkills["First Level Cleric Spells"][i].effect}</span>
        `;

    let newID =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "First Level Cleric Spells"
      ][i].className;
    addedSpell.setAttribute("id", newID);
    let newTextName =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "First Level Cleric Spells"
      ][i].name;
    let addedSpellTextNode = document.createTextNode(newTextName);
    addedSpell.appendChild(addedSpellTextNode);
    addedSpell.appendChild(addedSpellSpan);

    let spellList = document.querySelector("#spells-level-1");
    spellList.appendChild(addedSpell);
  }

  for (
    let i = 0;
    i <
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Second Level Cleric Spells"
    ].length;
    i++
  ) {
    let addedSpell = document.createElement("li");
    addedSpell.classList.add("spell-tooltip");

    let addedSpellSpan = document.createElement("span");
    addedSpellSpan.innerHTML = `<span class="spell-tooltiptext">Range: ${finalCharacter.specialty.characterLevel.specialtySkills["Second Level Cleric Spells"][i].range}<br>
        Duration: ${finalCharacter.specialty.characterLevel.specialtySkills["Second Level Cleric Spells"][i].duration}<br>
        Effect: ${finalCharacter.specialty.characterLevel.specialtySkills["Second Level Cleric Spells"][i].effect}</span>
        `;

    let newID =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Second Level Cleric Spells"
      ][i].className;
    addedSpell.setAttribute("id", newID);
    let newTextName =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Second Level Cleric Spells"
      ][i].name;
    let addedSpellTextNode = document.createTextNode(newTextName);
    addedSpell.appendChild(addedSpellTextNode);
    addedSpell.appendChild(addedSpellSpan);

    let spellList = document.querySelector("#spells-level-2");
    spellList.appendChild(addedSpell);
  }

  for (
    let i = 0;
    i <
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Third Level Cleric Spells"
    ].length;
    i++
  ) {
    let addedSpell = document.createElement("li");
    addedSpell.classList.add("spell-tooltip");

    let addedSpellSpan = document.createElement("span");
    addedSpellSpan.innerHTML = `<span class="spell-tooltiptext">Range: ${finalCharacter.specialty.characterLevel.specialtySkills["Third Level Cleric Spells"][i].range}<br>
        Duration: ${finalCharacter.specialty.characterLevel.specialtySkills["Third Level Cleric Spells"][i].duration}<br>
        Effect: ${finalCharacter.specialty.characterLevel.specialtySkills["Third Level Cleric Spells"][i].effect}</span>
        `;

    let newID =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Third Level Cleric Spells"
      ][i].className;
    addedSpell.setAttribute("id", newID);
    let newTextName =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Third Level Cleric Spells"
      ][i].name;
    let addedSpellTextNode = document.createTextNode(newTextName);
    addedSpell.appendChild(addedSpellTextNode);
    addedSpell.appendChild(addedSpellSpan);

    let spellList = document.querySelector("#spells-level-3");
    spellList.appendChild(addedSpell);
  }

  let showPickSpellsButton = document.querySelector(".hide-cleric-container");
  showPickSpellsButton.classList.remove("show-cleric-spells");
  window.scrollTo(0, 0);
  showInventory();
}

function talkToRaynard() {
  window.scrollTo(0, 0);

  let talkingToRaynard = document.querySelector("#dialogue");
  talkingToRaynard.innerHTML = `
    <p>"Good Morning, ${finalCharacter.name}. I hope you slept well. You know, I remember stories of the dragon Soul Stealer. My father's father's grandfather told me of the 
    dragon arriving to the ruins and hoarding a treasure so valuable that many travellers lost their lives looking for it. Did you know that I have also wandered to those ruins
    in my younger years? I remember there being two paths towards the ruins - one path that was easily seen along the north of a forest, but there is another that was less 
    travelled. I learned of this path from a young woman mage who used to live in the forest many moons (years) ago. That was a long time ago, but I believe it would still 
    be possible to find that path if you look hard enough. Beyond the farm, travel East. The path is marked by a large boulder with a strange circular carving in it. That 
    is the entrance."</p>  

    <p>Raynard continued, "I, unfortunately ended up not making it all the way to the ruins where Soul Stealer lives, however, because on my way, I reached some old desert ruins just before his lair.  
    In those ruins, I removed my armor and was preparing for the battle, but I rushed to the aid of a young woman who was gravely injured by the hands of a pack of orcs. I 
    ended up tending her wounds, and we fled the orcs. I returned here, where I took care of her and ended up marrying her. I left my adventures behind, but if you find your 
    way along the hidden path, to the misty forest, and through the underground caves to the desert ruins, you may indeed find my old armor there. Before I forget - if you see 
    Glandar, the owner of the Black Horse Farm, give him this: it's a silver coin. He'll know it's from me. If you give this to him, he will provide you with a place to rest 
    and some extra food for the journey. Talk to him about the forest, he will have information for you. Good luck, ${finalCharacter.name} - I wish you well."</p>

    <p>You thank Raynard for his help, shake his hand, and leave the inn.</p>
    
    <input type="submit" id="start-chapter-three" value="Continue">`;

  finalCharacter.achievements.spokeToRaynard = {
    name: "Spoke to Raynard",
    desc: "Spoke to Raynard and received his coin.",
  };

  finalCharacter.inventory.push(raynardsCoin);

  var continueChapterThreeOne = document.querySelector("#start-chapter-three");

  continueChapterThreeOne.addEventListener("click", function () {
    let raynardsCoinIndex = finalCharacter.inventory.indexOf(raynardsCoin);
    alert(`You received ${finalCharacter.inventory[raynardsCoinIndex].name}`);
    document.querySelector("#normal-equipment-list").innerHTML = ``;

    for (let i = 0; i < finalCharacter.inventory.length; i++) {
      let addedItemSpan = document.createElement("span");
      addedItemSpan.innerHTML = `<span class="supply-item-tooltiptext">Desc: ${finalCharacter.inventory[i].description}<br>
            Qty: ${finalCharacter.inventory[i].qty}<br>
            </span>
            `;

      let newID = finalCharacter.inventory[i].dataName;
      addedItemSpan.setAttribute("id", newID);
      addedItemSpan.classList.add("supply-item-tooltip");
      let itemSpanBreak = document.createElement("br");
      addedItemSpan.appendChild(itemSpanBreak);
      let newTextName = finalCharacter.inventory[i].name;
      let addedItemTextNode = document.createTextNode(newTextName);
      addedItemSpan.prepend(addedItemTextNode);

      let itemList = document.querySelector("#normal-equipment-list");

      itemList.appendChild(addedItemSpan);
    }
    //end adding tooltip
  });
  continueChapterThreeOne.addEventListener(
    "click",
    startChapterThreeOne,
    false
  );
}

//CHAPTER THREE ONE

function startChapterThreeOne() {
  window.scrollTo(0, 0);

  let chapterThreeOne = document.querySelector("#dialogue");
  chapterThreeOne.innerHTML = `
    <p>As you depart the Blue Blade Inn, you feel confident in what you are about the journey you are about to embark on (begin). You've heard stories from others about the 
    road that leads to a small farm town outside Gryphon's Keep. This road is a mere cart and horse path with two ruts in the dirt where the wagon wheels have worn small 
    ditches in the road over time. The small farm, called the Black Horse Farm, is the last settlement along a large set of woods that span quite a distance to the east.  
    This farm provides some food, animals, and goods to the people of Gryphon's Keep, so the family that owns the Black Horse Farm is known to many here. 
    </p>
    <p>The woods adjacent to the farm are known as the Forgotten Woods. The woods consist mostly of coniferous (pine) trees over flat land sprinkled with some boulders.  
    The woods house many animals such as deer, coyotes, beavers, rabbits, various birds, and other woodland creatures. From what you've heard, there are several brooks 
    throughout the woods, an occasional pond, and some swampy areas. However, it isn't these woods that concern you - it's the forest on the other side of the woods that does.  
    It is rumored that the forest is home to various creatures that don't come out in open fields or the woods. Some of these creatures are said to be mystical, forgotten 
    beings who stay lurking in the shadows since the Golden Age. One thing is for certain - no one goes into the forest. The Forgotten Woods is much like a 'buffer' between the 
    forest and the the settled areas. It's almost like there is a mutual undestanding that nothing from the forest goes beyond the woods, and no human from the villages go 
    into the forest. The path you've heard about from other adventurers takes you around the northern part of the forest.  
    </p>
    
    <input type="submit" id="start-chapter-three-two" value="Continue">`;
  var startChapterThreeTwo = document.querySelector("#start-chapter-three-two");
  startChapterThreeTwo.addEventListener(
    "click",
    continueChapterThreeTwo,
    false
  );
}

//CHAPTER THREE TWO

function continueChapterThreeTwo() {
  window.scrollTo(0, 0);

  let chapterThreeTwo = document.querySelector("#dialogue");
  chapterThreeTwo.innerHTML = `
    <p>You find the main road in town and head South until you find the horse cart path running East. You take one look back, breathe in...hold...and exhale. You follow the 
    horse cart path.  
    </p>

    <p>You walk along the path and Gryphon's Keep gets farther in the distance and the noise of the village disappears. Part of you likes the quiet, you've always been one 
    to enjoy time to yourself - and in some cases - you prefer it. The confident feeling of being on your own, relying on yourself, and accomplishing hard tasks alone 
    has contributed to your self-confidence. You wouldn't be considered arrogant, just confident. Some of your friends and family would mention how you were calm and 
    composed under pressure, but also, how you never bragged about your accomplishments.</p>  
    
    <p>While you think about your past, you also look around you. The horse cart road is dirt where the cart wheels travel, but grassy everywhere else. The road is not 
    well-travelled, but it's also not overgrown. There are some smaller, overgrown paths that lead to the left and right of the road, most likely from people travelling 
    to outlying farms and orchards. The land around you is open fields, dotted with some maple trees, white birch trees, and an occasional apple orchard. It's autumn now, 
    prime season for picking apples. The air is cool, but not too cold. It's perfect weather to be outside. You feel a light breeze on your face, and the sky has streaks 
    of clouds, some passing between you and the sun, ocassionally casting shade over the land.  
    </p>

    <p>In front of you, you notice a small dark shape and light dust kicking up along the road. You aren't alarmed, and you think, "It's probably just an old wagon coming to 
    town." As it gets closer, you can see one horse in front, pulling along an open wagon. You can make out the shape of two men in the cart, but as it gets closre you notice 
    that they seems to be in a hurry and that one horse is missing pulling the wagon. It comes closer and you notice the horse is in a full out trot. You can clearly tell the 
    men are slightly alarmed, and one of them waves at you to move out of the way. Finally, the older man gets close enough to you and yells, "Go back! There's trouble ahead 
    - wolf!" As he passes by, you notice an injured sheep in the back of the cart - blood is everywhere, and you can clearly see a large gash in the animal. The 
    wagon-riders don't stop and continue in speed, leaving a dust trail behind them as they quickly move out of sight. "Strange, for around here...", you think. "What 
    is a wolf doing out here during daylight and in the middle of the fields?". "Did it attack that sheep?" 
    </p>

    <input type="submit" id="start-chapter-three-three" value="Continue">`;
  var startChapterThreeThree = document.querySelector(
    "#start-chapter-three-three"
  );
  startChapterThreeThree.addEventListener(
    "click",
    continueChapterThreeThree,
    false
  );
}

//CHAPTER THREE THREE

function continueChapterThreeThree() {
  window.scrollTo(0, 0);

  let chapterThreeThree = document.querySelector("#dialogue");
  chapterThreeThree.innerHTML = `
    <p>You hasten (quicken) your pace, enough to move more quickly, but not in a jog - you have a long journey ahead of you and know you can't tire yourself out too soon.  
    Ahead, you see two dark figures hovering over a shape on the ground. You quicken your pace still, and as you come closer, you can make out a wolf picking at a 
    sheep, dead on the road. Not only is this odd because of the time of day, but wolves haven't been a problem in this country side for quite some time. You have heard 
    of some stories of attacks from foxes on chickens, or coyotes on deer, but a sighting of wolves is a rare thing.  Regardless, as you approach, you see the wolf look up 
    at you, while still chewing on the sheep. It lifts its head up slowly, eyes lowered and it bares its teeth in a small growl. "Well," you think, "I wasn't planning 
    on needing to use my training this soon, but now is as good of a time as any..."</p>

    <p>At first you try to scare the wolf away. You aren't a person to invite violence or to willfully harm others, but you also don't back down from a fight either.  
    You can tell this wolf has no intention of leaving the sheep, and wolves are dangerous for the farm, so you have to make a decision. You slow down 
    as you get closer to the animals. One wolf isn't too challenging you think...  Breathe in...hold...exhale. Hand on your weapon and your mind focused, what do you do?</p>
    <p>  
    
    </p>
    <input type="submit" id="attack-wolves" value="Attack"><input type="submit" id="dont-attack-wolves" value="Go Around">`;

  var attackWolvesYes = document.querySelector("#attack-wolves");
  attackWolvesYes.addEventListener(
    "click",
    () => {
      addingFightModule(smallWolf, noMonster, continueChapterThreeFour);
      declareAttack();
    },
    false
  );

  var attackWolvesNo = document.querySelector("#dont-attack-wolves");
  attackWolvesNo.addEventListener(
    "click",
    goAroundMonsters(continueChapterThreeFive),
    false
  );
}

function declareAttack() {
  window.scrollTo(0, 0);

  let declareAttackDialogue = document.querySelector("#dialogue");
  declareAttackDialogue.innerHTML = `<p>You Attack!</p>`;
}

function addingFightModule(monsterOne, monsterTwo, continueNextChapter) {
  monsterOne.createHitPoints();
  monsterTwo.createHitPoints();

  let headerFightModule = document.querySelector("#fight-module");
  headerFightModule.innerHTML = `
        <div class="attack-buttons">
            <span class='button-border'><input type="submit" class="attack attack-monster-one fight-module-button" value="Attack Enemy 1"></span>
            <span class='button-border'><input type="submit" class="attack attack-monster-two fight-module-button" value="Attack Enemy 2"></span><br>
            <span class='button-border'><input type="submit" class="attack item-enchantment fight-module-button" value="Use Item"></span> 
            <span class='button-border'>
              <input type="submit" class="attack-spell spell2-monster-one fight-module-button" value="Use Spell" id="use-spells">
                <ul class='dropdown-spell-list-ul hide-spell-list-dropdown'>
                </ul>
            </span>
            
            <span class='button-border hidden-border'><input type="submit" id="monster-attack" class="fight-module-button hidden" value="Monster(s) Turn"></span><br>
        </div>
        `;

  let attackMonsterOne = document.querySelector(".attack-monster-one");
  attackMonsterOne.addEventListener(
    "click",
    function () {
      animate();
      finalCharacter.weaponAttackMonster1(
        monsterOne,
        monsterTwo,
        finalCharacter.weapon,
        continueNextChapter
      );
    },
    false
  );

  let attackMonsterTwo = document.querySelector(".attack-monster-two");
  attackMonsterTwo.addEventListener(
    "click",
    function () {
      animate();
      finalCharacter.weaponAttackMonster2(
        monsterOne,
        monsterTwo,
        finalCharacter.weapon,
        continueNextChapter
      );
    },
    false
  );

  if (
    finalCharacter.specialty.name === "High Mage" ||
    finalCharacter.specialty.name === "Elf"
  ) {
    populateMageSpells(monsterOne, monsterTwo, continueNextChapter);
  }
  confirmAttackMonsters(monsterOne, monsterTwo, (images = 0));
}

function populateMageSpells(m1, m2, nextChap) {
  let spellList = [];
  let characterFirstLevelSpells =
    finalCharacter.specialty.characterLevel.specialtySkills[
      "First Level Mage Spells"
    ];
  let characterSecondLevelSpells =
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Second Level Mage Spells"
    ];
  let characterThirdLevelSpells =
    finalCharacter.specialty.characterLevel.specialtySkills[
      "Third Level Mage Spells"
    ];

  //populating spell list div

  let firstLevelSpellList = document.createElement("li");
  firstLevelSpellList.classList.add("first-level-dropdown-list");
  firstLevelSpellList.innerHTML = `<b>First Level Spells:</b>`;

  let secondLevelSpellList = document.createElement("li");
  secondLevelSpellList.classList.add("second-level-dropdown-list");
  secondLevelSpellList.innerHTML = `<b>Second Level Spells:</b>`;

  let thirdLevelSpellList = document.createElement("li");
  thirdLevelSpellList.classList.add("third-level-dropdown-list");
  thirdLevelSpellList.innerHTML = `<b>Third Level Spells:</b>`;

  let addingSpellLevels = document.querySelector(".dropdown-spell-list-ul");
  addingSpellLevels.appendChild(firstLevelSpellList);

  for (let i = 0; i < characterFirstLevelSpells.length; i++) {
    if (
      characterFirstLevelSpells[i].useBattle === true &&
      characterFirstLevelSpells[i].effect === "The mage only"
    ) {
      spellList.push(characterFirstLevelSpells[i].name);
      let spellLi = document.createElement("ul");
      spellLi.classList.add("spell-list");
      let addedSpellName = document.createElement("span");
      addedSpellName.innerHTML = characterFirstLevelSpells[i].name;
      spellLi.appendChild(addedSpellName);
      let addedSpellUl = document.querySelector(".first-level-dropdown-list");
      addedSpellUl.appendChild(spellLi);

      let addSelf1Btn = document.createElement("li");
      addSelf1Btn.classList.add("self-spell-list");
      addSelf1Btn.innerText = "Self";
      spellLi.appendChild(addSelf1Btn);
      addSelf1Btn.addEventListener(
        "click",
        function (e) {
          castSpellFromList(e, m1, m2, nextChap);
        },
        false
      );
    } else if (characterFirstLevelSpells[i].useBattle === true) {
      spellList.push(characterFirstLevelSpells[i].name);
      let spellLi = document.createElement("ul");
      spellLi.classList.add("spell-list");
      let addedSpellName = document.createElement("span");
      addedSpellName.innerHTML = characterFirstLevelSpells[i].name;
      spellLi.appendChild(addedSpellName);
      let addedSpellUl = document.querySelector(".first-level-dropdown-list");
      addedSpellUl.appendChild(spellLi);

      let addMonster1Btn = document.createElement("li");
      addMonster1Btn.classList.add("monster-one-spell-list");
      addMonster1Btn.innerText = "Monster 1";
      spellLi.appendChild(addMonster1Btn);

      let addMonster2Btn = document.createElement("li");
      addMonster2Btn.classList.add("monster-two-spell-list");
      addMonster2Btn.innerText = "Monster 2";
      spellLi.appendChild(addMonster2Btn);

      //on this event listener, attach function
      addMonster1Btn.addEventListener(
        "click",
        function (e) {
          castSpellFromList(e, m1, m2, nextChap);
        },
        false
      );
      addMonster2Btn.addEventListener(
        "click",
        function (e) {
          castSpellFromList(e, m1, m2, nextChap);
        },
        false
      );
    }
  }

  addingSpellLevels.appendChild(secondLevelSpellList);

  for (let i = 0; i < characterSecondLevelSpells.length; i++) {
    if (
      characterSecondLevelSpells[i].useBattle === true &&
      characterSecondLevelSpells[i].effect === "The mage only"
    ) {
      spellList.push(characterSecondLevelSpells[i].name);
      let spellLi = document.createElement("ul");
      spellLi.classList.add("spell-list");
      let addedSpellName = document.createElement("span");
      addedSpellName.innerHTML = characterSecondLevelSpells[i].name;
      spellLi.appendChild(addedSpellName);
      let addedSpellUl = document.querySelector(".second-level-dropdown-list");
      addedSpellUl.appendChild(spellLi);

      let addSelf1Btn = document.createElement("li");
      addSelf1Btn.classList.add("self-spell-list");
      addSelf1Btn.innerText = "Self";
      spellLi.appendChild(addSelf1Btn);
      addSelf1Btn.addEventListener(
        "click",
        function (e) {
          castSpellFromList(e, m1, m2, nextChap);
        },
        false
      );
    } else if (characterSecondLevelSpells[i].useBattle === true) {
      spellList.push(characterSecondLevelSpells[i].name);
      let spellLi2 = document.createElement("ul");
      spellLi2.classList.add("spell-list");
      let addedSpellName2 = document.createElement("span");
      addedSpellName2.innerHTML = characterSecondLevelSpells[i].name;
      spellLi2.appendChild(addedSpellName2);
      let addedSpellUl2 = document.querySelector(".second-level-dropdown-list");
      addedSpellUl2.appendChild(spellLi2);
      let addMonster1Btn = document.createElement("li");
      addMonster1Btn.classList.add("monster-one-spell-list");
      addMonster1Btn.innerText = "Monster 1";
      spellLi2.appendChild(addMonster1Btn);
      let addMonster2Btn = document.createElement("li");
      addMonster2Btn.classList.add("monster-two-spell-list");
      addMonster2Btn.innerText = "Monster 2";
      spellLi2.appendChild(addMonster2Btn);
      addMonster1Btn.addEventListener(
        "click",
        function (e) {
          castSpellFromList(e, m1, m2, nextChap);
        },
        false
      );
      addMonster2Btn.addEventListener(
        "click",
        function (e) {
          castSpellFromList(e, m1, m2, nextChap);
        },
        false
      );
    }
  }

  addingSpellLevels.appendChild(thirdLevelSpellList);

  for (let i = 0; i < characterThirdLevelSpells.length; i++) {
    if (
      characterThirdLevelSpells[i].useBattle === true &&
      characterThirdLevelSpells[i].effect === "The mage only"
    ) {
      spellList.push(characterThirdLevelSpells[i].name);
      let spellLi = document.createElement("ul");
      spellLi.classList.add("spell-list");
      let addedSpellName = document.createElement("span");
      addedSpellName.innerHTML = characterThirdLevelSpells[i].name;
      spellLi.appendChild(addedSpellName);
      let addedSpellUl = document.querySelector(".third-level-dropdown-list");
      addedSpellUl.appendChild(spellLi);

      let addSelf1Btn = document.createElement("li");
      addSelf1Btn.classList.add("self-spell-list");
      addSelf1Btn.innerText = "Self";
      spellLi.appendChild(addSelf1Btn);
      addSelf1Btn.addEventListener(
        "click",
        function (e) {
          castSpellFromList(e, m1, m2, nextChap);
        },
        false
      );
    } else if (characterThirdLevelSpells[i].useBattle === true) {
      spellList.push(characterThirdLevelSpells[i].name);
      let spellLi = document.createElement("ul");
      spellLi.classList.add("spell-list");
      let addedSpellName = document.createElement("span");
      addedSpellName.innerHTML = characterThirdLevelSpells[i].name;
      spellLi.appendChild(addedSpellName);
      let addedSpellUl = document.querySelector(".third-level-dropdown-list");
      addedSpellUl.appendChild(spellLi);
      let addMonster1Btn = document.createElement("li");
      addMonster1Btn.classList.add("monster-one-spell-list");
      addMonster1Btn.innerText = "Monster 1";
      spellLi.appendChild(addMonster1Btn);
      let addMonster2Btn = document.createElement("li");
      addMonster2Btn.classList.add("monster-two-spell-list");
      addMonster2Btn.innerText = "Monster 2";
      spellLi.appendChild(addMonster2Btn);
      addMonster1Btn.addEventListener(
        "click",
        function (e) {
          castSpellFromList(e, m1, m2, nextChap);
        },
        false
      );
      addMonster2Btn.addEventListener(
        "click",
        function (e) {
          castSpellFromList(e, m1, m2, nextChap);
        },
        false
      );
    }
  }

  let spellShowButton = document.querySelector("#use-spells");
  spellShowButton.addEventListener("click", toggleShowSpellList, false);

  console.log(finalCharacter);
}

export function toggleShowSpellList() {
  document
    .querySelector(".dropdown-spell-list-ul")
    .classList.toggle("hide-spell-list-dropdown");
  document
    .querySelector(".first-level-dropdown-list")
    .classList.toggle("show-spell-list-dropdown");
  document
    .querySelector(".second-level-dropdown-list")
    .classList.toggle("show-spell-list-dropdown");
  document
    .querySelector(".third-level-dropdown-list")
    .classList.toggle("show-spell-list-dropdown");

  let getAllAttackButtons = document.querySelectorAll(".attack");
  for (let i = 0; i < getAllAttackButtons.length; i++) {
    getAllAttackButtons[i].classList.toggle("grey-out");
  }
}

//need to tie casting spell to actual spell methods dynamically

function castSpellFromList(e, m1, m2, nextChap) {
  let parentNodeInnerText = e.target.parentNode.firstChild.textContent;
  let thisNodeInnerText = e.target.textContent;

  if (
    finalCharacter.specialty === highMage ||
    finalCharacter.specialty === elf ||
    finalCharacter.specialty === dragonWarrior
  ) {
    let firstLevel =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "First Level Mage Spells"
      ];
    let secondLevel =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Second Level Mage Spells"
      ];
    let thirdLevel =
      finalCharacter.specialty.characterLevel.specialtySkills[
        "Third Level Mage Spells"
      ];

    //NEED TO ITERATE THROUGH THE 'NAME' PROPERTY AND MATCH THE PARENTNODEINNERTEXT TO LINK TO ASSOCIATED SPELL
    for (let i = 0; i < firstLevel.length; i++) {
      if (firstLevel[i].name === parentNodeInnerText) {
        if (finalCharacter.status.includes("Invisible")) {
          alert(
            `You were invisible but the spell was broken after you cast the spell`
          );
          finalCharacter.status.splice(
            finalCharacter.status.indexOf("Invisible"),
            1
          );

          let addInvisibilityStatus = $(".invisibility-status");

          if (!addInvisibilityStatus.hasClass("hide-status")) {
            addInvisibilityStatus.addClass("hide-status");
            console.log(finalCharacter.activeSpellStatuses);

            //removing active spell statuses so they don't run after being cancelled.
            // if (finalCharacter.activeSpellStatuses.includes())
          }
        }

        firstLevel[i].castSpell(m1, m2, nextChap, thisNodeInnerText);
      }
    }

    for (let i = 0; i < secondLevel.length; i++) {
      if (secondLevel[i].name === parentNodeInnerText) {
        if (finalCharacter.status.includes("Invisible")) {
          alert(
            `You were invisible but the spell was broken after you cast the spell`
          );
          finalCharacter.status.splice(
            finalCharacter.status.indexOf("Invisible"),
            1
          );

          let addInvisibilityStatus = document.querySelector(
            ".invisibility-status"
          );

          if (!addInvisibilityStatus.classList.contains("hide-status")) {
            addInvisibilityStatus.classList.toggle("hide-status");
          }
        }

        secondLevel[i].castSpell(m1, m2, nextChap, thisNodeInnerText);
      }
    }

    for (let i = 0; i < thirdLevel.length; i++) {
      if (thirdLevel[i].name === parentNodeInnerText) {
        if (finalCharacter.status.includes("Invisible")) {
          alert(
            `You were invisible but the spell was broken after you cast the spell`
          );
          finalCharacter.status.splice(
            finalCharacter.status.indexOf("Invisible"),
            1
          );

          let addInvisibilityStatus = $(".invisibility-status");
          if (!addInvisibilityStatus.hasClass("hide-status")) {
            addInvisibilityStatus.removeClass("hide-status");
          }
        }

        thirdLevel[i].castSpell(m1, m2, nextChap, thisNodeInnerText);
      }
    }
  }
}

export function confirmAttackMonsters(monsterOne, monsterTwo) {
  //PUTTING FIGHT MODULE IN FOOTER FOR TESTING PURPOSES

  finalCharacter.confirmAttack(monsterOne, monsterTwo);
}

export function attackingMonsters() {}

//MOVE TO MONSTER CLASS AND THEN REFERENCE IN CHARACTER CLASS AS THIS.MONSTER.MONSTERATTACK

function goAroundMonsters(nextChapter) {
  return nextChapter;
}

//CHAPTER THREE FOUR

export function continueChapterThreeFour() {
  window.scrollTo(0, 0);

  //ADDING ACHIEVEMENT

  finalCharacter.achievements.killedFarmWolves = {
    name: "Killed Farm Wolves",
    desc: "Killed two wolves near farmhouse.",
  };

  //END ACHIEVEMENT ADD

  let chapterThreeFour = document.querySelector("#dialogue");
  chapterThreeFour.innerHTML = `
    <p>As you pause after your victory over the wolf, you take a breath to regroup. As you inspect the wolf, you notice that this 
    don't appear to be normal wolf that you've seen before. This wolf has a distinctly black coat of fur running down its back, at 
    the tip of its tail, and the edges of its ears. "So strange.", you think. Then, you notice something very odd...its claws are 
    black a night! You didn't immediately notice during the fight, but now you can see plain as day. You aren't someone who disrespects 
    animals, but you take one of the large claws and place it on a string around your neck so that you can ask around about it and what others
    may know of it. "Well," you think to yourself, "at least I'll have some interseting stories to tell at the end of this journey..."
    
    You don't want to linger too long, and decide it's time to get moving.</p>    
    
    <p>Would you like to rest a moment to tend to your wounds as your mother has taught you?</p>
        
    <input type="submit" id="rest-and-heal" value="Rest">
    
    <input type="submit" id="start-chapter-three-five" value="Continue">`;

  var restAndHeal = document.querySelector("#rest-and-heal");
  restAndHeal.addEventListener(
    "click",
    function () {
      regenerateHP(
        finalCharacter.specialty.healthPoints,
        finalCharacter.specialty.maxHealthPoints
      );
    },
    false
  );

  var startChapterThreeFive = document.querySelector(
    "#start-chapter-three-five"
  );
  startChapterThreeFive.addEventListener(
    "click",
    continueChapterThreeFive,
    false
  );
}

//RESTING

function regenerateHP(hp, maxHP) {
  let completeHealing = function () {
    let finishedRegeneratingHP = document.getElementById("dialogue");
    finishedRegeneratingHP.innerHTML = `
        <p>You are rested.</p>        
        <input type="submit" id="start-chapter-three-five" value="Continue"></input>
        `;

    let startChapterThreeFive = document.querySelector(
      "#start-chapter-three-five"
    );

    startChapterThreeFive.addEventListener(
      "click",
      continueChapterThreeFive,
      false
    );
  };

  var removeMonsterInfo = document.querySelector("#monster-info");
  removeMonsterInfo.innerHTML = ` `;

  var restAndHealRemove = document.querySelector("#rest-and-heal");
  restAndHealRemove.remove();

  let pauseStartChapterThreeFive = document.querySelector(
    "#start-chapter-three-five"
  );
  pauseStartChapterThreeFive.remove();

  regenerating(hp, maxHP);

  function regenerating(hp, maxHP) {
    if (hp === maxHP) {
      finalCharacter.specialty.healthPoints =
        finalCharacter.specialty.maxHealthPoints;
      continueChapterThreeFive();
      completeHealing();
    } else {
      hp += 1;      

      let updateCharacterHPGuage = document.querySelector(
        ".hitpoint-guage-value-current"
      );
      updateCharacterHPGuage.textContent = hp;

      let characterHPGuageDashoffset =
        document.querySelector(".circle-hitpoints");

      let characterHPGuageRatio =
        90 +
        (320 / finalCharacter.specialty.maxHealthPoints) *
          (finalCharacter.specialty.maxHealthPoints - hp);

      if (characterHPGuageRatio <= 90) {
        characterHPGuageRatio = 90;
      }

      characterHPGuageDashoffset.style.strokeDashoffset = characterHPGuageRatio;

      let regenerationDialogue = document.getElementById("dialogue");
      regenerationDialogue.innerHTML = `
                <p>Resting...</p>
                `;

      setTimeout(function () {
        regenerating(hp, maxHP);
      }, 500);
    }
  }
}

//CHAPTER THREE FIVE

function continueChapterThreeFive() {
  window.scrollTo(0, 0);

  var removeMonsterInfo = document.querySelector("#monster-info");
  removeMonsterInfo.innerHTML = ` `;

  var chapterThreeFiveDialogue = document.getElementById("dialogue");
  chapterThreeFiveDialogue.innerHTML = `
    <p>You continue down the path towards the farm. While you are walking towards the farm, you glance around and take in the sight around you.
    You don't travel this far often. Normally, you may travel to Gryphon's Keep to buy goods that you can't find in your village. You definitely
    haven't travelled beyond the farm you are headed to. Even though some of your thoughts wander to worrying about travelling farther than
    you have in the past, you know that you will be okay and you are reassured by your own thoughts and knowledge that you are capable of doing
    this. Besides, there is also a tinge of exitement!        
    </p>
    
    <input type="submit" id="start-chapter-three-six" value="Continue">    
    `;

  var startChapterThreeSix = document.querySelector("#start-chapter-three-six");
  startChapterThreeSix.addEventListener(
    "click",
    continueChapterThreeSix,
    false
  );
}

//CHAPTER THREE SIX

function continueChapterThreeSix() {
  window.scrollTo(0, 0);

  let chapterThreeSixDialogue = document.querySelector("#dialogue");
  chapterThreeSixDialogue.innerHTML = `
    <p>After walking for about 30 minutes, you finally can see the farmhouse in the distance. You being to approach the farmhouse and start to notice 
    it and the property it is located on. You walk up to the farmhouse: a large - but noticeably worn down - structure, with several other outlying 
    buildings randomly located in some of the adjacent fields. The smells of hay and cow manure fill the air and you can see the heavily worn dirt 
    paths on the ground where people walk. One path leads to a small hut-like structure, a simple shed really, where you can see some goats moving
    about. Another larger structure appears to be a barn, and as you listen, you can hear the shuffling of horses in the stalls on the inside. What do you do?
    </p>
    
    <input type="submit" id="farmhouse-door" value="Knock">
    
    <input type="submit" id="start-chapter-five" value="Continue">`;

  let knockFarmhouse = document.querySelector("#farmhouse-door");
  knockFarmhouse.addEventListener(
    "click",
    function () {
      continueChapterFour();
      //regenerateHP(finalCharacter.specialty.healthPoints, finalCharacter.specialty.maxHealthPoints)
    },
    false
  );

  var startChapterFive = document.querySelector("#start-chapter-five");
  startChapterFive.addEventListener("click", continueChapterFive, false);
}

function continueChapterThreeSeven() {
  window.scrollTo(0, 0);

  let chapterThreeSevenDialogue = document.getElementById("dialogue");
  chapterThreeSevenDialogue.innerHTML = `
    <p>         
    </p>     
    `;
}

function continueChapterFour() {
  window.scrollTo(0, 0);

  let chapterFourDialogue = document.getElementById("dialogue");
  chapterFourDialogue.innerHTML = `
    <p>You decide to knock on the door. You can see how the wooden door shutters when you strike your hand against it. As you wait for an 
    answer, you glance at the building and take notice to its shape and construction. The farmhouse appears to be imprecisely built, made
    up of irregulary-shaped boards and lumber. Despite its uneven build, it does look sturdy and well built - suited for a place far
    from the town. You can see and smell the smoke from the fireplace and as you glance around, you notice movement through the window and
    hear footsteps walking along the creaky boards. When the footsteps get closer, they stop, and then you hear a latch sliding, and the 
    creak of the door as the hinges seem to whine when the door opens. An elderly man appears in the door. He is shorter than you, but
    you can tell that in his youth, he was likely a very strong man. Now, he has a weathered face, white hair, and caloused hands.
    
    <br>
    <br>
    
    "Can I help you?"

    <br>
    <br>

    As he waits for your reply, you can tell that he gives you a cursory once over, looking you up and down quickly to see if you are a 
    threat.
    </p>     
    `;

  if (finalCharacter.achievements.killedFarmWolves) {
    chapterFourDialogue.innerHTML += `
        <p>You reply, "I killed a wolf that attacked a sheep down the path and was wondering if the sheep belonged to you. If so, that
        wolf won't be a threat to you anymore. Do you see many wolves around here?"</p>

        <input type="submit" id="continueChapt4-yesWolvesAchievement" value="Continue">`;

    let contChaptFourThree = document.querySelector(
      "#continueChapt4-yesWolvesAchievement"
    );
    contChaptFourThree.addEventListener(
      "click",
      continueChapterFourThree,
      false
    );
  } else {
    chapterFourDialogue.innerHTML += `
        <p>You reply, "I just saw two wolves eating a dead sheep down the path. Do you see many wolves around here?"</p>

        <input type="submit" id="continueChapt4-noWolvesAchievement" value="Continue">`;

    let contChaptFourTwo = document.querySelector(
      "#continueChapt4-noWolvesAchievement"
    );
    contChaptFourTwo.addEventListener("click", continueChapterFourTwo, false);
  }
}

function continueChapterFourThree() {
  window.scrollTo(0, 0);

  let chapterFourTwoThreeDialogue = document.getElementById("dialogue");
  chapterFourTwoThreeDialogue.innerHTML = `
    <p>Upon hearing your words, the farmer says, "Thank you, adventurer! I have had a lot of trouble with the dire wolves lately, and sadly
    I am too old to take care of them myself.  They have been eating my livestock.  This is so strange to see dire wolves in this area, and 
    it has reduced the amount of meat I can provide to the inn and markets at Gryphon's Keep.  This is how I make a living now-a-day.  As 
    appreciation for your troubles, please come in and rest a bit, surely that fight must have worn you down a little bit, and looking at
    those cuts on your arms, you could use some healing."</p>

    <input type="submit" id="enter-farmhouse" value="Enter Farmhouse">

    <input type="submit" id="leave-farmhouse" value="Decline to Enter">

    `;
  let enterFarmhouse = document.querySelector("#enter-farmhouse");
  enterFarmhouse.addEventListener("click", continueChapterFourThreeOne, false);

  let declineToEnter = document.querySelector("#leave-farmhouse");
  declineToEnter.addEventListener("click", continueChapterFourThreeTwo, false);
}

function continueChapterFourThreeOne() {
  window.scrollTo(0, 0);

  let chapterFourThreeFourOneDialogue = document.getElementById("dialogue");
  chapterFourThreeFourOneDialogue.innerHTML = `
    <p>You decide to take the farmer up on his offer to help.  "Come in", he says.  You follow him as he escorts you to the kitchen. "Please,
    have a seat."  As you sit down at the the wooden table, he calls his wife over, asks her to get some field dressing for your wounds.  The
    farmer begins to prepare some tea, and his wife returns with some bandages and herbal ointments.  While the tea is cooking and his wife 
    is applying some ointments, he walks over to his cabinet and brings you some cheese and bread. "I know it's not much," he says, "but 
    this should fill you up a little bit for the rest of your trip."</p>
    
    <input type="submit" id="farmhouse-rest" value="Drink tea and eat">
    `;
  let farmhouseResting = document.querySelector("#farmhouse-rest");
  farmhouseResting.addEventListener(
    "click",
    continueChapterFourThreeThree,
    false
  );
}

function continueChapterFourThreeTwo() {
  window.scrollTo(0, 0);

  let chapterFourThreeFourOneDialogue = document.getElementById("dialogue");
  chapterFourThreeFourOneDialogue.innerHTML = `
    <p>You decide to focus on your mission and not to get caught up in small talk with the farmer, afterall, what could an old farmer 
    possibly do to help you on this journey? You politely decline to enter, and say goodbye to the old man and then continue along
    your adventure.</p>
    
    <input type="submit" id="bypass-farm" value="Continue">
    
    `;

  let beginChapterFive = document.querySelector("#bypass-farm");
  beginChapterFive.addEventListener("click", continueChapterFive, false);
}

function continueChapterFourThreeThree() {
  window.scrollTo(0, 0);

  let chapterFourThreeThreeDialogue = document.querySelector("#dialogue");
  chapterFourThreeThreeDialogue.innerHTML = `<p>As you drink tea and eat, you can already notice the tingling of the ointments on your arms as they being to heal your wounds.</p>
    `;

  function farmhouseResting(hp, maxHP) {
    if (hp === maxHP) {
      finalCharacter.specialty.healthPoints =
        finalCharacter.specialty.maxHealthPoints;
      chapterFourThreeThreeDialogue.innerHTML += `
            <input type="submit" id="start-chapt-five" value="Continue">`;

      let continueChapterFive = document.querySelector("#start-chapt-five");
      continueChapterFive.addEventListener(
        "click",
        continueChapterFourThreeFour,
        false
      );

      //continueChapterThreeFive();
      //completeHealing();
    } else {
      hp += 1;      

      let updateCharacterHPGuage = document.querySelector(
        ".hitpoint-guage-value-current"
      );
      updateCharacterHPGuage.textContent = hp;

      let characterHPGuageDashoffset =
        document.querySelector(".circle-hitpoints");

      let characterHPGuageRatio =
        90 +
        (320 / finalCharacter.specialty.maxHealthPoints) *
          (finalCharacter.specialty.maxHealthPoints - hp);

      if (characterHPGuageRatio <= 90) {
        characterHPGuageRatio = 90;
      }

      characterHPGuageDashoffset.style.strokeDashoffset = characterHPGuageRatio;

      setTimeout(function () {
        farmhouseResting(hp, maxHP);
      }, 500);
    }
  }

  farmhouseResting(
    finalCharacter.specialty.healthPoints,
    finalCharacter.specialty.maxHealthPoints
  );
}

function continueChapterFourThreeFour() {
  window.scrollTo(0, 0);

  let chapterFourThreeFourDialogue = document.querySelector("#dialogue");
  chapterFourThreeFourDialogue.innerHTML = `
    <p>You, the farmer, and his wife talk about the wolves and he tells you that this is the first time he has seen dire wolves in 
    the area for decades. The farmer continues, "I've even heard the farm helpers mention that they've seen and heard some strange
    shadows and noises coming from the forerst. I'm not sure if they are just playing jokes trying to scare each other, but if you
    are headed that way, I recommend being careful.</p>`;

  if (finalCharacter.achievements.spokeToRaynard) {
    chapterFourThreeFourDialogue.innerHTML += `
        <p>You thank the farmer and his wife for their hospitality, tea, and food. As you say your thanks, you hand them the coin that
        Raynard provided to you back at the Blue Blade Inn. You tell the farmer, "On my way here, I came across a man named Raynard.
        He mentioned he knew who you were and asked me to give this to you, if I came across you."</p>
        
        <p>The farmer smiles and looks at you.</p>
        
        <input type="submit" id="give-coin-to-farmer" value="Continue">        
        `;

    let contChaptFourTwoOne = document.querySelector("#give-coin-to-farmer");
    contChaptFourTwoOne.addEventListener(
      "click",
      continueChapterFourTwoOne,
      false
    );
  } else {
    chapterFourThreeFourDialogue.innerHTML += `
        <p>You thank the farmer and his wife for their hospitality, tea, and food. You let them know you must be going to travel as
        far as you can by foot before it gets dark out. They thank you again, and bid you safe travels as they escort you to the 
        front door so you can continue your journey. You exit the farmhouse, grateful for having met the couple and return to the path.</p>
        
        <input type="submit" id="return-to-path" value="Continue"> 
        `;

    let beginChapterFive = document.querySelector("#return-to-path");
    beginChapterFive.addEventListener("click", continueChapterFive, false);
  }
}

function continueChapterFourTwo() {
  window.scrollTo(0, 0);

  let chapterFourTwoDialogue = document.querySelector("#dialogue");

  chapterFourTwoDialogue.innerHTML = `
        </p>"Yes, there has been several strange occurances of dire wolves showing up lately. This is so odd for around here, I haven't
        seen these types of wolves in this area for decades.
        `;

  if (finalCharacter.achievements.spokeToRaynard) {
    chapterFourTwoDialogue.innerHTML += `
        <p>You thank the farmer for his time, and mention that after speaking to Raynard, the owner of the Blue Blade Inn, he handed you this coin
        to give to the farmer in the event you run into him. You hand the coin to the farmer, and when he looks at it, you see a gleam in his
        eyes.</p> 
        
        <input type="submit" id="continueChapt4-2-noWolvesAchievement" value="Continue">`;

    let contChaptFourTwoOne = document.querySelector(
      "#continueChapt4-2-noWolvesAchievement"
    );
    contChaptFourTwoOne.addEventListener(
      "click",
      continueChapterFourTwoOne,
      false
    );
  } else {
    chapterFourTwoDialogue.innerHTML += `
        <p>You thank the farmer for his time, and let him know you are just passing through and will be on your way. You exchange goodbyes and continue
        along your journey.</p> 
        
        <input type="submit" id="continue-chapt-5" value="Continue">`;

    let beginChapterFive = document.querySelector("#continue-chapt-5");
    beginChapterFive.addEventListener("click", continueChapterFive, false);
  }
}

function continueChapterFourTwoOne() {
  window.scrollTo(0, 0);

  let giveAwayRaynardsCoin = finalCharacter.inventory.indexOf(raynardsCoin);
  alert(`You gave away ${finalCharacter.inventory[giveAwayRaynardsCoin].name}`);

  let findRaynardsCoin = finalCharacter.inventory.indexOf(raynardsCoin);
  finalCharacter.inventory.splice(findRaynardsCoin, 1);
  document.querySelector("#normal-equipment-list").innerHTML = ``;

  for (let i = 0; i < finalCharacter.inventory.length; i++) {
    //re-adding tooltips to regenerated inventory list//
    let addedItemSpan = document.createElement("span");
    addedItemSpan.innerHTML = `<span class="supply-item-tooltiptext">Desc: ${finalCharacter.inventory[i].description}<br>
          Qty: ${finalCharacter.inventory[i].qty}<br>
          </span>
          `;

    let newID = finalCharacter.inventory[i].dataName;
    addedItemSpan.setAttribute("id", newID);
    addedItemSpan.classList.add("supply-item-tooltip");
    let itemSpanBreak = document.createElement("br");
    addedItemSpan.appendChild(itemSpanBreak);
    let newTextName = finalCharacter.inventory[i].name;
    let addedItemTextNode = document.createTextNode(newTextName);
    addedItemSpan.prepend(addedItemTextNode);

    let itemList = document.querySelector("#normal-equipment-list");
    itemList.appendChild(addedItemSpan);

    //end re-adding tooltips

    // let giveRaynardsCoin = document.querySelector("#normal-equipment-list");
    // giveRaynardsCoin.innerHTML += `${finalCharacter.inventory[i].name} <br>`;
  }

  let chapterFourTwoOneDialogue = document.querySelector("#dialogue");
  chapterFourTwoOneDialogue.innerHTML = `
    <p>"So, you know Raynard?  If you gave you this coin, it can only mean that he trusts you.  Wait here one moment..."  The farmer walks away
    for a moment and then returns with a long object wrapped in an old blanket.  You can tell the blanket is covered in dust, protecting 
    whatever is inside.  The blanket is tied up with some twing and a leather strap.  He hands you the object, and begins to speak:</p>

    <p>"Me and Raynard used to adventure together in our youth.  This weapon is what i used during my adventures.  It treated me well, and 
    never failed.  Unfortunately, during one journey, I was wounded badly.  I returned to Gryphon's Keep, with the help of Raynard.  Had he
    not helped me, I would have died on the way back before reaching the town.  I owe Raynard my life.  Please take this and make good use
    of it, I cannot use it any longer."</p>

    <p>You take the gift, and farmer walks you to his door to escort you back to your journey.  You exchnage goodbyes, thank him for all he
    has done, and exit the farmhouse to continue on.</p>
     
    <input type="submit" id="start-chapt-five" value="Continue">`;

  if (finalCharacter.specialty === warrior) {
    //resetting weapon damage to account for strength adjustment
    finalCharacter.weapon = twoHandedBroadSword;
  } else if (finalCharacter.specialty === thief) {
    finalCharacter.weapon = longBow;
  } else if (finalCharacter.specialty === cleric) {
    finalCharacter.weapon = warHammer;
  } else if (finalCharacter.specialty === halfling) {
    finalCharacter.weapon = shortSword;
  } else if (finalCharacter.specialty === dwarf) {
    finalCharacter.weapon = normalSword;
  } else if (finalCharacter.specialty === highMage) {
    finalCharacter.weapon = silverDagger;
  } else if (finalCharacter.specialty === elf) {
    finalCharacter.weapon = longBow;
  } else {
    finalCharacter.weapon = finalCharacter.weapon;
  }

  //finalCharacter.weapon.damage = finalCharacter.weapon.damage + finalCharacter.attributes[0].adjustment;

  let beginChapterFive = document.querySelector("#start-chapt-five");
  beginChapterFive.addEventListener("click", continueChapterFive, false);
  beginChapterFive.addEventListener("click", () =>
    alert(`You received ${finalCharacter.weapon.name}`)
  );
}

function continueChapterFive() {
  window.scrollTo(0, 0);

  let updatedCharWeapon = document.querySelector("#char-weapon");
  updatedCharWeapon.innerHTML = `
    Weapon:
    <span class="weapon-tooltip"> 
      <span class="character-display-info">${finalCharacter.weapon.name}</span>
      <span class="weapon-tooltiptext">Damage: ${finalCharacter.weapon.damage}</span>
    </span>
    `;

  let chapterFiveDialogue = document.querySelector("#dialogue");
  chapterFiveDialogue.innerHTML = `
    <p>You continue along the path from the farmhouse and anxiously head towards the forest.</p>

    <input type="submit" id="test-chapter" value="Continue">
    `;

  let continueTestChapter = document.querySelector("#test-chapter");
  continueTestChapter.addEventListener("click", beginTestChapter, false);
}

function beginTestChapter() {
  window.scrollTo(0, 0);

  var chapterThreeSixDialogue = document.getElementById("dialogue");
  chapterThreeSixDialogue.innerHTML = `
    <p>As you approach the forest, you hear some rusltling and grunting noises - you get attacked!!          
    </p>
        
    <input type="submit" id="attack-goblins" value="Attack">     
    `;

  var attackWolvesYes = document.querySelector("#attack-goblins");
  attackWolvesYes.addEventListener("click", () => {
    addingFightModule(fireBeetle, bugBear, continueChapterSix);
    declareAttack();
  });
}

function continueChapterSix() {
  window.scrollTo(0, 0);

  let chapterSixDialogue = document.getElementById("dialogue");
  chapterSixDialogue.innerHTML = `
    <p>You continue into the forest.          
    </p>
            
    `;
}
