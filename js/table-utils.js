const GREEN = '#118c05';
const RED = '#Ea2d30';
const LIGHT_BLUE_WHIT = '#9BBCC1';

function createRow() {
    var row=document.createElement("tr");
    row.setAttribute("style", "border-bottom: 1px solid #ECF1EC");
    return row;
}

function createTextColumn(valor) {
    var cell = document.createElement("td");
    var node=document.createTextNode(valor);
    cell.appendChild(node);
    return cell;
}

function createHTMLButton(name, onClick, backgroundColor) {
    var cell = document.createElement("td");
    var button = document.createElement("button");
    button.setAttribute("onClick", onClick);
    button.setAttribute("style", `background-color: ${backgroundColor}; color: white; border-radius: 10px`);
    var node=document.createTextNode(name);
    button.appendChild(node);
    cell.appendChild(button);
    return cell;
}