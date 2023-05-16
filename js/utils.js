const BASE_URL = "http://localhost:8080";

const MSG_READY_TO_EDIT = "Altere os campos do formulário e em seguida salve suas alterações.";
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
        `  <button type="button" class="btn btn-danger" onclick="closeDialogs();">Não</button>`,
        '</div>'
    ].join('')

    document.getElementById('liveDialogPlaceholder').append(wrapper)

    setTimeout(function () {
        closeDialogs();
    }, timeout);
}