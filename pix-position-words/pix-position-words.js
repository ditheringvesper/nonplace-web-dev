window.addEventListener("load",init);

function init(){
// mouse pos & show innerHTML
window.addEventListener('load', function() {
    const container = document.querySelector(".curContainer");
    document.addEventListener('mousemove', function(event) {
    var mouseData = {
                x: event.clientX,
                y: event.clientY
        };
        // console.log(mouseData)
    container.style.top = mouseData.y + "px";
    container.style.left = mouseData.x + "px";
    container.innerHTML = "ah";
    console.log(container.innerHTML);

        });
    });



}

