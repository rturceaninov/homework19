
function makeCounter() {
    var currentCounter = 1;

    function counter() {
        return currentCounter++;
    };

    counter.set = function (value) {
        currentCounter = value;
    };

    counter.reset = function () {
        currentCounter = 1;
    };
    return counter;
}
var counter = makeCounter();

alert(counter());
alert(counter());

var i = prompt('Введите начало счётчика', 0);
var n = +i;
var i = isNaN(n) ? 1 : n;

counter.set(i);

alert(counter());
alert(counter());