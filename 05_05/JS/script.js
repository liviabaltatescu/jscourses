const TEST= document.querySelector(".cta a");


if (TEST.hasAttribute("value")){
  console.log(TEST.getAttribute("value"))
}else{
  console.log(TEST.setAttribute("value","test"))
}

// console.log(TEST);
//
console.log(TEST.attributes);
