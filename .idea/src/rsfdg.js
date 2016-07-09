/**
 * Created by Оля on 07.07.2016.
 */
var value = 0;

function f() {
    if (1) {
        value = true;
    } else {
        var value = false;
    }

    value;
}

f();
