// declaring all the variables
let boxes = document.querySelectorAll(".boxes")
let start = document.querySelector(".start")
let resetGame = document.querySelector(".resetgame")
let playAgain = document.querySelector(".playAgain")
let messageContainer = document.querySelectorAll(".messagecontainer")
let winnerMessage = document.querySelector(".winnermessage")
let turnO = true;

// ===================== THE 8 WINNING PATTERNS ====================

let winningPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


// ====================== THE SIGN CHANGER =========================

// for every box in the 9 boxes
boxes.forEach((box)=> {
    // when clicked the sign would change to X or O for the next turn
    box.addEventListener("click", () => {
        if (turnO) {
            // turn of player O
            box.innerText = "O";
            turnO = false;
          } else {
            //turn of player X
            box.innerText = "X";
            turnO = true;
          }
        // now clicking again on the box chnages its sign again so we disable the button once its pressed 
        box.disabled = true;

        // now we call the checkWinner function to track the winner
        checkWinner();
        // upon clicking any of the buttons all the patterns ar checked
    })   
});

// =================== THE TRACKER ===================

// In order to know the winner we must know the value at each and every box
let checkWinner = () => {
  // we need the boxes in the winning pattern to have the same sign so we assign pos1, pos2, pos3 to each of them

  // we run a loop testing all the winning patterns 
  for(let pattern of winningPattern){
    // pattern is [0,1,2] for the first time when loop runs

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    // pattern[0]prints the 1st element in the winningPattern
    // boxes[pattern[0]] prints HTML of box 0
    // boxes[pattern[0]].innerText prints the value entered in that HTML
    
    // we collect values at these boxes then

    if(pos1 != "" && pos2 != "" && pos3 != ""){
      // this checked that blank boxes are not equal
      if(pos1 === pos2 && pos2 === pos3){
        console.log(`winner is ${pos1}`)

        winner(pos1)
      }
    }
  }    
}

// ================ PRINTING THE WINNING MESSAGE ==================

let winner = (winnername) => {
  // winnername = pos1
  winnerMessage.innerText = `Congratulations! The winner is ${winnername}`
  winnerMessage.classList.remove(".hide")
}

// ================= CREATING THE RESET BUTTON ===================

// ================= CREATING PLAY AGAIN BUTTON ===================