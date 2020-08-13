// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //Clear the table
    tbody.html("");

    //Loop through each entry in the array, make a row for each entry, and a cell
    //for each item in the entry
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        //Loop through each field in the dataRow and add each value as a cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}