function insertProductTable(id, name, description, price) {
    tabBody=document.getElementById("product_table");
    row=document.createElement("tr");

    var columnId = createTextColumn(id);
    row.appendChild(columnId);

    var columnName = createTextColumn(name);
    row.appendChild(columnName);

    var columnDescription = createTextColumn(description);
    row.appendChild(columnDescription);

    var columnPrice = createTextColumn(price);
    row.appendChild(columnPrice);

    var deleteButton = createHTMLButton("Excluir", `onClickDelete('${id}')`);
    row.appendChild(deleteButton);

    console.log(`editProduct(${id}, ${name}, ${description}, ${price})`);
    var editButton = createHTMLButton("Editar", `editProduct('${id}', '${name}', '${description}', '${cleanPrice(price)}')`);
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