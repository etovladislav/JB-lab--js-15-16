
function multiply() {
    if (arguments.length < 2)
        throw new Error("Invalid arguments");
    var result = 1;

    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number") {
            throw new Error("Invalid arguments");
        }
        result = result * arguments[i];
    }
    return result;
}


function factorial(n) {
    if (typeof n != 'number') {
        throw new Error("n - not a number");
    }
    var fact = 1;
    for (var i = 1; i < n + 1; i++) {
        fact *= i;
    }
    return fact;
}

function pow(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw new Error("n - not a number");
    }
    var result = 1;
    var n = b < 0 ? b * (-1) : b;
    for (var i = 0; i < n; i++) {
        result *= a;
    }
    return b < 0 ? 1 / result : result;
}

function repeat(str, count, sep) {
    if (typeof count != 'number') {
        throw new Error("Invalid arguments");
    }
    var result = "";
    if (sep == undefined) {
        sep = "";
    }
    for (var i = 0; i < count; i++) {
        result = result + str + ((i == count - 1) ? "" : sep);
    }
    return result;
}

function compare(a, b) {
    if (Object.keys(a).length == Object.keys(b).length) {
        for (var key in a) {
             if (typeof(a[key]) == "object" && typeof(b[key]) == "object"&&!compare(a[key],b[key])){ 
                 return false;
             }
            if (a[key] != b[key]) return false;
        }
        return true;
    } else {
        return false;
    }
}

PhoneList = function (name) {
    var list = {};

    function add(name, num) {
        list[name] = num;
    }

    add.getAll = function () {
        return list
    };
    add.phoneListName = name;
    add.getForName = function (name) {
        return list[name]
    };
    add.getForNum = function (num) {
        for (var i in list) {
            if (list[i] == num) return i;
        }
    };
    return add;
};
