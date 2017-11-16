const FEATURED = document.querySelector(".top-pitch");

const THEIMAGE = FEATURED.querySelector("h2");


var altText= THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");
 var captionText = document.createTextNode(altText);

 captionElement.appendChild(captionText);

FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt","")
