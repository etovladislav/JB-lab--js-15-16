function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function test_01() {

    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i][0] == multiply.apply(this, arr[i][1]));
    }
}


function test_02() {


    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i][0] == factorial.apply(this, arr[i][1]))
    }
}


function test(name, array) {
    for (var i = 0; i < array.length; i++) {
        console.log(i, array[i][0] == window[name].apply(null, array[i][1]))
    }
}

var test1 = [
    [5, [5, 1, 1]], [5, [undefined, 1, 1]], [5, ["Sdsd", 1, 1]], [5, [5, 1, 1]]
];
var test2 = [
    [3, [2]], [6, [3]], [24, [4]]
];
var test3 = [
    [128, [2,7]], [256, [2,8]], [123, [4]]
];
var test4 = [
    ["Vlad-Vlad", ["Vlad",2,"-"]],["VladVlad", ["Vlad",2]]
];

var test5 = [
    [true, [3,3]], [false, [3,2]], [false, ["asd","dsa"]]
];

var test6 = [
    [3, [2]], [6, [3]], [24, [4]]
];
//test('multiply', test1);
//test('factorial', test2);
//test('pow', test3);
//test('repeat', test4);
test('compare', test5);
//test('PhoneList', test6);