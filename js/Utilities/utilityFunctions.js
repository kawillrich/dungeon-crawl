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
  newButton.style.display = "block";
  newButton.style.gridArea = "footer";
  newButton.style.alignItems = "center";
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