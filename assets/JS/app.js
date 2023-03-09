/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}

document.getElementById("length").addEventListener("change", charLength);

function generatePass() {
  let length = charLength();
  let upperCase = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];

  let lowerCase = [
    "m",
    "n",
    "b",
    "v",
    "c",
    "x",
    "z",
    "l",
    "k",
    "j",
    "h",
    "g",
    "f",
    "d",
    "s",
    "a",
    "p",
    "o",
    "i",
    "y",
    "t",
    "r",
    "e",
    "w",
    "q",
  ];

  let number = ["0", "1", "2", "9", "3", "8", "4", "7", "5", "6"];

  let symbols = ["=", "?", "(", ")", "*", "&", "^", "%"];
  let types = JSON.parse(localStorage.getItem("types"));
  let findedType = "";
  for (let i = 0; i < types.length; i++) {
    findedType += "" + types[i];
    if (findedType == "uppercase") {
      data = upperCase;
    }
  }
  console.log(findedType);

  let password;
  let start = 0;

  if (localStorage.getItem("start") != null) {
    start = JSON.parse(localStorage.getItem("start"));
  }
  start = Math.floor(Math.random() * 6) + 1;
  console.log(start);
  console.log(length);
  let final = 0;
  final = start + final;
  console.log(final);
  if (final > "26") {
    start = 0;
  }

  for (let i = 0; i < length; i++) {
    if (password != undefined) {
      password += data[start];
    } else {
      password = data[start];
    }
    start++;
  }

  localStorage.setItem("start", start);
  localStorage.setItem("password", JSON.stringify(password));
}
