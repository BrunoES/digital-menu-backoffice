const BASE_URL = "http://localhost:8080";

const MSG_READY_TO_EDIT = "Altere os campos do formul&aacute;rio e em seguida salve suas altera&ccedil;&otilde;es.";
const MSG_FIELD_EMAIL_ERROR = "E-mail inv&aacute;lido, confira.";
const MSG_IMG_DIMENSIONS_DEFAULT = "A imagem &eacute;	muito estreita, ou muito larga.";
const TIMEOUT_MSG_DANGER = 4500;
const TIMEOUT_MSG_SUCCESS = 3000;
const TIMEOUT_MSG_DIALOG = 10000;
const TIMEOUT_MSG_ADVISE = 5000;
const MSG_TYPE_SUCCESS = 'success';
const MSG_TYPE_DANGER = 'danger';
const MSG_TYPE_WARNING = 'warning';
const MSG_TYPE_PRIMARY= 'primary';

const LOGO_NAME = 'company-logo';
const COMPANY_NAME = 'company-name';

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

function getCompanyNameFromToken() {
    var token = retrieveToken();
    return token.split(",")[2]; // Company name.
}

function setCompanyLogoToLocalStorage(base64Img) {
    window.localStorage.setItem(LOGO_NAME, base64Img);
}

function getCompanyLogoFromLocalStorage() {
    var source = window.localStorage.getItem(LOGO_NAME);
    //if(source == '') source = '/imgs/default.jpg';
    return source;
}

function setCompanyNameToLocalStorage(base64Img) {
    window.localStorage.setItem(COMPANY_NAME, base64Img);
}

function getCompanyNameFromLocalStorage() {
    return window.localStorage.getItem(COMPANY_NAME);
}

function openImageExplorer(inputName) {
    document.getElementById(inputName).click();
}


function getDadosEmpresaHeader() {
    var oldBase64Img = getCompanyLogoFromLocalStorage();
    if(oldBase64Img == '') oldBase64Img = '/imgs/default.jpg';
    var oldName = getCompanyNameFromLocalStorage();

    document.getElementById("companyLogoHeader").src = oldBase64Img;
    document.getElementById("companyNameHeader").value = oldName;

    axios.get(`${BASE_URL}/company`, getAuthorizationHeader())
        .then(function (response) {
            console.log(response.data);
            var companyData = response.data;
            var name = companyData.name;
            var base64Img = companyData.base64Img;
            
            if(name != oldName) {
                document.getElementById("companyNameHeader").value = name;
                setCompanyLogoToLocalStorage(base64Img);
            }
            if(base64Img != "")
            if(base64Img != oldBase64Img) {
                document.getElementById("companyLogoHeader").src = base64Img;
                setCompanyLogoToLocalStorage(base64Img);
            }
        })
            .catch(function (error) {
            console.log(error);
        })
            .finally(function () {
        });
}