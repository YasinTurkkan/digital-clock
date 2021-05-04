const clock = document.getElementById('clock');
const date = document.getElementById('date');

let whatIsTheDate = new Date();
let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];

date.innerHTML = `${whatIsTheDate.getMonth() + 1} / ${whatIsTheDate.getDate()} / ${whatIsTheDate.getFullYear()} ${weekday}`;


function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  clock.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);

}

setInterval(time, 1000);

