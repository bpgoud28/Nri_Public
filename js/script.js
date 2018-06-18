    $(function(){
          $('.btn').addClass('btn_color');
          $('h1,h2,h3,h4,h5,h6').addClass('heading_color');
    $(".shopmore-lnk").hover(            
            function() {
               
                $(this).toggleClass('open');
                $('.ground').addClass("grundblk");
                $('body').css('overflow', 'hidden');
              
                $('i', this).addClass("fa-angle-up");   
                $('i', this).removeClass("fa-angle-down");				
            },
            function() {
              
                $(this).toggleClass('open');
              $('body').css('overflow', 'visible');
                 $('.ground').removeClass("grundblk");
          $('i', this).removeClass("fa-angle-up");   
                $('i', this).addClass("fa-angle-down");						
            });
    });
    
      $(function(){
    
    $(".lgn-drpdwn").hover(            
            function() {
               
                $(this).toggleClass('open');
               
                $('i', this).addClass("fa-angle-up");   
                $('i', this).removeClass("fa-angle-down");				
            },
            function() {
              
                $(this).toggleClass('open');
              
          $('i', this).removeClass("fa-angle-up");   
                $('i', this).addClass("fa-angle-down");						
            });
    });
    


function admSelectCheck(nameSelect)
{
    if(nameSelect){
        admOptionValue = document.getElementById("admOption").value;
		
        if(admOptionValue == nameSelect.value){       
		document.getElementById("admDivCheck").style.display = "block";
        }
        else{
            document.getElementById("admDivCheck").style.display = "none";
        }
    }
    else{
        document.getElementById("admDivCheck").style.display = "none";
    }
}

