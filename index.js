// 1) Quali sono i tipi primitivi principali in TypeScript?
console.log("----Esercizio 1-------");
console.log("In typescript i tipi primivitivi sono gli stessi di js e sono: String-Number-boolean-Null-Undefined-Any");
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript
console.log("----Esercizio 2-------");
var nome = "Giuseppe";
var età = 30;
var StudioTypeScript = true;
console.log("Il mio nome \u00E8 ".concat(nome, ".Ho ").concat(età, " anni e sto studiando Typescript: ").concat(StudioTypeScript));
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
console.log("----Esercizio 3-------");
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("Giuseppe"));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
console.log("----Esercizio 4-------");
var sum = function (a, b) {
    return a + b;
};
console.log(sum(8, 6));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
console.log("----Esercizio 5-------");
var calcolaIVA = function (prezzo) {
    var iva = 0.22;
    return prezzo + prezzo * iva;
};
console.log(calcolaIVA(100));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
console.log("----Esercizio 6-------");
var Lunghezza = function (str1, str2) {
    var concatenato = str1 + str2;
    return concatenato.length;
};
console.log(Lunghezza("Hello", "Typescript"));
// 7) Cos'è un Type Union e come si scrive?
console.log("----Esercizio 7-------");
// 8) Crea una variabile che possa contenere un numero, null o undefined.
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
// 12) Qual è la differenza tra type e interface?
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
// 17) Crea un oggetto che implementi l'interfaccia Auto.
// 18) Cosa sono i Generics in TypeScript?
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.  
