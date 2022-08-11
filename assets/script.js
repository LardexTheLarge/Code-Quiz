//variables
var body = document.body;
var mainEl = document.createElement("main");
var startDiv = document.createElement("div");
var endDiv = document.createElement("div");

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

//timer
var timerEl = document.getElementById("time");

//submit button and input initials and LeaderBoard
var inputInitials = document.createElement("input");
var saveBtn = document.createElement("button");
var endText = document.createElement("p");
var highScoreText = document.createElement("h2");
var leaderBoardList = document.createElement("ul");
var leaderBoardUser = document.createElement("li");

//Start test screen
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
  "border: 1px solid #005eff; text-align:center; margin: 2px 0; color: white; cursor: pointer;"
);
li2.setAttribute(
  "style",
  "border: 1px solid #005eff; text-align:center; margin: 2px 0; color: white; cursor: pointer;"
);
li3.setAttribute(
  "style",
  "border: 1px solid #005eff; text-align:center; margin: 2px 0; color: white; cursor: pointer;"
);
startBtn.setAttribute(
  "style",
  "width: 50px; height: 20px; color: white; background-color: blue; cursor: pointer;"
);
startDiv.setAttribute(
  "style",
  "display: grid; justify-content: center; justify-items: center;"
);
endDiv.setAttribute(
  "style",
  "display: grid; justify-content: center; justify-items: center;"
);
saveBtn.setAttribute(
  "style",
  "width: 50px; height: 20px; color: white; background-color: blue; cursor: pointer; margin-top: 3px"
);
leaderBoardList.setAttribute("style", "list-style: none; display:inline;");
leaderBoardUser.setAttribute(
  "style",
  "border: 1px solid white; text-align:center; margin: 2px 0px; color: white; padding: 2px 5px; background-color: blue;"
);

var testQuestions = [
  {
    question: "Godzilla translation in Japanese:__________",
    answers: {
      a: "メカゴジラ",
      b: "スペースゴジラ",
      c: "ゴジラ",
    },
    correctAnswer: "ゴジラ",
  },
  {
    question: "How did Godzilla's story come to be created?",
    answers: {
      a: "A story the director came up with",
      b: "WWII when Japan got nuked by the US military",
      c: "Godzilla is a real story",
    },
    correctAnswer: "WWII when Japan got nuked by the US military",
  },
  {
    question: "Who is Godzilla's friend?",
    answers: {
      a: "Angirus",
      b: "King Ghidorah",
      c: "King Kong",
    },
    correctAnswer: "Angirus",
  },
  {
    question: "The first Godzilla movie aired in what year?",
    answers: {
      a: "2014",
      b: "1954",
      c: "1956",
    },
    correctAnswer: "1954",
  },
];

//Global scope Index
var gIndex = 0;
for (let i = 0; i < testQuestions[gIndex].answers; i++) {
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

  //layout for Q and A
  h1El.textContent = testQuestions[gIndex].question;
  li1.textContent = testQuestions[gIndex].answers.a;
  li2.textContent = testQuestions[gIndex].answers.b;
  li3.textContent = testQuestions[gIndex].answers.c;

  // h1El.addEventListener("click", function () {
  //   checkAns(testQuestions[gIndex].answers.a);
  // });
  // btn eventlistener
  li1.addEventListener("click", function () {
    checkAns(testQuestions[gIndex].answers.a);
  });
  li2.addEventListener("click", function () {
    checkAns(testQuestions[gIndex].answers.b);
  });

  li3.addEventListener("click", function () {
    checkAns(testQuestions[gIndex].answers.c);
  });

  introText.textContent = "";
  startBtn.setAttribute("style", "display: none;");
}

function checkAns(selectedAns) {
  if (testQuestions[gIndex].correctAnswer === selectedAns) {
    gIndex = gIndex + 1;
    h1El.textContent = testQuestions[gIndex].question;
    li1.textContent = testQuestions[gIndex].answers.a;
    li2.textContent = testQuestions[gIndex].answers.b;
    li3.textContent = testQuestions[gIndex].answers.c;
  } else {
    gIndex = gIndex + 1;
    alert("wrong Answer -10 seconds");
    h1El.textContent = testQuestions[gIndex].question;
    li1.textContent = testQuestions[gIndex].answers.a;
    li2.textContent = testQuestions[gIndex].answers.b;
    li3.textContent = testQuestions[gIndex].answers.c;
  }
}

//This function calls to the questions and starts the test
function start() {
  introText.textContent = "Press Start to begin test";
  startBtn.textContent = "Start";

  // starts test
  startBtn.addEventListener("click", function () {
    //TODO: un-comment timer
    countdown();
    questionPrompt();
  });
}
start();

var timeLeft;
function countdown() {
  timeLeft = 50;

  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timeLeft--;
      timerEl.textContent = timeLeft;
    } else {
      timerEl.textContent = timeLeft;
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      //TODO: un-comment end screen
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  //end test screen
  document.body.appendChild(endDiv);
  endDiv.appendChild(endText);
  endDiv.appendChild(inputInitials);
  endDiv.appendChild(saveBtn);
  endDiv.appendChild(highScoreText);
  endDiv.appendChild(leaderBoardList);

  //user inputs initials
  endText.textContent = "Enter your initials to save score";
  saveBtn.textContent = "Save";
  highScoreText.textContent = "HighScores";

  //takes away start screen
  introText.textContent = "";
  startBtn.setAttribute("style", "display: none;");

  //calls from local storage
  var userInitials = localStorage.getItem("userInitials");

  //sets initials to local storage on click
  saveBtn.addEventListener("click", function () {
    if (inputInitials.value !== "") {
      //element of user initials and score
      leaderBoardList.appendChild(leaderBoardUser);

      leaderBoardUser.textContent = inputInitials.value + " -- score";
      localStorage.setItem("userInitials", leaderBoardUser.textContent);
      console.log(leaderBoardUser.textContent);
    }
  });
}

// endQuiz();
