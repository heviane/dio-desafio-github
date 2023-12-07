// Declaração e Inicialização das variáveis

const nomeTimeA = prompt("Digite o nome do time A.");
const nomeTimeB = prompt("Digite o nome do time B.");
let pontos      = prompt("Digite a quantidade de pontos.");
let pontoA  = 0;
let pontoB  = 0;
let setA    = 0;
let setB    = 0;

if (pontos == 0){ pontos = 5; }

const nomeA_HTML  = document.getElementById("nomeTimeA");
const nomeB_HTML  = document.getElementById("nomeTimeB");
const pontoA_HTML = document.getElementById("pontoTimeA"); 
const pontoB_HTML = document.getElementById("pontoTimeB"); 
const setA_HTML   = document.getElementById("setA"); 
const setB_HTML   = document.getElementById("setB"); 
const pontos_HTML = document.getElementById("pontos"); 

nomeA_HTML.innerText  = nomeTimeA;
nomeB_HTML.innerText  = nomeTimeB;
pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;
setA_HTML.innerText   = setA;
setB_HTML.innerText   = setB;
pontos_HTML.innerText = 'Quantidade mínima de pontos: ' + pontos;

// Codificação
pontoA_HTML.addEventListener("click", aoClicarEmPontoA);
function aoClicarEmPontoA() {	
	pontoA = pontoA + 1;
	pontoA_HTML.innerText = pontoA;
	if (pontoA >= pontos && pontoA - pontoB >= 2){
		setA++;
		alert('('+nomeTimeA+' '+pontoA+' X '+pontoB+' '+nomeTimeB+')');
		setA_HTML.innerText = setA;
		zerarRodada();		
		if (setA == 2){
			alert('Time '+nomeTimeA+' ganhou o JOGO!');
			zerarPlacar();				
		}
	} 
}

pontoB_HTML.addEventListener("click", aoClicarEmPontoB);
function aoClicarEmPontoB() {	
	pontoB = pontoB + 1;
	pontoB_HTML.innerText = pontoB;
	if (pontoB >= pontos && pontoB - pontoA >= 2){
		setB++;
		alert('('+nomeTimeA+' '+pontoA+' X '+pontoB+' '+nomeTimeB+')');
		setB_HTML.innerText = setB;
		zerarRodada();		
		if (setB == 2){
			alert('Time '+nomeTimeB+' ganhou o JOGO!');
			zerarPlacar();			
		}
	} 
}

function zerarRodada(){
	pontoA = 0;
	pontoB = 0;
	pontoA_HTML.innerText = pontoA;
	pontoB_HTML.innerText = pontoB;	
}

function zerarPlacar(){
	nomeTimeA = '';
	nomeTimeB = '';
	pontoA    = 0;
	pontoB    = 0;	
	setA      = 0;
	setB      = 0;	
	nomeA_HTML.innerText  = nomeTimeA;
	nomeB_HTML.innerText  = nomeTimeB;			
	pontoA_HTML.innerText = pontoA;
	pontoB_HTML.innerText = pontoB;
	setA_HTML.innerText   = setA;
	setB_HTML.innerText   = setB;	
}

//// Outra forma de fazer...
// pontoB_HTML.addEventListener("click", function() {
	// pontoB = pontoB + 1;
	// pontoB_HTML.innerText = pontoB;
// });