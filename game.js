window.onload = function(){
var target = document.getElementById('target');
var pointer = document.getElementById('pointer');
var positionTar = target.getBoundingClientRect();
var cry = document.getElementById('cry');
var tear1 = document.getElementById('tears1');
var tear2 = document.getElementById('tears2');
var hummer = document.getElementById('hummer');
var smile = document.getElementById('smile');
var win = document.getElementById('win');
var counter = 1000;

document.onclick = function(){
  var positionPoint = pointer.getBoundingClientRect();
  var positionPoint = pointer.getBoundingClientRect();
  if (positionTar.top <= positionPoint.bottom) {
    counter -= 90;
    hummer.style.animation ='spin '+ counter +'ms linear infinite alternate-reverse' ;

    cry.style.display = 'block';
    tear1.style.display = 'block';
    tear2.style.display = 'block';

    function cryStop() {
        cry.style.display = 'none';

        tear1.style.display = 'none';

        tear2.style.display = 'none';
        return;
    }

    setTimeout(cryStop, 500);
    if (counter < 10) {
      cry.style.display = 'none';

      tear1.style.display = 'none';

      tear2.style.display = 'none';
    }

    if (counter <= 0) {
      win.style.display = 'block';
      smile.style.display = 'block';

      function winFunc() {
        win.style.display = 'none';
        smile.style.display = 'none';
      }

      setTimeout(winFunc, 3000);

      function restart(){
        counter = 1000;
        return;
      }

      setTimeout(restart, 3000);
 }

  }

  }
/*
  //Timer
  var seconds = 5;
  var time = document.getElementById('time');
  var innerTime = seconds;
  var but = document.getElementById('but');
  var h1 = document.getElementById('h1');
  var textNode = document.createTextNode('You lost');


  var timer = function timerFunc() {
    seconds--;
    if (seconds <= 0) {
      time.innerHTML = 'Время вышло!';
      h1.appendChild(textNode);
      win.style.display = 'block';
      return;
    }
    time.innerHTML = 'Времени осталось: '+ seconds;
  }

  but.onclick = function(){
      timer();
      var setInt = setInterval(timer, 1000);
      if (seconds <= 0) {
        clearInterval(setInt);
      }
  }

*/








}
