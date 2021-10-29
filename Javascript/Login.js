//Verificare che l'tente abbia inserito qualcosa per cliccare login
//Se entrambi i campi sono compilati, abilito tasto login

function changeLoginPage() {
    //recupero gli elementi il cui class name è input
    let inputs = document.getElementsByClassName("input");
    //recuper il tasto login
    let loginButton = document.querySelector("input[type='submit']");
    
    //verifico che siano compilati
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") //se l'utente non ha scritto una cippa
        {
            //tasto login rimane disabilitato
            loginButton.disabled = true; //oppure disabled="disabled"
            return;
        }
        loginButton.disabled = false;
    }
}

//al submit salvo i dati dell'utente
function save() {
    //recuper i dati utente
    let insUsername = document.getElementsByClassName("input")[0].value;
    let insPassword = document.getElementsByClassName("input")[1].value;

    //salvo nel local storage
    localStorage.setItem('username', insUsername);
    localStorage.setItem('password', insPassword);

}
function hideForm() {
    //recupero la form
    let form = document.querySelector("form");
    //se ho più form questo query selector prende solo il primo che trova

    //nascondo la form
    form.style.display = "none"; //cambio lo stile della form

    //recupero il tasto di logout
    let logoutButton = document.getElementById("logoutButton");
    //lo rendo visibile
    logoutButton.style.display = "inline";
}
function checkLoggedUser() {
    //recuperare i dati dal local storage

    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');
    //Se ci sono nascondo la form, perhé l'utente è loggato

    if (storedUsername != null && storedPassword != null) {
        hideForm();
    }
    //altrimenti na minca, non ha trovato nulla nel local storage
}
function logout() {
    localStorage.clear() //Svuoto il local storage
    //recupero la form
    let form = document.querySelector("form");
    //e la mostro
    form.style.display = ""; //oppure inline, inline block, ecc
    //nascondo il tasto di logout
    let logoutButton = document.getElementById("logoutButton");
    logoutButton.style.display = "none";
}