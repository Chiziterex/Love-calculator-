const loveClick = document.querySelector(".btn");

const popup = document.getElementById("popup");

const clowsePopUp = document.querySelector("close-popup");

function loveGrade() {
  const yourName = document.getElementById("name").value;
  const theirName = document.getElementById("name2").value;
  const text = document.querySelector("#rate");

  let loveScore = Math.random() * 100; //The number to output will range between zero and hundred
  loveScore = Math.floor(loveScore); //This makes ot a whole number by rounding it up

  if (loveScore <= 30) {
    text.innerText =
      "The level of compatibility between " +
      yourName +
      " and " +
      theirName +
      " is " +
      loveScore +
      "% - You should rethink this relationship";
  } else if (loveScore > 30 && loveScore <= 50) {
    text.innerText =
      "The level of compatibility between " +
      yourName +
      " and " +
      theirName +
      " is " +
      loveScore +
      "% - Put more effort to grow the relationship";
  } else if (loveScore > 50 && loveScore <= 70) {
    text.innerText =
      "'Wow' that is a serious love between " +
      yourName +
      " and " +
      theirName +
      " is " +
      loveScore +
      "%";
  } else {
    text.innerText =
      yourName +
      " and " +
      theirName +
      " have a compatibility of " +
      loveScore +
      "%. You both are made for each other";
  }
}

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

clowsePopUp.addEventListener("click", closePopup);
loveClick.addEventListener("click", openPopup, loveGrade);
