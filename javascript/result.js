
// numbtn[0]~numbtn[9]까지의 버튼을 누르면 각각의 숫자가 input에 입력되게 하기
// numbtn[10]은 지우기, numbtn[11]은 확인
// numbtn[10]을 누르면 input에 입력된 숫자가 하나씩 지워지게 하기
// numbtn[11]을 누르면 input에 입력된 숫자가 15255인지 확인하기
// 15255가 맞으면 alert창 띄우기

// Language: javascript
// Path: javascript\result.js
const numbtn = document.getElementsByClassName("num_btn");
const input = document.getElementById("num_input");
const clear = document.getElementsByClassName("num_btn")[9];
const check = document.getElementsByClassName("num_btn")[11];

for (let i = 0; i < 10; i++) {
  numbtn[i].addEventListener("click", function () {
    input.value += i+1;
  });
}

numbtn[10].addEventListener("click", function () {
  input.value += 0;
});

clear.addEventListener("click", function () {
  input.value = "";
});

check.addEventListener("click", function () {
  if (input.value == 15255) {
    document.getElementById("handle").classList.add("turn_handle");
    setTimeout(function() {
      document.getElementsByClassName("safe_door")[0].classList.add("open");
    }, 3000);
    
   
  }
  else{
    alert("실패!");
  }
});
