export function createNextDialogue(chapter, dialogueToCreate) {
  dialogue.textContent = "";
  let dialogueDiv = document.createElement("div");
  dialogueDiv.id = `dialogue-div-${chapter}`;
  dialogueDiv.textContent = dialogueToCreate;
  dialogue.appendChild(dialogueDiv);  
};

export function createContinueButton(chapter, eventToAdd, buttonContent) {
  let newButton = document.createElement("button");
  newButton.id = `button-${chapter}`;
  newButton.type = "button";
  newButton.textContent = `${buttonContent}`;  
  newButton.classList.add("new-continue-button");  
  newButton.addEventListener(
    "click",
    function () {
      newButton.remove();
      createDialogueDiv(eventToAdd);
    },
    false
  );
  return newButton; 
};

export function continueTextAnimation(chapterText) {
  let newText = chapterText;
  if (dialogueIterator < newText.length) {
    dialogue.textContent += newText.charAt(dialogueIterator);
    dialogueIterator++;
    setTimeoutArray.push(setTimeout(function() {continueAnimation(newText)}, typingSpeed));
  } else {
    for (let i = 0; i < setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    setTimeoutArray = [];
    // addIntroContinueButton();
    //createButton(nextDialogue);
  }  
}

export * as Utilities from "./utilityFunctions.js";