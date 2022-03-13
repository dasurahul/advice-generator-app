let id = document.querySelector(".card__title span");
let advice = document.querySelector(".card__text span");
let button = document.querySelector(".card img");

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      id.innerHTML = data.slip.id;
      advice.innerHTML = data.slip.advice;
    });
};

getAdvice();

button.addEventListener("click", getAdvice);
