let arr = [
  {
    quote:
      "진정한 청렴이란 아무도 알아주지 않을 것을 알면서도 옳은 일을 하는 것이다.",
    author: `${"\xa0"}${"\xa0"}by${"\xa0"}오프라 윈프리`,
  },
  {
    quote: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
    author: `${"\xa0"}${"\xa0"}by${"\xa0"}마하트마 간디`,
  },
  {
    quote:
      "나를 믿어라. 인생에서 최대의 성과와 기쁨을 수확하는 비결은 위험한 삶을 사는 데 있다.",
    author: `${"\xa0"}${"\xa0"}by${"\xa0"}프레드리히 니체`,
  },
  {
    quote:
      "명예를 지키라. 평판이 떨어질 때는 그대로 두라. 그리고 놈들보다 더 오래 살아남으라.",
    author: `${"\xa0"}${"\xa0"}by${"\xa0"}로이트 맥마스터 부욜`,
  },
  {
    quote:
      "당신이 일에 쏟아붓는 시간이 중요한게 아니다. 중요한 것은 당신이 시간을 쏟아붓는 일 그 자체다.",
    author: `${"\xa0"}${"\xa0"}by${"\xa0"}샘 유잉`,
  },
  {
    quote: "강직함, 의연함, 소박함, 과묵함은 인(仁)에 가깝다.",
    author: `${"\xa0"}${"\xa0"}by${"\xa0"}공자`,
  },
  {
    quote: "오래 살기를 바라기 보다 잘 살기를 바라라.",
    author: `${"\xa0"}${"\xa0"}by${"\xa0"}벤자민 프랭클린`,
  },
  {
    quote: "지식은 사랑이요, 빛이며, 통찰력이다.",
    author: `${"\xa0"}${"\xa0"}by${"\xa0"}헬렌 켈러`,
  },
  {
    quote:
      "권력의 고통을 알려면 권력 있는 자들에게 가야한다. 권력을 기쁨을 알려면 권력을 추구하는 자들에게 가야 한다.",
    author: `${"\xa0"}${"\xa0"}by${"\xa0"}찰스 칼렙 콜튼`,
  },
  {
    quote:
      "인간은 욕망을 잃어서는 안 된다. 욕망은 창의성, 사랑, 그리고 장수를 촉진하는 강력한 강장제이다.",
    author: `${"\xa0"}${"\xa0"}by${"\xa0"}알렉산더 A. 보고몰레츠`,
  },
];
const quotesSection = document.getElementById("quote");
const randomNumber = Math.floor(Math.random() * 10);

showQuote();

function showQuote() {
  const quote = quotesSection.querySelectorAll("span")[0];
  const author = quotesSection.querySelectorAll("span")[1];

  quote.innerText = arr[randomNumber].quote;
  author.innerText = arr[randomNumber].author;
}
