// var fs = require(‘fs’);

var r = document.querySelector(':root');
const cursorChar = document.querySelector('.cursorChar');
var charW = 30;
var charH = 30;
r.style.setProperty('--cellwidth',charW+"px");
r.style.setProperty('--cellheight',charH+"px");

// no copy!
window.addEventListener("copy", (event)=>{
  event.clipboardData.setData("text/plain",'"shh"');
  event.preventDefault();
},false);

// if mouse is moving, then window comes back to the closest
window.addEventListener("mousemove", cursorMove = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursorChar.style.visibility="hidden";
  cursorChar.style.transform = `translate3d(${mouseX-charW/2}px, ${mouseY-charH/1.2}px, 0)`;
  console.log(charW, charH);

  // charContainer.addEventListener("mouseover", cursorReveal());
  var letterDivs = document.querySelectorAll(".singleChar");
  letterDivs.forEach(function(oneChar, index){
    oneChar.addEventListener("mouseenter", (event)=>{
      oneChar.style.color='red';
      // cursorChar.innerHTML = oneChar.innerHTML;
      console.log(oneChar.innerHTML);
    });
    oneChar.addEventListener("mouseout", (event)=>{
      oneChar.style.color='transparent';
    });
  });


});


//cursor changes when it stops moving
  var timeout;
  window.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){
    cursorChar.style.visibility="visible";
    cursorChar.innerHTML = '嘘';
  }, 100);
  }





// ------------------------------------------------ //


window.addEventListener('load', function() {

  for(var i = 0; i < words.length; i++){
      var newcell = document.createElement("div");
      newcell.className = "singleChar";
      newcell.innerText = words[i];
      r.style.setProperty('--cellwidth', (words[i].length * charW)+"px");
      charContainer.appendChild(newcell);
    }

});

// ------------------------------------------------ //

function hideImg(){
    document.querySelector(".bgImage.hideToggle").style.visibility = "hidden";
    // console.log('hidden');
  }

function showImg(){
      document.querySelector(".bgImage.hideToggle").style.visibility = "visible";
      // console.log('show high five');
  }
