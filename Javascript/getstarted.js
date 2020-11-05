var i = 0;
var j = 0;
var txt = 'Lets Install Python! \
If you already have a python environment set up, go ahead and skip to Lesson 1.'
var txt2 = 'If Yes, skip to lesson 1.\
If you are not sure, review this lesson and then we can get started.'

var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typeWriter2(){
  if (j < txt2.length) {
    document.getElementById("ns").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }

}
