function displaypage($page,name) {
    $(".nav").find(".active").removeClass("active");
    $page.empty();
    $page.load(name + ".html");
    //$('.navbar-toggle').click()
    console.log("You asked for page: " + name);
}

//from github to make navbar go away!
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	$(this).collapse('hide');
    }
});

$(document).ready(function() {
    var $page = $("#page");
    
    $page.load( "about.html", function() {
    	console.log('Loading about.html');
    });
    
    $("#about").on("click", function() {
	var name = $(this)[0].id;
	displaypage($page,name);
	$(this).parent().addClass("active");
    });

    $("#physics").on("click", function() {
	var name = $(this)[0].id;
	displaypage($page,name);
	$(this).parent().addClass("active");
    });

    $("#teaching").on("click", function() {
	var name = $(this)[0].id;
	displaypage($page,name);
	$(this).parent().addClass("active");
    });
    
    $("#galleries").on("click", function() {
	var name = $(this)[0].id;
	displaypage($page,name);
	$(this).parent().addClass("active");
    });
    
    $("#links").on("click", function() {
	var name = $(this)[0].id;
	displaypage($page,name);
	$(this).parent().addClass("active");
    });

});
