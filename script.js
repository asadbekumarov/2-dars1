let Eladd = document.querySelector(".add");
let Eldelete = document.querySelector(".delete");
let Elwindow = document.querySelector(".window");
let ElsubhanAllah = document.querySelector(".subhan-allah");
let Elalhamdulillah = document.querySelector(".alhamdulillah");
let ElallohuAkbar = document.querySelector(".allohu-akbar");

Eladd.addEventListener("click", () => {
  Elwindow.value = parseInt(Elwindow.value) + 1;
  subhanallah();
});

Eldelete.addEventListener("click", () => {
  Elwindow.value = 0;
  subhanallah();
});

function subhanallah() {
  let Elaudio = new Audio("./subhanallah.mp3");
  if (parseInt(Elwindow.value) === 33) {
    Elaudio.play();
    ElsubhanAllah.style.display = "block";
  }
  if (parseInt(Elwindow.value) === 66) {
    Elaudio.play();
    ElsubhanAllah.style.display = "none";
    Elalhamdulillah.style.display = "block";
  }
  if (parseInt(Elwindow.value) === 99) {
    Elaudio.play();
    Elalhamdulillah.style.display = "none";
    ElallohuAkbar.style.display = "block";
  }
}
