  
// from data.js
var tableData = data;
var tableBody = d3.select("tbody");

// making the table
tableData.forEach(function(ufo) {
    var row = tableBody.append("tr");
     
    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// for the form
var inputMod = d3.select(".form-control");
var button = d3.select(".btn");

button.on("click", function() {
    var inputValue = inputMod.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(x => x.datetime === inputValue);
    console.log(filteredData);
    tableBody.html("");
    filteredData.forEach(function(filterufo) {
        var row = tableBody.append("tr");
         
        Object.entries(filterufo).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});