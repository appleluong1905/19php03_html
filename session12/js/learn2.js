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

document.write('<br>');
// cau lenh dieu kien
// 1.
//if (dieukien) {
	// thuc hien cac lenh o day neu dieukien la dung
//}
var a = 4;
if (a == 5) {
	document.write("So a la 5");
}

document.write('<br>');
// 2.
// if (dieukien) {
	// thuc hien cac lenh o day neu dieukien la dung
// } else {
	// thuc hien cac lenh o day neu dieukien la sai
// } 
var a = 4;
if (a == 5) {
	document.write("So a la 5");
} else {
	document.write("So a khong phai la 5 <br>");
	document.write("------ <br>");
	document.write("test if else");
}

// 3.
// if (dieukien1) {
	// thuc hien cac lenh o day neu dieukien1 la dung
// } else if (dieukien2) {
	// thuc hien cac lenh o day neu dieukien2 la dung
// } else {
	// thuc hien cac lenh o day neu dieukien2 la sai
// }
document.write('<br>');

var a = 7;
if (a == 5) {
	document.write("So a la 5");
} else if (a == 6) {
  document.write("So a la 6");
} else {
	document.write("So a khong phai la 5 hoac 6 <br>");
}


//
document.write('<br>');

var a = 4;
var b = 7;
if ((a == 5) || (a == 8)) {
	document.write("So a la 5 hoac la 8");
} else if ((a == 6) && (b == 7)) {
  document.write("So a la 6 va b = 7");
} else {
	document.write("So a khong phai la 5 hoac 6 hoac 8<br>");
}

// switch(ten_bien) {
// 	case '1':
			// thuc hien cac cau lenh o day, neu gia tri bien bang 1
// 		break;

// 	case '2':
			// thuc hien cac cau lenh o day, neu gia tri bien bang 2
// 		break;
		//...............
		//...............
// 	default:
			// thuc hien cac cau lenh o day, neu gia tri bien khac
			// cac truong hop phia ten
// 		break;

// }

//Ex: Cho mot so a cho truoc gia tri;
// Kiem tra neu so co gia tri tu 1 den 7 thi 
// ghi ra cac ngay trong tuan tuong ung
// vd: a = 1 thi ghi ra: Hom nay la thu hai
// vd: a = 2 thi ghi ra: Hom nay la thu ba
// ......
// vd: a = 7 thi ghi ra: Hom nay la chu nhat
// Neu khong thi in ra: a khong la ngay trong tuan
document.write('<br>');
var myDay = 2;
var a = 9;
switch(myDay) {
	case 1:
		document.write("Hom nay la thu hai");
		break;
	case 2:
		document.write("Hom nay la thu ba");
		if (a == 9) {
			document.write('<br>a la so 9');
		}
		break;
	case 3:
		document.write("Hom nay la thu tu");
		break;
	case 4:
		document.write("Hom nay la thu nam");
		break;
	case 5:
		document.write("Hom nay la thu sau");
		break;
	case 6:
		document.write("Hom nay la thu bay");
		break;
	case 7:
		document.write("Hom nay la chu nhat");
		break;
	default:
		document.write("Day khong phai la so cua ngay trong tuan");
		break;
}


