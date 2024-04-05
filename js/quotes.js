const quotes = [
    {
        quote : "일찍 일어난 새가 먹이를 잡아 먹는다.",
        author : "정지원",
    },
    {
        quote : "인생을 교향악입니다. 인생의 각각 순간들이 합창으로 노래하고 있습니다.",
        author : "로망 롤랑",
    },
    {
        quote : "추위에 떤 사람일수록 태양의 따뜻함을 느낀다.",
        author : "휘트먼",
    },
    {
        quote : "우리를 항상 결합시키는 것은 무엇인가. 사랑.",
        author : "괴테",
    },
    {
        quote : "기쁨은 슬픔을 통한 기쁨이라야 진정한 기쁨이다.",
        author : "베토벤",
    },
    {
        quote : "내일이란 오늘의 다른 이름일 뿐이다.",
        author : "윌리엄 포크너",
    },
    {
        quote : "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author : "괴테",
    },
    {
        quote : "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
        author : "이소룡",
    },
    {
        quote : "건강에 대한 지나친 걱정만큼 건강에 치명적인 것은 없다.",
        author : "벤자민 프랭클린",
    },
    {
        quote : "오늘이란 신어야 할 신발과 같은 것이다.",
        author : "스티브 올렌",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;