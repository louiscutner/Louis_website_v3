import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";

import "./index.css";

const tontu_r = document.getElementById("tonus-arrow-right");
const tontu_l = document.getElementById("tonus-arrow-left");
const phone_list = document.getElementsByClassName("phone-screen");
const skydda_r = document.getElementById("skydda-arrow-right");
const skydda_l = document.getElementById("skydda-arrow-left");
const skydda_list = document.getElementsByClassName("skydda-list");

const rightClick = function (list) {
  for (let x = 0; x < list.length; x++) {
    if (list[x].classList.contains("hidden")) {
      //pass
    } else {
      if (x !== list.length - 1) {
        list[x].classList.add("hidden");
        list[x + 1].classList.remove("hidden");
      }
      break;
    }
  }
};

const leftClick = function (list) {
  for (let x = 0; x < list.length; x++) {
    if (list[x].classList.contains("hidden")) {
      //pass
    } else {
      if (x !== 0) {
        list[x].classList.add("hidden");
        list[x - 1].classList.remove("hidden");
      }
      break;
    }
  }
};

tontu_r.addEventListener("click", (e) => {
  rightClick(phone_list);
});

tontu_l.addEventListener("click", (e) => {
  leftClick(phone_list);
});

skydda_r.addEventListener("click", (e) => {
  console.log("hi");
  rightClick(skydda_list);
});

skydda_l.addEventListener("click", (e) => {
  leftClick(skydda_list);
});
