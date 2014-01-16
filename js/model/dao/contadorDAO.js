function contadorDAO_getContador(){
	db.transaction(function(tx) {
          tx.executeSql("select cont.* from contador as cont",[], function(tx, result){

            var dataset = result.rows;
            contador = {};

              for (var i = 0; i < dataset.length; i++) {
                contador[dataset.item(i).fecha] = dataset.item(i).cantidad;
              }

            //callBackOk.pop()(items, callBackOk, callbackError); 
            //console.log('logrado offline');
            console.log('contador, '+contador);
            controller_mostrarSorteos_modificarFecha(fechaNavegacion);
            
          }, function (tx, error){
            alert(error.message);
          });

        });
}