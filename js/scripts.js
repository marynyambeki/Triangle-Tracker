

function Triangle(){

var SideA=parseInt(document.getElementbyId("SideA").value);
var SideB=parseInt(document.getElementbyId("SideB").value);
var SideC=parseInt(document.getElementbyId("Sidec").value);
var answer=document.getElementbyId ('answer');

if(SideA==SideB && SideB==SideC)
            answer.textcontent("Equilateral");

        else if(SideA >= (SideB+SideC) || SideC >= (SideB+SideA) || SideB >= (SideA+SideC) )
            answer.textcontent("Not a triangle");

        else if ((SideA==SideB && SideB!=SideC ) || (SideA!=SideB && SideC==SideA) || (SideC==SideB && SideC!=SideA))
            answer.textcontent("Isosceles");

        else if(SideA!=SidebB && SideB!=SideC && SideC!=SideA)
            answer.textcontent("Scalene");

}
}

function Tracker(){
var SideA=parseInt(document.getElementbyId("SideA").value);
var SideB=parseInt(document.getElementbyId("SideB").value);
var SideC=parseInt(document.getElementbyId("Sidec").value);
var answer=document.getElementbyId ('answer');

}

