let userInputEl = document.getElementById("userInput");
let timerEl = document.getElementById("timer");

let countDown = timerEl.textContent;//formate mm:ss
let minutes = parseInt(countDown.slice(0, 2));
let seconds = parseInt(countDown.slice(3, 5));

let intervalId = setInterval(function(){
    
    if (minutes === 0 && seconds === 0){
        clearInterval(intervalId);
        timerEl.textContent = "BOOM! the bomb exploded";
        return;
    }
    if (seconds === 0){
        if (minutes > 0){
            minutes -= 1;
            seconds = 59;
        }
    }else{
        seconds -= 1;
    }
    timerEl.textContent = minutes.toString().padStart(2,0) + ":" + seconds.toString().padStart(2,0);


},50);

userInputEl.addEventListener("keydown", function(event){
    if (event.key === "Enter" && userInputEl.value === "defuse" && minutes > 0){
        clearInterval(intervalId);
        timerEl.textContent = "Bomb defused successfully";
        timerEl.style.color = green;
    }

})


