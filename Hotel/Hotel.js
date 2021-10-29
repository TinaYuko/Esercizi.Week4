/*Javascript:
- Al caricamento della pagina Home, viene mostrato il messaggio di benvenuto.
Se l'utente è loggato -> Benvenuto XXX
Altrimenti -> Benvenuto

- Inserire in basso un pulsante 'Accedi' che, se cliccato, fa comparire una form di login
(username e password e tasto login) e un tasto chiudi (se cliccato, si nasconde
la form e si rivede il tasto 'Accedi')

L'utente compila i campi. Cliccando login, vengono salvati i dati sul local storage,
la casella che contiene form e tasto chiudi scompare e il tasto 'Accedi' è disabilitato.

L'utente può fare login in tutte le pagine.

Ricaricando la pagina o andando in una delle altre pagine, se l'utente è loggato non
deve essere possibile, quindi,fare login.*/

function accedi() {
    let formLogin = document.querySelector("#formLogin");
    formLogin.style.display = "none";
}
function login() {

    document.querySelector("#formLogin").style.display = "block";
    let inputs = document.getElementsByClassName("input");
    let loginButton = document.querySelector("input[type='submit']")
    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value == "") 
        {
            
            loginButton.disabled = true; 
            return;
        }
        loginButton.disabled = false;

    }
    
}
function closeForm() {
    let formLogin = document.querySelector("#formLogin");
    formLogin.style.display = "none";
}
function save() {
    let inputs = document.getElementsByClassName("input");

    let insUsername = inputs[0].value;
    let insPassword = inputs[1].value;

    localStorage.setItem('username', insUsername);
    localStorage.setItem('password', insPassword);
}

function hideForm() {
   
    let form = document.querySelector("#formLogin");
    form.style.display = "none"; 
    let logoutButton = document.getElementById("logoutButton");
    logoutButton.style.display = "inline";
    loginButton.style.display = "none";
}

function checkLoggedUser() {
    //recupero eventuali dati dal local storage
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');

    //se ci sono (ovvero l'utente è loggato) nascondo la form
    if (storedUsername != null && storedPassword != null) {
        hideForm();
    }

    let storedName = localStorage.getItem('username'); //in storedName andrà il valore oppure ...

    if (storedName != null)
        alert("Benvenut* " + storedName);
    else {
        alert("Benvenut*!");
    }
}

function logout() {
    localStorage.clear() //svuoto il local storage

    //recupero la form
    let form = document.querySelector("#formLogin");

    //mostro la form
    form.style.display = ""; //"inline", "block", "inline-block" ...

    //recupero e nascondo il tasto di logout 
    let logoutButton = document.getElementById("logoutButton");
    logoutButton.style.display = "none";
    loginButton.style.display = "";
    formLogin.style.display = "none";

}
function prenotazione() {
    let element = localStorage.getElementById("camere");
    let choice = element.value;
    alert("Hai scelto la camera: " + choice);
}