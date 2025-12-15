let selectedNum = 0;
let previousNum = 0;
let Hex = "#000000";
let gameContainerColor = [0, 0, 0];
let debugNum = 0;
const numToHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const notes = ['g3','gs3','ab3','a3','as3','bb3','b3','c4','cs4','db4','d4','ds4','eb4','e4','f4','fs4','gb4','g4','gs4','ab4','a4','as4','bb4','b4','c5','cs5','db5','d5','ds5','eb5','e5','f5','fs5','gb5','g5','gs5','ab5','a5','as5','bb5','b5'];
const trumpetNotesDictionary = {g3:5,gs3:3,ab3:3,a3:6,as3:4,bb3:4,b3:2,c4:0,cs4:7,db4:7,d4:5,ds4:3,eb4:3,e4:6,f4:4,fs4:2,gb4:2,g4:0,gs4:3,ab4:3,a4:6,as4:4,bb4:4,b4:2,c5:0,cs5:6,db5:6,d5:4,ds5:6,eb5:2,e5:0,f5:4,fs5:2,gb5:2,g5:0,gs5:3,ab5:3,a5:6,as5:4,bb5:4,b5:2};
const everyNote = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
const wholeNotes = [0,3,6,7,10,13,14,17,20,23,24,27,30,31,34,37,40];
const sharpsAndFlatNotes = [1,2,4,5,8,9,11,12,15,16,18,19,21,22,25,26,28,29,32,33,35,36,38,39];
const cScaleExc1 = [7, 10, 13, 14];
const cScaleExc2 = [17, 20, 23, 24];
const basiccScale = [7, 10, 13, 14, 17, 20, 23, 24];
const cScaleExt1 = [0, 3, 6, 7];
const cScaleExt2 = [27, 30, 31, 34, 37, 40];
const fullcScaleRange = [0, 3, 6, 7, 10, 13, 14, 17, 20, 23, 24, 27, 30, 31, 34, 37, 40];
const csScaleExc1 = [8, 11, 14, 15];
const csScaleExc2 = [18, 21, 24, 25];
const basiccsScale = [8, 11, 14, 15, 18, 21, 24, 25];
const csScaleExt1 = [1, 4, 7, 8];
const csScaleExt2 = [28, 31, 32, 35, 38];
const fullcsScaleRange = [1, 4, 7, 8, 11, 14, 15, 18, 21, 24, 25, 28, 31, 32, 35, 38];
const dScaleExc1 = [10, 13, 15, 17];
const dScaleExc2 = [20, 23, 25, 27];
const basicdScale = [10, 13, 15, 17, 20, 23, 25, 27];
const dScaleExt1 = [0, 3, 6, 8, 10];
const dScaleExt2 = [30, 32, 34, 37, 40];
const fulldScaleRange = [0, 3, 6, 8, 10, 13, 15, 17, 20, 23, 25, 27, 30, 32, 34, 37, 40];
const ebScaleExc1 = [12, 14, 17, 19];
const ebScaleExc2 = [22, 24, 27, 29];
const basicebScale = [12, 14, 17, 19, 22, 24, 27, 29];
const ebScaleExt1 = [0, 2, 5, 7, 10, 12];
const ebScaleExt2 = [31, 34, 36, 39];
const fullebScaleRange = [0, 2, 5, 7, 10, 12, 14, 17, 19, 22, 24, 27, 29, 31, 34, 36, 39];
const eScaleExc1 = [13, 15, 18, 20];
const eScaleExc2 = [23, 25, 28, 30];
const basiceScale = [13, 15, 18, 20, 23, 25, 28, 30];
const eScaleExt1 = [1, 3, 6, 8, 11, 13];
const eScaleExt2 = [32, 35, 37, 40];
const fulleScaleRange = [1, 3, 6, 8, 11, 13, 15, 18, 20, 23, 25, 28, 30, 32, 35, 37, 40];
const fScaleExc1 = [14, 17, 20, 22];
const fScaleExc2 = [24, 27, 30, 31];
const basicfScale = [14, 17, 20, 22, 24, 27, 30, 31];
const fScaleExt1 = [0, 3, 5, 7, 10, 13, 14];
const fScaleExt2 = [34, 37, 39];
const fullfScaleRange = [0, 3, 5, 7, 10, 13, 14, 17, 20, 22, 24, 27, 30, 31, 34, 37, 39];
const fsScaleExc1 = [15, 18, 21, 23];
const fsScaleExc2 = [25, 28, 31, 32];
const basicfsScale = [15, 18, 21, 23, 25, 28, 31, 32];
const fsScaleExt1 = [1, 4, 6, 8, 11, 14, 15];
const fsScaleExt2 = [35, 38, 40];
const fullfsScaleRange = [1, 4, 6, 8, 11, 14, 15, 18, 21, 23, 25, 28, 31, 32, 35, 38, 40];
const gScaleExc1 = [17, 20, 23, 24];
const gScaleExc2 = [27, 30, 32, 34];
const basicgScale = [17, 20, 23, 24, 27, 30, 32, 34];
const gScaleExt1 = [0, 3, 6, 7, 10, 13, 15, 17];
const gScaleExt2 = [37, 40];
const fullgScaleRange = [0, 3, 6, 7, 10, 13, 15, 17, 20, 23, 24, 27, 30, 32, 34, 37, 40];
const abScaleExc1 = [19, 22, 24, 26];
const abScaleExc2 = [29, 31, 34, 36];
const basicabScale = [19, 22, 24, 26, 29, 31, 34, 36];
const aScaleExc1 = [3, 6, 8, 10];
const aScaleExc2 = [13, 15, 18, 20];
const basicaScale = [3, 6, 8, 10, 13, 15, 18, 20];
const aScaleExt1 = [1, 3];
const aScaleExt2 = [23, 25, 27, 30, 32, 35, 37, 40];
const fullaScaleRange = [1, 3, 6, 8, 10, 13, 15, 18, 20, 23, 25, 27, 30, 32, 35, 37, 40];
const bbScaleExc1 = [5, 7, 10, 12];
const bbScaleExc2 = [14, 17, 20, 22];
const basicbbScale = [5, 7, 10, 12, 14, 17, 20, 22];
const bbScaleExt1 = [0, 3, 5];
const bbScaleExt2 = [24, 27, 29, 31, 34, 37, 39];
const fullbbScaleRange = [0, 3, 5, 7, 10, 12, 14, 17, 20, 22, 24, 27, 29, 31, 34, 37, 39];
const bScaleExc1 = [6, 8, 11, 13];
const bScaleExc2 = [15, 18, 21, 23];
const basicbScale = [6, 8, 11, 13, 15, 18, 21, 23];
const bScaleExt1 = [1, 4, 6];
const bScaleExt2 = [25, 28, 30, 32, 35, 38, 40];
const fullbScaleRange = [1, 4, 6, 8, 11, 13, 15, 18, 21, 23, 25, 28, 30, 32, 35, 38, 40];

let askableNotes = [];
const key1 = document.getElementById("key1");
let key1down = false;
const key2 = document.getElementById("key2");
let key2down = false;
const key3 = document.getElementById("key3");
let key3down = false;
const testelement = document.getElementById("test");
const help = document.getElementById("help");
const resultPColor = document.getElementById("result");
const key1pic = document.getElementById("key1pic");
const key2pic = document.getElementById("key2pic");
const key3pic = document.getElementById("key3pic");
const notePic = document.getElementById("notePic");

const flexContainers = document.querySelectorAll('.container');
const gameContainer = document.getElementById("gameContainer");
const allScaleChoicesContainer = document.getElementById("allScaleChoices");
const generalNotesContainer = document.getElementById("generalNotesContainer");
const cScaleContainer = document.getElementById("cScaleContainer");
const csScaleContainer = document.getElementById("csScaleContainer");
const dScaleContainer = document.getElementById("dScaleContainer");
const ebScaleContainer = document.getElementById("ebScaleContainer");
const eScaleContainer = document.getElementById("eScaleContainer");
const fScaleContainer = document.getElementById("fScaleContainer");
const fsScaleContainer = document.getElementById("fsScaleContainer");
const gScaleContainer = document.getElementById("gScaleContainer");
const abScaleContainer = document.getElementById("abScaleContainer");
const aScaleContainer = document.getElementById("aScaleContainer");
const bbScaleContainer = document.getElementById("bbScaleContainer");
const bScaleContainer = document.getElementById("bScaleContainer");

const retryButton = document.getElementById("retryButton");
retryButton.style.display = 'none';
const wholeNoteButton = document.getElementById("wholeNoteButton");
const sharpsFlatNotesButton = document.getElementById("sharpsflatsNoteButton");
const allNotesButton = document.getElementById("allNotesButton");
const basiccScaleButton = document.getElementById("basiccScaleButton");
const cScaleExt1Button = document.getElementById("cScaleExt1Button");
const cScaleExt2Button = document.getElementById("cScaleExt2Button");
const basiccsScaleButton = document.getElementById("basiccsScaleButton");
const csScaleExt1Button = document.getElementById("csScaleExt1Button");
const csScaleExt2Button = document.getElementById("csScaleExt2Button");
const basicdScaleButton = document.getElementById("basicdScaleButton");
const dScaleExt1Button = document.getElementById("dScaleExt1Button");
const dScaleExt2Button = document.getElementById("dScaleExt2Button");
const basicebScaleButton = document.getElementById("basicebScaleButton");
const ebScaleExt1Button = document.getElementById("ebScaleExt1Button");
const ebScaleExt2Button = document.getElementById("ebScaleExt2Button");
const basiceScaleButton = document.getElementById("basiceScaleButton");
const eScaleExt1Button = document.getElementById("eScaleExt1Button");
const eScaleExt2Button = document.getElementById("eScaleExt2Button");
const basicfScaleButton = document.getElementById("basicfScaleButton");
const fScaleExt1Button = document.getElementById("fScaleExt1Button");
const fScaleExt2Button = document.getElementById("fScaleExt2Button");
const basicfsScaleButton = document.getElementById("basicfsScaleButton");
const fsScaleExt1Button = document.getElementById("fsScaleExt1Button");
const fsScaleExt2Button = document.getElementById("fsScaleExt2Button");
const basicgScaleButton = document.getElementById("basicgScaleButton");
const gScaleExt1Button = document.getElementById("gScaleExt1Button");
const gScaleExt2Button = document.getElementById("gScaleExt2Button");
const basicabScaleButton = document.getElementById("basicabScaleButton");
const abScaleExt1Button = document.getElementById("abScaleExt1Button");
const abScaleExt2Button = document.getElementById("abScaleExt2Button");
const basicaScaleButton = document.getElementById("basicaScaleButton");
const aScaleExt1Button = document.getElementById("aScaleExt1Button");
const aScaleExt2Button = document.getElementById("aScaleExt2Button");
const basicbbScaleButton = document.getElementById("basicbbScaleButton");
const bbScaleExt1Button = document.getElementById("bbScaleExt1Button");
const bbScaleExt2Button = document.getElementById("bbScaleExt2Button");
const basicbScaleButton = document.getElementById("basicbScaleButton");
const bScaleExt1Button = document.getElementById("bScaleExt1Button");
const bScaleExt2Button = document.getElementById("bScaleExt2Button");

let timer = 60;
let hasStarted = false;
let pp = false;
let keyBdown = false;
let selectedInt = 0;
let num = 0;
let guesses = 0;
let correctGuesses = 0;
let incorrectGuessesStreak = 0;

document.addEventListener('keydown', (event) => {
        if (hasStarted) {
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
        }
    });

document.addEventListener('keyup', (event) => {
        if (hasStarted) {
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
        }
    });







function startup() {
  document.getElementById("finalResult").innerHTML = "";
  retryButton.style.display = 'none';
  hasStarted = true;
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

function oncScaleExc1ButtonClick() {
  askableNotes = cScaleExc1;
  startTimer();
  main();
}

function oncScaleExc2ButtonClick() {
  askableNotes = cScaleExc2;
  startTimer();
  main();
}

function onbasiccScaleButtonClick() {
  askableNotes = basiccScale;
  startTimer();
  main();
}

function oncScaleExt1ButtonClick() {
  askableNotes = cScaleExt1;
  startTimer();
  main();
}

function oncScaleExt2ButtonClick() {
  askableNotes = cScaleExt2;
  startTimer();
  main();
}

function onfullcScaleRangeButtonClick() {
  askableNotes = fullcScaleRange;
  startTimer();
  main();
}

function oncsScaleExc1ButtonClick() {
  askableNotes = csScaleExc1;
  startTimer();
  main();
}

function oncsScaleExc2ButtonClick() {
  askableNotes = csScaleExc2;
  startTimer();
  main();
}

function onbasiccsScaleButtonClick() {
  askableNotes = basiccsScale;
  startTimer();
  main();
}

function oncsScaleExt1ButtonClick() {
  askableNotes = csScaleExt1;
  startTimer();
  main();
}

function oncsScaleExt2ButtonClick() {
  askableNotes = csScaleExt2;
  startTimer();
  main();
}

function onfullcsScaleRangeButtonClick() {
  askableNotes = fullcsScaleRange;
  startTimer();
  main();
}

function ondScaleExc1ButtonClick() {
  askableNotes = dScaleExc1;
  startTimer();
  main();
}

function ondScaleExc2ButtonClick() {
  askableNotes = dScaleExc2;
  startTimer();
  main();
}

function onbasicdScaleButtonClick() {
  askableNotes = basicdScale;
  startTimer();
  main();
}

function ondScaleExt1ButtonClick() {
  askableNotes = dScaleExt1;
  startTimer();
  main();
}

function ondScaleExt2ButtonClick() {
  askableNotes = dScaleExt2;
  startTimer();
  main();
}

function onfulldScaleRangeButtonClick() {
  askableNotes = fulldScaleRange;
  startTimer();
  main();
}

function onebScaleExc1ButtonClick() {
  askableNotes = ebScaleExc1;
  startTimer();
  main();
}

function onebScaleExc2ButtonClick() {
  askableNotes = ebScaleExc2;
  startTimer();
  main();
}

function onbasicebScaleButtonClick() {
  askableNotes = basicebScale;
  startTimer();
  main();
}

function onebScaleExt1ButtonClick() {
  askableNotes = ebScaleExt1;
  startTimer();
  main();
}

function onebScaleExt2ButtonClick() {
  askableNotes = ebScaleExt2;
  startTimer();
  main();
}

function onfullebScaleRangeButtonClick() {
  askableNotes = fullebScaleRange;
  startTimer();
  main();
}

function oneScaleExc1ButtonClick() {
  askableNotes = eScaleExc1;
  startTimer();
  main();
}

function oneScaleExc2ButtonClick() {
  askableNotes = eScaleExc2;
  startTimer();
  main();
}

function onbasiceScaleButtonClick() {
  askableNotes = basiceScale;
  startTimer();
  main();
}

function oneScaleExt1ButtonClick() {
  askableNotes = eScaleExt1;
  startTimer();
  main();
}

function oneScaleExt2ButtonClick() {
  askableNotes = eScaleExt2;
  startTimer();
  main();
}

function onfulleScaleRangeButtonClick() {
  askableNotes = fulleScaleRange;
  startTimer();
  main();
}

function onfScaleExc1ButtonClick() {
  askableNotes = fScaleExc1;
  startTimer();
  main();
}

function onfScaleExc2ButtonClick() {
  askableNotes = fScaleExc2;
  startTimer();
  main();
}

function onbasicfScaleButtonClick() {
  askableNotes = basicfScale;
  startTimer();
  main();
}

function onfScaleExt1ButtonClick() {
  askableNotes = fScaleExt1;
  startTimer();
  main();
}

function onfScaleExt2ButtonClick() {
  askableNotes = fScaleExt2;
  startTimer();
  main();
}

function onfullfScaleRangeButtonClick() {
  askableNotes = fullfScaleRange;
  startTimer();
  main();
}

function onfsScaleExc1ButtonClick() {
  askableNotes = fsScaleExc1;
  startTimer();
  main();
}

function onfsScaleExc2ButtonClick() {
  askableNotes = fsScaleExc2;
  startTimer();
  main();
}

function onbasicfsScaleButtonClick() {
  askableNotes = basicfsScale;
  startTimer();
  main();
}

function onfsScaleExt1ButtonClick() {
  askableNotes = fsScaleExt1;
  startTimer();
  main();
}

function onfsScaleExt2ButtonClick() {
  askableNotes = fsScaleExt2;
  startTimer();
  main();
}

function onfullfsScaleRangeButtonClick() {
  askableNotes = fullfsScaleRange;
  startTimer();
  main();
}

function ongScaleExc1ButtonClick() {
  askableNotes = gScaleExc1;
  startTimer();
  main();
}

function ongScaleExc2ButtonClick() {
  askableNotes = gScaleExc2;
  startTimer();
  main();
}

function onbasicgScaleButtonClick() {
  askableNotes = basicgScale;
  startTimer();
  main();
}

function ongScaleExt1ButtonClick() {
  askableNotes = gScaleExt1;
  startTimer();
  main();
}

function ongScaleExt2ButtonClick() {
  askableNotes = gScaleExt2;
  startTimer();
  main();
}

function onfullgScaleRangeButtonClick() {
  askableNotes = fullgScaleRange;
  startTimer();
  main();
}

function onabScaleExc1ButtonClick() {
  askableNotes = abScaleExc1;
  startTimer();
  main();
}

function onabScaleExc2ButtonClick() {
  askableNotes = abScaleExc2;
  startTimer();
  main();
}

function onbasicabScaleButtonClick() {
  askableNotes = basicabScale;
  startTimer();
  main();
}

function onabScaleExt1ButtonClick() {
  askableNotes = abScaleExt1;
  startTimer();
  main();
}

function onabScaleExt2ButtonClick() {
  askableNotes = abScaleExt2;
  startTimer();
  main();
}

function onfullabScaleRangeButtonClick() {
  askableNotes = fullabScaleRange;
  startTimer();
  main();
}

function onaScaleExc1ButtonClick() {
  askableNotes = aScaleExc1;
  startTimer();
  main();
}

function onaScaleExc2ButtonClick() {
  askableNotes = aScaleExc2;
  startTimer();
  main();
}

function onbasicaScaleButtonClick() {
  askableNotes = basicaScale;
  startTimer();
  main();
}

function onaScaleExt1ButtonClick() {
  askableNotes = aScaleExt1;
  startTimer();
  main();
}

function onaScaleExt2ButtonClick() {
  askableNotes = aScaleExt2;
  startTimer();
  main();
}

function onfullaScaleRangeButtonClick() {
  askableNotes = fullaScaleRange;
  startTimer();
  main();
}

function onbbScaleExc1ButtonClick() {
  askableNotes = bbScaleExc1;
  startTimer();
  main();
}

function onbbScaleExc2ButtonClick() {
  askableNotes = bbScaleExc2;
  startTimer();
  main();
}

function onbasicbbScaleButtonClick() {
  askableNotes = basicbbScale;
  startTimer();
  main();
}

function onbbScaleExt1ButtonClick() {
  askableNotes = bbScaleExt1;
  startTimer();
  main();
}

function onbbScaleExt2ButtonClick() {
  askableNotes = bbScaleExt2;
  startTimer();
  main();
}

function onfullbbScaleRangeButtonClick() {
  askableNotes = fullbbScaleRange;
  startTimer();
  main();
}

function onbScaleExc1ButtonClick() {
  askableNotes = bScaleExc1;
  startTimer();
  main();
}

function onbScaleExc2ButtonClick() {
  askableNotes = bScaleExc2;
  startTimer();
  main();
}

function onbasicbScaleButtonClick() {
  askableNotes = basicbScale;
  startTimer();
  main();
}

function onbScaleExt1ButtonClick() {
  askableNotes = bScaleExt1;
  startTimer();
  main();
}

function onbScaleExt2ButtonClick() {
  askableNotes = bScaleExt2;
  startTimer();
  main();
}

function onfullbScaleRangeButtonClick() {
  askableNotes = fullbScaleRange;
  startTimer();
  main();
}

function hideAllScaleChoiceContainers() {
  generalNotesContainer.style.visibility = "hidden";
  cScaleContainer.style.visibility = "hidden";
  csScaleContainer.style.visibility = "hidden";
  dScaleContainer.style.visibility = "hidden";
  ebScaleContainer.style.visibility = "hidden";
  eScaleContainer.style.visibility = "hidden";
  fScaleContainer.style.visibility = "hidden";
  fsScaleContainer.style.visibility = "hidden";
  gScaleContainer.style.visibility = "hidden";
  abScaleContainer.style.visibility = "hidden";
  aScaleContainer.style.visibility = "hidden";
  bbScaleContainer.style.visibility = "hidden";
  bScaleContainer.style.visibility = "hidden";
}
function onGeneralNoteChoiceButtonClick() {hideAllScaleChoiceContainers();generalNotesContainer.style.visibility = "visible";}
function oncScaleChoiceButtonClick() {hideAllScaleChoiceContainers();cScaleContainer.style.visibility = "visible";}
function oncsScaleChoiceButtonClick() {hideAllScaleChoiceContainers();csScaleContainer.style.visibility = "visible";}
function ondScaleChoiceButtonClick() {hideAllScaleChoiceContainers();dScaleContainer.style.visibility = "visible";}
function onebScaleChoiceButtonClick() {hideAllScaleChoiceContainers();ebScaleContainer.style.visibility = "visible";}
function oneScaleChoiceButtonClick() {hideAllScaleChoiceContainers();eScaleContainer.style.visibility = "visible";}
function onfScaleChoiceButtonClick() {hideAllScaleChoiceContainers();fScaleContainer.style.visibility = "visible";}
function onfsScaleChoiceButtonClick() {hideAllScaleChoiceContainers();fsScaleContainer.style.visibility = "visible";}
function ongScaleChoiceButtonClick() {hideAllScaleChoiceContainers();gScaleContainer.style.visibility = "visible";}
function onabScaleChoiceButtonClick() {hideAllScaleChoiceContainers();abScaleContainer.style.visibility = "visible";}
function onaScaleChoiceButtonClick() {hideAllScaleChoiceContainers();aScaleContainer.style.visibility = "visible";}
function onbbScaleChoiceButtonClick() {hideAllScaleChoiceContainers();bbScaleContainer.style.visibility = "visible";}
function onbScaleChoiceButtonClick() {hideAllScaleChoiceContainers();bScaleContainer.style.visibility = "visible";}


function main() {
  selectedNum = askableNotes[Math.floor(Math.random() * askableNotes.length)];
  debugNum++;

  //document.getElementById("selected note").innerHTML = notes[selectedNum];
  getKeys();
  updateKeyPic();
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
    //document.getElementById("result").innerHTML = "correct!";
    document.getElementById("help").innerHTML = ''
    //resultPColor.style.color = 'green';
    correctGuesses += 1;
    incorrectGuessesStreak = 0;
    gameContainerColor = [128, 255, 128];
    setTimeout(main, 100);
  } else {
    //document.getElementById("result").innerHTML = "incorrect";
    gameContainerColor = [255, 128, 128];
    //resultPColor.style.color = 'red';
    incorrectGuessesStreak += 1;
    if (incorrectGuessesStreak >= 3) {
      document.getElementById("help").innerHTML = "the keys are: " + getCorrectKeys();
    }
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
  gameContainer.style.visibility = "visible";
  hasStarted = true;
  allScaleChoices.style.display = 'none';
  timer = 1200;
  updateAnimation();
  timerfunction();
}

function timerfunction() {
  document.getElementById("timer").innerHTML = Math.floor(timer/20);
  timer -= 1;
  if (timer >= 0) {
    updateAnimation();
    setTimeout(timerfunction, 50);
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

function getCorrectKeys() {
  let correctKeyNum = trumpetNotesDictionary[notes[selectedNum]];
  let correctKeys = '';
  if (correctKeyNum == 0) {
    correctKeys += '0 '
  }
  if (correctKeyNum >= 4) {
    correctKeys += '1 ';
    correctKeyNum -= 4;
  }
  if (correctKeyNum >= 2) {
    correctKeys += '2 ';
    correctKeyNum -= 2;
  }
  if (correctKeyNum >= 1) {
    correctKeys += '3 ';
    correctKeyNum -= 1;
  }
  return correctKeys;
}

function updateAnimation() {
  for (let i = 0; i < 3; i++) {
    gameContainerColor[i] = 255-(255-gameContainerColor[i])*0.8
  }
  gameContainer.style.backgroundColor = `rgb(${gameContainerColor[0]}, ${gameContainerColor[1]}, ${gameContainerColor[2]})`;
}
