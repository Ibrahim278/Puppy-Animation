var topPosition = 200;
var leftPosition = -200;

function runPuppy() {
                    
    var puppy = document.getElementById("puppy");
    
// add if it reaches the screen end (you can check with screen.availwidth)
puppy.style.position = "absolute";
puppy.style.left = leftPosition + "px";
puppy.style.top = topPosition + "px";
puppy.style.visibility = "visible";

topPosition += 5;
leftPosition +=20;

if(leftPosition >= screen.availWidth - 300)
{
    topPosition = 200;
    leftPosition = -200;
}
}
