function welcome() {
    let storedName = localStorage.getItem('name');

    if (storedName1 = null)
        alert("Benvenuto " + storedName)
    else {
        let inseredName = prompt("Inserisci il tuo nome");

        localStorage.setItem('name', inseredName);
        alert("Benvenuto " + inseredName)
    }
}