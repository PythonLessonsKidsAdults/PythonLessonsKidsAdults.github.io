// begin type wrtier for lesson2
var lesson2 = 0;
var txt_lesson2 = 'Intentions: Learn Basic Types of Strings, Tuples, Lists, and Maps'
var lesson2_speed = 30;
function typeWriter_lesson2() {
  if (lesson2 < txt_lesson2.length) {
    document.getElementById("lesson2_b").innerHTML += txt_lesson2.charAt(lesson2);
    lesson2++;
    setTimeout(typeWriter_lesson2, lesson2_speed);
  }
}
// end type writer for lesson2
function SyntaxError(){
  var x = document.getElementById('ISEP');
  if(x.style.display === "none"){
    x.style.display = " block"
  }else{
    x.style.display = "none";
  }

}

function letterOutPut(){
  var x = document.getElementById('letter_lesson2');
  if(x.style.display === "none"){
    x.style.display = " block"
  }else{
    x.style.display = "none";
  }

}

// begin syntaxt error hide/show