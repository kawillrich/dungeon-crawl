export function continueTextAnimation(
  chapterText, 
  setTimeoutArray, 
  dialogueIterator, 
  typingSpeed, 
  dialogueDiv, 
  nextDialogue, 
  nextChapter) {
  if (dialogueIterator < chapterText.length) {
    dialogue.textContent += chapterText.charAt(dialogueIterator);
    dialogueIterator++;
    setTimeoutArray.push(setTimeout(function() {continueTextAnimation(
      chapterText, 
      setTimeoutArray, 
      dialogueIterator, 
      typingSpeed, 
      dialogueDiv, 
      nextDialogue, 
      nextChapter)}, typingSpeed));
  } else {
    for (let i = 0; i < setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    setTimeoutArray = [];
    createContinueButton(
      1.1, 
      nextChapter, 
      "Continue", 
      dialogueDiv, 
      nextDialogue);    
  }  
}

export function createContinueButton(
  chapter, 
  nextChapter, 
  buttonContent, 
  dialogueDiv, 
  nextDialogue) {
    let containerDiv = document.querySelector('#container');
    let newButton = document.createElement("button");
    newButton.id = `button-${chapter}`;
    newButton.type = "button";
    newButton.textContent = `${buttonContent}`;  
    newButton.classList.add("new-continue-button"); 
    newButton.addEventListener(
      "click",
      function () {
        newButton.remove();
        createNextDialogue(
          chapter, 
          nextChapter, 
          nextDialogue, 
          dialogueDiv
        );      
      },
      false
    );
    containerDiv.appendChild(newButton); 
    console.log(dialogueDiv)
};

export function createNextDialogue(
  chapter, 
  nextChapter, 
  nextDialogue, 
  dialogueDiv) {
    console.log(nextChapter);
    console.log(dialogueDiv);
    dialogueDiv.textContent = "";  
    let nextDialogueDiv = document.createElement('div');
    nextDialogueDiv.id = `dialogue-div-${chapter}`;
    dialogueDiv.appendChild(nextDialogueDiv);  
    nextChapter(
      nextDialogue, 
      [], 
      0, 
      3, 
      dialogueDiv,
      nextDialogue, 
      nextChapter
  );
};

export * as Utilities from "./utilityFunctions.js";