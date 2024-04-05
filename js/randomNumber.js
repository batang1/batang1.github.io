const Form = document.querySelector("#form-wrap");
const setNumInput = document.querySelector("#set-num");
const selectNumInput = document.querySelector("#select-num");
const submitBtn = document.querySelector("#submit-btn");

let randomNum;
const minNum = 1;
Form.addEventListener("submit", checkNum);

function checkNum(e) {
  e.preventDefault();
  const setNum = setNumInput.value;
  const selectNum = selectNumInput.value;
  createRandomNum(setNum, selectNum);
}

function createRandomNum(setNum, selectNum) {
  //   if (setNum === null || selectNum === null) {
  //     alert("숫자를 입력하세요.");
  //   }
  console.log(setNum, selectNum);
  if (setNum == null || selectNum == null) {
    console.log("please input number");
  }
  randomNum = Math.floor(Math.random() * (setNum - selectNum + 1)) + selectNum;
}
