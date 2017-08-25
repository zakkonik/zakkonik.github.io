// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(document).ready(function() {
	    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // jQuery to collapse the navbar on scroll //
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	    } else {
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	    }
	});

	new WOW ().init();
});

	var myMap;
	ymaps.ready(init);
	function init () {

	//Определяем начальные параметры карты
	myMap = new ymaps.Map('YMapsID', {
		center: [52.6102,39.5947], 
		zoom: 11
	});

	//Определяем элемент управления поиск по карте	
	var SearchControl = new ymaps.control.SearchControl({noPlacemark:true});	

	//Добавляем элементы управления на карту
	myMap.controls
		.add('zoomControl')
		// .add(SearchControl)              
		// .add('typeSelector')                 
		.add('mapTools');
	coords = [52.6102,39.5947];

	//Определяем метку и добавляем ее на карту				
	myPlacemark = new ymaps.Placemark([52.6102,39.5947],{}, {preset: "twirl#redIcon", draggable: true});
	myMap.geoObjects.add(myPlacemark);	
	}