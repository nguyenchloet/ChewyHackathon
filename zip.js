var variable = '02108';

function getZip() {
    variable = document.getElementById("zipcode-input").value;
    document.getElementById("zip-received").innerHTML = 'The user input zipcode is: ' + variable;
}

