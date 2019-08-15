// Ve nha nghien cuu truoc:
// Vong lap for, while, do while
// Cau dieu kien: if else, switch case
// Tham so cua ham, tham so mac dinh
function mySum() {
	var a = 5, b = 7;
	document.write(a + b);
}
document.write('<br>');
mySum();

function mySum2() {
	var a = 6, b = 9;
	var c;
	c = a + b;
	return c;
}

document.write('<br>');
var x;
x = mySum2();
document.write(x);

// tham so cua ham
function mySum3(a, b) {
	var c;
	c = a + b;
	return c;
}

document.write('<br>');
var y;
y = mySum3(4, 8);
document.write(y);


document.write('<br>');
document.write(mySum3(5, 3));

// tham so mac dinh cua ham
function mySum4(a = 9, b = 2) {
	var c;
	c = a + b;
	return c;
}

document.write('<br>');
document.write(mySum4());