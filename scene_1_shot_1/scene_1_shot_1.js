

function normalize(value, min1, max1, min2, max2) { return Math.abs(value)/max1 * (max2-min2)+min2;}

onmousemove = function(e){
  var mouseX2HflipX1x = normalize(e.clientX, 0, 1080, -1, 1);
  var mouseXRotate = normalize(e.clientX, 0, 1080, -360, 360);

  document.querySelector(".subtitle").style.setProperty('--subtitleHflipX', mouseX2HflipX1x);
  document.querySelector("#BGImgLayer01").style.setProperty('--BGImgLayerRot', mouseXRotate);
  document.querySelector("#BGImgLayer02").style.setProperty('--BGImgLayerRot', mouseXRotate);
  document.querySelector("#BGImgLayer03").style.setProperty('--BGImgLayerRot', mouseXRotate);

  console.log(e.clientX, e.clientY);

  }
