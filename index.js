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
var htmlMinhaConta = '';
var htmlUserActivaded = '';
var htmlPainel = '';

var imgLogo = fs.readFileSync('./html/imgs/logo.JPG');
var imgLogoBranco = fs.readFileSync('./html/imgs/logo-branco.JPG');
var defaultImg = fs.readFileSync('./html/imgs/default.jpg');

fs.readFile('./html/signup.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlCadastro = data;
});

fs.readFile('./html/mesas.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlCadastroMesa = data;
});

fs.readFile('./html/products.html', 'utf8', (err, data) => {
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

fs.readFile('./html/checkout-history.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlHistoricoPedidos = data;
});

fs.readFile('./html/forgot-password.html', 'utf8', (err, data) => {
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

fs.readFile('./html/my-account.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlMinhaConta = data;
});

fs.readFile('./html/user-activated.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlUserActivaded = data;
});

fs.readFile('./html/panel.html', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  htmlPainel = data;
});

fs.readFile('./html/js/md5.js', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  jsMD5 = data;
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

    case "/imgs/default.jpg":
        res.setHeader("Content-Type", "image/jpeg");
        res.writeHead(200);
        res.end(defaultImg);
        break
    case "/change-password":
        res.writeHead(200);
        res.end(htmlChangePassword);
        break
    case "/my-account":
        res.writeHead(200);
        res.end(htmlMinhaConta);
        break
    case "/signup":
        res.writeHead(200);
        res.end(htmlCadastro);
        break
    case "/products":
        res.writeHead(200);
        res.end(htmlCadastroMenuItem);
        break
    case "/mesas":
        res.writeHead(200);
        res.end(htmlCadastroMesa);
        break
    case "/forgot-password":
        res.writeHead(200);
        res.end(htmlEsqueciMinhaSenha);
        break
    case "/checkout-history":
        res.writeHead(200);
        res.end(htmlHistoricoPedidos);
        break
    case "/user-activated":
        res.writeHead(200);
        res.end(htmlUserActivaded);
        break
    case "/panel":
        res.writeHead(200);
        res.end(htmlPainel);
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
    case "/js/md5.js":
        res.writeHead(200);
        res.end(jsMD5);
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