$(function() 
{   
	$(".calendarContOuter").CalenStyle(
	{
		sectionsList: ["Header", "ActionBar", "Calendar"],
		visibleView: "DetailedMonthView",
		calDataSource: 
		[					
			{
				sourceFetchType: "DateRange",
				sourceType: "URL",
				source: "https://www.googleapis.com/calendar/v3/calendars/8hks0lhlpoo6qmh0bvl7p0031o@group.calendar.google.com",
				config:{
					changeColorBasedOn: "EventSource",
					singleColor: "52B3D9",
					googleCalendarApiKey: "AIzaSyDr6k_qSNNSQpN81DUelfjFV_yo0AtdrU8"
				}
			}
		],
		modifyActionBarView: function(actionBar, visibleViewName)
		{
			var thisObj = this;
			$(actionBar).empty();
			$(actionBar).append("<span class='reload'>Reload</span>");
			$(".reload").click(function()
			{
				thisObj.reloadData();
		});
	$('.calender').click(function(actionBar) {       
		$('.calendarContOuter').addClass('calendarContOuterblok');  
		$('.cEventLoaderBg').css("display","block");
		$('body').css('overflow', 'hidden');
		$('.groundcalender').addClass("grundcal");
		thisObj.reloadData();
	});
	$('.calclose').click(function() {
		$('.calendarContOuter').removeClass('calendarContOuterblok');
		$('.cEventLoaderBg').css("display","none");
		$('body').css('overflow', 'visible');
		$('.groundcalender').removeClass("grundcal");
	});
},
	eventsAddedInView: function(visibleView, eventClass)
	{
		var thisObj = this;
		$(thisObj.elem).find(eventClass).popover(
		{
			placement: "top",
			trigger: "hover",
			html: true,
			container: "body",
			content: function()
			{
				var oTooltipContent = $(this).data("tooltipcontent"),
				sTitle = oTooltipContent.title || "",
				sStartDateTime = oTooltipContent.startDateTime || "",
				sEndDateTime = oTooltipContent.endDateTime || "",
				sTime = sStartDateTime  + ((sEndDateTime !== "") ? ("<br/>" + sEndDateTime) : ""),
				sTooltipText = "<div class='cTooltipTitle'>" + sTitle + "</div><div class='cTooltipTime'>" + sTime + "</div>";
				return sTooltipText;
			}
		});
	},
	timeSlotsAddedInView: function(visibleView, eventClass)
	{
		var thisObj = this;
		$(thisObj.elem).find(eventClass).popover(
		{
			placement: "top",
			trigger: "hover",
			html: true,
			container: "body",
			content: function()
			{
				var oTooltipContent = $(this).data("tooltipcontent"),
				sTooltipText = "<div class='cTooltipTitle'>" + oTooltipContent.title + "</div><div class='cTooltipTime'>" + oTooltipContent.startDateTime + "<br/>" + oTooltipContent.endDateTime + "</div>";
				return sTooltipText;
			}
		});
	},
	saveChangesOnEventDrop: function(oDraggedEvent, startDateBeforeDrop, endDateBeforeDrop, startDateAfterDrop, endDateAfterDrop)
	{
		$(".popover").hide();
	}
});
});


// time hover -- header content
$('.time').hover(function (e) {
	$('.loc-time').stop(true).slideToggle();
});

// Cart view onclick -- header/floating content
var hei=$(".multi-level").outerHeight(true);
$('.submenu').css('min-height', hei+'px');
    $(".cart").click(function(){
        $('.cart-info').toggleClass('cart-info-dev');
        return false;
    });
    $('body').click(function() {
      if ($(".cart-info").hasClass("cart-info-dev")) {
			$(".cart-info").removeClass( "cart-info-dev" );
		}
});
$(function(){           
	$('#cartdiv').slimScroll({
		height: '170px',
		width: 'auto'
	});
	
});
var elementCart = $('.cart').offset();
$(window).scroll(function(){
if($(window).scrollTop() > elementCart.top){
	$('.cart').addClass('cart_nav');
} else {
	$('.cart').removeClass('cart_nav');
}   		
});

//Header fixed to top on scroll
// var fixmeTop = $('.main-menu').offset().top;
// $(window).scroll(function() {
//     var currentScroll = $(window).scrollTop();
//     if (currentScroll >= fixmeTop) {
//         $('.main-menu').css({
//             position: 'fixed',
//             top: '0',
//             left: '0'
//         }).addClass('menu_stick');
//          $('.ground').addClass('ground_down');	
      
//     } else {
//         $('.main-menu').css({
//             position: 'relative'
//         }).removeClass('menu_stick');
        
//          $('.ground').removeClass('ground_down');	
//     }
// });



// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
//Modal popup grayout issue fixes
$('.modal').on('hidden.bs.modal', function () {
	if ($(".modal:visible").length > 0) {
		setTimeout(function () {
			$('body').addClass('modal-open');
		}, 200)
	}
});



//Radio button click in country currency selection
$('input[name="a"]').change(function () {
	if ($(this).is(':checked')) {
		$(".currencychange").css('display', 'block');
		setTimeout(function () {
			$('#myModal').modal('hide');
			$(".currencychange").css('display', 'none');
		}, 2000)

	}
});   

//Accordion selection button click in country currency selection

function toggleIcon(e) {
	$(e.target)
		.prev('.panel-heading')
		.find(".more-less")
		.toggleClass('glyphicon-plus glyphicon-minus');
		$('#accordion .panel-heading').removeClass('highlight');
		$(e.target).prev('.panel-heading').addClass('highlight');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


$('.as-accordion-head').click(function () {
	$(this).find('.as-accordion-close').toggleClass('open');
	$(this).next('.as-accordion-collapse').slideToggle('fast', () => {	
	});
});

//$('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 




$.fn.serializeObject = function()
{
	var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
$(function() {
    $('form').submit(function() {
        $('#womenGarmentResult').text(JSON.stringify($('form').serializeObject()));
        return false;
    });
});



window.onload = function(){
        
    //Check File API support
    if(window.File && window.FileList && window.FileReader)
    {
        var filesInput = document.getElementById("input_files");
        
        filesInput.addEventListener("change", function(event){
            
            var files = event.target.files; //FileList object
            var output = document.getElementById("result");
            
            for(var i = 0; i< files.length; i++)
            {
                var file = files[i];
                
                //Only pics
                if(!file.type.match('image'))
                  continue;
                
                var picReader = new FileReader();
                
                picReader.addEventListener("load",function(event){
                    
                    var picFile = event.target;
                    
                    var div = document.createElement("div");
                    
                    div.innerHTML = "<img class='thumbnail upload_images' src='" + picFile.result + "'" +
                            "title='" + picFile.name + "'/>";
                    
                    output.insertBefore(div,null);            
                
                });
                
                 //Read the image
                picReader.readAsDataURL(file);
            }                               
           
        });
    }
    else
    {
        console.log("Your browser does not support File API");
    }
}