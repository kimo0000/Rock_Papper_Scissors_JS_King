const choice = document.querySelectorAll(".choice i");
const results = document.querySelector(".result");
const userScore = document.querySelector("#user_score");
const computerScore = document.querySelector("#computer_score");

let choicePc = ["rock", "papper", "scissors"];
let result = "";
let scoreUs = 0;
let scoreComp = 0;

choice.forEach((choix) => {
  choix.addEventListener("click", (e) => {
    choice.forEach((choix) => {
      choix.classList.remove("active");
    });

    e.target.classList.add("active");

    let user = e.target.id;
    // console.log(user)
    let ramdonChoice = Math.floor(Math.random() * choicePc.length);
    console.log(user, choicePc[ramdonChoice]);
    playRound(user, choicePc[ramdonChoice]);
  });
});

function playRound(user, computer) {
  if (user === computer) {
    results.textContent = "It's Tie";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "papper" && computer === "rock") ||
    (user === "scissors" && computer === "papper")
  ) {
    scoreUs++;
    console.log(scoreUs);
    userScore.innerHTML = scoreUs;
    results.textContent = "You Win! " + user + " beat " + computer;
  } else {
    scoreComp++;
    console.log(scoreComp);
    computerScore.innerHTML = scoreComp;
    results.textContent = "You Lose! " + computer + " beat " + user;
  }

  win();
}

function win() {
  if (scoreUs === 10) {
    console.log("User Win");
    let popup = document.createElement("div");
    // popup.className = 'popup';
    popup.style.cssText =
      "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0, .7); display: flex; justify-content: center; align-items: center; font-size: 40px; color: #fff; font-weight: bold;";

    let notif = document.createElement("div");
    notif.style.cssText =
      "padding: 30px; border: 1px solid #fff; display: flex; justify-content: center; align-items: center; position: relative; background: #fff; color: #000;";
    notif.appendChild(document.createTextNode("User Win !"));

    let closeButton = document.createElement("span");
    closeButton.appendChild(document.createTextNode("X"));
    closeButton.style.cssText =
      "position:absolute; top:0; right:0; color: #fff; background-color: red; padding: 8px; font-size: 15px; border-bottom-left-radius: 8px; cursor: pointer;";

    closeButton.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      results.textContent = "";
      userScore.innerHTML = 0;
      computerScore.innerHTML = 0;
      choice.forEach((choix) => {
        choix.style.pointerEvents = "none";
        choix.classList.remove("active");
      });
    });

    notif.appendChild(closeButton);

    popup.appendChild(notif);

    document.body.appendChild(popup);
  }

  if (scoreComp === 10) {
    console.log("Computer Win");
    let popup = document.createElement("div");
    // popup.className = 'popup';
    popup.style.cssText =
      "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0, .7); display: flex; justify-content: center; align-items: center; font-size: 40px; color: #fff; font-weight: bold;";

    let notif = document.createElement("div");
    notif.style.cssText =
      "padding: 30px; border: 1px solid #fff; display: flex; justify-content: center; align-items: center; position: relative; background: #fff; color: #000;";
    notif.appendChild(document.createTextNode("Computer Win !"));

    let closeButton = document.createElement("span");
    closeButton.appendChild(document.createTextNode("X"));
    closeButton.style.cssText =
      "position:absolute; top:0; right:0; color: #fff; background-color: red; padding: 8px; font-size: 15px; border-bottom-left-radius: 8px;  cursor: pointer;";

    closeButton.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      results.textContent = "";
      userScore.innerHTML = 0;
      computerScore.innerHTML = 0;
      choice.forEach((choix) => {
        choix.style.pointerEvents = "none";
        choix.classList.remove("active");
      });
    });

    notif.appendChild(closeButton);

    popup.appendChild(notif);

    document.body.appendChild(popup);
  }
}
