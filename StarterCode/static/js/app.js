// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

data.forEach(function(tableData) {
  console.log(tableData);
});

data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
});

data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
   Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
  });
});

data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});