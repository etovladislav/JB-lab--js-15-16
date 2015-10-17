function toGetParams(obj) {
    var result = '';
    for (var o in obj) {
        result += o + '=' + obj[o] + '&';
    }
    result = result.substr(0, result.length - 1);
    return result;
}

function formatUrl(url, obj) {
    var result = url + '?';
    for (var o in obj) {
        result += o + '=' + obj[o] + '&';
    }
    result = result.substr(0, result.length - 1);
    return result;
}

function objectFormUrl(str){
    var obj = {};
    regExp = /^(?:([a-z0-9_\-\.]+):\/\/)*(?:([a-z0-9_\-\.]+)(?:\:)*([a-z0-9_\-\.]+)*\@)*([a-z0-9][a-z0-9_\-\.]+)(?:\:([\d]+))*(?:\/([^?#]*))*(?:\?([^?#]*))*(?:\#([^?#]*))*/gi;
}
