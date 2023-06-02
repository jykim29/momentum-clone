const arrBg = [
  "url(./images/bg1.jpg)",
  "url(./images/bg2.jpg)",
  "url(./images/bg3.jpg)",
  "url(./images/bg4.jpg)",
  "url(./images/bg5.jpg)",
  "url(./images/bg6.jpg)",
  "url(./images/bg7.jpg)",
  "url(./images/bg8.jpg)",
];

let randomNumber_2 = Math.floor(Math.random() * 5);

document.body.style.backgroundImage = arrBg[randomNumber_2];
document.body.style.backgroundSize = "100%";
document.body.style.backgroundRepeat = "repeat";
