const clock = document.getElementById("clock");
let clockMsg = document.getElementById("clock-message");

setInterval(clockDisplay, 2000);
paintMsg();

function paintMsg() {
  const currentHr = new Date().getHours();
  if (currentHr <= 5 && currentHr > 2) {
    clockMsg.innerText = "아직 안자고 있니? 너무 무리하지마!";
  } else if (currentHr > 5 && currentHr <= 10) {
    clockMsg.innerText = "좋은 아침이야! 오늘도 활기차게 하루를 시작하자!";
  } else if (currentHr > 10 && currentHr <= 11) {
    clockMsg.innerText = "점점 배가 고파지는데? 오늘 점심은 뭘 먹을까?";
  } else if (currentHr > 11 && currentHr <= 14) {
    clockMsg.innerText = "점심 든든하게 먹고 오후도 신나게 달려보자!";
  } else if (currentHr > 14 && currentHr <= 18) {
    clockMsg.innerText =
      "괜찮아! 누구나 실수는 하는걸~ 주눅들지말고 어깨 쫙펴고 힘내!";
  } else if (currentHr > 18 && currentHr <= 23) {
    clockMsg.innerText = "오늘 하루도 정말 수고했어!";
  } else {
    clockMsg.innerText = "잘자! 좋은 꿈꾸고 오늘보다 더 나은 아침을 맞이하자~";
  }
}

function clockDisplay() {
  const currentHr = new Date().getHours().toString().padStart(2, "0");
  const currentMin = new Date().getMinutes().toString().padStart(2, "0");
  const currentSec = new Date().getSeconds().toString().padStart(2, "0");
  clock.innerHTML = currentHr + "：" + currentMin;
  setTimeout(() => {
    clock.innerHTML = currentHr + "　" + currentMin;
  }, 1000);
}
