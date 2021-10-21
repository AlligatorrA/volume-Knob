const knob = document.querySelector(".knob");

function calculateDegree(e) {
    const x1 = window.innerWidth/2;
    const y1 = window.innerHeight/2;
    const x2 = e.clientX;
    const y2 = e.clientY;

    const deltaX = x1 - x2;
    const deltaY = y1 - y2;

    const rad = Math.atan2(deltaX, deltaY);

    let deg = rad * (180 / Math.PI);

    return deg;

}

knob.addEventListener("mousedown", function (){
    knob.addEventListener("mousemove", rotate);
    function rotate(e) {
        const result = Math.floor(calculateDegree(e) -  90);
        knob.style.transform = `rotate(${result}deg)`;
        
    }
    knob.addEventListener("mouseup", function(){
        knob.removeEventListener("mousemove", rotate);
    });
});