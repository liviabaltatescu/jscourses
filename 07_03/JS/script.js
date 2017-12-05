const CONS= document.querySelector(".cta a");
const ALERT=document.querySelector("#booking-alert");

// CONS.classList.remove("hide");
// ALERT.classList.add("hide");

function revealTest(){
  CONS.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}


// CONS.onclick=revealTest;
// CONS.onclick=console.log("Mesaj de test!");

CONS.addEventListener("click",revealTest);
CONS.addEventListener("click",function(){console.log("Mesaj de test")});
