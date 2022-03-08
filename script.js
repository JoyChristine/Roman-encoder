let out = document.getElementById('out');
for (var i = 1; i <= 20; ++i) {
  out.innerHTML += i + "\t" + ":"+  "  "+ romanize(i) + "<br/>";
    /*   \t Metacharacter in JavaScript is used to find the tab character.  */
    /* If it is found it returns the position else it returns -1 */
    }

function romanize(num) {
    var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
    },

    str = '',i;
    for (i in roman) {
        while (num >= roman[i]) {
            str += i;
            num -= roman[i];
        }
    }
  return str;
}

