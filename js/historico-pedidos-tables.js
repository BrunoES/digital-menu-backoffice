function insertPedido(checkoutId, dateHour, customerName, total) {
    tabBody=document.getElementById("mesas_table");
    var row= createRow();

    var columnCheckoutId = createTextColumn(checkoutId);
    row.appendChild(columnCheckoutId);

    var columnDateHour = createTextColumn(dateHour);
    row.appendChild(columnDateHour);

    var columnCustomerName = createTextColumn(customerName);
    row.appendChild(columnCustomerName);

    var columnTotal = createTextColumn(total);
    row.appendChild(columnTotal);

    var openDetailsButton = createHTMLButton("Detalhes", `openDetails('${checkoutId}')`, LIGHT_BLUE_WHITE);
    row.appendChild(openDetailsButton);

    tabBody.appendChild(row);
}