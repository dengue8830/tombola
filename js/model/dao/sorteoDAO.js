/*function sorteoDao_getByFecha_offline(fecha, callBackOk, callbackError){
  console.log('dao');
    db.transaction(function(tx) {
          tx.executeSql("select sort.* from sorteos as sort where strftime('%d/%m/%Y',sort.fecha) = ? order by sort.fecha asc",[fechaUtils_format(fecha, '/,dd-mm-yyyy')], function(tx, result){

            var dataset = result.rows;
            var items = new Array();

              for (var i = 0; i < dataset.length; i++) {
                items.push(dataset.item(i));
              }
//console.log(callBackOk.pop());
          callBackOk.pop()(items, callBackOk, callbackError); 
            
          }, function (tx, error){
            alert(error.message);
          });

        });
}

function sorteoDao_getByFecha_online(fecha, callBackOk, callbackError){
  $.ajax({ 
            url: URL,
            type:'POST', 
            data:{fecha: fechaUtils_format(fechaSorteo, '-,dd-mm-yyyy')}, 
            dataType:'json', 
            error:function(jqXHR,text_status,strError){ 
                alert('No hay conexión.');}, 
                timeout:60000, 
            success:function(data){ 
                $.each(data, function( index, item ) {
                  //console.log(fechaUtils_getDate(item.fecha));
                 item.numeros = item.numeros.split(',');
                 item.fecha = fechaUtils_getDate(item.fecha);
                 item.hora = function(){
                  return this.fecha.getHours()+":"+this.fecha.getMinutes(); 
                };
        });

                callBackOk(arrayDivsTablas, data);
            } 
        });
}*/

function sorteoDao_getByFecha_offline(fecha, callBackOk, callbackError){
  console.log('intentando offline');
  //sort.id_sorteo, sort.nombre, sort.num, strftime('%d-%m-%Y %H:%M:%f',sort.fecha) as fecha, sort.lugar, sort.numeros
    db.transaction(function(tx) {
          tx.executeSql("select sort.* from sorteos as sort where strftime('%d/%m/%Y',sort.fecha) = ? order by sort.fecha asc",[fechaUtils_format(fecha, '/,dd-mm-yyyy')], function(tx, result){

            var dataset = result.rows;
            var items = new Array();

            for (var i = 0; i < dataset.length; i++) {
              items.push(dataset.item(i));
            }

            //callBackOk.pop()(items, callBackOk, callbackError);
            console.log('logrado offline');
            $('#div_msj').show();
            console.log(fechaUtils_format(fecha, '/,dd-mm-yyyy')+': '+dataset.length);
            tombola_service_prepararSorteos(items);
            
          }, function (tx, error){
            alert(error.message);
          });

        });
}

function sorteoDao_getByFecha_online(fecha, callBackOk, callbackError){
  console.log('intentando online...');

/*  $('#div_msj').show();
                console.log('error en el online...');
                sorteoDao_getByFecha_offline(fecha);*/

  $.ajax({ 
            url: URL,
            type:'POST', 
            data:{fecha: fechaUtils_format(fecha, '-,dd-mm-yyyy')}, 
            dataType:'json', 
            error:function(jqXHR,text_status,strError){ 
                $('#div_msj').show();
                console.log('error en el online...');
                sorteoDao_getByFecha_offline(fecha);
              }, 
            timeout:60000, 
            success: function (data){
                //callBackOk.pop()(data, callBackOk, callbackError);
                console.log('logrado online');
                $('#div_msj').hide();

                if(tombolaService_getCantidadSorteosByFecha(fecha) == data.length){
                  console.log('la cantidad de datos es la misma en local que en online');
                  //Hay retraso o algo paso que no se cargo el ultimo sorteo en online y no hay nada que actualizar localmente
                  tombola_service_prepararSorteos(data);
                }else{
                  //Actualizacion del localStorage
                  console.log('actualizando localStorage');
                  localStorage.setItem(fechaUtils_format(fecha, '/,dd-mm-yyyy'), data.length.toString());
                  //Actualizacion de la tabla
                  insertOrUpdateSorteos(data);
                }

                tombola_service_prepararSorteos(data);
              }
        });
}

function insertOrUpdateSorteos(data){
  db.transaction(function(tx) {
    $.each(data, function( i, item ) {
      fechaUtils_getDate(item.fecha)
      tx.executeSql('insert or ignore into sorteos (id_sorteo, nombre, num, fecha, lugar, numeros) values (?, ?, ?, ?, ?, ?) ', [item.id_sorteo, item.nombre, item.num, fechaUtils_getFromatedDateYYYYMMDDbyFechaString(item.fecha), item.lugar, item.numeros], null, connection_error);
    });
  });
}