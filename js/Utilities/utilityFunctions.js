export function continueTextAnimation(chapterConfig) {
  if (chapterConfig.dialogueIterator < chapterConfig.thisChapterDialogue.length) {
    chapterConfig.dialogueDiv.textContent += chapterConfig.thisChapterDialogue.charAt(chapterConfig.dialogueIterator);
    chapterConfig.dialogueIterator++;
    chapterConfig.setTimeoutArray.push(setTimeout(function() {continueTextAnimation(
      chapterConfig)}, chapterConfig.typingSpeed));
  } else {
    for (let i = 0; i < chapterConfig.setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    chapterConfig.setTimeoutArray = [];
    chapterConfig.dialogueIterator = 0;
    if (chapterConfig.buttonText !== "") {
      createContinueButton(chapterConfig);
    }
  }  
}

export function createContinueButton(
  chapterConfig) {
    if (chapterConfig.buttonText !== "") {
      let containerDiv = document.querySelector('#container');
      let newButton = document.createElement("button");
      newButton.id = `button-${chapterConfig.thisChapterNumber}`;
      newButton.type = "button";
      newButton.textContent = `${chapterConfig.buttonText}`;  
      newButton.classList.add("new-continue-button"); 
      newButton.addEventListener(
        "click",
        function () {
          newButton.remove();
          createNextDialogue(chapterConfig);      
        },
        false
      );
      containerDiv.appendChild(newButton); 
    }
    
};

export function createNextDialogue(chapterConfig) {    
    // let chapterIterator = 1;
    // let nextChapterFunction = "textDialogue" + chapterIterator;
    // let compiledNextChapter = functions[nextChapterFunction];    
    // console.log(nextChapter);
    console.log(chapterConfig.dialogueDiv);
    chapterConfig.dialogueDiv.textContent = "";  
    let nextDialogueDiv = document.createElement('div');
    nextDialogueDiv.id = `dialogue-div-${chapterConfig.thisChapterNumber}`;
    chapterConfig.dialogueDiv.appendChild(nextDialogueDiv);  
    chapterConfig.nextChapterFunction();  
};

export function continueTextAnimationWelcomeTitle(chapterConfig) {
    
  if (chapterConfig.dialogueIterator < chapterConfig.thisChapterDialogue.length) {
    chapterConfig.dialogueDiv.textContent += chapterConfig.thisChapterDialogue.charAt(chapterConfig.dialogueIterator);
    chapterConfig.dialogueIterator++;
    chapterConfig.setTimeoutArray.push(setTimeout(function() {continueTextAnimationWelcomeTitle(
      chapterConfig)}, chapterConfig.typingSpeed));
  } else {
    for (let i = 0; i < chapterConfig.setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    chapterConfig.setTimeoutArray = [];
    chapterConfig.dialogueIterator = 0;
    if (chapterConfig.buttonText !== "") {
      createContinueButton(chapterConfig);
    } 
  }  
}

export function createModal(modalConfig) {
  // modalConfig object:
  //   modalConfig = {
  //     id: "",
  //     class: "",
  //     buttonID: "",
  //     buttonClass: "",
  //     buttonText: "",
  //     modalText: ""
  //   }
  let newModal = document.createElement('dialog');
  if (modalConfig.id !== "") {
    newModal.setAttribute('id', modalConfig.id);
  }
  if (modalConfig.class !== "") {
    newModal.setAttribute('class', modalConfig.class);

  }
  
  let newModalCloseButton = document.createElement('button');
  newModalCloseButton.setAttribute('type', 'submit');

  if (modalConfig.buttonID !== "") {
    newModalCloseButton.setAttribute('id', modalConfig.buttonID);
  }

  if (modalConfig.buttonClass !== "") {
    newModalCloseButton.setAttribute('class', modalConfig.buttonClass);
  }

  newModalCloseButton.addEventListener('click', () => {
    newModal.close();
  });
  
  newModalCloseButton.textContent = modalConfig.buttonText;
  let newModalText = `<p>${modalConfig.modalText}</p>`;

  let gameBody = document.getElementsByTagName('body')[0];

  newModal.innerHTML = newModalText;
  newModal.appendChild(newModalCloseButton);
  gameBody.appendChild(newModal);

  newModal.showModal();
  modalConfig = {};
}

export * as Utilities from "./utilityFunctions.js";