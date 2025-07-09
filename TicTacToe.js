let msgContainer = document.querySelector(".msg-container");
let results = document.getElementById("result");
let NewGame = document.getElementById("newGame");
boxes= document.querySelectorAll(".box");
boxes = Array.from(boxes);
console.log(typeof boxes)
console.log(boxes instanceof Array); // true

let Reset= document.querySelector("#reset");

let turn0= true; 
let winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
let reset=()=>{
    for(box of boxes){
        box.innerText="";
        enable();
        msgContainer.classList.add("hide");
    }
}
let disabled=()=>{
    for( box of boxes){
        box.disabled =true;
    }
}
const enable=()=>{
    for(box of boxes){
        box.disabled =false;
    }
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            box.disabled= true;
            turn0=false;
        }
        else{
            box.innerText="×";
            box.disabled= true;
            turn0=true;
        }
        checkWinner();
    })
});
const checkWinner = () =>{
    let isDraw =true;
    for(let pattern of winPattern){
        // console.log(pattern)
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val !=="" && pos2val !=="" && pos3val !==""){
            if(pos1val == pos2val && pos1val == pos3val){
                showWinner(pos1val);
                disabled();
            }
        }
    }
    for(let box of boxes){
        if(box.innerText == ""){
            isDraw=false;
        }
    }
    if(isDraw){
        draw();
        disabled();
    }
    // if(pos1val !=="" && pos2val !=="" && pos3val !==""){
    //     if(pos1val !== pos2val && pos1val !== pos3val){
    //         draw();
    //     }
    // }
}
const showWinner = (winner) =>{
    results.innerText = `Congratulations! winner is ${winner} `;
    msgContainer.classList.remove("hide");
}
const draw =() =>{
    results.innerText = "It's draw";
    msgContainer.classList.remove("hide");
}

Reset.addEventListener("click",reset)
NewGame.addEventListener("click",reset)