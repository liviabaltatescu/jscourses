const IMAGE= document.querySelectorAll("img");

function makeSrcset(imgSrc){
  var markup=[];
  var width=400;
}


for(var i=0; i<IMAGE.length; i++){
  var imgSrc=IMAGE[i].getAttribute("src");
  imgSrc=imgSrc.slice(0,-8);

    console.log(imgSrc);

  var type=IMAGE[i].getAttribute("data-type");



  console.log(type);
}
