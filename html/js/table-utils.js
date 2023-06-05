const GREEN = '#118c05';
const RED = '#Ea2d30';
const LIGHT_BLUE_WHITE = '#9BBCC1';
const CENTRALIZED = true;

function createRow() {
    var row=document.createElement("tr");
    row.setAttribute("style", "border-bottom: 1px solid #ECF1EC");
    return row;
}

function createTextColumn(valor, center) {
    var cell = document.createElement("td");
    if(center) cell.setAttribute("style", `text-align: center`);
    var node=document.createTextNode(valor);
    cell.appendChild(node);
    return cell;
}

function createHTMLButton(name, onClick, backgroundColor, center=true) {
    var cell = document.createElement("td");
    if(center) cell.setAttribute("style", `text-align: center`);
    var button = document.createElement("button");
    button.setAttribute("onClick", onClick);
    button.setAttribute("style", `background-color: ${backgroundColor}; color: white; border-radius: 10px`);
    var node=document.createTextNode(name);
    button.appendChild(node);
    cell.appendChild(button);
    return cell;
}

function cleanTableUtils(tableName) {
    var tableHeaderRowCount = 1;
    var table = document.getElementById(tableName);
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}