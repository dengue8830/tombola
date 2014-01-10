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
  console.log('dao');
  //sort.id_sorteo, sort.nombre, sort.num, strftime('%d-%m-%Y %H:%M:%f',sort.fecha) as fecha, sort.lugar, sort.numeros
    db.transaction(function(tx) {
          tx.executeSql("select sort.* from sorteos as sort where strftime('%d/%m/%Y',sort.fecha) = ? order by sort.fecha asc",[fechaUtils_format(fecha, '/,dd-mm-yyyy')], function(tx, result){

            var dataset = result.rows;
            var items = new Array();

              for (var i = 0; i < dataset.length; i++) {
                items.push(dataset.item(i));
              }

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
            data:{fecha: fechaUtils_format(fecha, '-,dd-mm-yyyy')}, 
            dataType:'json', 
            error:function(jqXHR,text_status,strError){ 
                alert('No hay conexión.');}, 
                timeout:60000, 
            success: function (data){
              callBackOk.pop()(data, callBackOk, callbackError);
            }
        });
}