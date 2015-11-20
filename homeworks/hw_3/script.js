function isValidSelector(str) {
    console.log(str);
    var arr = str.split(' ');
    console.log(arr)

    var regex1 = /\#.*/; //#id
    var regex2 = /\..*/; //.class
    var regex3 = /\[[a-z,A-Z]*\=\".*\"\]/;  //attr
    var regex4 = /[a-z,A-Z]/; //elem

    for (var i = 0; i < arr.length; i++) {
        if (!arr[i].match(regex1)) {
            if (!arr[i].match(regex2)) {
                if (!arr[i].match(regex3)) {
                    if (!arr[i].match(regex4)) {
                        return false;
                    }
                }
            }
        }
    }

    return true;
}


function minSelector(str) {
    //îòäåëèëè ïîñëåäíèé ñåëåêòîð
    str = str.substring(str.search("#"));

    //ñïëèòèì ïî ïðîáåëó
    var string = str.split(" ");
    console.log('string.length = ' + string.length);

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

    console.log(result.trim())
}

function stringTempl() {
    //console.log(arguments);
    //for (var i = 0; i < arguments.length; i++) {
    //    console.log(arguments[i])
    //}

    //console.log("arguments[0] = " + arguments[0]);

    var count = 0;
    while (arguments[0].indexOf('{{') != -1) {
        count++;

        var findex = arguments[0].indexOf('{{');
        //console.log('findex = ' + findex);

        var lindex = arguments[0].indexOf('}}') + 2;
        //console.log('lindex = ' + lindex);

        var string = arguments[0].substring(findex, lindex);
        //console.log(string);

        if (!arguments[count]) {
            throw "Error: Invalid arguments count"
        } else {
            arguments[0] = arguments[0].replace(string, arguments[count]);
            //console.log(arguments[0])
        }
    }

    console.log(arguments[0]);
}


Object.create = function (proto) {
    function addFunc(proto,a) {
        for (var key in proto) {
            a[key] = proto[key];
            if (typeof(proto[key]) == "object") {
                addFunc(proto[key],a[key])
            }
        }
    }
    var a = {};
    addFunc(arguments[0],a);
    addFunc(arguments[1],a);
    return a;
};


