
var box1 = document.getElementById('box-1')
var box2 = document.getElementById('box-2')
var box3 = document.getElementById('box-3')
var box4 = document.getElementById('box-4')
var box5 = document.getElementById('box-5')
var box6 = document.getElementById('box-6')
var box7 = document.getElementById('box-7')
var box8 = document.getElementById('box-8')
var box9 = document.getElementById('box-9')

var para = document.getElementById('para')

var XBtn = document.getElementById('btn2')
var OBtn = document.getElementById('btn3')

var counter = 0
function restart(){
window.location.reload()
}

var Xcounter=0
var Ocounter=0

var flag = true
function Play(ele){
    if(flag==true){
        ele.innerHTML="X"
        ele.classList.add('txt')
        ele.classList.add('disable')
        para.innerHTML="O turn"
        flag = false
        Xcounter++
        counter++
        XBtn.innerHTML = `X player play ${Xcounter} times`
     
    }else{
        ele.innerHTML="O"
        ele.classList.add('txt-zero')
        ele.classList.add('disable')
        para.innerHTML="X turn"
        flag=true
        Ocounter++
        counter++
       OBtn.innerHTML = `O player play ${Ocounter} times`
    }
    if ((box1.innerHTML=="O" &&  box2.innerHTML=="O" && box3.innerHTML=="O")
    || (box1.innerHTML=="O" && box4.innerHTML=="O" && box7.innerHTML=="O")
    || (box2.innerHTML=="O" &&  box5.innerHTML=="O" && box8.innerHTML=="O") 
    || (box3.innerHTML=="O" &&  box6.innerHTML=="O" && box9.innerHTML=="O") 
    || (box4.innerHTML=="O" &&  box5.innerHTML=="O" && box6.innerHTML=="O")
    || (box7.innerHTML=="O" &&  box8.innerHTML=="O" && box9.innerHTML=="O")
    || (box1.innerHTML=="O" &&  box5.innerHTML=="O" && box9.innerHTML=="O")
    || (box7.innerHTML=="O" &&  box5.innerHTML=="O" && box3.innerHTML=="O")) {
        box1.classList.add('disable')
        box2.classList.add('disable')
        box3.classList.add('disable')
        box4.classList.add('disable')
        box5.classList.add('disable')
        box6.classList.add('disable')
        box7.classList.add('disable')
        box8.classList.add('disable')
        box9.classList.add('disable')
        para.innerHTML='Congratulation O won the game'
        
        
    }else if ((box1.innerHTML=="X" && box2.innerHTML=='X' && box3.innerHTML=='X')
    || (box1.innerHTML=="X" && box4.innerHTML=="X" && box7.innerHTML=="X")
    || (box2.innerHTML=="X" && box5.innerHTML=='X' && box8.innerHTML=='X') 
    || (box3.innerHTML=="X" && box6.innerHTML=='X' && box9.innerHTML=='X') 
    || (box4.innerHTML=="X" &&  box5.innerHTML=='X'&& box6.innerHTML=='X')
    || (box7.innerHTML=="X" &&  box8.innerHTML=='X' && box9.innerHTML=='X')
    || (box1.innerHTML=="X" &&  box5.innerHTML=='X' && box9.innerHTML=='X')
    || (box7.innerHTML=="X" &&  box5.innerHTML=='X' && box3.innerHTML=='X')) {
        box6.classList.add('disable')
        box7.classList.add('disable')
        box8.classList.add('disable')
        box9.classList.add('disable')
        box5.classList.add('disable')
        box4.classList.add('disable')
        box3.classList.add('disable')
        box2.classList.add('disable')
        box1.classList.add('disable')
        para.innerHTML='Congratulation X won the game'
        
    }

    else if(counter==9){
        para.innerHTML="match tied please try again later"
    }

}


