// Ottavio says
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// 1)
console.log('stampo key e key values del singolo studente');
var studente={
'nome':'Fabio',
'cognome':'Petrone',
'anni':30,
}

for (var key in studente) {
   console.log(key+':'+studente[key]);
}
// 2)
console.log('stampo solo nomi e cognomi degli studenti della classe');
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
console.log([key]+':'+studenti[i][key]);
  }
 }
}

var nuovoStudente={};
nuovoStudente.nome=newWord('nome');
nuovoStudente.cognome=newWord('cognome');
nuovoStudente.anni=newAge();
studenti.push(nuovoStudente);
console.log(studenti);

// FUNZIONI

function newWord(word){
var output='';
while(output.length<3 || !isNaN(output)){
output=prompt('Dimmi il '+word+' del nuovo studente');
if(output.length<3)
{alert('Devi inserire un '+word+' di almeno 3 lettere');
}
if(!isNaN(output))
{alert('Non puoi inserire un numero')
}
}
return output;
}
function newAge(){
var anni;
while(anni<12 || anni>50 || isNaN(anni)){
anni=parseInt(prompt('Dimmi gli anni del nuovo studente'));
if(anni<12 || anni>50)
{alert('Devi inserire un\'età tra 12 e 50');
}
if(isNaN(anni))
{alert('Devi inserire un numero')
}
}
return anni;
}
