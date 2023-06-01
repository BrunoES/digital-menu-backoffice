function insertMesasTable(tableNumber, complement, base64QRCode) {
    tabBody=document.getElementById("mesas_table");
    var row= createRow();

    var columnTableNumber = createTextColumn(tableNumber);
    row.appendChild(columnTableNumber);

    var columnComplement = createTextColumn(complement);
    row.appendChild(columnComplement);

    var buttonPrintQRCodeMesa = createHTMLButton("Imprimir QR Code", `printQRCodeMesa('${base64QRCode}', '${tableNumber}')`, LIGHT_BLUE_WHITE);
    row.appendChild(buttonPrintQRCodeMesa);

    var deleteButton = createHTMLButton("Excluir", `onClickDelete('${tableNumber}')`, RED);
    row.appendChild(deleteButton);

    var editButton = createHTMLButton("Editar", `editMesa('${tableNumber}', '${complement}')`, GREEN);
    row.appendChild(editButton);

    tabBody.appendChild(row);
}