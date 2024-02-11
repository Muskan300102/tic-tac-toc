let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;

const winp = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box click")
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
 const able=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
}
const showWinner=(winner)=>{
msg.innerText=`CONGRETUTATION WINNER IS ${winner}`;
msgContainer.classList.remove("hide");
disable();
}

const checkWinner = () => {
    for (pattern of winp) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                console.log("winner" ,p1);
                
                showWinner(p1);


            }
        }
    }
}
const resetgame=()=>{
turnO = true;
able();
msgContainer.classList.add("hide");
};

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);