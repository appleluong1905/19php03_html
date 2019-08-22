
document.write("<div class='ban_co'>");
// Dung vong for cho hang
for (var j = 0; j < 8; j++) {
	// Dung vong for nay cho cot
	for (var i = 0; i < 8; i++) {
		if ((j + i) % 2 == 0) {
			document.write("<div class='box_black'></div>");
		} else {
			document.write("<div class='box_white'></div>");
		}
	}
}
document.write('</div>');

var a = prompt("Nhap so dau tien", "");
var b = prompt("Nhap so thu 2", "");
var c = prompt("Nhap so thu 3", "");
document.write(a);
document.write('<br>');
document.write(b);
document.write('<br>');
document.write(c);
document.write('<br>');

function maxNumber(so1, so2, so3) {
	so1 = parseInt(so1);
	so2 = parseInt(so2);
	so3 = parseInt(so3);
	var max = so1;
	if (max < so2) max = so2;
	if (max < so3) max = so3;
	return max;
}

document.write('<br>');
document.write('so lon nhat trong 3 so:' + ', ' + a + ', ' + b + ', ' + c);
document.write(' la so: ' + maxNumber(a, b, c));


