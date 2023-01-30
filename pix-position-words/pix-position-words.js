var r = document.querySelector(':root');
var rs = getComputedStyle(r);
// make a grid of text characters
var content = "我试图听见 ---- 真正地听见、闻见、尝见、看见、触见 ---- 所有曾经连续的、熟悉的、常识得如同空气一般的事物；可感知甚至不比隔夜的梦残余，瞬息即逝。我猜想，这大概是没有余响的缘故：不闻回声，不觉时空；时间跳跃又静默，空间闭塞又空寂。这一切都失帧了、失真了。每个人的当下困境都像是一个大转盘玩具（小区游乐设施常备）；站在地上的人看着转盘上的人，焦点能轻轻松松地来去、停留、捕捉、追踪；转盘上的一切尽在眼前。转盘上的人在原地打转：世界时而在他眼前、时而在他身后；转盘外的世界被空间和时间拉扯成冗杂的虚影、焦躁迷离之间只有脚下一方闭环的面积相对清晰。好像所有的这些储而不用的囤积癖行为，都是为了一个积存一个臆想中永远存在于未来的安全角——就像和平年代中的末日生存狂热者在应急仓的储备工程上不断扩建他们心目中的过期日期一样。我好像总在为那遥遥无期又似乎触手可及的一天做着准备；一个物资丰饶的角落，没有明天，没有匮乏的困扰，好像舒适圈内没有时间，好像窝居在那时那刻，我便会在丰盈的凝滞中活着死去."
const words = content.split("");
const gridContainer = document.querySelector(".gridContainer");

const container = document.querySelector(".curContainer");
const dialogueBox = document.querySelector("#curDialogue");
var dialogueContent = [];
const newWindow = document.querySelector("#newWindow");
var containerW = 25;
var containerH = 25;
var timestamp = 0;
var mY = 0;
var mSpeed;

function newWindowRatio(){
    r.style.setProperty('--newWindowW', window.outerWidth/5 + 'px');
    r.style.setProperty('--newWindowH', newWindow.height + 'px');
    r.style.setProperty('--curDialogueX', newWindow.width/12 + 'px');
    r.style.setProperty('--curDialogueY', newWindow.height/3.2 + 'px');
    r.style.setProperty('--curDialogueW', newWindow.width/1.95 + 'px');
    r.style.setProperty('--curDialogueH', newWindow.height/3.5 + 'px');
    // console.log(rs.getPropertyValue('--newWindowW'));
}

window.addEventListener("load", (e)=>{
    newWindowRatio();
});

window.addEventListener("resize", (e)=>{
    newWindowRatio();
});

window.addEventListener("load", (e) => {
    newWindow.style.visibility = "hidden";

    // var sumGrids = window.height/25*window.width/25;
    // for(var i = 0; i < sumGrids; i++){
    //     var curImg = document.createElement("div");
    //     curImg.src = "cursor.png"
    //     // curImg.innerHTML = "a";
    //     r.style.setProperty('--curSize', (sumGrids[i].length * 20)+"px");
    //     gridContainer.appendChild(curImg);
    //   }
  
});

var i = 0;
function typewriter(){
    if (i < content.length) {
    setTimeout(addChar, mSpeed*100);
    function addChar(){
        dialogueContent += words[i];
        i++;
        }
    }
}

window.addEventListener("mousemove", cursorMove = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    getMouseSpeed(e);
    if (mSpeed<200){
        typewriter();
    }

    container.style.transform = `translate3d(${mouseX-containerW/2}px, ${mouseY-containerH/1.2}px, 0)`;
    dialogueBox.innerHTML = dialogueContent;
    dialogueBox.scrollTop = dialogueBox.scrollHeight;
    newWindow.style.visibility = "visible";
    // newWindow.moveTo(mouseX, mouseY);

    // console.log(windowWidth, windowHeight);

});



function getMouseSpeed(e){     // mouse moving speed
    var now = Date.now();
    currentmY = e.screenY;

    var dt = now - timestamp;
    var distance = Math.abs(currentmY - mY);
    var speed = Math.round(distance / dt * 1000);
    console.log(speed);
    mSpeed = speed;

    mY = currentmY;
    timestamp = now;
}