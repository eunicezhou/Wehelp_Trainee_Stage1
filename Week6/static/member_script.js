let form = document.getElementById("form");
let container = document.getElementById("container");

let button = document.querySelector("button")
button.addEventListener("click",function leaveMessage(){
    let newContainer = document.createElement("div")
    newContainer.innerHTML="\
    <div>\
        <div class='userPhoto'>\
            <img src = '../static/image/user.png' style='width:40px'></img>\
            <div>{{username}}</div>\
        </div>\
        <div class='text'>{{content}}</div>\
    </div>"
    container.appendChild(newContainer)
})


let userMessage = function leaveMessage(){};
container.innerHTML(userMessage);
