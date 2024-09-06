var timer = 60;
var score = 0;
var hitrn = 0;

function getScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#panel-bottom").addEventListener("click",function(dets){
   var clicked = Number(dets.target.textContent)
   if(clicked === hitrn){
    getScore();
    hitter();
    makeBubble();
   }
})

function hitter(){
hitrn =Math.floor(Math.random()*10)
document.querySelector("#hitval").textContent = hitrn;
}
hitter();


function runTimer(){
  var timerrunner =   setInterval(function(){
      
        if(timer>0){
            
            timer--;
            document.querySelector("#timerval").textContent = timer; 
        }
        else{
            clearInterval(timerrunner);
            document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over<\h1>`
        }
    },1000)
}
runTimer();


function makeBubble(){
    var clutter = "";

for(var i=1;i<=160;i++){
    var rn = Math.floor(Math.random()*10);
clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#panel-bottom").innerHTML = clutter;
}
makeBubble();


var bubble = document.querySelector(".bubble");

bubble.addEventListener("onclick",function(){

})
