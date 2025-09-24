export function createNextDialogue(dialogueToCreate) {
  dialogue.textContent = "";
  let dialogueDiv = document.createElement("div");
  dialogueDiv.id = `dialogue-div-${continueButtonSequence}`;
  dialogueDiv.textContent = dialogueToCreate;
  dialogue.appendChild(dialogueDiv);  
};

export function createContinueButton(eventToAdd) {
  let newButton = document.createElement("button");
  newButton.id = `button-${buttonIterator}`;
  newButton.type = "button";
  newButton.textContent = `Continue ${buttonIterator}`;
  newButton.style.display = "block";
  newButton.addEventListener(
    "click",
    function () {
      createDialogueDiv(eventToAdd);
    },
    false
  );
  // let lineBreak = document.createElement('br');
  // let appDiv = document.getElementById("dialogue");
  // appDiv.appendChild(lineBreak);
  // appDiv.appendChild(newButton);
  buttonIterator++;
  continueButtonSequence++;
  return newButton; 
};

export function continueTextAnimation() {
  let newText = nextChapterText;
  if (dialogueIterator < newText.length) {
    dialogue.textContent += newText.charAt(dialogueIterator);
    dialogueIterator++;
    setTimeoutArray.push(setTimeout(function() {continueAnimation(newText)}, typingSpeed));
  } else {
    console.log('test')
    for (let i = 0; i < setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    setTimeoutArray = [];
    // addIntroContinueButton();
    createButton(nextDialogue);
  }  
}

export * as Utilities from "./utilityFunctions.js";