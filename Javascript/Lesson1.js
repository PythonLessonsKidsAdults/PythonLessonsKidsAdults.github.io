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
// Lesson 1 button end
