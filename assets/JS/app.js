/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}

document.getElementById("length").addEventListener("change", charLength);

function generatePass() {
  let length = charLength();
  let upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";

  let lowerCase = "mnbvcxzlkjhgfdssapoiuytrewq";

  let number = ["0", "1", "2", "9", "3", "8", "4", "7", "5", "6"];

  let symbols = ["=", "?", "(", ")", "*", "&", "^", "%"];
  let types = JSON.parse(localStorage.getItem("types"));
  let findedType = "";
  // for (let i = 0; i < types.length; i++) {
  //   findedType += "" + types[i];
  // }
  // let data = "";
  // if (findedType == "uppercase") {
  //   data = upperCase;
  // }
  // if (findedType == "uppercaselowercase") {
  //   for (let i = 0; i < 26; i++) {
  //     console.log(lowerCase[i]);
  //     data += upperCase[i] + lowerCase[i];
  //   }
  // }

  // if (findedType == "uppercaselowercasenumber") {
  //   for (let i = 0; i < 26; i++) {
  //     console.log(lowerCase[i]);
  //     data += upperCase[i] + lowerCase[i];
  //     if (i <= number.length) {
  //       data += number[i];
  //     }
  //   }
  // }

  // if (findedType == "uppercaselowercasenumbersymbols") {
  //   for (let i = 0; i < 26; i++) {
  //     console.log(lowerCase[i]);
  //     data += upperCase[i] + lowerCase[i];
  //     if (i <= number.length) {
  //       data += number[i];
  //     }
  //     if (i <= symbols.length) {
  //       data += symbols[i];
  //     }
  //   }
  // }

  if ((types.length = 1)) {
    data = types;
  }

  if (types.length == 2) {
    for (let i = 0; i < 26; i++) {
      if (types[0].length >= i) {
        data += types[0][i];
      }
      if (types[1][i] > i) {
        data += types[1][i];
      }
    }
  }

  if (types.length == 3) {
    for (let i = 0; i < 26; i++) {
      if (types[0].length >= i) {
        data += types[0][i];
      }
      if (types[1][i] > i) {
        data += types[1][i];
      }
      if (types[2][i] > i) {
        data += types[2][i];
      }
    }
  }

  if (types.length == 4) {
    for (let i = 0; i < 26; i++) {
      if (types[0].length >= i) {
        data += types[0][i];
      }
      if (types[1][i] > i) {
        data += types[1][i];
      }
      if (types[2][i] > i) {
        data += types[1][i];
      }
      if (types[3][i] > i) {
        data += types[3][i];
      }
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
