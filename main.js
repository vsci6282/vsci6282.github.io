let selectedNum = 0;
let previousNum = 0;
const notes = ['c4','cs4','db4','d4','ds4','eb4','e4','f4','fs4','gb4','g4','gs4','ab4','a4','as4','bb4','b4','c5'];
const trumpetNotesDictionary = {c4:0,cs4:7,db4:7,d4:5,ds4:3,eb4:3,e4:6,f4:4,fs4:2,gb4:2,g4:0,gs4:3,ab4:3,a4:6,as4:4,bb4:4,b4:2,c5:0};
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
  startTimer();
  main();
} 

function main() {
  startButton.style.display = 'none';
  selectedNum = Math.floor(Math.random()*18);


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
  if (selectedNum == 0) {
    notePic.src = "c4.png";
  } else if (selectedNum == 1) {
    notePic.src = "cs4.png";
  } else if (selectedNum == 2) {
    notePic.src = "db4.png";
  } else if (selectedNum == 3) {
    notePic.src = "d4.png";
  } else if (selectedNum == 4) {
    notePic.src = "ds4.png";
  } else if (selectedNum == 5) {
    notePic.src = "eb4.png";
  } else if (selectedNum == 6) {
    notePic.src = "e4.png";
  } else if (selectedNum == 7) {
    notePic.src = "f4.png";
  } else if (selectedNum == 8) {
    notePic.src = "fs4.png";
  } else if (selectedNum == 9) {
    notePic.src = "gb4.png";
  } else if (selectedNum == 10) {
    notePic.src = "g4.png";
  } else if (selectedNum == 11) {
    notePic.src = "gs4.png";
  } else if (selectedNum == 12) {
    notePic.src = "ab4.png";
  } else if (selectedNum == 13) {
    notePic.src = "a4.png";
  } else if (selectedNum == 14) {
    notePic.src = "as4.png";
  } else if (selectedNum == 15) {
    notePic.src = "bb4.png";
  } else if (selectedNum == 16) {
    notePic.src = "b4.png";
  } else if (selectedNum == 17) {
    notePic.src = "c5.png";
  } 
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
  document.getElementById("finalResult").innerHTML = "Your score is " + correctGuesses + "/" + guesses + " or " + (100*correctGuesses/guesses).toFixed(1) + "%";
}
