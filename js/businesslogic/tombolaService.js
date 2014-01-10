function tombolaService_getSorteosDiezDias(fechaSorteo){
	var sorteosVOs = new Array();
	var fechaTemp = utils_clone(fechaSorteo);
	var numeros = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

	var temp = 1;
	var otroTemp = 3694;

	for (var i = 0; i < 10; i++) {
		var sorteoUno = new SorteoVO(temp++, "La Primera", otroTemp, fechaTemp, 'Jujuy', numeros);
		sorteosVOs.push(sorteoUno);

		otroTemp += 100;
		var sorteoDos = new SorteoVO(temp++, "Matutina", otroTemp, fechaTemp, 'Salta', numeros);
		sorteosVOs.push(sorteoDos);

		otroTemp += 100;
		var sorteoTres = new SorteoVO(temp++, "Vespertina", otroTemp, fechaTemp, 'Tucuman', numeros);
		sorteosVOs.push(sorteoTres);

		otroTemp += 100;
		var sorteoCuatro = new SorteoVO(temp++, "Nocturna", otroTemp, fechaTemp, 'Cordoba', numeros);
		sorteosVOs.push(sorteoCuatro);

		otroTemp += 100;

		fechaTemp = utils_clone(fechaTemp);
		//fecha = new Date();
		fechaTemp.setDate(fechaTemp.getDate()-1);
	};

	return sorteosVOs;
}

function tombolaService_getSorteosByFecha(fechaSorteo, callBackOk, callbackError){

	//if(ONLINE){
		console.log('intentando online...');

		//callBackOk.push(prepararSorteos);
		sorteoDao_getByFecha_online(fechaSorteo);
	/*}else{
		console.log('offline');
		
		callBackOk.push(prepararSorteos);
		sorteoDao_getByFecha_offline(fechaSorteo, callBackOk, callbackError);
	}*/
}

function prepararSorteos(data, callBackOk, callbackError){
    var sorteos = new Array();

	$.each(data, function( i, item ) {
		//console.log(fechaUtils_format(unSorteo.fecha, '/,dd-mm-yyyy'));
                	//console.log(fechaUtils_getDate(item.fecha));
          	  	var unSorteoVo = new SorteoVO(item.id_sorteo, item.nombre, item.num, fechaUtils_getDate(item.fecha), item.lugar, item.numeros.split(','));
          	  	
          	  	sorteos.push(unSorteoVo);
	});

	//callBackOk.pop()(arrayDivsTablas, sorteos); 
	controller_mostrarSorteos_pintarSorteos(arrayDivsTablas, sorteos); 
}

/*function tombolaService_getSorteosByFecha(fechaSorteo, callBackOk, callbackError){

	if(ONLINE){
		console.log('online');
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

                callBackOk.pop()(arrayDivsTablas, data);
            } 
        });
		callBackOk.push(prueba);
		sorteoDao_getByFecha_online(fechaSorteo, callBackOk, callbackError);
	}else{
		console.log('offline');
		//console.log(fechaUtils_getFromatedDateYYYYMMDD(fechaSorteo)+' 11:30:0.000');
		db.transaction(function(tx) {
          tx.executeSql("select sort.* from sorteos as sort where strftime('%d/%m/%Y',sort.fecha) = ? order by sort.fecha asc",[fechaUtils_format(fechaSorteo, '/,dd-mm-yyyy')], function(tx, result){

          	var dataset = result.rows;
          	var sorteos = new Array();

          	  for (var i = 0; i < dataset.length; i++) {
          	  	var item = dataset.item(i);

          	  	var unSorteoVo = new SorteoVO(item.id_sorteo, item.nombre, item.num, fechaUtils_getDate(item.fecha), item.lugar, item.numeros.split(','));
          	  	
          	  	sorteos.push(unSorteoVo);
          	  }

        	callBackOk.pop()(arrayDivsTablas, sorteos);	
          	
          }, function (tx, error){
          	alert(error.message);
          });

        });
		callBackOk.push(prueba);

		sorteoDao_getByFecha_offline(fechaSorteo, callBackOk, callbackError);
	}
}*/