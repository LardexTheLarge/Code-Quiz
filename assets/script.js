//variables
var body = document.body;
var mainEl = document.createElement("main");
var startDiv = document.createElement("div");

//question element
var h1El = document.createElement("h1");
//multiple choice list
var listEl = document.createElement("ul");
//multiple choice questions
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

//start button and intro text
var startBtn = document.createElement("button");
var introText = document.createElement("p");

document.body.appendChild(startDiv);
startDiv.appendChild(introText);
startDiv.appendChild(startBtn);

mainEl.setAttribute(
  "style",
  "margin: 100px auto; width:50%; text-align:center; background-color: blue; border: 2px solid #040080; "
);
h1El.setAttribute("style", "background-color: #2b2bff; margin:0;");
listEl.setAttribute("style", "list-style: none; display:inline;");
li1.setAttribute(
  "style",
  "border: 1px solid #040080; text-align:center; margin: 2px 0; color: white;"
);
li2.setAttribute(
  "style",
  "border: 1px solid #040080; text-align:center; margin: 2px 0; color: white;"
);
li3.setAttribute(
  "style",
  "border: 1px solid #040080; text-align:center; margin: 2px 0; color: white;"
);
startBtn.setAttribute(
  "style",
  "width: 50px; height: 20px; color: white; background-color: blue; "
);
startDiv.setAttribute(
  "style",
  "display: grid; justify-content: center; justify-items: center;"
);

var testQuestions = [
  {
    question: "Which js function intervals time?",
    answers: {
      a: "log()",
      b: "clearInterval()",
      c: "setInterval()",
    },
    correctAnswer: "c",
  },
  {
    question: "Which Library is an extension of Javascript?",
    answers: {
      a: "BootStrap",
      b: "TypeScript",
      c: "JQuery",
    },
    correctAnswer: "c",
  },
  {
    question: "How do you repeat code?",
    answers: {
      a: "for loops",
      b: "if statements",
      c: "Console.log",
    },
    correctAnswer: "a",
  },
  {
    question: "How do you connect html to Javascript?\ndocument.________",
    answers: {
      a: "appendChild()",
      b: "querySelector()",
      c: "innerHtml()",
    },
    correctAnswer: "b",
  },
];

var gIndex = 0;
for (let i = 0; i < testQuestions[gIndex].answers.length; i++) {
  // Code to create button elements, add text based off of
  testQuestions[gIndex].answers[i];
}

function questionPrompt() {
  document.body.appendChild(mainEl);
  mainEl.appendChild(h1El);
  mainEl.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);

  for (var i = 0; i < testQuestions.length; i++) {
    h1El.textContent = testQuestions[0].question;
    li1.textContent = testQuestions[0].answers.a;
    li2.textContent = testQuestions[0].answers.b;
    li3.textContent = testQuestions[0].answers.c;
  }

  introText.textContent = "";
  startBtn.setAttribute("style", "display: none;");
}

function start() {
  introText.textContent = "Press Start to begin test";
  startBtn.textContent = "Start";

  // starts test
  startBtn.addEventListener("click", function () {
    questionPrompt();
  });
}
start();
