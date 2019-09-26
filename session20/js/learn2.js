$('.hide').click(function(){
	$('.demo1').hide(2000);
});
$('.show').click(function(){
	$('.demo1').show(5000);
});

$('.fadeIn').click(function(){
	$('.demo1').fadeIn("slow");
});
$('.fadeOut').click(function(){
	$('.demo1').fadeOut();
});
// slideDown()
// slideUp()
// slideToggle()

$('.animation_right').click(function(){
	$('.animation').animate({'left':'400px'});
});