
var display="";

    function addToDisplay(value) {
      display += value;
      document.getElementById('display').innerHTML = display;
    }

    function calculate() {
      display = document.getElementById('display');
      var result = eval(display.innerHTML);
      display.innerHTML = result;
    }

    function clearDisplay() {
      display = document.getElementById('display');
      display.innerHTML = '0';
      display="";
    }
    function backspace() {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }

