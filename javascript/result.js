
const numbtn = document.getElementsByClassName("num_btn");
const input = document.getElementById("num_input");
const clear = document.getElementsByClassName("num_btn")[9];
const check = document.getElementsByClassName("num_btn")[11];
const festival = document.getElementById("festivals");
const restart_btn = document.getElementById("restart_btn");

     
let num_input = document.getElementById("num_input");
function length_check() {
   if (num_input.value.length > 5) {
       num_input.value = num_input.value.slice(0, 5);
   }
};


for (let i = 0; i < 10; i++) {
  numbtn[i].addEventListener("click", function () {
    input.value += i+1;
    length_check();
  });
}

numbtn[10].addEventListener("click", function () {
  input.value += 0;
  length_check();
});

clear.addEventListener("click", function () {
  input.value = "";
});

check.addEventListener("click", function () {
  if (input.value == 15255) {
    document.getElementById("handle").classList.add("turn_handle");
    setTimeout(function() {
      document.getElementsByClassName("safe_door")[0].classList.add("open");
    }, 2000);
    setTimeout(function() {
      festival.style.opacity = 1;
      festival.style.zIndex="100";
      restart_btn.style.opacity = 1;
    }, 2400);
    
   
  }
  else{
    input.value = "";
    document.getElementById("num_input").classList.add("wrong");
    setTimeout(function() {
      document.getElementById("num_input").classList.remove("wrong");
    }, 3000);
  }
});
