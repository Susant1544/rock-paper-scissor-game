//accessing elements
let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let message = document.querySelector(".msg");
let userDis = document.querySelector("#userMsg");
let compDis = document.querySelector("#compMsg");
let userPic = document.querySelector("#userPic");
let compPic = document.querySelector("#compPic");

//for counter of user and computer
let u = 0;
let c = 0;

//for loop in choices class to find its id on click
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userMove = choice.getAttribute("id");
    game(userMove);
  });
});

//the actual logic behind the game after compMove and userMove is known
let game = (userMove) => {
  let compMove = compMoveGen();
  userDis.innerText = userMove.toUpperCase();
  compDis.innerText = compMove.toUpperCase();
  if (userMove === compMove) {
    draw();
  } else {
    if (userMove === "rock") {
      compMove === "paper" ? userLoss() : userWin();
    } else if (userMove === "paper") {
      compMove === "rock" ? userWin() : userLoss();
    } else if (userMove === "scissors") {
      compMove === "rock" ? userLoss() : userWin();
    }
  }
};

//for computer generating random numbers and converting it to string by options array
let compMoveGen = () => {
  let options = ["rock", "paper", "scissors"];
  let optionsIdx = Math.floor(Math.random() * 3);
  let compMove = options[optionsIdx];
  return compMove;
};

//for draw, win and loss condition(what to perform)
let draw = () => {
  message.innerText = "It's a draw";
  message.style.backgroundColor = "grey";
  userPic.style.border = "5px solid grey";
  compPic.style.border = "5px solid grey";
};
let userWin = () => {
  message.innerText = "You Won";
  message.style.backgroundColor = "green";
  u++;
  userScore.innerText = u;
  userPic.style.border = "5px solid green";
  compPic.style.border = "5px solid red";
};
let userLoss = () => {
  message.innerText = "You Lost";
  message.style.backgroundColor = "red";
  c++;
  compScore.innerText = c;
  userPic.style.border = "5px solid red";
  compPic.style.border = "5px solid green";
};
