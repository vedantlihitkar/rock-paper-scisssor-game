let userscore = 0;
let botscore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const usercurrscore =document.querySelector("#user-score")
const compcurrscore =document.querySelector("#bot-score")

const genCompChoice = () =>{
   const options =["rock","paper","scissors"];
    const randomidx =Math.floor(Math.random()*3)
    return options[randomidx];
}




const playgame =(userChoice)=>{
console.log("user choice =",userChoice);
const compChoice =genCompChoice();
console.log("comp choice =",compChoice);


const drawGame = ()=>{
    console.log("game draw")
    msg.innerText = "game draw";
}

if (userChoice === compChoice) {
    drawGame();
} else {
    let userWin;  
    if (userChoice === "rock") {
        userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
        userWin = compChoice === "rock";
    } else if (userChoice === "scissors") {
        userWin = compChoice === "paper";
    }

    if (userWin) {
        userWinsGame();
    } else {
        compWinsGame();
    }
}

}

const userWinsGame =()=>{
    console.log("you win ");
    msg.innerText ="you win";
    userscore++;
    usercurrscore.innerText = userscore;
   
    
}
const compWinsGame =()=>{
    console.log("bot wins ");
    msg.innerText ="bot wins";
    botscore++;
    compcurrscore.innerText =botscore;

}



choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playgame(userChoice)
    })
})