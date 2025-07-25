let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let msg=document.querySelector(".msg");
let msgPara=document.querySelector("#msgPara");
let newbtn=document.querySelector("#newbtn");
let turnX=true;

//winning patterns
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

resetbtn.classList.remove("hide"); //letting reset button be visible 

//disabling boxes
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

//enabling boxes for game
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

//reseting game
const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msg.classList.add("hide"); 
    resetbtn.classList.remove("hide");
}

//displaying game
const showWinner=(winner)=>{
    msgPara.innerText=`Congrats! The Winner Is ${winner}`; 
    msg.classList.remove("hide");
    resetbtn.classList.add("hide");
    disableBoxes(); 
}

//checking winner
const checkWinner = ()=>{
    //checking if there is any winner
    for(let pattern of winPatterns){
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;

       if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
            return showWinner(pos1);
            
        }
    } 
  }
  //checking for draw
    let isDraw=true;
    boxes.forEach((box)=>{
        if(box.innerText===""){
            isDraw=false;
        }
    })

    if(isDraw){
        msgPara.innerText="OOPS DRAW!";
        msg.classList.remove("hide");
        resetbtn.classList.add("hide");
        disableBoxes();
    }
    
       
    }    

    //toggling x o and adding event listener
    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            if(turnX){
            box.innerText="X";
            turnX=false;
            }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

//adding reset and new game functionality
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


         