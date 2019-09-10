var result = '';
function addChar(number) {
	result += number;
	document.getElementById('result').innerHTML = result;
}
function calResult() {
	document.getElementById('result').innerHTML = eval(result);
}