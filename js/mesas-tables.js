function insertMesasTable(tableNumber, complement) {
    tabBody=document.getElementById("mesas_table");
    row=document.createElement("tr");

    var columnTableNumber = createTextColumn(tableNumber);
    row.appendChild(columnTableNumber);

    var columnComplement = createTextColumn(complement);
    row.appendChild(columnComplement);

    var columnQRCode = createTextColumn("");
    row.appendChild(columnQRCode);

    var deleteButton = createHTMLButton("Excluir", `onClickDelete('${tableNumber}')`);
    row.appendChild(deleteButton);

    var editButton = createHTMLButton("Editar", `editMesa('${tableNumber}', '${complement}')`);
    row.appendChild(editButton);

    tabBody.appendChild(row);
}

function createTextColumn(valor) {
    var cell = document.createElement("td");
    var node=document.createTextNode(valor);
    cell.appendChild(node);
    return cell;
}

function createHTMLButton(name, onClick) {
    var cell = document.createElement("td");
    var button = document.createElement("button");
    button.setAttribute("onClick", onClick);
    //button.setAttribute("class", "btn btn-success");
    var node=document.createTextNode(name);
    button.appendChild(node);
    cell.appendChild(button);
    return cell;
}