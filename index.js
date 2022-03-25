var size = document.querySelectorAll(".drum").length;

function mouseClicked() {
    this.style.color = "White";
    var innerHtmlCode = this.innerHTML;
    keyboardStroke(innerHtmlCode);
}
function keyboardStroke(key) {
    switch (key) {
        case "w":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    }
}
for (var i = 0; i < size; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", mouseClicked);
}
document.addEventListener("keypress", function (event) {
    keyboardStroke(event.key);

});