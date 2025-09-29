export function continueTextAnimation(chapterText, setTimeoutArray, dialogueIterator, typingSpeed, dialogueDiv, nextDialogue, nextChapter) {
  console.log(setTimeoutArray);
  if (dialogueIterator < chapterText.length) {
    dialogue.textContent += chapterText.charAt(dialogueIterator);
    dialogueIterator++;
    setTimeoutArray.push(setTimeout(function() {continueTextAnimation(chapterText, setTimeoutArray, dialogueIterator, typingSpeed, dialogueDiv, nextDialogue, nextChapter)}, typingSpeed));
  } else {
    for (let i = 0; i < setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    setTimeoutArray = [];
    createContinueButton(1.1, nextChapter, "Continue", dialogueDiv, nextDialogue);
    // addIntroContinueButton();
    //createButton(nextDialogue);
  }  
}

export function createContinueButton(chapter, nextChapter, buttonContent, dialogueDiv, nextDialogue) {
  let containerDiv = document.querySelector('#container');
  let newButton = document.createElement("button");
  newButton.id = `button-${chapter}`;
  newButton.type = "button";
  newButton.textContent = `${buttonContent}`;  
  newButton.classList.add("new-continue-button");  
  // newButton.style.gridArea = "footer";
  // newButton.style.gridRow = "5 / span 1";
  // newButton.style.gridColumn = "1 / span 1";
  // newButton.style.margin = "auto";
  newButton.addEventListener(
    "click",
    function () {
      newButton.remove();
      createNextDialogue(chapter, nextChapter, nextDialogue, dialogueDiv);
      
    },
    false
  );
  containerDiv.appendChild(newButton); 
};

export function createNextDialogue(chapter, nextChapter, nextDialogue, dialogueDiv) {
  console.log(nextDialogue);
  console.log(nextChapter);
  dialogueDiv.textContent = "";  
  let nextDialogueDiv = document.createElement('div');
  nextDialogueDiv.id = `dialogue-div-${chapter}`;
  nextDialogueDiv.textContent = nextDialogue;
  dialogueDiv.appendChild(nextDialogueDiv);  
  nextChapter(dialogueText, [], 0, 3, nextDialogue, nextChapter);
};

export * as Utilities from "./utilityFunctions.js";