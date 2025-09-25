let selectedNum = 0;
let previousNum = 0;
const notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
const trumpetNotesDictionary = {c: 0, d: 5, e: 6, f: 4, g: 0, a: 6, b: 2};
const key1 = document.getElementById("key1");
let key1down = false;
const key2 = document.getElementById("key2");
let key2down = false;
const key3 = document.getElementById("key3");
const resultPColor = document.getElementById("result");
const key1pic = document.getElementById("key1pic");
const key2pic = document.getElementById("key2pic");
const key3pic = document.getElementById("key3pic");
let pp = false;
let keyBdown = false;
let selectedInt = 0;
let num = 0;

main()

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
          checkResult();
        }
        getKeys();
    });

function main() {
  selectedNum = Math.floor(Math.random()*7);

  /*if (selectedNum == previousNum) {
    while (selectedNum == previousNum) {
      previousNum = selectedNum;
      selectedNum = Math.floor(Math.random()*7);
    }
  }*/

  document.getElementById("selected note").innerHTML = notes[selectedNum];

  resetResult()
  //document.getElementById("note").innerHTML = trumpetNoteToNum(notes[num]);
  //document.getElementById("test").innerHTML = selectedNote;
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

function checkResult() {
  if (trumpetNotesDictionary[notes[selectedNum]] == selectedInt) {
    document.getElementById("result").innerHTML = "correct!";
    resultPColor.style.color = 'green';
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

function test() {
  //e = "b";
  //document.getElementById("test").innerHTML = e;
}
