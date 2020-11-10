var name = prompt("Qual è il tuo nome?");
console.log("name");

var surname = prompt("Qual è il tuo cognome?");

var color = prompt("Qual è il tuo colore preferito?");

var number = 19;

document.getElementById("client-name").innerHTML = name;

document.getElementById("password").innerHTML = name + surname + color + number;
