export function createNextDialogue(chapter, eventToAdd, dialogueDiv, nextDialogue) {
  dialogueDiv.textContent = "";  
  let nextDialogueDiv = document.createElement('div');
  nextDialogueDiv.id = `dialogue-div-${chapter}`;
  nextDialogueDiv.textContent = nextDialogue;
  dialogueDiv.appendChild(nextDialogueDiv);  
};

export function createContinueButton(chapter, eventToAdd, buttonContent, dialogueDiv, nextDialogue) {
  let newButton = document.createElement("button");
  newButton.id = `button-${chapter}`;
  newButton.type = "button";
  newButton.textContent = `${buttonContent}`;  
  newButton.classList.add("new-continue-button");  
  newButton.addEventListener(
    "click",
    function () {
      newButton.remove();
      createNextDialogue(chapter, eventToAdd, dialogueDiv, nextDialogue);
    },
    false
  );
  dialogue.appendChild(newButton); 
};

export function continueTextAnimation(chapterText, setTimeoutArray, dialogueIterator, typingSpeed, dialogueDiv, nextDialogue) {
  
  if (dialogueIterator < chapterText.length) {
    dialogue.textContent += chapterText.charAt(dialogueIterator);
    dialogueIterator++;
    setTimeoutArray.push(setTimeout(function() {continueTextAnimation(chapterText, setTimeoutArray, dialogueIterator, typingSpeed, dialogueDiv, nextDialogue)}, typingSpeed));
  } else {
    for (let i = 0; i < setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    setTimeoutArray = [];
    createContinueButton(1.1, "", "Continue", dialogueDiv, nextDialogue);
    // addIntroContinueButton();
    //createButton(nextDialogue);
  }  
}

export * as Utilities from "./utilityFunctions.js";