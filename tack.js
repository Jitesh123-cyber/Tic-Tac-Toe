let buttons = document.querySelectorAll(".btn");
let reset = document.getElementById("reset");

let turn = true; // O ki turn pehle

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (btn.innerText !== "") return;

        if (turn === true) {
            btn.innerText = "o";
            turn = false;
        } else {
            btn.innerText = "x";
            turn = true;
        }

        checkwinner();
    });


});

const checkwinner = () => {
for (let pattern of winPatterns) {
    let pos1val = buttons[pattern[0]].innerText;
    let pos2val = buttons[pattern[1]].innerText;
    let pos3val = buttons[pattern[2]].innerText;

    if( pos1val !== "" && pos2val !== "" && pos3val !== ""  ){
        
        if(pos1val == pos2val && pos2val == pos3val){
             console.log("winner found");
             alert("winner is " + pos1val);
    
        }

    }

}
}

reset.addEventListener("click", function(reset){
    buttons.forEach((btn) => {
        btn.innerText = "";
    });
});

  

   






