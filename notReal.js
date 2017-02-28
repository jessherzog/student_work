// load CSV
// pass CSV data to function checkDictionary:
// compare each word in CSV to dictionary
// if no match, push to array
// print array.length

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "out.csv",
        dataType: "text",
        success: function(data) { checkDictionary(data); }
     });
});