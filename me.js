// me 		: 5
// myself	: 2
// i 		: 11

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "out_fix.csv",
        dataType: "text",
        success: function(data) { getMatches( "i", data); }
     });
});

function getMatches(needle, haystack) {
    var myRe = new RegExp("\\b" + needle + "\\b((?!\\W(?=\\w))|(?=\\s))", "gi"),
        myArray, myResult = [];
    while ((myArray = myRe.exec(haystack)) !== null) {
        myResult.push(myArray.index);
    }
    console.log(myResult.length);
}

