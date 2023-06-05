function insertItemPedido(productId, productName, quantity, price, subTotal) {
    tabBody=document.getElementById("itens_pedido_table");
    var row= createRow();

    var columnProductId = createTextColumn(productId, CENTRALIZED);
    row.appendChild(columnProductId);

    var columnProductName = createTextColumn(productName);
    row.appendChild(columnProductName);

    var columnQuantity = createTextColumn(quantity, CENTRALIZED);
    row.appendChild(columnQuantity);

    var columnPrice = createTextColumn(price, CENTRALIZED);
    row.appendChild(columnPrice);

    var columnSubTotal = createTextColumn(subTotal, CENTRALIZED);
    row.appendChild(columnSubTotal);

    tabBody.appendChild(row);
}

