let selectedNum = 0;
let previousNum = 0;
const notes = ['g3','gs3','ab3','a3','as3','bb3','b3','c4','cs4','db4','d4','ds4','eb4','e4','f4','fs4','gb4','g4','gs4','ab4','a4','as4','bb4','b4','c5','cs5','db5','d5','ds5','eb5','e5','f5','fs5','gb5','g5','gs5','ab5','a5','as5','bb5','b5'];
const trumpetNotesDictionary = {g3:5,gs3:3,ab3:3,a3:6,as3:4,bb3:4,b3:2,c4:0,cs4:7,db4:7,d4:5,ds4:3,eb4:3,e4:6,f4:4,fs4:2,gb4:2,g4:0,gs4:3,ab4:3,a4:6,as4:4,bb4:4,b4:2,c5:0,cs5:6,db5:6,d5:4,ds5:6,eb5:2,e5:0,f5:4,fs5:2,gb5:2,g5:0,gs5:3,ab5:3,a5:6,as5:4,bb5:4,b5:2};
const everyNote = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
const wholeNotes = [0,3,6,7,10,13,14,17,20,23,24,27,30,31,34,37,40];
const sharpsAndFlatNotes = [1,2,4,5,8,9,11,12,15,16,18,19,21,22,25,26,28,29,32,33,35,36,38,39];
const basicCScale = [7,10,13,14,17,20,23,24];
const cScaleExt1 = [0,3,6,7,10];
const cScaleExt2 = [24,27,30,31,34];
const fullCScaleRange = [0,3,6,7,10,13,14,17,20,23,24,27,30,31,34];
let askableNotes = everyNote
const key1 = document.getElementById("key1");
let key1down = false;
const key2 = document.getElementById("key2");
let key2down = false;
const key3 = document.getElementById("key3");
let key3down = false;
const testelement = document.getElementById("test");
const resultPColor = document.getElementById("result");
const key1pic = document.getElementById("key1pic");
const key2pic = document.getElementById("key2pic");
const key3pic = document.getElementById("key3pic");
const notePic = document.getElementById("notePic");
const startButton = document.getElementById("startButton");
const retryButton = document.getElementById("retryButton");
retryButton.style.display = 'none';
const wholeNoteButton = document.getElementById("wholeNoteButton");
wholeNoteButton.style.display = 'none';
const sharpsFlatNotesButton = document.getElementById("sharpsflatsNoteButton");
sharpsFlatNotesButton.style.display = 'none';
const allNotesButton = document.getElementById("allNotesButton");
allNotesButton.style.display = 'none';
const basicCScaleButton = document.getElementById("basicCScaleButton");
basicCScaleButton.style.display = 'none';
const cScaleExt1Button = document.getElementById("cScaleExt1Button");
cScaleExt1Button.style.display = 'none';
const cScaleExt2Button = document.getElementById("cScaleExt2Button");
cScaleExt2Button.style.display = 'none';
const fullCScaleRangeButton = document.getElementById("fullCScaleRangeButton");
fullCScaleRangeButton.style.display = 'none';
let timer = 60;
let hasStarted = false
let pp = false;
let keyBdown = false;
let selectedInt = 0;
let num = 0;
let guesses = 0;
let correctGuesses = 0;

document.addEventListener('keydown', (event) => {
        if (event.key === 'j') {
          if (!key1down) {
            key1down = true;
          }
        }
        if (event.key === 'k') {
          if (!key2down) {
            key2down = true;
          }
        }
        if (event.key === 'l') {
          if (!key3down) {
            key3down = true;
          }
        }
        if (event.key === 'b') {
          if (!keyBdown) {
            keyBdown = true;
            checkResult();
          }
        }
        getKeys();
        //document.getElementById("num").innerHTML = selectedInt;
    });

document.addEventListener('keyup', (event) => {
        if (event.key === 'j') {
          key1down = false;
          //updateSelectedInt(-4);
        }
        if (event.key === 'k') {
          key2down = false;
          //updateSelectedInt(-2);
        }
        if (event.key === 'l') {
          key3down = false;
          //updateSelectedInt(-1);
        }
        if (event.key === 'b') {
          keyBdown = false;
        }
        getKeys();
    });







function startup() {
  document.getElementById("finalResult").innerHTML = "";
  startButton.style.display = 'none';
  retryButton.style.display = 'none';
  hasStarted = true;
  wholeNoteButton.style.display = 'block';
  sharpsFlatNotesButton.style.display = 'block';
  allNotesButton.style.display = 'block';
  basicCScaleButton.style.display = 'block';
  cScaleExt1Button.style.display = 'block';
  cScaleExt2Button.style.display = 'block';
  fullCScaleRangeButton.style.display = 'block';
} 

function onWholeNoteButtonClick() {
  askableNotes = wholeNotes;
  startTimer();
  main();
}

function onSharpsFlatsButtonClick() {
  askableNotes = sharpsAndFlatNotes;
  startTimer();
  main();
}

function onAllNoteButtonClick() {
  askableNotes = everyNote;
  startTimer();
  main();
}

function onBasicCScaleButtonButtonClick() {
  askableNotes = basicCScale;
  startTimer();
  main();
}

function onCScaleExt1ButtonClick() {
  askableNotes = cScaleExt1;
  startTimer();
  main();
}

function onCScaleExt2Button() {
  askableNotes = cScaleExt2;
  startTimer();
  main();
}

function onFullCScaleRangeButtonClick() {
  askableNotes = fullCScaleRange;
  startTimer();
  main();
}

function main() {
  wholeNoteButton.style.display = 'none';
  sharpsFlatNotesButton.style.display = 'none';
  allNotesButton.style.display = 'none';
  basicCScaleButton.style.display = 'none';
  cScaleExt1Button.style.display = 'none';
  cScaleExt2Button.style.display = 'none';
  fullCScaleRangeButton.style.display = 'none';
  startButton.style.display = 'none';
  selectedNum = askableNotes[Math.floor(Math.random() * askableNotes.length)];


  //document.getElementById("selected note").innerHTML = notes[selectedNum];
  getKeys();
  updateNotePic();
  resetResult();
}  

function getKeys() {
  selectedInt = 0;
  if (key1down) {
    selectedInt += 4;
  }
  if (key2down) {
    selectedInt += 2;
  }
  if (key3down) {
    selectedInt += 1;
  }
  updateKeyPic();
  //document.getElementById("num").innerHTML = selectedInt;
}

function updateKeyPic() {
  key1pic.src = ""
  key2pic.src = ""
  key3pic.src = ""
  if (hasStarted) {
    if (key1down) {
      key1pic.src ="key down.png";
    } else {
      key1pic.src ="key up.png";
    }
    if (key2down) {
      key2pic.src ="key down.png";
    } else {
      key2pic.src ="key up.png";
    }
    if (key3down) {
      key3pic.src ="key down.png";
    } else {
      key3pic.src ="key up.png";
    }
  }
}

function updateNotePic() {
  notePic.src = notes[selectedNum] + ".png"
}

function checkResult() {
  guesses += 1;
  if (trumpetNotesDictionary[notes[selectedNum]] == selectedInt) {
    document.getElementById("result").innerHTML = "correct!";
    resultPColor.style.color = 'green';
    correctGuesses += 1;
    setTimeout(main, 100);
  } else {
    document.getElementById("result").innerHTML = "incorrect";
    resultPColor.style.color = 'red';
  }
}

function resetResult() {
  document.getElementById("result").innerHTML = "";
}

function numtonote(num) {
  return notes[num];
}

function trumpetNoteToNum(note) {
  return trumpetNotesDictionary[note]
}

function updateSelectedInt(num) {
  selectedInt += num;
  if (selectedInt < 0) {
    selectedInt = 0;
  }
  document.getElementById("num").innerHTML = selectedInt;
}

function playKey(keyNum) {
  if (keyNum == 1) {
    if (key1.checked) {
      selectedInt += 4;
    } else {
      selectedInt -= 4;
    }
  }
  if (keyNum == 2) {
    if (key2.checked) {
      selectedInt += 2;
    } else {
      selectedInt -= 2;
    }
  }
  if (keyNum == 3) {
    if (key3.checked) {
      selectedInt += 1;
    } else {
      selectedInt -= 1;
    }
  }
  //document.getElementById("num").innerHTML = selectedInt;

}

function startTimer() {
  timer = 60;
  timerfunction();
}

function timerfunction() {
  document.getElementById("timer").innerHTML = timer;
  timer -= 1;
  if (timer >= 0) {
    setTimeout(timerfunction, 1000);
  } else {
    document.getElementById("timer").innerHTML = "end";
    timerEnd();
  }
}

function timerEnd() {
  notePic.src = "";
  key1pic.src = "";
  key2pic.src = "";
  key3pic.src = "";
  retryButton.style.display = 'block';
  hasStarted = false;
  resetResult();
  document.getElementById("finalResult").innerHTML = "Your score is " + correctGuesses + "/" + guesses + " or " + (100*correctGuesses/guesses).toFixed(1) + "%";
  guesses = 0;
  correctGuesses = 0;
}
