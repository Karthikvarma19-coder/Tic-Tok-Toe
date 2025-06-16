let buttons=document.querySelectorAll(".button");
let resbut=document.querySelector(".reset");
let turnO=true;
let winer=document.querySelector("#win");
let res=document.querySelector(".reset");
let winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,5,8],
    [6,7,8],
    [2,4,6],
];
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(turnO){
            button.innerHTML='O';
            turnO=false;
        }
        else{
            button.innerHTML='X';
            turnO=true;
        }
        button.disabled=true;
        win();
    });
});
function win(){
    for(let twin of winpat){
        let txt1=buttons[twin[0]].innerText;
        let txt2=buttons[twin[1]].innerText;
        let txt3=buttons[twin[2]].innerText;
        if(txt1!="" && txt2!="" && txt3!=""){
            if(txt1===txt2 && txt2===txt3){
                winer.innerText=`winner is ${txt1}`;
                isdiabled();
            }
        }
    }
}
function isdiabled(){
    for(let but of buttons){
        but.disabled='true';
    }
}
res.addEventListener("click",()=>{
    for(let buto of buttons){
        buto.disabled=false;
        buto.innerText="";
        turnO=true;
        winer.innerHTML="";
    }
})