var computerImg;
var playerScore = 0;
var compScore = 0;
var winrate;
var comprate;
var btclick = 0;

document.getElementById("rockbt").addEventListener("click", showrock);
function showrock() {
  document.getElementById("playerImg").src = "images/rock.png";
  btclick++;
  document.getElementById("clicknum").innerHTML = btclick;
  var words = 0;
  computerImg = Math.random();
  if (computerImg >= 2 / 3) {
    document.getElementById("compImg").src = "images/rock.png";
  } else if (computerImg >= 1 / 3) {
    document.getElementById("compImg").src = "images/paper.png";
    compScore++;
    document.getElementById("compScore").innerHTML = compScore;
  } else {
    document.getElementById("compImg").src = "images/scissors.png";
    playerScore++;
    document.getElementById("playerScore").innerHTML = playerScore;
    words++;
  }
  if (words == 1) {
    document.getElementById("winner").innerHTML = "Congratulation";
  } else if (words == 0) {
    document.getElementById("winner").innerHTML = "Try again";
  }

  winrate = (playerScore / btclick) * 100;
  comprate = (compScore / btclick) * 100;
  document.getElementById("rate").innerHTML = winrate.toFixed(2) + "%";
  document.getElementById("comprate").innerHTML = comprate.toFixed(2) + "%";
  setTimeout(revert, 1500);
}

document.getElementById("paperbt").addEventListener("click", showpaper);
function showpaper() {
  document.getElementById("playerImg").src = "images/paper.png";
  btclick++;
  var words = 0;
  document.getElementById("clicknum").innerHTML = btclick;
  computerImg = Math.random();
  if (computerImg >= 2 / 3) {
    document.getElementById("compImg").src = "images/rock.png";
    playerScore++;
    document.getElementById("playerScore").innerHTML = playerScore;
    words++;
  } else if (computerImg >= 1 / 3) {
    document.getElementById("compImg").src = "images/paper.png";
  } else {
    document.getElementById("compImg").src = "images/scissors.png";
    compScore++;
    document.getElementById("compScore").innerHTML = compScore;
  }

  if (words == 1) {
    document.getElementById("winner").innerHTML = "Congratulation";
  } else if (words == 0) {
    document.getElementById("winner").innerHTML = "Try again";
  }

  winrate = (playerScore / btclick) * 100;
  comprate = (compScore / btclick) * 100;
  document.getElementById("rate").innerHTML = winrate.toFixed(2) + "%";
  document.getElementById("comprate").innerHTML = comprate.toFixed(2) + "%";
  setTimeout(revert, 1500);
}

document.getElementById("scissorbt").addEventListener("click", showscissor);
function showscissor() {
  document.getElementById("playerImg").src = "images/scissors.png";
  btclick++;
  var words = 0;
  document.getElementById("clicknum").innerHTML = btclick;

  computerImg = Math.random();

  if (computerImg >= 2 / 3) {
    document.getElementById("compImg").src = "images/rock.png";
    compScore++;
    document.getElementById("compScore").innerHTML = compScore;
  } else if (computerImg >= 1 / 3) {
    document.getElementById("compImg").src = "images/paper.png";
    playerScore++;
    words++;
    document.getElementById("playerScore").innerHTML = playerScore;
  } else {
    document.getElementById("compImg").src = "images/scissors.png";
  }

  if (words == 1) {
    document.getElementById("winner").innerHTML = "Congratulation";
  } else if (words == 0) {
    document.getElementById("winner").innerHTML = "Try again";
  }

  winrate = (playerScore / btclick) * 100;
  comprate = (compScore / btclick) * 100;
  document.getElementById("rate").innerHTML = winrate.toFixed(2) + "%";
  document.getElementById("comprate").innerHTML = comprate.toFixed(2) + "%";
  setTimeout(revert, 1500);
}

function revert() {
  document.getElementById("compImg").src = "images/question.png";
  document.getElementById("playerImg").src = "images/question.png";
  document.getElementById("winner").innerHTML = "";
}
