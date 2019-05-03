   var origWidth;
$(document).ready(function() {
    origWidth = $(window).width();  //store the window's Height when the document loads
});
 var width= $(window).width();
$(window).resize(function(){
	
	
	if($(this).width != width)
	{
	var curWidth = $(window).width(); //store the window's current Height
    var delta = (curWidth- origWidth);
    $(".image-left").offset({left:($(".image-left").offset().left + delta)});
	 
	
    origWidth = curWidth;
	
   }
});