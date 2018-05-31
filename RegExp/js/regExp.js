'use strict';
var timeoutFunc;
document.getElementById('searchText').addEventListener('keyup', function () {
    if (timeoutFunc)
        clearTimeout(timeoutFunc);
    timeoutFunc = setTimeout(function () {
        var incomingInput = document.getElementById('incomingInput').value,
            pattern = document.getElementById('searchText').value,
            regExp = new RegExp(pattern, 'gm');

        var matchingArray,
            resultString = '<p>',
            first = 0,
            last = 0;
        if (pattern !== '') {
            while ((matchingArray = regExp.exec(incomingInput)) != null) {
                last = matchingArray.index;
                resultString += incomingInput.substring(first, last)

                resultString += '<span class="found">' + matchingArray[0] + '</span>'
                first = regExp.lastIndex
            }
            resultString += incomingInput.substring(first, incomingInput.length)
            resultString += '</p>'
            document.getElementById('searchResults').innerHTML = resultString;
        }
    }, 500)

});
document.getElementById('doReplace').addEventListener('click', function () {
    document.querySelectorAll('.found').forEach(function (elem) {
        elem.innerHTML = document.getElementById('replaceWith').value;
    });
});
document.getElementById('doReverse').addEventListener('click', function () {
    var incomingInput = document.getElementById('incomingInput').value,
        pattern = document.getElementById('searchText').value,
        regExp = new RegExp(pattern, 'gm');

    var matchingArray,
        resultString = '<p>',
        first = 0,
        last = 0;
    if (pattern !== '') {
        while ((matchingArray = regExp.exec(incomingInput)) != null) {
            last = matchingArray.index;
            resultString += incomingInput.substring(first, last)

            resultString += '<span class="found">' + matchingArray[2] + ' ' + matchingArray[1] +
                '</span>'
            first = regExp.lastIndex
        }
        resultString += incomingInput.substring(first, incomingInput.length)
        resultString += '</p>'
        document.getElementById('searchResults').innerHTML = resultString;
    }
});