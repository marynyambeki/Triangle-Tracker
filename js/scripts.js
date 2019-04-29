function display() {
 var sideA = parseInt(document.getElementById('fvalue').value);
 var sideB= parseInt(document.getElementById('svalue').value);
 var sideC = parseInt(document.getElementById('tvalue').value);

 if (sideA+sideB<=sideC||sideA+sideC<=sideA||sideA+sideC<=sideB) {
   document.getElementById('result').innerHTML="This values do NOT make a triangle";
 }
   else if (sideA===sideB && sideA===sideC && sideB===sideC) {
     document.getElementById('result').innerHTML="This is an equilateral triangle";
   }
   else if (sideA!==sideB && sideB!==sideC && sideA!==sideC) {
     document.getElementById('result').innerHTML="This is a scalene triangle";
   }
   else {
     document.getElementById('result').innerHTML="This is an isosceles triangle";
   }
}