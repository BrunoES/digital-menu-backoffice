const TOKEN_NAME = "digital-menu-token";

function setToken(token) {
    window.localStorage.setItem(TOKEN_NAME, token);
}

function retrieveToken() {
    const token = window.localStorage.getItem(TOKEN_NAME);
    return token;
}

function disableToken() {
    window.localStorage.removeItem(TOKEN_NAME);
}

function getAuthorizationHeader() {
    const headers = {
        headers: {
          Authorization: retrieveToken()
        }
      };

    return headers;
}