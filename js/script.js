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

var nuovoStudente={};
var nuovoNome='';
var nuovoCognome='';
var nuoviAnni=0;
while(nuovoNome.length<3 || !isNaN(nuovoNome)){
nuovoNome=prompt('Dimmi il nome del nuovo studente');
if(nuovoNome.length<3)
{alert('Devi inserire un nome di almeno 3 lettere');
}
if(!isNaN(nuovoNome))
{alert('non puoi inserire un numero')
}
}

while(nuovoCognome.length<3 || !isNaN(nuovoCognome)){
nuovoCognome=prompt('Dimmi il cognome del nuovo studente');
if(nuovoCognome.length<3)
{alert('Devi inserire un cognome di almeno 3 lettere');
}
if(!isNaN(nuovoCognome))
{alert('non puoi inserire un numero')
}
}

while(nuoviAnni<12 || nuoviAnni>50 || isNaN(nuoviAnni)){
nuoviAnni=parseInt(prompt('Dimmi gli anni del nuovo studente'));
if(nuoviAnni<12 || nuoviAnni>50)
{alert('Devi inserire un\'età tra 12 e 50');
}
if(isNaN(nuoviAnni))
{alert('Devi inserire un numero')
}
}

nuovoStudente.nome=nuovoNome;
nuovoStudente.cognome=nuovoCognome;
nuovoStudente.anni=nuoviAnni;
studenti.push(nuovoStudente);
console.log(studenti);

// oppure creavo var nuovostudente vuoto,e definivo le proprietà col punto= funzioni di verifica che ritorna nome cognome e anni
