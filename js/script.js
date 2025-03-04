let userNumber = document.getElementById("number");

let button = document.getElementById("btn");

let headingValue = document.getElementById("heading");

let resultBody = document.getElementById("multiply-div");

let reset = document.getElementById("btn-reset");

let count = 0;


// Multiplication Functionality

const executeFunc = () => {

  if (userNumber.value <= -1 || userNumber.value >= 1) {
    count++;

    let i = 1;

    if (count >= 1) {
      headingValue.innerText = "";
      resultBody.innerText = "";

      
      headingValue.innerText = `Multiplication Table of ${userNumber.value}`;

      while (i <= 10) {
        let result = userNumber.value * i;

        let pTag = document.createElement("p");

        pTag.classList.add("p-tag--body");

        pTag.innerHTML = `${userNumber.value} X ${i} = ${result}`;

        resultBody.append(pTag);

        i++;
      }
    }

    userNumber.value = "";

    reset.style.display = "block";

    // Reset Functionality

    reset.addEventListener("click", () => {
      userNumber.value = "";
      headingValue.innerText = "";
      resultBody.innerText = "";
      reset.style.display = "none";
    });
  } else {
    alert("Invalid Input !!!");
    userNumber.value = "";
    headingValue.innerText = "";
    resultBody.innerText = "";
    reset.style.display = "none";
  }
};

// Multiplication Functionality Execute

button.addEventListener("click", executeFunc);
