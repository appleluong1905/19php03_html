$('.hide').click(function(){
	$('.demo1').hide(2000);
});
$('.show').click(function(){
	$('.demo1').css("color", "red").show(3000).hide(2000).css("color", "blue").show(3000).hide(2000);
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