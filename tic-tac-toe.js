//exercise 1
document.addEventListener("DOMContentLoaded", function(){
    var board = document.getElementById("board");
    var squares = board.querySelectorAll("div");

    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }

    var currentVal = "";
    var alt= "";
    const state = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
    
    var original= "";

    squares.forEach(function(square, index) {
        square.addEventListener('click', function() {
            if (!square.classList.contains("X") && !square.classList.contains("O")) {
                square.classList.add("X");
                square.textContent = "X";
                currentVal = square.classList.value;
            }

            else {
                currentVal = currentVal === "X" ? "O" : "X";
                alt = currentVal === "X" ? "O" : "X";
                square.classList.remove(alt);
                square.classList.add(currentVal);
                square.textContent = currentVal;
                //currentVal = square.classList.value;
            }
            
            state[index] = currentVal;

            }
        );
    
        //exercise 3
        square.addEventListener("mouseenter", function(){
            square.classList.add("hover");

        });

        square.addEventListener("mouseleave", function(){
            square.classList.remove("hover");
        });

        

    });
    
     // exercise 4
     var status = document.getElementById("state").classList.add("you-won");
     // Function to check for a winner
     function checkWinner() {
         const players = ["X", "O"];

         for (let player of players) {
             // Check rows
             for (let i = 0; i < 3; i++) {
                 if (state[i * 3] === player && state[i * 3 + 1] === player && state[i * 3 + 2] === player) {
                     return player; // Three in a row in a row
                 }
             }

             // Check columns
             for (let j = 0; j < 3; j++) {
                 if (state[j] === player && state[j + 3] === player && state[j + 6] === player) {
                     return player; // Three in a row in a column
                 }
             }

             // Check diagonals
             if ((state[0] === player && state[4] === player && state[8] === player) ||
                 (state[2] === player && state[4] === player && state[6] === player)) {
                 return player; // Three in a row in a diagonal
             }
         }

         return null; // No winner found
     }
  
     var winner = checkWinner();

     if (winner !== null){
         status.textContent = "Congratulations! " + winner + "is the Winner!";
     }

    var button = document.getElementsByClassName("btn").querySelectorAll("div");
    button.addEventListener("click", function() {
        status.classList.remove("you-won");

        squares.forEach(function(square) {
            if (square.classList.contains("X")) {
                square.classList.remove("X");
                square.textContent = "";
            }

            if (square.classList.contains("O")) {
                square.classList.remove("O");
                square.textContent = "";
            }
            state = ["", "", "", "", "", "", "", "", ""]; // Reset the state array
            currentVal = "X"; // Reset the current player to "X"
       

        })

    })

        


})

