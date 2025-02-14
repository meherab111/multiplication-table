let userNumber = document.getElementById("number");

let button = document.getElementById("btn");

let headingValue = document.getElementById("heading");

let resultBody = document.getElementById("multiply_div");

let reset = document.getElementById("btn_reset");

let count = 0;

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

        pTag.classList.add("p_tag_body");

        pTag.innerHTML = `${userNumber.value} X ${i} = ${result}`;

        resultBody.append(pTag);

        i++;
      }
    }

    userNumber.value = "";

    reset.style.display = "block";

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

button.addEventListener("click", executeFunc);
