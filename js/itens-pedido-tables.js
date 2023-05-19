function insertItemPedido(productId, productName, quantity, price, subTotal) {
    tabBody=document.getElementById("itens_pedido_table");
    var row= createRow();

    var columnProductId = createTextColumn(productId);
    row.appendChild(columnProductId);

    var columnProductName = createTextColumn(productName);
    row.appendChild(columnProductName);

    var columnQuantity = createTextColumn(quantity);
    row.appendChild(columnQuantity);

    var columnPrice = createTextColumn(price);
    row.appendChild(columnPrice);

    var columnSubTotal = createTextColumn(subTotal);
    row.appendChild(columnSubTotal);

    tabBody.appendChild(row);
}

