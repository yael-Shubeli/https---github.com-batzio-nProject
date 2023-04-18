
$(document).ready(function () {
    var password = localStorage.getItem('password')
    var table = document.getElementById("tbl_monitoring");

    for (var i = 0; i < table.rows.length; i++) {
        if (i != 0 && i != 7) {
            var row = table.rows[i];
            var cell = row.insertCell(-1);
            cell.innerHTML = "<button>OK</button>";
        }

    }

    //  להביא את הציון המשוקלל עבור כל תלמיד ולשים בעמודה של הציונים
    // Get the table element by its ID
    // const table = document.getElementById("myTable");

    // // Create the column title element and set its text content
    // const columnTitle = document.createElement("th");
    // columnTitle.textContent = "Column Title";

    // // Create the row title element and set its text content
    // const rowTitle = document.createElement("th");
    // rowTitle.textContent = "Row Title";

    // // Insert the column title element into the first row
    // const firstRow = table.getElementsByTagName("tr")[0];
    // firstRow.insertBefore(columnTitle, firstRow.firstChild);

    // // Insert the row title element into the first column of each row
    // const rows = table.getElementsByTagName("tr");
    // for (let i = 1; i < rows.length; i++) {
    //     const cell = document.createElement("td");
    //     cell.textContent = "Cell Value";
    //     rows[i].insertBefore(rowTitle.cloneNode(true), rows[i].firstChild);
    //     rows[i].appendChild(cell);
    // }
});
function uploadFile(files) {
    var table = document.getElementById("tbl_monitoring");
    console.log("hi");
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = file.name;
        cell2.innerHTML = e.target.result;
    }
    reader.readAsText(file);
}