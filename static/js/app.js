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

// Keep track of all filters
var filters = {};

// This function will replace the handleCLick function
function updateFilters() {
    // save the element, value, and id of the filter that was changed
    
    // Get date value from the filter
    let date = d3.select("#datetime").property("value");

    // Get city value from the filter
    let city = d3.select("#city").property("value");

    // Get state value from the filter
    let state = d3.select("#state").property("value");

    // Get country value from the filter
    let country = d3.select("#country").property("value");

    // Get shape value from the filter
    let shape = d3.select("#shape").property("value");

    // Initialize the filtered data variable
    let filteredData = tableData;

    // If a filter value was entered then add that filterID and value
    // then add the filter to the filter list
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
        filters.push(date);
    };

    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
        filters.push(city);
    };

    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
        filters.push(state);
    };

    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
        filters.push(country);
    };

    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
        filters.push(shape);
    };

    // Call function to apply all filters and rebuild the table
    filterTable();
};

function filterTable() {
    // Set the filteredData to the tableData
    tableData = filteredData;

    //Loop through all of the filters and keep any data that matches the filter values
    filteredData.forEach((filters) => {
        if d3.select("#datetime", "#city", "#state", "#country", "#shape") = filters {
            filteredData = filteredData
        };
    });

    // Rebuild the table using filtered Data
    buildTable(filteredData);
};


//function handleClick() {
    // Get date value from the filter
   // let date = d3.select("#datetime").property("value");
   // let filteredData = tableData;

    //if statement to see if there has been a date entered in the filter
    //if (date) {
        //filteredData = filteredData.filter(row => row.datetime === date);
    //};

    // Rebuild table using filtered data. If no filter, will just be original tableData
    //buildTable(filteredData);
//};

d3.selectAll("#filter-btn").on("click", updateFilters);

buildTable(tableData);