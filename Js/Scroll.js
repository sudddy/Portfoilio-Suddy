
       
      window.onload = function()
      {
          // document.getElementById("loading").style.display = "none" 
      }

       
        
        
        
        
          $(document).ready(function(){
			
         $('[data-toggle="popover"]').popover(); 
			 
			  
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#backtotop').fadeIn();
            } else {
                $('#backtotop').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#backtotop').click(function () {
            $('#backtotop').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
                      
        $('#backtotop').tooltip('show');

});
        
 