let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let scoreHome = 0;
let scoreGuest = 0;

function addHome1() {
  scoreHome += 1;
  homeScore.innerText = scoreHome;
}

function addHome2() {
  scoreHome += 2;
  homeScore.innerText = scoreHome;
}

function addHome3() {
  scoreHome += 3;
  homeScore.innerText = scoreHome;
}

function addGuest1() {
  scoreGuest += 1;
  guestScore.innerText = scoreGuest;
}

function addGuest2() {
  scoreGuest += 2;
  guestScore.innerText = scoreGuest;
}

function addGuest3() {
  scoreGuest += 3;
  guestScore.innerText = scoreGuest;
}
