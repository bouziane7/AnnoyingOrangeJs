
var name = prompt("Entre Your Name Plz : ")
var msg = 0;
var clickpoint=0;
var stopit = false;

function al(){
    
    msg+=1;

    if(stopit == false) {
        clickpoint+=1;
    }
    

    var showscore = document.getElementById("score")
    showscore.innerHTML = clickpoint;

    if(msg> 5){
        msg = 1;
    }

    switch(msg){
        case 1:
        alert("Stay Away Stupid " + name + "!!!!");
        break;
    
        case 2:
        alert(name+"!!!!!! ");
        break;
    
        case 3:
        alert("*##!!!!???% ");
        break;
    
        case 4:
        alert(name+"!!!!" + name + "!!!!");
        break;
    
        case 5:
        alert("Go to the hell " + name);
        break;

        }

    }

    
window.onload = function() {
    var orange = document.getElementById("annoyingOrange")
    var pos = 0
    var rnd = 0;
    var t3 = setInterval(moveleft,10);
    var t4,t1,t2,t5;
    
    function moveright(){
        if(pos<=0){
            pos = 400
            clearInterval(t1)
            t2 = setInterval(movebuttom,10);
        }
    
        else{
            pos-=1
            orange.style.left = pos + "px";
        }
    }

    
    
    function moveleft(){    
        if(pos>=400){
            pos = 0
            clearInterval(t3)
            t4 = setInterval(movetop,10);
        }
    
        else{
            pos+=1
            orange.style.left = pos + "px";
        }
    }

    
    function movetop(){
        if(pos>=380){
            clearInterval(t4)
            t1 = setInterval(moveright,10);
        }
    
        else{
            pos+=1
            orange.style.top = pos + "px";
        }

    }

    function movebuttom(){
        if(pos<=0){
            pos = 380
            clearInterval(t2)
            alert("You Cant Catch Me lolololo")
            t5 = setInterval(rund,900)
        }
    
        else{
            pos-=1
            orange.style.top = pos + "px";
        }
    }

    function rund(){
        if(rnd > 50){
            clearInterval(t5);
            alert("Ooof Am Tired I GiveUP")
            stopit = true;
            var gameover = document.getElementById("over");
            gameover.innerHTML = "The Oranage is tired ==> Game Over";
        } else {
            orange.style.top = Math.random()*380 + "px";
            orange.style.left = Math.random()*400 + "px";
            rnd+=1;
        }
    }


}