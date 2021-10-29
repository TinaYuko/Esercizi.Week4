//we weeee

function miaFunzione() {
    console.log("Prima di essere dichiarata" + k);
    var k = 2;
    console.log("Dopo la dichiarazione" + k);

    console.log("Prima di essere dichiarata" + m);
    let m = 3;
    console.log("Dopo la dichiarazione" + m);
}

function demoOnClick() {
    alert("Hai cliccato il tasto!");
}
function demoOnLoad() {
    alert("Benvenuto nel mio sito!");
}
function demoOnKeyDown() {
    alert("Hai cliccato un tasto sulla tastiera");
}

function demoOnChange() {
    let element = document.getElementById("role");
    let chosenRole = element.value;

    alert("Hai scelto: " + chosenRole);
}

function checkSelection() {
    let elements = document.getElementsByClassName("checkBox");
    for (let i = 0; i < elements.length; i++) {
        if (element[i].checked) //Se l'elemento è checkato, true
            alert("Hai selezionato qualcosa");
    }
}







