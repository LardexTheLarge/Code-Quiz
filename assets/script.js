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
timerEl.id = "timer";

//submit button and input initials and LeaderBoard
var inputInitials = document.createElement("input");
inputInitials.id = "inputInitials";
var saveBtn = document.createElement("button");
var endText = document.createElement("p");
var highScoreText = document.createElement("h2");
var leaderBoardList = document.createElement("ul");

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

//shows the questions in testQuestions in array
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

//this function checks if the correctAnswer of the testQuestions array is
//correct and moves on to the next question and if user gets it wrong goes to the next question in array
function checkAns(selectedAns) {
  if (testQuestions[gIndex].correctAnswer === selectedAns) {
    if (gIndex == testQuestions.length - 1) {
      endQuiz();
      return;
    }
    gIndex = gIndex + 1;
    h1El.textContent = testQuestions[gIndex].question;
    li1.textContent = testQuestions[gIndex].answers.a;
    li2.textContent = testQuestions[gIndex].answers.b;
    li3.textContent = testQuestions[gIndex].answers.c;
  } else if (testQuestions[gIndex].correctAnswer !== selectedAns) {
    console.log("subtract Time");
    timeLeft = timeLeft - 10;
    alert("wrong Answer -10 seconds");

    if (gIndex < testQuestions.length - 1) {
      gIndex = gIndex + 1;
      h1El.textContent = testQuestions[gIndex].question;
      li1.textContent = testQuestions[gIndex].answers.a;
      li2.textContent = testQuestions[gIndex].answers.b;
      li3.textContent = testQuestions[gIndex].answers.c;
    } else {
      endQuiz();
    }
  }
}

//This function calls to the questions and starts the test
function start() {
  introText.textContent = "Press Start to begin test";
  startBtn.textContent = "Start";

  // starts test
  startBtn.addEventListener("click", function () {
    countdown();
    questionPrompt();
  });
}
start();

var timeLeft;
function countdown() {
  timeLeft = 50;

  timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timeLeft--;
      timerEl.textContent = timeLeft;
    } else {
      timerEl.textContent = "0";
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}

var timeInterval;
function endQuiz() {
  timerEl.textContent = timeLeft;
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

  //removes questionPrompts
  h1El.setAttribute("style", "display: none;");
  mainEl.setAttribute("style", "display: none;");
  listEl.setAttribute("style", "display: none;");
  li1.setAttribute("style", "display: none;");
  li2.setAttribute("style", "display: none;");
  li3.setAttribute("style", "display: none;");

  clearInterval(timeInterval);
  //sets initials to local storage on click
  saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (inputInitials.value !== "") {
      //gets the element created by id called inputInitials and its value
      var userInitials = document.getElementById("inputInitials").value;
      inputInitials.value = "";
      //parses userInitials and userTime and puts it in an array
      var parsedInitials =
        JSON.parse(localStorage.getItem("userInitials")) || [];
      parsedInitials.push(userInitials);
      var parsedTime = JSON.parse(localStorage.getItem("userTime")) || [];
      parsedTime.push(timeLeft);

      //set the userInitials to the local storage
      localStorage.setItem("userInitials", JSON.stringify(parsedInitials));
      localStorage.setItem("userTime", JSON.stringify(parsedTime));
      renderInitials();
    }
  });
}

//this function is responsible for rendering the values stored in local storage
function renderInitials() {
  var parsedInitials = JSON.parse(localStorage.getItem("userInitials")) || [];
  var parsedTime = JSON.parse(localStorage.getItem("userTime")) || [];
  //iterates through each Initial entered and displays them to the HighScores element
  for (var i = 0; i < parsedInitials.length && i < parsedTime.length; i++) {
    var userInitials = parsedInitials[i];
    var timeLeft = parsedTime[i];

    //takes userInitials and score from local storage is displayed to user in the highscores
    var leaderBoardUser = document.createElement("li");
    leaderBoardUser.setAttribute(
      "style",
      "border: 1px solid white; text-align:center; margin: 2px 0px; color: white; padding: 2px 5px; background-color: blue;"
    );
    leaderBoardList.appendChild(leaderBoardUser);
    leaderBoardUser.textContent =
      userInitials.toUpperCase().trim() + " -- " + timeLeft;
  }
}
