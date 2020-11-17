// Lesson 1 button Start
var lesson1 = 0;
var txt_lesson1 = 'Intentions: Learn basic calculations \
and basic variable assignments'
var lesson1_speed = 30;
function typeWriter3() {
  if (lesson1 < txt_lesson1.length) {
    document.getElementById("l1bcv").innerHTML += txt_lesson1.charAt(lesson1);
    lesson1++;
    setTimeout(typeWriter3, lesson1_speed);
  }
}

var need_help_lesson1 = 0;
var nh_lesson1_text = 'If you are still confused, please re-read and \
try with different numbers, math operations, and just mess around \
with the logic of doing math operations.'
var nh_lesson1_speed = 30;
function needhelp(){
  if(need_help_lesson1 < nh_lesson1_text.length){
    document.getElementById("nh_lesson1").innerHTML += nh_lesson1_text.charAt(need_help_lesson1);
    need_help_lesson1++;
    setTimeout(needhelp, nh_lesson1_speed);
  }
}
// Lesson 1 button end

// Lesson 1 showAnswer_Lesson1()
  
function showAnswer_lesson1(){
  var x = document.getElementById('saL1');
  if(x.style.display === "none"){
    x.style.display = " block"
  }else{
    x.style.display = "none";
  }

}
// End Lesson showAnswer_Lesson1()
