var newBtn = document.getElementById("btn");
var help = document.getElementById("help");
var info = document.getElementById("info");

var mainDiv = document.getElementById("main-box");
var turns = [];
var Id = 0;



function newgame() {
    newBtn.style.display = "none";
    help.style.display = "none";
    info.style.display = "none";
    
    var textNode = document.createTextNode("Choose any three boxes :-)");
    var currenttext = document.getElementById("welcome-text");
    currenttext.replaceChild(textNode, currenttext.childNodes[0]);

    var parentDiv = document.createElement("div");
    parentDiv.className = "parent-div";
    mainDiv.appendChild(parentDiv);
    for (var i = 0; i < 9; i++) {
        var newDiv = document.createElement("div");
        var span = document.createElement("span");

        parentDiv.appendChild(newDiv);
        newDiv.id = Id;
        newDiv.className = "child-div";
        newDiv.onclick = displayNumber;

        newDiv.appendChild(span);
        span.id = "span_" + Id;
        span.className = "text";
        Id++;
    }
}

newBtn.onclick = newgame;

function randomNumber() {
    var random = Math.ceil((Math.random()) * 4);
    if (turns.length < 3) {
        turns.push(random);
        return random;
    } else {
        return ""
    }
}


function displayNumber() {
    var number = randomNumber();
    var spanId = this.id.replace("span_", "");
    var item = document.getElementById("span_" + spanId);
    console.log(item);
    item.innerText = number;
    this.style.backgroundColor = "#FF4136";

    if (turns.length == "3") {
        if (turns[0] == turns[1] && turns[0] == turns[2] && turns[1] == turns[2]) {
            // alert("you win");
            var textNode = document.createTextNode("Congrats you win!");
            var currenttext = document.getElementById("welcome-text");
            currenttext.replaceChild(textNode, currenttext.childNodes[0]);
            var playAgain = document.createElement("button");
            playAgain.innerText = "Play Agian";
            currenttext.appendChild(playAgain);
            // location.reload();
        } else {
            var textNode = document.createTextNode("Sorry, Better luck next Time");
            var currenttext = document.getElementById("welcome-text");
            currenttext.replaceChild(textNode, currenttext.childNodes[0]);
        }
    }
}

