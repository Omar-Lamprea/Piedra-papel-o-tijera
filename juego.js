const rock = document.getElementById('op1');
const paper = document.getElementById('op2');
const scissors = document.getElementById('op3');
const result = document.getElementById('result');
let z;

result.textContent = '.'

z = aleatorio(1 , 3);
function aleatorio(min, maxi){
	const resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}

rock.addEventListener('click', piedra)
paper.addEventListener('click', papel)
scissors.addEventListener('click', tijeras)

function piedra(){
	if (z == 1){
	result.textContent = 'piedra:empate'
}
	else if (z == 2){
		result.textContent ='papel: derrota'
	}
	else{
		result.textContent = 'tijera: victoria'
	}
}

function papel(){
	if (z == 1){
	result.textContent = z + ' victoria'
}
	else if (z == 2){
		result.textContent = z + ' empate'
	}
	else{
		result.textContent = z + ' derrota'
	}
}

function tijeras(){
	if (z == 1){
	result.textContent = z + ' derrota'
}
	else if (z == 2){
		result.textContent = z + ' victoria'
	}
	else{
		result.textContent = z + ' empate'
	}
}
