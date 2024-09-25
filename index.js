
function changeImage() {
    var image = document.getElementById('car');
    if (image.src.match("bulbon")) {
        image.src = "stop.png";
    } else {
        image.src = "start.png";
    }
}
function start() {
    document.querySelector("#car").src= "start.png";
}
function stop() {
    document.querySelector("#car").src= "stop.png";
}
