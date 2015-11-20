function isValidSelector(str) {
    var arr = str.split(' ');
    var regex1 = /\#.*/;
    var regex2 = /\..*/;
    var regex3 = /\[[a-z,A-Z]*\=\".*\"\]/;
    var regex4 = /[a-z,A-Z]/;

    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i].match(regex1) || arr[i].match(regex2) || arr[i].match(regex3) || arr[i].match(regex4))) {
            return false;
        }
    }
    return true;
}


function minSelector(str) {
    str = str.substring(str.search("#"));
    var string = str.split(" ");
    var result = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i].search(/\"/) != -1) {
            string[i] = '.' + string[i].substring(string[i].search(/\"/) + 1).substring(0, string[i].search(/\"/));
        }
        if (string[i].search(/\,/) != -1) {
            string[i] = string[i].replace(/\,/, ' ||')
        }
        result += string[i] + ' ';
    }

    return result.trim();
}

function stringTempl() {

    var count = 0;
    while (arguments[0].indexOf('{{') != -1) {
        count++;
        var findex = arguments[0].indexOf('{{');
        var lindex = arguments[0].indexOf('}}') + 2;
        var string = arguments[0].substring(findex, lindex);
        if (!arguments[count]) {
            throw "Error: Invalid arguments count"
        } else {
            arguments[0] = arguments[0].replace(string, arguments[count]);
        }
    }

    return arguments[0];
}


Object.create = function (proto) {
    function addFunc(proto, a) {
        for (var key in proto) {
            a[key] = proto[key];
            if (typeof(proto[key]) == "object") {
                addFunc(proto[key], a[key])
            }
        }

    }
    var a = {};
    addFunc(arguments[0], a);
    addFunc(arguments[1], a);
    return a;
};


function node(name) {

}
