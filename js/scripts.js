

function Triangle(){

var SideA=text(document.getElementbyId("SideA").value);
var SideB=text(document.getElementbyId("SideB").value);
var SideC=text(document.getElementbyId("Sidec").value);
var text=document.getElementbyId ('result');

var sides = ["sideA", "sideB", "sideC", "text"]
            if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA){
             text = document.getElementById('result').innerHTML = "This is not a triangle!";
            }
               else if (sideA === sideB && sideA === sideC && sideB === sideC){
                 text = document.getElementById('result').innerHTML = "This is an equilateral triangle";
               }
               else if (sideA === sideB || sideA === sideC || sideB === sideC){
                 text = document.getElementById('result').innerHTML = "This is an isosceles triangle";
               }
               else if (sideA**2 + sideB**2 === sideC**2){
                 text = document.getElementById('result').innerHTML = "This is a right-angled triangle.";
               }
               else if (sideA**2 + sideC**2 === sideB**2){
                 text = document.getElementById('result').innerHTML = "This is a right-angled triangle.";
               }
               else {
                 text = document.getElementById('result').innerHTML = "This is a scalene triangle.";
               }

