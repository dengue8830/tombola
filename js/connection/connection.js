var createtable_cabalas_sql = 'CREATE TABLE IF NOT EXISTS cabalas '
          	+'(id_cabala INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, descripcion TEXT)';

var createtable_detalle_cabala_sql ='CREATE TABLE IF NOT EXISTS detalle_cabala '
          	+'(id_detalle_cabala INTEGER PRIMARY KEY AUTOINCREMENT,id_cabala INTEGER, clave TEXT, valor TEXT)';

var createtable_sorteos_sql ='CREATE TABLE IF NOT EXISTS sorteos (id_sorteo INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, fecha TEXT, lugar TEXT, num INTEGER, numeros TEXT)';

var insert_cabala_suenios_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (1, "Sueños", "Asocia sueños con numeros")';
var insert_cabala_fechas_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (2, "Fechas", "Asocia fechas con numeros")';
var insert_cabala_nombres_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (3, "Nombres", "Asocia nombres con numeros")';
var insert_cabala_oficios_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (4, "Oficios", "Asocia oficios con numeros")';
var insert_cabala_sensaciones_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (5, "Sensaciones", "Asocia sensaciones con numeros")';
var insert_cabala_flores_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (6, "Flores", "Asocia flores con numeros")';
var insert_cabala_animales_sql = 'INSERT OR REPLACE INTO cabalas (id_cabala, nombre, descripcion) VALUES (7, "Animales", "Asocia animales con numeros")';

var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 1, "00", "HUEVOS")';
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
var insert_detalle_cabala_sql = 'INSERT OR REPLACE INTO detalle_cabala (id_detalle_cabala, id_cabala, clave, valor) VALUES (1, 29, "27", "HUEVOS")';

var insert_activo_sql = 'INSERT OR REPLACE INTO estados (id_estado, descripcion) VALUES (2, "Activo")';
var insert_inactivo_sql = 'INSERT OR REPLACE INTO estados (id_estado, descripcion) VALUES (3, "Inactivo")';

var createtable_sifones_sql ='CREATE TABLE IF NOT EXISTS sifones (id_sifon INTEGER PRIMARY KEY AUTOINCREMENT, tipo INTEGER, descripcion TEXT, modelo TEXT, stock INTEGER, precio REAL, estado TEXT)';
var insert_vidrio_sql = 'INSERT OR REPLACE INTO sifones (id_sifon, tipo, descripcion, modelo, stock, precio, estado) VALUES (1, 1, "Vidrio", "barroco", 40, 2.5, "ok")';
var insert_plasitco_sql = 'INSERT OR REPLACE INTO sifones (id_sifon, tipo, descripcion, modelo, stock, precio, estado) VALUES (2, 2, "Plastico", "renacimiento", 20, 3.6, "ok")';
var insert_malla_sql = 'INSERT OR REPLACE INTO sifones (id_sifon, tipo, descripcion, modelo, stock, precio, estado) VALUES (3, 3, "Malla", "revolucion", 45, 2.3, "ok")';

var createtable_ventas_sql ='CREATE TABLE IF NOT EXISTS ventas (id_venta INTEGER PRIMARY KEY AUTOINCREMENT, id_cliente INTEGER, fecha_vendido TEXT, monto_total REAL, cancelado INTEGER)';
var createtable_detalleVentas_sql ='CREATE TABLE IF NOT EXISTS detalle_ventas (id_detalle_venta INTEGER PRIMARY KEY AUTOINCREMENT, id_venta INTEGER, id_sifon INTEGER, cantidad INTEGER, monto REAL)';
var createtable_pagos_sql ='CREATE TABLE IF NOT EXISTS pagos (id_pago INTEGER PRIMARY KEY AUTOINCREMENT, id_venta INTEGER, monto REAL, fecha_pago TEXT)';

var createtable_pruebas_sql ='CREATE TABLE IF NOT EXISTS pruebas (id_prueba INTEGER PRIMARY KEY AUTOINCREMENT, descripcion TEXT, fecha TEXT)';


var createtable_visitas_sql ='CREATE TABLE IF NOT EXISTS visitas (id_visita INTEGER PRIMARY KEY AUTOINCREMENT, id_cliente INTEGER, fecha_visitado TEXT)';

var createtable_recorridos_sql='CREATE TABLE IF NOT EXISTS recorridos (id_recorrido INTEGER PRIMARY KEY AUTOINCREMENT, id_calendario INTEGER, id_barrio INTEGER)';


function connection_createTables(callbackOk, callbackError) { 
/*	var callbackOkInactivo = createTableClientes(callbackOk, callbackError);
	var callbackOkActivo = insertEstadosInicialesInactivo(callbackOkInactivo, callbackError);
	var callbackOkMoroso = insertEstadosInicialesActivo(callbackOkActivo, callbackError);
	var callbackOkEstado = insertEstadosInicialesMoroso(callbackOkMoroso, callbackError);*/

	/*var callbackOkActivo = insertEstadosInicialesInactivo(callbackOk, callbackError);
	var callbackOkMoroso = insertEstadosInicialesActivo(callbackOkActivo, callbackError);
	var callbackOkClientes = insertEstadosInicialesMoroso(callbackOkMoroso, callbackError);
	var callbackOkEstado = createTableClientes(callbackOkClientes, callbackError);*/
	
	/*createTableEstados(null, null);
	insertEstadosInicialesMoroso(null, null);
	insertEstadosInicialesActivo(null, null);
	insertEstadosInicialesInactivo(null, null);
	createTableClientes(null, null);*/

	ejecutar(createtable_estados_sql);
	ejecutar(insert_moroso_sql);
	ejecutar(insert_activo_sql);
	ejecutar(insert_inactivo_sql);
	ejecutar(createtable_clientes_sql);
  ejecutar(createtable_barrios_sql);
  ejecutar(createtable_calendarios_sql);
  ejecutar(createtable_calendarios_barrios_clientes_sql);

  ejecutar(createtable_sifones_sql);
  ejecutar(insert_vidrio_sql);
  ejecutar(insert_plasitco_sql);
  ejecutar(insert_malla_sql);

  ejecutar(createtable_ventas_sql);
  ejecutar(createtable_detalleVentas_sql);
  ejecutar(createtable_pagos_sql);
  ejecutar(createtable_recorridos_sql);

  ejecutar(createtable_visitas_sql);

  ejecutar(createtable_pruebas_sql);


}

function ejecutar(sql){
	db.transaction(function(tx) {
        tx.executeSql(sql,
          [], null, connection_error);
    });
}

//CREATE TABLE IF NOT EXISTS clientes (id_cliente INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, apellido TEXT, id_barrio INTEGER NOT NULL, saldo TEXT, estado INTEGER, direccion TEXT)
//CREATE TABLE IF NOT EXISTS estados (id_estado INTEGER PRIMARY KEY AUTOINCREMENT, descripcion TEXT)
//CREATE TABLE IF NOT EXISTS barrios (id_barrio INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, descripcion TEXT)
//CREATE TABLE IF NOT EXISTS calendarios (id_calendario INTEGER PRIMARY KEY AUTOINCREMENT, dia INTEGER, turno INTEGER)
//CREATE TABLE IF NOT EXISTS calendarios_barrios_clientes (id_calendario_barrio_cliente INTEGER PRIMARY KEY AUTOINCREMENT, id_calendario INTEGER, id_barrio INTEGER, id_cliente INTEGER)

/*
//SQL que devuelve los clientes con su estado y su barrio en funcion del dia y turno
select
         cli.*,

         est.id_estado as id_estado_Testado, est.descripcion as descripcion_Testado,

         barr.id_barrio as id_barrio_Tbarrio, barr.nombre as nombre_Tbarrio, barr.descripcion as descripcion_Tbarrio
from 
        clientes cli, estados est, barrios barr
where
        (cli.estado = est.id_estado and cli.id_barrio = barr.id_barrio)
  and
        (cli.id_cliente in 
          (
            select 
              tea_cal_barr_cli.id_cliente
            from
              calendarios_barrios_clientes tea_cal_barr_cli
            where 
              tea_cal_barr_cli.id_calendario = (select cal2.id_calendario from calendarios cal2 where cal2.dia = "Lunes" and cal2.turno = "Mañana")
          )
        )*/

/*
//SQL que da tambien el calendario
select
         cli.*,

         est.id_estado as id_estado_Testado, est.descripcion as descripcion_Testado,

         barr.id_barrio as id_barrio_Tbarrio, barr.nombre as nombre_Tbarrio, barr.descripcion as descripcion_Tbarrio

          ,tea2.id_calendario
from 
        clientes cli, estados est, barrios barr, calendarios_barrios_clientes tea2, calendarios cal2

where tea2.id_cliente = cli.id_cliente and tea2.id_barrio = barr.id_barrio and tea2.id_calendario = cal2.id_calendario and
        (cli.estado = est.id_estado and cli.id_barrio = barr.id_barrio)
  and
        (cli.id_cliente in 
          (
            select tea_cal_barr_cli.id_cliente from calendarios_barrios_clientes tea_cal_barr_cli
            where tea_cal_barr_cli.id_calendario = (select cal2.id_calendario from calendarios cal2 where cal2.dia = "Lunes" and cal2.turno = "Mañana")
          )
        )*/

/*function getAllEstados(){
	db.transaction(function(tx) {
        tx.executeSql('select * from estados where id_estado = '+as,
          [], function(tx, result){
          	var dataset = result.rows;
          	var item= null;
          	for (var i = 0; i < dataset.length; i++) {
          		item = dataset.item(i);
          		var unEstado = new EstadoVO(item.id_estado, item.descripcion);
          		estados.push(unEstado);
          	}
          	as = 'ok';
          }, connection_error);
    });	
}*/
/*function createTableClientes(callbackOk, callbackError){
	db.transaction(function(tx) {
        tx.executeSql(createtable_clientes_sql,
          [], callbackOk, callbackError);
    });
}

function createTableEstados(callbackOk, callbackError){
	db.transaction(function(tx) {
        tx.executeSql(createtable_estados_sql,
          [], callbackOk, callbackError);
    });
}

function insertEstadosInicialesMoroso(callbackOk, callbackError){
	db.transaction(function(tx) {
        tx.executeSql("INSERT OR REPLACE INTO estados (id_estado, descripcion) VALUES (?, ?)", [1, "Moroso"], callbackOk, callbackError);
    });
}

function insertEstadosInicialesActivo(callbackOk, callbackError){
	db.transaction(function(tx) {
        tx.executeSql("INSERT OR REPLACE INTO estados (id_estado, descripcion) VALUES (?, ?)", [2, "Activo"], callbackOk, callbackError);
    });
}

function insertEstadosInicialesInactivo(callbackOk, callbackError){
	db.transaction(function(tx) {
        tx.executeSql("INSERT OR REPLACE INTO estados (id_estado, descripcion) VALUES (?, ?)", [3, "Inactivo"], callbackOk, callbackError);
    });
}*/

function connection_error(tx, error){
        alert(error.message);
      }