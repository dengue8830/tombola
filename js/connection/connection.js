//Cabalas
/*var createtable_cabalas_sql = 'CREATE TABLE IF NOT EXISTS cabalas '
          	+'(id_cabala INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, descripcion TEXT)';

var createtable_detalle_cabala_sql ='CREATE TABLE IF NOT EXISTS detalle_cabala '
          	+'(id_detalle_cabala INTEGER PRIMARY KEY AUTOINCREMENT,id_cabala INTEGER, clave TEXT, valor TEXT)';

var insert_cabala_suenios_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (1, "Sueños", "Asocia sueños con numeros")';
var insert_cabala_fechas_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (2, "Fechas", "Asocia fechas con numeros")';
var insert_cabala_nombres_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (3, "Nombres", "Asocia nombres con numeros")';
var insert_cabala_oficios_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (4, "Oficios", "Asocia oficios con numeros")';
var insert_cabala_sensaciones_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (5, "Sensaciones", "Asocia sensaciones con numeros")';
var insert_cabala_flores_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (6, "Flores", "Asocia flores con numeros")';
var insert_cabala_animales_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (7, "Animales", "Asocia animales con numeros")';*/

//Sorteos
var createtable_sorteos_sql ='CREATE TABLE IF NOT EXISTS sorteos (id_sorteo INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, num INTEGER, fecha TEXT, lugar TEXT, numeros TEXT)';
var insert_sorteos_1_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (1, "La Primera", 5732, "2014-01-07 11:30:00.000", "Jujuy", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_2_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (2, "Matutina", 4532, "2014-01-07 12:30:00.000", "Salta", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_3_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (3, "Vespertina", 1342, "2014-01-07 20:30:00.000", "Tucumán", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_4_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (4, "Nocturna", 2332, "2014-01-07 21:30:00.000", "Cordoba", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';

var insert_sorteos_5_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (5, "La Primera", 7732, "2014-01-06 11:30:00.000", "Jujuy", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_6_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (6, "Matutina", 4532, "2014-01-06 12:30:00.000", "Salta", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_7_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (7, "Vespertina", 2342, "2014-01-06 20:30:00.000", "Tucumán", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';
var insert_sorteos_8_sql = 'INSERT OR REPLACE INTO sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) VALUES (8, "Nocturna", 6732, "2014-01-06 21:30:00.000", "Cordoba", "2112,4512,3463,4254,5675,2346,2687,8758,5789,8510,4511,3212,2113,1214,4515,7816,1877,6418,9019,2320")';

var createtable_contador_sql ='CREATE TABLE IF NOT EXISTS contador '
            +'(id_contador INTEGER PRIMARY KEY AUTOINCREMENT,fecha TEXT, cantidad INTEGER)';

/*var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 1, "00", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 2, "01", "AGUA")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 3, "02", "NIÑO")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 4, "03", "SAN CONO")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 5, "04", "LA CAMA")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 6, "05", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 7, "06", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 8, "07", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 9, "08", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 10, "09", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 11, "10", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 12, "11", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 13, "12", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 14, "13", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 15, "14", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 16, "15", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 17, "16", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 18, "17", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 19, "18", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 21, "19", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 22, "20", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 23, "21", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 24, "22", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 25, "23", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 26, "24", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 27, "25", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 28, "26", "HUEVOS")';
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 29, "27", "HUEVOS")';*/


function connection_createTables(callbackOk, callbackError) { 


  ejecutar(createtable_sorteos_sql, function(){controller_mostrarSorteos_modificarFecha(fechaNavegacion);}, connection_error);

  /*db.transaction(function(tx) {
        tx.executeSql(createtable_sorteos_sql,
          [], function(tx, result){
            controller_mostrarSorteos_modificarFecha(fechaNavegacion);
          }, function(tx, error){
            alert(error.message);
          });
    });*/
}

function ejecutar(sql, callBackOk, callBackError){
  //if(!callBackOk)
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