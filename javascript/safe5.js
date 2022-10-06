const hint_btn = document.getElementById("hint_btn");
const box = document.getElementById("box");
const hint_gif = document.getElementById("hint_gif");
const title = document.getElementById("title");
const cancel_btn = document.getElementById("cancel_btn");
const set_bcolor = document.getElementById("set_bcolor");
const submit_btn = document.getElementById("submit_btn");
const input = document.getElementById("input");
const main_section = document.getElementById("main_section");
const correct = document.getElementById("correct");
const correct_image = document.getElementById("correct_image");
const open_pw = document.getElementById("open_pw");
const wrong = document.getElementById("wrong");
const wrong_image = document.getElementById("wrong_image");
hint_btn.addEventListener("click", function () {
  box.style.opacity = "1";
  box.style.zIndex = "1000";
  box.classList.add("obj");
  set_bcolor.style.zIndex = "400";
  set_bcolor.style.background =
    "linear-gradient(0deg, rgba(148,147,165,0.6834443249956232) 100%, rgba(148,147,165,1) 100%)";
  //hint_gif의 src를 변경
  hint_gif.src = "https://embed.lottiefiles.com/animation/99981";

  setTimeout(function () {
    hint_gif.style.display = "none";

    title.style.opacity = "1";
  }, 3000);
});

cancel_btn.addEventListener("click", function () {
  hint_gif.src = "";
  box.style.opacity = "0";
  box.style.zIndex = "-10";
  box.classList.remove("obj");
  hint_gif.style.display = "block";
  set_bcolor.style.zIndex = "-10";
  set_bcolor.style.background = "white";
  title.style.opacity = "0";
});

submit_btn.addEventListener("click", function () {
  if (input.value == "269,776") {
    main_section.style.opacity = "0";
    correct.style.opacity = "1";
    correct.style.zIndex = "1000";
    setTimeout(function () {
      correct_image.src = "../img/correct2.gif";
      correct.classList.add("correct_move");
    }, 1000);
    setTimeout(function () {
      open_pw.classList.add("open_pw_opacity");
      open_pw.style.zIndex = "1000";
    }, 2000);
  } else {
    wrong_image.src = "../img/wrong.gif";
    main_section.style.opacity = "0";
    wrong.style.opacity = "1";
    wrong.style.zIndex = "1000";
    setTimeout(function () {
      wrong_image.src = "";
      main_section.style.opacity = "1";
      wrong.style.opacity = "0";
      wrong.style.zIndex = "-10";
      wrong_image.style.width = "10px";
      wrong_image.style.height = "10px";
    }, 1000);
  }
});
