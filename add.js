const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
let answer = 0;

function nextEquation() {
  let number1 = Math.floor(Math.random() * 20);
  let number2 = Math.floor(Math.random() * 20);

  answer = number1 + number2;

  let dummyAnswer1 = Math.floor(Math.random() * 45);
  let dummyAnswer2 = Math.floor(Math.random() * 45);

  document.getElementById("num1").innerHTML = number1;
  document.getElementById("num2").innerHTML = number2;

  let allAnswers = [answer, dummyAnswer1, dummyAnswer2];
  let switchAnswers = [];

  function shuffleArray(allAnswers) {
    while (allAnswers.length > 0) {
      let randomIndex = Math.floor(Math.random() * allAnswers.length);
      switchAnswers.push(allAnswers.splice(randomIndex, 1)[0]);
    }
  }

  shuffleArray(allAnswers);

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
}

option1.addEventListener("click", () => {
  if (option1.innerHTML == answer) {
    nextEquation();
  } else {
    audio.play();
  }
});

option2.addEventListener("click", () => {
  if (option2.innerHTML == answer) {
    nextEquation();
  } else {
    audio.play();
  }
});

option3.addEventListener("click", () => {
  if (option3.innerHTML == answer) {
    nextEquation();
  } else {
    audio.play();
  }
});

nextEquation();
