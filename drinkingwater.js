var cups = document.querySelectorAll(".cups");
var motigilas = document.querySelector(".motigilas");
var covringparcentage = document.querySelector(".covringparcentage");
var parcentage = document.getElementById("parcentage");
var liters = document.querySelector(".liters");

const totalcup = cups.length;
updatemotigilass();
cups.forEach((element, idx) => {
  element.addEventListener("click", () => highlight(idx));
});

function highlight(idx) {
  if (
    cups[idx].classList.contains("full") &&
    !cups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  cups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updatemotigilass();
}

function updatemotigilass() {
  const fullgillas = document.querySelectorAll(".cups.full").length;
  console.log(fullgillas);
  if (fullgillas === 0) {
    parcentage.style.visibility = "hidden";
    parcentage.style.height = 0;
  } else {
    parcentage.style.visibility = "visible";
    parcentage.style.height = `${(fullgillas / totalcup) * 320}px`;
    parcentage.innerHTML = `${(fullgillas / totalcup) * 100}%`;
  }
  if (fullgillas === totalcup) {
    motigilas.style.visibility = "hidden";
    motigilas.style.height = 0;
  } else {
    motigilas.style.visibility = "visible";
    liters.innerHTML = `${2 - (250 * fullgillas) / 1000} L`;
  }
}
