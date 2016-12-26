$('#rectangle').stop().animate({
	opacity: '0.5',
	top: '350px' 
},2500)


$(function() {
	$('#rectangle').hover(function(){
		$(this).stop().animate({
			opacity: '0.75',
			borderWidth:'8px',
			borderBottomWidth:'8px',
			borderLeftWidth:'8px',
			borderRightWidth:'8px'
		},300);
	},
	function() {
		$(this).stop().animate({
			opacity: '0.5',
			borderWidth:'4px #000 solid',
			borderBottomWidth:'4px',
			borderLeftWidth:'4px',
			borderRightWidth:'4px'
		},300);	
	});
});
/*
$( '#rectangle' ).hover(
	function(){
		$('#rectangle').animate({
			opacity: '0.75',
			borderWidth:'8px',
			borderBottomWidth:'8px',
			borderLeftWidth:'8px',
			borderRightWidth:'8px'
	},300);
	},
	function(){
		$('#rectangle').animate({
		opacity: '0.5',
		borderWidth:'4px #000 solid',
		borderBottomWidth:'4px',
		borderLeftWidth:'4px',
		borderRightWidth:'4px'
	},300)	
	}
);
*/