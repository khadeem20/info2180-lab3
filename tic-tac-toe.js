document.addEventListener("DOMContentLoaded", function(){

        var Board = document.getElementById("board");

        var InnerDivs = board.querySelectorAll("div");
        
        for (i=0;i < InnerDivs.length ; i++){
            InnerDivs[i].classList.add("square");
        };
    }
);
