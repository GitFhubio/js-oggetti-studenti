// Ottavio says
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// 1)

var studente={
'nome':'Fabio',
'cognome':'Petrone',
'anni':30,
}

for (var key in studente) {
   console.log(studente[key])
}

// 2)

var studenti=[{
'nome':'Fabio',
'cognome':'Petrone',
'anni':30,
},{
'nome':'Alex',
'cognome':'Asole',
'anni':21,
},{
'nome':'Lorenzo',
'cognome':'Arnau',
'anni':23,
}]

for (var i = 0; i < studenti.length; i++) {
 for(var key in studenti[i]){
  if (key !='anni'){
console.log(studenti[i][key]);
  }
 }
}
// 3)
// o con le funzioni per le verifiche

var nuovoNome=prompt('Dimmi il nome del nuovo studente');
var nuovoCognome=prompt('Dimmi il cognome del nuovo studente');
var nuoviAnni=parseInt(prompt('Dimmi gli anni del nuovo studente'));
var nuovoStudente={
  'nome':nuovoNome,
    'cognome':nuovoCognome,
      'anni':nuoviAnni,
}

studenti.push(nuovoStudente);
console.log(studenti);

// var nuovostudente={};
// oppure creavo var nuovostudente vuoto,e definivo le proprietà col punto= funzioni di verifica che ritorna nome cognome e anni
