let level = 5;

function levelUp(){
    level++;
    document.getElementById("level").innerText =
    "Level: " + level;
}
let text="⚔️ Ashutosh Singh";
let i=0;

function type(){
    if(i<text.length){
        document.getElementById("typing").innerHTML+=text.charAt(i);
        i++;
        setTimeout(type,100);
    }
}
type();