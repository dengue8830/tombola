//Sorteos

/*var insert_sorteos_1_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (1, "La Primera", 5732, "2014-01-07 11:30:00.000", "Jujuy", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_2_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (2, "Matutina", 4532, "2014-01-07 12:30:00.000", "Salta", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_3_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (3, "Vespertina", 1342, "2014-01-07 20:30:00.000", "Tucumán", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_4_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (4, "Nocturna", 2332, "2014-01-07 21:30:00.000", "Cordoba", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';

var insert_sorteos_5_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (5, "La Primera", 7732, "2014-01-06 11:30:00.000", "Jujuy", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_6_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (6, "Matutina", 4532, "2014-01-06 12:30:00.000", "Salta", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_7_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (7, "Vespertina", 2342, "2014-01-06 20:30:00.000", "Tucumán", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_8_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (8, "Nocturna", 6732, "2014-01-06 21:30:00.000", "Cordoba", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';*/


function connection_createTables(callbackOk, callbackError) { 
    //var createtable_contador_sql ='CREATE TABLE IF NOT EXISTS contador (id_contador INTEGER PRIMARY KEY AUTOINCREMENT,fecha TEXT, cantidad INTEGER)';
    var createtable_sorteos_sql ='CREATE TABLE IF NOT EXISTS sorteos (id_sorteo INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, num INTEGER, fecha TEXT, lugar TEXT, numeros TEXT)';
    
    var createtable_agencias_sql ='CREATE TABLE IF NOT EXISTS agencias (id_agencia INTEGER PRIMARY KEY AUTOINCREMENT, id_localidad NUMBER, localidad TEXT, domicilio TEXT, barrio TEXT, telefono TEXT)';
    
    var insert_agencia_1_sql = 'INSERT OR REPLACE INTO agencias (id_agencia, id_localidad, localidad, domicilio, barrio, telefono) VALUES (1, 1, "San Salvador", "Nechochea Nº 217", "Centro", "0388-4228179")';
    var insert_agencia_2_sql = 'INSERT OR REPLACE INTO agencias (id_agencia, id_localidad, localidad, domicilio, barrio, telefono) VALUES (2, 1, "San Salvador", "Belgrano Nº 818", "Centro", "0388-4223136")';
    var insert_agencia_3_sql = 'INSERT OR REPLACE INTO agencias (id_agencia, id_localidad, localidad, domicilio, barrio, telefono) VALUES (3, 2, "San Pedro", "Formosa Nº 237", "Falso", "0388-4212123")';
    
    /*ejecutar(createtable_agencias_sql, null, connection_error);
    ejecutar(insert_agencia_1_sql, null, connection_error);
    ejecutar(insert_agencia_2_sql, null, connection_error);
    ejecutar(insert_agencia_3_sql, null, connection_error);*/
    ejecutar(createtable_sorteos_sql, function(){controller_mostrarSorteos_modificarFecha(fechaNavegacion);}, connection_error);
}

function ejecutar(sql, callBackOk, callBackError){
	db.transaction(function(tx) {
        tx.executeSql(sql,
          [], callBackOk, callBackError);
    });
}

function connection_error(tx, error){
    alert(error.message);
}

function connection_cargarBD(callBackOk, callBackError){
    ejecutar('select 1 from sorteos', callBackOk, callBackError);
}