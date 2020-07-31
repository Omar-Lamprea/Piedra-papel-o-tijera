const rock = document.getElementById('op1');
const paper = document.getElementById('op2');
const scissors = document.getElementById('op3');
const result = document.getElementById('result');
let z;

result.textContent = ''


rock.addEventListener('click', piedra)
paper.addEventListener('click', papel)
scissors.addEventListener('click', tijeras)

function piedra(){

	z = aleatorio(1 , 3);
	function aleatorio(min, maxi){
	const resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
	}

	if (z == 1){
	result.textContent = 'piedra: empate'
	}
	else if (z == 2){
		result.textContent ='papel: derrota'
	}
	else{
		result.textContent = 'tijera: victoria'
	}
}

function papel(){

	z = aleatorio(1 , 3);
	function aleatorio(min, maxi){
	const resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
	}

	if (z == 1){
	result.textContent = ' piedra: victoria'
	}
	else if (z == 2){
		result.textContent = 'papel: empate'
	}
	else{
		result.textContent = 'tijeras: derrota'
	}
}

function tijeras(){

	z = aleatorio(1 , 3);
	function aleatorio(min, maxi){
	const resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
	}

	if (z == 1){
	result.textContent = 'piedra: derrota'
	}
	else if (z == 2){
		result.textContent = 'papel: victoria'
	}
	else{
		result.textContent = 'tijeras: empate'
	}
}
