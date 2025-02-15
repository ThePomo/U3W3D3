// 1) Quali sono i tipi primitivi principali in TypeScript?
console.log("----Esercizio 1-------");
console.log ("In typescript i tipi primivitivi sono gli stessi di js e sono: String-Number-boolean-Null-Undefined-Any")

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript
console.log("----Esercizio 2-------");
const nome: string = "Giuseppe";
const età: number = 30; 
const StudioTypeScript: boolean = true;
console.log(`Il mio nome è ${nome}.Ho ${età} anni e sto studiando Typescript: ${StudioTypeScript}`);

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
console.log("----Esercizio 3-------");
const greet = (name: string): string => {
    return "Ciao " + name;
};
console.log(greet("Giuseppe"));

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
console.log("----Esercizio 4-------");
const sum = (a: number, b: number): number => {
    return a + b;
};
console.log(sum(8, 6));

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
console.log("----Esercizio 5-------");
const calcolaIVA = (prezzo: number): number => {
    const iva = 0.22;
    return prezzo + prezzo * iva;
};
console.log(calcolaIVA(100));

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
console.log("----Esercizio 6-------");
const Lunghezza = (str1: string, str2: string): number => {
    const concatenato = str1 + str2;
    return concatenato.length;
};
console.log(Lunghezza("Hello","Typescript"));

// 7) Cos'è un Type Union e come si scrive?
console.log("----Esercizio 7-------");
console.log("grazie ad union si possono definire variabili che contengono valori di tipi differenti e si scrive con | (operatore pipe)che unisce i vari tipi.");
console.log("la sintassi esatta è: let x: tipo1 | tipo 2 | tipo3 |tipo 4;");



// 8) Crea una variabile che possa contenere un numero, null o undefined.
console.log("----Esercizio 8-------");
let value: number | null | undefined;

value = 42;
console.log(value);

value = null
console.log(value);

value= undefined
console.log(value);



// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
console.log("----Esercizio 9-------");
type Giorno = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
console.log("fatto guardare codice");

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
console.log("----Esercizio 10-------");
const number: number[] = [1, 2, 3];
const numbers: Array<number> = [1, 2, 3];
console.log(number);
console.log(numbers);


// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
console.log("----Esercizio 11-------");
const tupla: [string, string, string,string, number, string] = ["Ciao", "sono", "Giuseppe","ho",30 ,"anni"];
console.log(tupla);

// 12) Qual è la differenza tra type e interface?
console.log("----Esercizio 12-------");
console.log("in Ts sia type che interface sono utilizzati per definire forme di oggetti e strutture di tipi, ma ci sono alcune differenze come:");
console.log("type viene utilizzato per definire alias di tipi quali i primitivi,unioni,tuple ecc");
console.log("interface invece è progettato per definitre la forma di oggetti e si concentra su proprietà e metodi");

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
console.log("----Esercizio 13-------");

interface Person {
    firstname: string;
    lastname: string;
    age: number;
  }

const person: Person = {
    firstname: "Giuseppe",
    lastname: "Pomo",
    age: 30,
  };
  
  console.log(person.firstname); 
  console.log(person.lastname);  
  console.log(person.age);      
  
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
console.log("----Esercizio 14-------");
interface User {
    email: string;       // Email obbligatoria
    phone?: string;      // Telefono opzionale
  }
  const user1: User = {
    email: "mariomario@gmail.com",
  };
  
  const user2: User = {
    email: "luigimario@gmail.com",
    phone: "123-456-7890",
  };
  
  console.log(user1);
  console.log(user2); 

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
console.log("----Esercizio 15-------");
interface Studente {
    nome: string;
    voto: number;
  }

  const studenti: Studente[] = [
    { nome: "Mario", voto: 8 },
    { nome: "Luigi", voto: 7 },
    { nome: "Bowser", voto: 3 },
  ];
  studenti.forEach((studente) => {
    console.log(`Nome: ${studente.nome}, Voto: ${studente.voto}`);
  });
  
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
console.log("----Esercizio 16-------");
// 17) Crea un oggetto che implementi l'interfaccia Auto.

// 18) Cosa sono i Generics in TypeScript?

// 19) È possibile avere più tipi generici in un'interfaccia?

// 20) Crea un'interfaccia generica per una risposta API.  
