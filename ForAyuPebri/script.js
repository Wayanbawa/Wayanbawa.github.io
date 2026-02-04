var konten, musik, nomorWhatsapp;

// ================
// var audio, klik;
if (musik != "") {
  var audio = new Audio(musik);
  audio.autoplay = true;
  audio.loop = true;
}

// ==================

// konten = konten.reverse();
konten.forEach((elem) => {
  typeof elem.ucapan === "undefined" ? (elem.ucapan = "") : {};
  typeof elem.gambar === "undefined" ? (elem.gambar = "") : {};
});
var no = 0;
var el = 0;
var x = 0;
for (var i = 0; i < konten.length; i++) {
  var div = document.createElement("div");
  div.classList.add("pu-ctnr");
  div.classList.add("pu-ctn");
  div.setAttribute("style", "display:none");
  div.innerHTML =
    '<div class="pu"><div class="t"><div><div></div></div></div><div class="c">' +
    (konten[i].gambar != "" ? '<img src="' + konten[i].gambar + '" height="140" />' : "") +
    (konten[i].ucapan != "" ? "<p>" + konten[i].ucapan + "</p>" : "") +
    '<div class="btn"><button onclick="' +
    '">OK</button><!-- <button>BANGET</button> --></div></div></div>';
  document.body.appendChild(div);
  var btnOk = document.querySelectorAll(".pu-ctn")[el++].querySelectorAll("button")[0];

  if (i != konten.length - 1) {
    btnOk.addEventListener("click", () => {
      show(no, no + 1);
      no++;
    });
  } else {
    btnOk.addEventListener("click", () => {
      hide(no);
      no = 0;
      kirimPesan();
    });
  }
  // console.log(konten.length - 1);
}

function startshow() {
  var popup = document.querySelectorAll(".pu-ctn");
  popup[0].style.display = "flex";
}
function show(elem, next) {
  // console.log(elem + "+" + next);
  var popup = document.querySelectorAll(".pu-ctn");
  popup[elem].style.display = "none";
  popup[next].style.display = "flex";
}
function hide(elem) {
  // console.log(elem);
  var popup = document.querySelectorAll(".pu-ctn");
  popup[konten.length - 1].style.display = "none";
}
function showPopup(klass) {
  var popup = document.querySelector(klass);
  popup.style.display = "flex";
  if (klass == ".ta") {
    popup.querySelector("textarea").focus();
  }
}
function hidePopup(klass) {
  var popup = document.querySelector(klass);
  popup.style.display = "none";
}

const newContent = document.querySelector(".new-content");
const newContainer = document.querySelector(".new-container");
document.querySelector(".btn-start").addEventListener("click", () => {
  if (musik != "") audio.play();

  newContent.classList.add("hide");

  setTimeout(startshow, 500);
});

var pldr = document.querySelector(".pldr");
var isRemove = false;
function pldrRemove() {
  pldr.classList.add("rmv");
  setTimeout(() => {
    pldr.remove();
    tampilPassword();
  }, 500);
}

setTimeout(() => {
  if (!isRemove) {
    pldrRemove();
  }
}, 15000);

window.addEventListener("load", () => {
  pldrRemove();
  isRemove = true;
});
