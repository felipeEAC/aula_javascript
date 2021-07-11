/*
var nome = "Felipe Eduardo ";
var idade= 27;
var idade2 = 10;
var frase = "japao e o melhor time do mundo";
//alert(nome + "tem " + idade +" anos");
//alert(idade+idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("japao", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//alert(frase.replace("japao","Brasil"));

var lista =["maça", "pera" ,"laranja"];
lista.push("uva"); // adiciona item ao final
console.log(lista); // exibe os itens na lista
lista.pop() // retira o ultimo elemento da lista
console.log(lista); // exibe os itens na lista
console.log(lista.length); // exibe quantidade de elementos na lista
console.log(lista.reverse()); // escreve lista de tras para frente
console.log(lista.toString()); // escreve os elementos da lista na forma de string
console.log(lista.join(" - ")); // define qual caracter usar para separar os itens da toString
*/

/*
var fruta ={nome:"maça", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor);

var frutas=[{nome:"maça", cor:"vermelha"} ,{nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var idade = prompt("Qual sua idade ?"); // gera um pergunta ao usuario , a resposta vai ser salva na variavel declarada
//var idade = 18;
if(idade >=18){ 
    alert("maior de idade");
 }else{
     alert("menor de idade");
 }
*/
 /*
var count =0;
while(count <=5){
    console.log(count);
    count = count +1;
};
*/
/*
var count;
for(count=0 ; count <= 5 ; count++){
    alert(count);
};

var d = new Date();
alert(d);
alert(d.getHours());
alert(d.getMinutes());
alert(d.getDay());
alert(d.getUTCDate);
*/

function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b> Obrigado por Clicar </b>" ;
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}
function  redirecionar(){
    window.open("https://www.linkedin.com/in/felipeeac1994/"); // abre outra janela
    window.location.href ="https://github.com/felipeEAC";       // abre mesma janela
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="OBRIGADO POR ISSO";
    elemento.innerHTML ="OBRIGADO POR ISSO"
    //alert("trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui novamente";
    elemento.innerHTML ="Passe o mouse aqui novamente";
}
function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}