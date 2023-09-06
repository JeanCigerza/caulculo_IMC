
const form = document.querySelector("#form");
 
form.addEventListener("submit", function(e){
    e.preventDefault();
 
    // Quando clicado no botão de enviar, irá adicionar esse evento criando as variáveis abaixo e executando os códigos
    const peso = Number(document.querySelector(".peso").value); // Criando variável e capturando o valor do input HTML
    const altura = Number(document.querySelector(".altura").value); // Criando variável e capturando o valor do input HTML
    inputInvalid(peso, altura);
});
 
 
// Essa função irá retornar o resultado de envio do formulário
function setResultado(msg){
    
  const resultado = document.querySelector("#resultado"); // Capturando o elemento HTML <div></div> para variável 'resultado'
    
    const p = criaP();  // Chamando a função 'criaP()', a sua função é criar elemento HTML <p></p> e adiciona uma Classe
    
    resultado.innerHTML = '';   // Limpando o resultado de envio do formulário para evitar repetições após cada envio
    resultado.appendChild(p);   // Adicionando o elemento HTML <p></p> no elemento HTML <div></div>
 
    p.innerHTML = msg;  //  Recebendo o argumento da função 'setResultado()' e adicionando ao elemento HTML <p></p>
};

// Essa função cria elemento HTML e adiciona classe
function criaP(){
    const p = document.createElement("p");  // Criando elemento HTML <p></p> com JS
    return p;
};
 
 
// Essa função faz o calculo do IMC
function calcularImc(peso, altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
};
 
// Essa função retorna o nome da faixa IMC que o usuário está
function getNameImc(imc){
    const getName = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]; // Criando array com as faixas de IMC
    // Criando ifs para retornar as faixas IMCs acima de acordo com IMC recebido
    if (imc < 18.5) {return `Seu IMC é ${imc} - ${getName[0]}`};
    if (imc <= 24.9) {return `Seu IMC é ${imc} - ${getName[1]}`};
    if (imc <= 29.9) {return `Seu IMC é ${imc} - ${getName[2]}`};
    if (imc <= 34.9) {return `Seu IMC é ${imc} - ${getName[3]}`};
    if (imc <= 39.9) {return `Seu IMC é ${imc} - ${getName[4]}`};
    if (imc >= 40) {return `Seu IMC é ${imc} - ${getName[5]}`};
};
 
function tagText(imc){
    let resultado = document.querySelector(".resultado");
    if(imc < 18.5){
        return resultado.classList.add("invalid");
    }
    if(imc >= 18.5 && imc < 30){
        resultado.classList.remove("invalid");
        return resultado.classList.add("valid");
    }
    else{
        resultado.classList.add("invalid");
    }
};
 
// Essa função verifica os campos de input
function inputInvalid(peso, altura){
    if (!peso && !altura) {
        setResultado("Peso e altura inválidos", false);
        return;
    } else if (!peso || !altura) {
        setResultado("Peso ou altura inválidos", false);
        return;
    } else{
        setResultado(getNameImc(calcularImc(peso, altura))), tagText(calcularImc(peso, altura));
    }
};