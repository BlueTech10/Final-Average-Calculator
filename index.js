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
}