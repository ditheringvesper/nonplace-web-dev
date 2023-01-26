// var fs = require(‘fs’);

var r = document.querySelector(':root');
const cursorChar = document.querySelector('#cursorChar');
var charW = 30;
var charH = 30;
r.style.setProperty('--cellwidth',charW+"px");
r.style.setProperty('--cellheight',charH+"px");


// make a grid of text characters
const content = "我试图听见 ---- 真正地听见、闻见、尝见、看见、触见 ---- 所有曾经连续的、熟悉的、常识得如同空气一般的事物；可感知甚至不比隔夜的梦残余，瞬息即逝。我猜想，这大概是没有余响的缘故：不闻回声，不觉时空；时间跳跃又静默，空间闭塞又空寂。这一切都失帧了、失真了。每个人的当下困境都像是一个大转盘玩具（小区游乐设施常备）；站在地上的人看着转盘上的人，焦点能轻轻松松地来去、停留、捕捉、追踪；转盘上的一切尽在眼前。转盘上的人在原地打转：世界时而在他眼前、时而在他身后；转盘外的世界被空间和时间拉扯成冗杂的虚影、焦躁迷离之间只有脚下一方闭环的面积相对清晰。好像所有的这些储而不用的囤积癖行为，都是为了一个积存一个臆想中永远存在于未来的安全角——就像和平年代中的末日生存狂热者在应急仓的储备工程上不断扩建他们心目中的过期日期一样。我好像总在为那遥遥无期又似乎触手可及的一天做着准备；一个物资丰饶的角落，没有明天，没有匮乏的困扰，好像舒适圈内没有时间，好像窝居在那时那刻，我便会在丰盈的凝滞中活着死去."
// "中国共产党的领导是中国特色社会主义最本质的特征，是中国特色社会主义制度的最大优势，党是最高政治领导力量。党政军民学，东西南北中，党是领导一切的。党要适应改革开放和社会主义现代化建设的要求，坚持科学执政、民主执政、依法执政，加强和改善党的领导。党必须按照总揽全局、协调各方的原则，在同级各种组织中发挥领导核心作用。党必须集中精力领导经济建设，组织、协调各方面的力量，同心协力，围绕经济建设开展工作，促进经济社会全面发展。党必须实行民主的科学的决策，制定和执行正确的路线、方针、政策，做好党的组织工作和宣传教育工作，发挥全体党员的先锋模范作用。党必须在宪法和法律的范围内活动。党必须保证国家的立法、司法、行政、监察机关，经济、文化组织和人民团体积极主动地、独立负责地、协调一致地工作。党必须加强对工会、共产主义青年团、妇女联合会等群团组织的领导，使它们保持和增强政治性、先进性、群众性，充分发挥作用。党必须适应形势的发展和情况的变化，完善领导体制，改进领导方式，增强执政能力。共产党员必须同党外群众亲密合作，共同为建设中国特色社会主义而奋斗";
const words = content.split("");
charContainer = document.querySelector('.charContainer');
singleChar = document.querySelector('.singleChar');

// no copy!
window.addEventListener("copy", (event)=>{
  event.clipboardData.setData("text/plain","嘘...");
  event.preventDefault();
},false);


// reveal individual characters when moving
window.addEventListener("mousemove", cursorMove = (e) => {
  const letterDivs = document.querySelectorAll(".singleChar");
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursorChar.style.visibility="hidden";
  cursorChar.style.transform = `translate3d(${mouseX-charW/2}px, ${mouseY-charH/1.2}px, 0)`;
  console.log(charW, charH);

  // charContainer.addEventListener("mouseover", cursorReveal());
  letterDivs.forEach(function(oneChar, index){
    oneChar.addEventListener("mouseenter", (event)=>{
      oneChar.style.color="white";
      // oneChar.style.webkitTextStroke = "1px black";
      // oneChar.style.setProperty("--strokeCol", "1.5px black");
      oneChar.style.textShadow = "1px 2px 8px black";
      // cursorChar.innerHTML = oneChar.innerHTML;
      console.log(oneChar.innerHTML);
    });
    oneChar.addEventListener("mouseout", (event)=>{
      oneChar.style.color='transparent';
      oneChar.style.webkitTextStroke = "transparent";
      timeout = setTimeout(function(){
          oneChar.style.visibility='hidden';
        }, 2500);
    });
  });

});

//cursor changes when it stops moving
  var timeout;
  window.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){
    cursorChar.classList.add("hushVaporReset");
      cursorChar.style.visibility="visible";
      cursorChar.innerHTML = '嘘';
    }, 100);
    cursorChar.classList.remove("hushVaporReset");

  };



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
