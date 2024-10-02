// initial counter
let counter = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else if (styles.contains("double")) {
      counter = counter * 2;
    } else {
      counter = 0;
    }
    if (counter > 0) {
      value.style.color = "green";
    }
    if (counter < 0) {
      value.style.color = "red";
    }
    if (counter === 0) {
      value.style.color = "#222";
    }
    value.textContent = counter;
  });
});
