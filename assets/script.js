//variables
var body = document.body;
var mainEl = document.createElement("main");

//question element
var h1El = document.createElement("h1");
//multiple choice list
var listEl = document.createElement("ul");
//multiple choice questions
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

h1El.textContent = "Question";
li1.textContent = "answer a";
li2.textContent = "answer b";
li3.textContent = "answer c";

document.body.appendChild(mainEl);
mainEl.appendChild(h1El);
mainEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);

mainEl.setAttribute(
  "style",
  "margin: 100px auto; width:50%; text-align:center; background-color: blue; border: 2px solid #040080; "
);
h1El.setAttribute("style", "background-color: #2b2bff; margin:0;");
listEl.setAttribute("style", "list-style: none; display:inline;");
li1.setAttribute(
  "style",
  "border: 1px solid #040080; text-align:center; margin: 2px 0;"
);
li2.setAttribute(
  "style",
  "border: 1px solid #040080; text-align:center; margin: 2px 0;"
);
li3.setAttribute(
  "style",
  "border: 1px solid #040080; text-align:center; margin: 2px 0;"
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

function questionPrompt() {}
