const http = require('http');
const fs = require("fs");

var jsUtils = '';
var jsAuthUtils = '';
var jsHistoricoPedidosTables = '';
var jsItensPedidoTables = '';
var jsMesasTable = '';
var jsTableUtils = '';
var jsProductsTable = '';

var htmlChangePassword = '';
var htmlCadastro = '';
var htmlLogin = '';
var htmlMenu = '';
var htmlHistoricoPedidos = '';
var htmlEsqueciMinhaSenha = '';
var htmlCadastroMesa = '';
var htmlCadastroMenuItem = '';

var imgLogo = fs.readFileSync('./html/imgs/logo.JPG');
var imgLogoBranco = fs.readFileSync('./html/imgs/logo-branco.JPG');

fs.readFile('./html/cadastro.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlCadastro = data;
});

fs.readFile('./html/cadastro-mesa.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlCadastroMesa = data;
});

fs.readFile('./html/cadastro-menu-item.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlCadastroMenuItem = data;
});

fs.readFile('./html/login.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlLogin = data;
});

fs.readFile('./html/menu.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlMenu = data;
});

fs.readFile('./html/historico-pedidos.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlHistoricoPedidos = data;
});

fs.readFile('./html/esqueci-minha-senha.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlEsqueciMinhaSenha = data;
});

fs.readFile('./html/change-password.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlChangePassword = data;
});

fs.readFile('./html/js/utils.js', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  jsUtils = data;
});

fs.readFile('./html/js/auth-utils.js', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  jsAuthUtils = data;
});

fs.readFile('./html/js/table-utils.js', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  jsTableUtils = data;
});

fs.readFile('./html/js/products-table.js', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  jsProductsTable = data;
});

fs.readFile('./html/js/mesas-tables.js', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  jsMesasTable = data;
});

fs.readFile('./html/js/itens-pedido-tables.js', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  jsItensPedidoTables = data;
});

fs.readFile('./html/js/historico-pedidos-tables.js', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  jsHistoricoPedidosTables = data;
});

console.log("Running");

//create a server object:
http.createServer(function (req, res) {
  var data = req.url.split("?");
  var url = data[0];

  // Le parametro recebido de possivel direcionamento, e coloca em forma de header na response para o frontend.
  if(data.length > 1) {
    var parameter = data[1];
    var headerName = parameter.split("=")[0];
    var headerValue = parameter.split("=")[1];
    res.setHeader(headerName, headerValue);
  }

  res.setHeader("Content-Type", "text/html");
  console.log(req.url)
  switch (url) {
    case "/imgs/logo.JPG":
        res.setHeader("Content-Type", "image/jpeg");
        res.writeHead(200);
        res.end(imgLogo);
        break
    case "/imgs/logo-branco.JPG":
        res.setHeader("Content-Type", "image/jpeg");
        res.writeHead(200);
        res.end(imgLogoBranco);
        break
    case "/change-password":
        res.writeHead(200);
        res.end(htmlChangePassword);
        break
    case "/cadastro":
        res.writeHead(200);
        res.end(htmlCadastro);
        break
    case "/cadastro-menu-item":
        res.writeHead(200);
        res.end(htmlCadastroMenuItem);
        break
    case "/cadastro-mesa":
        res.writeHead(200);
        res.end(htmlCadastroMesa);
        break
    case "/esqueci-minha-senha":
        res.writeHead(200);
        res.end(htmlEsqueciMinhaSenha);
        break
    case "/historico-pedidos":
        res.writeHead(200);
        res.end(htmlHistoricoPedidos);
        break
    case "/menu":
        res.writeHead(200);
        res.end(htmlMenu);
        break
    case "/login":
        res.writeHead(200);
        res.end(htmlLogin);
        break
    case "/js/utils.js":
        res.writeHead(200);
        res.end(jsUtils);
        break
    case "/js/auth-utils.js":
        res.writeHead(200);
        res.end(jsAuthUtils);
        break
    case "/js/table-utils.js":
        res.writeHead(200);
        res.end(jsTableUtils);
        break
    case "/js/products-table.js":
        res.writeHead(200);
        res.end(jsProductsTable);
        break
    case "/js/mesas-tables.js":
        res.writeHead(200);
        res.end(jsMesasTable);
        break
    case "/js/itens-pedido-tables.js":
        res.writeHead(200);
        res.end(jsItensPedidoTables);
        break
    case "/js/historico-pedidos-tables.js":
        res.writeHead(200);
        res.end(jsHistoricoPedidosTables);
        break
    default:
      res.writeHead(404);
      res.end("Resource not found.");
}

}).listen(9091);