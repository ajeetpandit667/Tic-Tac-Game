let boxes = document.querySelectorAll(".box");
let resetbtn = document.quarySelector("#reset-btn");

let turn0 = true;  //player1

// 2-D array
const winPatterns = [[0,1,2],
              [0,3,6],
              [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
           [3,4,5],
           [6,7,8]];
        
 box.forEach(box => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "0";   // player1
            turn0 = false;

        } else {
            box.innerText = "x";    // player2
            turn0 = true;
        }
        box.disabled(true);
    })

 });                  
