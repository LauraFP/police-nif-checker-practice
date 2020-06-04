// ***** VARIABLES *****
var userName = document.getElementById("name");
var userNif = document.getElementById("nif");
var checkButton = document.getElementById("check");
var h2 = document.getElementById("subtitle");

// Ordered list of letters used to complete the DNI:
const LETRAS = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E"
];

// ***** FUNCTIONS *****

// Function to calculate the letter of the uncomplete identifications:

function checkNif(userNif) {
  var noLetterNif = Number(userNif.substring(0, 8));

  var rest = noLetterNif % 23;
  var fullNif = String(noLetterNif + LETRAS[rest]);
  if (fullNif === userNif) {
    return true;
  } else {
    return false;
  }
};

function policeCheck() {
  var valid = checkNif(userNif.value);

  if (valid) {
    h2.innerHTML = `${userName.value} NIF is VALID`;
  } else {
    h2.innerHTML = `${userName.value} NIF is INVALID`;
  }
}

checkButton.addEventListener("click", policeCheck);
