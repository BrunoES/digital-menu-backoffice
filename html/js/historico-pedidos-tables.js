function insertPedido(checkoutId, tableNumber, dateHour, customerName, total) {
    tabBody=document.getElementById("historico_pedidos_table");
    var row= createRow();

    var columnCheckoutId = createTextColumn(checkoutId);
    row.appendChild(columnCheckoutId);

    var columnTableNumber = createTextColumn(tableNumber);
    row.appendChild(columnTableNumber);

    var columnDateHour = createTextColumn(dateHour);
    row.appendChild(columnDateHour);

    var columnCustomerName = createTextColumn(customerName);
    row.appendChild(columnCustomerName);

    var columnTotal = createTextColumn(total);
    row.appendChild(columnTotal);

    // Botao que abre modal com detalhes do pedido, chama API de detalhes do pedido
    var cell = document.createElement("td");
    cell.innerHTML = `<button type="button" class="btn btn-primary" style='background-color: ${LIGHT_BLUE_WHITE}; color: white; border-radius: 10px' data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="getPedidoById('${checkoutId}', '${tableNumber}')">
                        Detalhes
                      </button>`;

    row.appendChild(cell);

    tabBody.appendChild(row);
}

