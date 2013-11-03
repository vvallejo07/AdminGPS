//Eventos
$(document).ready(function(){
	
		//Sincronizar
		$('#sinc').tap(function(){
			obtenerRutas("http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo");
		});
		
		$('#datos').tap(function(){
			llenarRutas();
		});
		
		$('#bdRuta').change(function(){
			alert($( "#bdRuta option:selected" ).text());
		});
});