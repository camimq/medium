var nome = 'Camila';
var idade = '36';
var possuiFaculdade = true;
var time;
var comida = null;
var simbolo = Symbol();
var novoObjeto = {}

console.log(typeof nome); // String
console.log(typeof idade); // Number
console.log(typeof possuiFaculdade); // Boolean
console.log(typeof time); // Undefined
console.log(typeof comida); // Null
console.log(typeof simbolo); // Symbol
console.log(typeof novoObjeto); // Object

//-----------------------------------------------------

var naoDefinido;

console.log(typeof naoDefinido) // undefined

//-----------------------------------------------------

function objetoMensagem(nome){
    if(!nome){
        return null;
    }
    return {message : 'Olá, `$(nome)!'};
}

objetoMensagem('Camila'); // => {messa: 'Olá, Camila!'};
objetoMensagem(); // => null