//TICTACTOE GAME

//UPDATABLE VALUE 
let revampingValue = 'X';

//FUNCTION TO PUT A VALUE N THE BOX
function enterVal(id){
let ele = document.getElementById(String(id));
ele.innerText = revampingValue;
updateValue();
ele.style.color = "white";
ele.style.pointerEvents = "none";
setTimeout(winCheck(),5000);
}

//FUNCTION FOR CHECKING THE MAIN GAME CONDITION
function winCheck(){


let d0 = document.getElementById("div1").innerText;
let d1 = document.getElementById("div2").innerText;
let d2 = document.getElementById("div3").innerText;
let d3 = document.getElementById("div4").innerText;
let d4 = document.getElementById("div5").innerText;
let d5 = document.getElementById("div6").innerText;
let d6 = document.getElementById("div7").innerText;
let d7 = document.getElementById("div8").innerText;
let d8 = document.getElementById("div9").innerText;

//ARRAY FOR STORING THE ELEMENTS IN THE GAME BOARD
let arr = new Array(d0,d1,d2,d3,d4,d5,d6,d7,d8);

if(
    (arr[0]=='X'&&arr[1]=='X'&&arr[2]=='X')||
    (arr[3]=='X'&&arr[4]=='X'&&arr[5]=='X')||
    (arr[6]=='X'&&arr[7]=='X'&&arr[8]=='X')||
    (arr[0]=='X'&&arr[3]=='X'&&arr[6]=='X')||
    (arr[1]=='X'&&arr[4]=='X'&&arr[7]=='X')||
    (arr[2]=='X'&&arr[5]=='X'&&arr[8]=='X')||
    (arr[0]=='X'&&arr[4]=='X'&&arr[8]=='X')||
    (arr[2]=='X'&&arr[4]=='X'&&arr[6]=='X'))
{
    alert("*********************\n\nPlayer 1 you are the winner of the game\n\nCongrats!\n\nthanks for playing\nkeep support us");
    reset();
    return null;
}
else if(
    (arr[0]=='O'&&arr[1]=='O'&&arr[2]=='O')||
    (arr[3]=='O'&&arr[4]=='O'&&arr[5]=='O')||
    (arr[6]=='O'&&arr[7]=='O'&&arr[8]=='O')||
    (arr[0]=='O'&&arr[3]=='O'&&arr[6]=='O')||
    (arr[1]=='O'&&arr[4]=='O'&&arr[7]=='O')||
    (arr[2]=='O'&&arr[5]=='O'&&arr[8]=='O')||
    (arr[0]=='O'&&arr[4]=='O'&&arr[8]=='O')||
    (arr[2]=='O'&&arr[4]=='O'&&arr[6]=='O')
    )
{
    alert("*********************\n\nPlayer 2 you are the winner of the game\n\nCongrats!\n\nthanks for playing\nkeep support us");
    reset();
    return null;
}
else if(isEmpty(arr)){
    alert("Both of you well played\n\nThe match result tied");
}
}

//FUNCTION FOR CHECKING A NUMBER VALUE
function isEmpty(arr){
    let flag = false;
    for(let i=0;i<9;i++){
        if(arr[i] == 'X' || arr[i] == 'O'){
            flag = true;
        }else{
            flag = false;
            return flag;
        }
    }
    return flag;
}

//FUNCTION TO UPDATE THE VALUE
function updateValue(){
    if(revampingValue == 'X'){
        revampingValue = 'O';
    }
    else if(revampingValue == 'O'){
        revampingValue = 'X';
    }
}

//FUNCTION TO START THE GAME
function start(){
    revampingValue = 'X';
    let mainDiveles = document.getElementsByClassName("block");
    for(let i=0;i<9;i++){
    mainDiveles[i].style.pointerEvents = "all";
    }
    let Sbutton = document.getElementById("button");
    Sbutton.setAttribute('value','reset');
    Sbutton.style.opacity = "0.4";
    Sbutton.setAttribute('ondblclick','reset()');
}

//FUNCTION TO RESET THE PREVIOUS VALUES AND SET TIME TO ZERO
function reset(){
    document.getElementById("div1").innerText = '1';
    document.getElementById("div2").innerText = '2';
    document.getElementById("div3").innerText = '3';
    document.getElementById("div4").innerText = '4';
    document.getElementById("div5").innerText = '5';
    document.getElementById("div6").innerText = '6';
    document.getElementById("div7").innerText = '7';
    document.getElementById("div8").innerText = '8';
    document.getElementById("div9").innerText = '9';

    
    let elements = document.getElementsByClassName('block');
    for(let i=0;i<9;i++){
        elements[i].style.color = 'grey';
        elements[i].style.pointerEvents = 'none';
    }

    let Sbutton = document.getElementById("button");
    Sbutton.style.opacity = '1';
    Sbutton.setAttribute('value','start')

    Sbutton.removeAttribute('ondblclick');
}


















