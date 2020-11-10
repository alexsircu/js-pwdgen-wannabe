var name = prompt("Qual è il tuo nome?");
console.log(name);

var surname = prompt("Qual è il tuo cognome?");
console.log(surname);

var color = prompt("Qual è il tuo colore preferito?");
console.log(color);

var number = 19;
console.log(number);

document.getElementById("client-name").innerHTML = name;
console.log(document.getElementById("client-name"))

document.getElementById("password").innerHTML = name + surname + color + number;
console.log(document.getElementById("password"))
