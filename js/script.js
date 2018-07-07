    $(function(){
          $('.btn').addClass('btn_color');
          $('h1,h2,h3,h4,h5,h6').addClass('heading_color');
    $(".shopmore-lnk").hover(            
            function() {
               
                $(this).toggleClass('open');
                $('.ground').addClass("grundblk");              
                $('i', this).addClass("fa-angle-up");   
                $('i', this).removeClass("fa-angle-down");				
            },
            function() {
              
                $(this).toggleClass('open');
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


function gender(nameSelect)
{
    if(nameSelect){
        admOptionValue = document.getElementById("otherrelation").value;
		
        if(admOptionValue == nameSelect.value){       
		document.getElementById("realtion").style.display = "block";
        }
        else{
            document.getElementById("realtion").style.display = "none";
        }
    }
    else{
        document.getElementById("realtion").style.display = "none";
    }
}

