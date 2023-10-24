//exercise 1
document.addEventListener("DOMContentLoaded", function(){
    var board = document.getElementById("board");
    var squares = board.querySelectorAll("div");

    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }

    var currentVal = "";
    var alt= "";
    const state = ['','','',
                   '','','',         
                   '','',''];
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
    });
});
