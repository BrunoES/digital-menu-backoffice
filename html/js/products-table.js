function insertProductTable(id, name, description, price) {
    tabBody=document.getElementById("product_table");
    var row= createRow();

    var columnId = createTextColumn(id, CENTRALIZED);
    row.appendChild(columnId);

    var columnName = createTextColumn(name);
    row.appendChild(columnName);

    var columnDescription = createTextColumn(description);
    row.appendChild(columnDescription);

    var columnPrice = createTextColumn(price, CENTRALIZED);
    row.appendChild(columnPrice);

    var deleteButton = createHTMLButton("Excluir", `onClickDelete('${id}')`, RED);
    row.appendChild(deleteButton);

    var editButton = createHTMLButton("Editar", `editProduct('${id}', '${name}', '${description}', '${cleanPrice(price)}')`, GREEN);
    row.appendChild(editButton);

    tabBody.appendChild(row);
}