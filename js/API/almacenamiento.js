// Almacenamiento
function getBD(){
	var db = window.openDatabase("hotel", "1.0", "Hotel DB", 2000000);	
	return db;
}

function actualizarBD(rutas){
	getBD().transaction(function(tx){
			tx.executeSql('CREATE TABLE IF NOT EXISTS rutas (id unique, nombre)');
			ts.executeSql('INSERT INTO reservas (th, pr, ha, di) VALUES ("'+th+'","'+pr+'","'+ha+'","'+di+'")');
		},function(err){
			alert('Error: ' + err.code);
		}, function(){
			navigator.notification.alert('Esperando Conexión a Internet',null,'Datos Guardados','Aceptar');	
		})
}