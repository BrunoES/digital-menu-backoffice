const TOKEN_NAME = "digital-menu-token";

function setToken(token) {
    disableToken();
    window.localStorage.setItem(TOKEN_NAME, token);
}

function retrieveToken() {
    var token = window.localStorage.getItem(TOKEN_NAME);
    if (token == null) token = "";
    return token;
}

function disableToken() {
    window.localStorage.removeItem(TOKEN_NAME);
}

function signOut() {
    disableToken();
    window.location.href= "/login";
}

function getAuthorizationHeader() {
    const headers = {
        headers: {
          Authorization: retrieveToken()
        }
      };

    return headers;
}

function isAuthenticatedExternalPages() {
    axios.get(`${BASE_URL}/mock-endpoint`, getAuthorizationHeader())
      .then(function (response) {
          window.location.href= "/menu";
      })
      .catch(function (error) {
        document.getElementById("hideAll").style.display = "block";
        console.log("User not authenticated");
      });
  }

function isAuthenticatedInternalPages() {
    console.log("entrou");

    console.log(`${BASE_URL}/mock-endpoint`);
    console.log(getAuthorizationHeader());

    axios.get(`${BASE_URL}/mock-endpoint`, getAuthorizationHeader())
        .then(function (response) {
            document.getElementById("hideAll").style.display = "block";
            console.log("User authenticated");
        })
        .catch(function (error) {
            console.log("User not authenticated");
            window.location.href= "/login";
        });
        console.log("saiu");
}