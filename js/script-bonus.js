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

// oppure
// for (var i = 0; i < studenti.length; i++) {
//
// console.log(studenti[i].nome);
// console.log(studenti[i].cognome);
//   }

// 3)

var nuovoStudente={};
// nuovoStudente.nome=newWord('nome');
// nuovoStudente.cognome=newWord('cognome');
// nuovoStudente.anni=newAge();

// oppure

var nuovoStudente = {
'nome': newWord('nome'),
'cognome': newWord('cognome'),
'anni':newAge(),
}

studenti.push(nuovoStudente);

// console.log(studenti);


var lista=document.getElementById('lista');
var classe=document.getElementById('classe');
var html='<h1 style="color:red";>Studenti della classe</h1>'
for (var i = 0; i < studenti.length; i++) {
 html+='<h2>Ragazzo'+(i+1)+'</h2>';
 for(var key in studenti[i]){
  html+='<p><strong>'+[key]+'</strong>:'+studenti[i][key]+'</p>';
 }
}
classe.innerHTML+=html;

lista.before('Lista dei ragazzi della classe -->');
html2='';
for (var i = 0; i < studenti.length; i++) {
  html2+='<li>Ragazzo'+(i+1)+'</li>';
  for(var key in studenti[i]){
  html2+='<li><strong>'+[key]+'</strong>:'+studenti[i][key]+'</li>';
  }
}
lista.innerHTML+=html2;

$('li:nth-child(4n+1)').css('color','red');
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
var anniMax=50;
var anniMin=12;
while(anni<anniMin || anni>anniMax || isNaN(anni)){
anni=parseInt(prompt('Dimmi gli anni del nuovo studente'));
if(anni<anniMin || anni>anniMax)
{alert('Devi inserire un\'età tra '+anniMin+' e '+anniMax);
}
if(isNaN(anni))
{alert('Devi inserire un numero')
}
}
return anni;
}
