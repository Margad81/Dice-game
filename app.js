// Togloom duussan esehiig shalgah huwisagch
var togloomDuussan;

//Eelj hadgalah huwisagch I-0 , II-1
var toglogchEelj;
//Toglogchdiin tsugluulsan onoog hadgalah huwisagch
var onoo;
//Eeljiin onoog hadgalah huwisagch
var roundOnoo;
// Shoonii zurgiig ehlehed alga bolgoh
var diceDom = document.querySelector(".dice");

function newgame() {
  togloomDuussan = false;

  toglogchEelj = 0;

  onoo = [0, 0];

  roundOnoo = 0;

  //program ehlehed beltgeh

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  diceDom.style.display = "none";
}

newgame();

// roll towchiig ajilluulah
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (togloomDuussan === false) {
    //   shoog randomoor buulgah
    var dice = Math.floor(Math.random() * 6) + 1;

    // shoog gargaj irj buusan toog shoond oruulah
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    if (dice !== 1) {
      //   1ees yalgaatai buuwal idewhitei toglogchiin onoog nemeh
      roundOnoo = roundOnoo + dice;
      document.getElementById("current-" + toglogchEelj).textContent =
        roundOnoo;
    } else {
      // 1tei tentsuu buuwal

      daraagiinToglogchruuShiljuuleh();
    }
  } else {
    alert("Тоглоом дууссан байна.\nNew Game товчийг дарна уу!");
  }
});

// Hold darwal onoog hadgalj eeljiig solih
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (togloomDuussan === false) {
    //ug toglogchiin onoog global onoon deer nemeh
    onoo[toglogchEelj] = onoo[toglogchEelj] + roundOnoo;
    document.getElementById("score-" + toglogchEelj).textContent =
      onoo[toglogchEelj];

    // hojson esehiig shalgah

    if (onoo[toglogchEelj] >= 100) {
      togloomDuussan = true;
      document.getElementById("score-" + toglogchEelj).innerHTML = "Winner!";
      document
        .querySelector(".player-" + toglogchEelj + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + toglogchEelj + "-panel")
        .classList.remove("active");
    } else {
      // toglogchiin eelj solih
      daraagiinToglogchruuShiljuuleh();
    }
  } else {
    alert("Тоглоом дууссан байна.");
  }
});

function daraagiinToglogchruuShiljuuleh() {
  //   eeljiin onoog 00 bolgoh
  roundOnoo = 0;
  document.getElementById("current-" + toglogchEelj).textContent = 0;

  // toglogchiin eeljiig solino
  toglogchEelj === 0 ? (toglogchEelj = 1) : (toglogchEelj = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // shoog tur alga bolgoh
  diceDom.style.display = "none";
}

// Шинэ тоглоом эхлүүлэх товч
document.querySelector(".btn-new").addEventListener("click", newgame);
