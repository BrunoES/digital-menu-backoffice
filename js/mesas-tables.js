function insertMesasTable(tableNumber, complement) {
    tabBody=document.getElementById("mesas_table");
    var row= createRow();

    var columnTableNumber = createTextColumn(tableNumber);
    row.appendChild(columnTableNumber);

    var columnComplement = createTextColumn(complement);
    row.appendChild(columnComplement);

    var columnQRCode = createTextColumn("");
    row.appendChild(columnQRCode);

    var deleteButton = createHTMLButton("Excluir", `onClickDelete('${tableNumber}')`, RED);
    row.appendChild(deleteButton);

    var editButton = createHTMLButton("Editar", `editMesa('${tableNumber}', '${complement}')`, GREEN);
    row.appendChild(editButton);

    tabBody.appendChild(row);
}