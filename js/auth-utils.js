const TOKEN_NAME = "digital-menu-token";

function setToken(token) {
    disableToken();
    window.localStorage.setItem(TOKEN_NAME, token);
}

function retrieveToken() {
    const token = window.localStorage.getItem(TOKEN_NAME);
    return token;
}

function disableToken() {
    window.localStorage.removeItem(TOKEN_NAME);
}

function signOut() {
    disableToken();
    window.location.href= "./login.html";
}

function getAuthorizationHeader() {
    const headers = {
        headers: {
          Authorization: retrieveToken()
        }
      };

    return headers;
}