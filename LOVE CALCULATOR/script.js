const form = document.getElementById('form');
const loveCheck = document.querySelector('.btn');
const popClose = document.querySelector('.btn-close');

popClose.addEventListener("click", closePopUp);
loveCheck.addEventListener("click", openPopUp);
loveCheck.addEventListener("click", loveGrade);

function loveGrade() {
    let yourName = document.getElementById("name").value;
    let theirName = document.getElementById("name2").value;
    let text = document.getElementById("response");
  
    let loveScore = Math.random() * 100; //The number to output will range between zero and hundred
    loveScore = Math.floor(loveScore); //This makes it a whole number by rounding it up
  
    if (loveScore <= 30) {
      text.innerText =`The level of compatibility between ${yourName} and ${theirName} is ${loveScore}%. This relationship is weak`;
    } else if (loveScore > 30 && loveScore <= 50) {
      text.innerText = `The level of compatibility between ${yourName} and ${theirName} is ${loveScore}%. Work more on it`;
    } else if (loveScore > 50 && loveScore <= 70) {
      text.innerText = `The love between ${yourName} and ${theirName} is ${loveScore}%. That's a beautiful relationship`;
    } else {
      text.innerText =`${yourName} and ${theirName} have a compatibiblity of ${loveScore}%. You both are made for each other`;
    }
  }

let popUp = document.getElementById('popup');

function openPopUp() {
  popUp.classList.add("open-popup");
}

function closePopUp() {
  popUp.classList.remove("open-popup");
}

// function validateForm() {
//   var x = document.forms["form"][]
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function validation() {
  //Get the values from the input
  let yourName = document.getElementById("name").value;
  let theirName = document.getElementById("name2").value;

  //username validation
  if (yourName === "") {
    setErrorFor(yourName);
  }else{
    setSuccessFor(yourName);
  }
  //email validation
  if (theirName === "") {
    setErrorFor(theirName);
  }else{
    setSuccessFor(theirName);
  }
}

function setErrorFor(input) {
  const content = input.parentElement; //.form-control
  
  content.className = "content error";
}

function setSuccessFor(input) {
  const content = input.parentElement; //.form-control
  
  content.className = "content success";
}
