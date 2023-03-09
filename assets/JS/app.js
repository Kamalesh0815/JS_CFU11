/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}

document.getElementById("length").addEventListener("change", charLength);

function generatePass() {
  let length = charLength();
  // let upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";

  // let lowerCase = "mnbvcxzlkjhgfdssapoiuytrewq";

  // let number = ["0", "1", "2", "9", "3", "8", "4", "7", "5", "6"];

  let symbolsStr = `!@#$%^&*()_+{}|":?></`;
  let upperCaseStr = `QWERTYUIOPASDFGHJKLZXCVBNM`;
  let lowerCaseStr = `mnbvcxzlkjhgfdsapoiuytrewq`;
  let numberStr = `1234567890`;
  let types = JSON.parse(localStorage.getItem("types"));
  let findedType = "";
  // console.log(types);
  let upperCase = types.find((T) => T == "upperCase");
  let lowerCase = types.find((T) => T == "lowerCase");
  let number = types.find((T) => T == "numbers");
  let symbols = types.find((T) => T == "symbols");

  console.log(upperCase, lowerCase, number, symbols);

  // for (let i = 0; i < types.length; i++) {
  //   findedType += "" + types[i];
  // }
  // let data = "";
  // if (findedType == "upperCase") {
  //   data = upperCase;
  // }
  // if (findedType == "upperCaselowerCase") {
  //   for (let i = 0; i < 26; i++) {
  //     console.log(lowerCase[i]);
  //     data += upperCase[i] + lowerCase[i];
  //   }
  // }

  // if (findedType == "upperCaselowerCasenumber") {
  //   for (let i = 0; i < 26; i++) {
  //     console.log(lowerCase[i]);
  //     data += upperCase[i] + lowerCase[i];
  //     if (i <= number.length) {
  //       data += number[i];
  //     }
  //   }
  // }

  // if (findedType == "upperCaselowerCasenumbersymbols") {
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

  // console.log(findedType);

  let data = `Eh_J|D<Z4}:szb"rW{c)&!6#oQkftmy@S*3L?MX/%wxia0vHPK+YUjIp2$dO8G917nluFRVs5A>eBq(CgN^T"`;
  let password = "";
  let start = 0;

  let prePass = "";
  prePass += localStorage.getItem("password");

  if (localStorage.getItem("start") != null) {
    start = JSON.parse(localStorage.getItem("start"));
  }
  start = Math.floor(Math.random() * 10) + 1;
  // console.log(start);
  // console.log(length);
  let final = 0;
  final = start + final;
  // console.log(final);
  if (final > "80") {
    start = 0;
  }

  for (let i = 0; password.length < length; i++) {
    console.log(data[start]);
    let currentData = data[start];
    if (password == undefined) {
      console.log("password");
      password += currentData;
      console.log(password);
    }

    if (upperCase !== undefined) {
      for (let j = 0; j < upperCaseStr.length; j++) {
        if (currentData == upperCaseStr[j]) {
          for (let k = 0; k < prePass.length; k++) {
            if (prePass[k] != currentData) {
              console.log("uppercase");
              password += currentData;
              console.log(password);

              break;
            }
          }
        }
      }
    }

    if (lowerCase !== undefined) {
      for (let j = 0; j < lowerCaseStr.length; j++) {
        if (currentData == lowerCaseStr[j]) {
          for (let k = 0; k < prePass.length; k++) {
            if (prePass[k] != currentData) {
              console.log("lowercase");
              password += currentData;
              console.log(password);
              break;
            }
          }
        }
      }
    }

    if (number !== undefined) {
      for (let j = 0; j < numberStr.length; j++) {
        if (currentData == numberStr[j]) {
          for (let k = 0; k < prePass.length; k++) {
            if (prePass[k] != currentData) {
              console.log("number");
              password += currentData;
              console.log(password);
              break;
            }
          }
        }
      }
    }

    if (symbols !== undefined) {
      for (let j = 0; j < symbolsStr.length; j++) {
        if (currentData == symbolsStr[j]) {
          for (let k = 0; k < prePass.length; k++) {
            if (prePass[k] != currentData) {
              console.log("symbol");
              password += currentData;
              console.log(password);

              break;
            }
          }
        }
      }
    }

    start++;
  }

  localStorage.setItem("start", start);
  localStorage.setItem("password", JSON.stringify(password));
}
