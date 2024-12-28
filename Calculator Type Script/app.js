var display = document.getElementById('inputBox');
var buttons = document.querySelectorAll('button');
var string = '';
var SpecialChar = ["=", "AC", "DEL"];
buttons.forEach(function (btn) {
    var btnvalue = btn.innerHTML;
    btn.setAttribute("onclick", "Calculate(this)");
    btn.setAttribute("data-set", "".concat(btnvalue));
});
var Calculate = function (event) {
    var btnValues = event.getAttribute("data-set");
    if (btnValues == "DEL") {
        string = string.slice(0, -1);
        display.value = string;
        return;
    }
    if (btnValues == "AC") {
        string = "";
        display.value = string;
        return;
    }
    if (btnValues == "=") {
        if (display.value == "")
            return;
        var result = eval(display.value);
        string = result;
        display.value = string;
        return;
    }
    string += btnValues;
    display.value = string;
};
