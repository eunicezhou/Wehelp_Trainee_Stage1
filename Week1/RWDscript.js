var hidden = document.getElementById("hidden");
var show = document.getElementsByClassName("show");

window.addEventListener('resize', resizeMethod);
function disappear() {
    for (var i = 0; i < show.length; i++) {
        show[i].style.display = "none";
        console.log("執行到這一段")
    };
}
function appear() {
        for (var i = 0; i < show.length; i++) {
            show[i].style.display = "block";
            console.log("執行到這一段")
        };
}
function resizeMethod() {
    if (document.body.clientWidth < 600) {
        hidden.style.display = "block";
        disappear();
    }else {
        hidden.style.display = "none";
        appear();
        };
}
