let weighted;
let testavg;
let courseavg;
let finalavg;

document.getElementById("enter").onclick = function(){
    weighted = document.getElementById("textweight").value;
    weighted = Number(weighted);
    testavg = document.getElementById("textscore").value;
    testavg = Number(testavg);
    courseavg = document.getElementById("avg").value;
    courseavg = Number(courseavg);

    finalavg = ((weighted / 100) * testavg) + ((1 - (weighted / 100)) * courseavg);
    document.getElementById("classavg").textContent = "You will finish the course with a " + finalavg + "%";

    
    if(finalavg == 100){
        document.getElementById("motivator").textContent = " Alright smarty pants you already knew you were getting a 100%, get out of here!";
    }
    else if(finalavg >= 95){
        document.getElementById("motivator").textContent = "Your a genius! Someone like you only comes once every 1000 years!";
    }
    else if(finalavg >= 90){
        document.getElementById("motivator").textContent = "Impressive work! Keep it up!";
    }
    else if(finalavg >= 80){
        document.getElementById("motivator").textContent = "Good job!"; 
        }
    else if(finalavg >=50){
        document.getElementById("motivator").textContent = "Lets be honest, it could be better, keep working hard!";
    }
    else{
        document.getElementById("motivator").textContent = "Not so great, looks like you got a lot to work on... work harder!";
    }
}