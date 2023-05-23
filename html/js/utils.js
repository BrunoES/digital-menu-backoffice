const BASE_URL = "http://localhost:8080";

const MSG_READY_TO_EDIT = "Altere os campos do formul&aacute;rio e em seguida salve suas altera&ccedil;ões.";
const MSG_FIELD_EMAIL_ERROR = "E-mail inv&aacute;lido, confira.";
const TIMEOUT_MSG_DANGER = 4500;
const TIMEOUT_MSG_SUCCESS = 3000;
const TIMEOUT_MSG_DIALOG = 10000;
const TIMEOUT_MSG_ADVISE = 5000;
const MSG_TYPE_SUCCESS = 'success';
const MSG_TYPE_DANGER = 'danger';
const MSG_TYPE_WARNING = 'warning';
const MSG_TYPE_PRIMARY= 'primary';

// -- Alert & Dialogs
function closeAlerts() {
    document.getElementById('liveAlertPlaceholder').innerHTML = "";
}

function closeDialogs() {
    document.getElementById('liveDialogPlaceholder').innerHTML = "";
}

function alertMessage(type, message, timeout) {
    closeAlerts();
    closeDialogs();

    const wrapper = document.createElement('div');

    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `<span class="fs-5">${message}</span>`,
        '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    setTimeout(function () {
        closeAlerts();
    }, timeout);
}

function confirmDialog(type, message, timeout, confirmationFunction) {
    closeAlerts();
    closeDialogs();

    const wrapper = document.createElement('div');

    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `<span class="fs-5">${message}</span>  `,
        `  <button type="button" class="btn btn-success" onclick="closeDialogs();${confirmationFunction}">Sim</button>`,
        `  <button type="button" class="btn btn-danger" onclick="closeDialogs();">N&atilde;o</button>`,
        '</div>'
    ].join('')

    document.getElementById('liveDialogPlaceholder').append(wrapper)

    setTimeout(function () {
        closeDialogs();
    }, timeout);
}

function getHeaderFromResponse() {
    var req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send(null);
    var headers = parseHttpHeaders(req.getAllResponseHeaders().toLowerCase());
    console.dir(headers);
    return headers;
}

// Processa headers da response
function parseHttpHeaders(httpHeaders) {
    return httpHeaders.split("\n")
    .map(x=>x.split(/: */,2))
    .filter(x=>x[0])
    .reduce((ac, x)=>{ac[x[0]] = x[1];return ac;}, {});
}

// -- Formatting
const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const validateEmail = (email) => {
    var isValid = email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!isValid) alertMessage(MSG_TYPE_DANGER, MSG_FIELD_EMAIL_ERROR, TIMEOUT_MSG_DANGER);

    return isValid;
};

function formatPrice(price) {
    return "R$ " + parseFloat(price).toFixed(2).replace(".", ",");
}

function cleanPrice(price) {
    return price.replace("R$ ", "").replace(",", ".");
}