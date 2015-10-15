(function (win) {
    //    var array, array_map, array_sort, array_each;
    //    var a = 5;
    //    array = [4,12,45,88,1,0,2,4,1,6,8];
    //    console.log(array);
    array_map = array.map(function (e) {
        //console.log(a,b);
        return 'e = ' + e;
    });
    //    console.log(array_map);
    //    function a(){return this}
    //    a.bind();
    //    win['hhp'] = 'returned object';
})(window);

//function bind1(a, b) {
//    return function () {
//        return a.apply(self,b);
//    };
//}
//
//function a() {
//    return this
//}

//var b = bind1(a,{'s':'^_^'});

Array.prototype.each = function (fn) {
    for (var i in this) {
        this[i] = fn.call(this[i]);
    }
    return this
}


var array_each = array_map.each(function (e) {
    return e * e;
});

Array.prototype.map = function (fn) {
    for (var i in this) {
        this[i] = fn(this[i]);
    }
    return new Array(this);
}


var array_each = array_map.each(function (e) {
    return e * e;
});

Array.prototype.concat = (function () {
    var res = [];
    for (i = 0; i < this.length; i++) {
        res[i] = this[i];
    }
    return res;
});
