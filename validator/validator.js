const checkBtn = document.querySelector("#check-btn");
const inputEl = document.querySelector("#user-input");
const clearBtn = document.querySelector("#clear-btn");

checkBtn.addEventListener("click", () => {
  const input = document.querySelector("#user-input").value;
  if(input === "") {
    alert("Please provide a phone number");
  } else {
    isValid(input);
    if(isValid(input)) {
        document.querySelector("#results-div").innerHTML += `Valid US number: ${input} <br>`;
    } else {
       document.querySelector("#results-div").innerHTML += `Invalid US number: ${input} <br>`;
    }
  }
});

clearBtn.addEventListener("click", () => {
  document.querySelector("#results-div").innerHTML = "";
});

inputEl.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    const input = document.querySelector("#user-input").value;
    if(input === "") {
      alert("Please provide a phone number");
    } else {
      isValid(input);
      if(isValid(input)) {
        document.querySelector("#results-div").innerHTML += `Valid US number: ${input} <br>`;
      } else {
        document.querySelector("#results-div").innerHTML += `Invalid US number: ${input} <br>`;
      }
    }
  }
});

const isValid = (input) => {
  let inputArr = input.replace(/[)(-\s]/g, "");
  inputArr = inputArr.split("");
  if(inputArr.length === 11) {
    if(inputArr[0] === "1") {
      inputArr = input.replace(/\s/gi, "");
      inputArr = inputArr.split("");
      if(inputArr[4] === "-" && inputArr[8] === "-") {
        return true;
      } else if(inputArr[1] === "(" && inputArr[5] === ")" && inputArr[9] === "-") {
        return true;
      } else if(inputArr.length === 11) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else if(inputArr.length === 10) {
    inputArr = input.replace(/\s/gi, "");
    inputArr = inputArr.split("");
    if(inputArr[3] === "-" && inputArr[7] === "-") {
      return true;
    } else if(inputArr[0] === "(" && inputArr[4] === ")" && inputArr[8] === "-") {
      return true;
    } else if(inputArr.length === 10) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}