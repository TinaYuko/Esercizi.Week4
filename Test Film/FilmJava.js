function save() { //Salvo email e nome
    let insertedEmail = document.getElementById("email").value; //Mi serve per la newsletter
    localStorage.setItem('email', insertedEmail)
    let insertedName = document.getElementById("name").value; //Per riconoscere l'utente 
    localStorage.setItem('name', insertedName)
}

function checkwelcome() { //Se l'utente è loggato, gli do il benvenuto
    let storedName = localStorage.getItem('name');

    if (storedName != null) {

        alert("Benvenut* " + storedName);
    }
}

function change() { //Abilito il pulsante Subscribe
    let inputs = document.querySelectorAll("input[type='email']");
    let loginButton = document.querySelector("input[type=submit]");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            loginButton.disabled = true;
            return;
        }
    }
    loginButton.disabled = false;
}

function hideForm() { //Nascondo la form e faccio apparire Unsubscribe

    let form = document.getElementById("formLogin");

    form.style.display = "none";


    let unsubscribebutton = document.getElementById("unsubscribeButton");

    unsubscribebutton.style.display = "";
}

function checkRegistredUser() { //se l'utente è loggato, uso hideForm

    let storedEmail = localStorage.getItem('email');
    if (storedEmail != null) {

        hideForm();
    }

    let storedName = localStorage.getItem('name');
    if (storedName != null) {

        hideForm();
    }
}


function unsubscribe() { 
//Se l'utente sceglie di non ricevere più news, cancello tutto dal LS et voilà il form
    localStorage.clear();

    let form = document.getElementById("formLogin");
    form.style.display = "";

    let subscribeFormButton = document.querySelector("input[type=submit]");
    subscribeFormButton.disabled = false;


    let unsubscribe2Button = document.getElementById("unsubscribeButton");
    unsubscribe2Button.style.display = "none";

}

