function tombolaService_getSorteosDiezDias(fechaSorteo){
	var sorteosVOs = new Array();
	var fechaTemp = utils_clone(fechaSorteo);
	var numeros = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

	var temp = 1;
	var otroTemp = 3694;

	for (var i = 0; i < 10; i++) {
		var sorteoUno = new SorteoVO(temp++, "Matutina", otroTemp, fechaTemp, 'Jujuy', numeros);
		sorteosVOs.push(sorteoUno);

		otroTemp += 100;
		var sorteoDos = new SorteoVO(temp++, "Vespertina", otroTemp, fechaTemp, 'Salta', numeros);
		sorteosVOs.push(sorteoDos);

		otroTemp += 100;
		var sorteoTres = new SorteoVO(temp++, "Tres", otroTemp, fechaTemp, 'Tucuman', numeros);
		sorteosVOs.push(sorteoTres);

		otroTemp += 100;
		var sorteoCuatro = new SorteoVO(temp++, "Cuatro", otroTemp, fechaTemp, 'Cordoba', numeros);
		sorteosVOs.push(sorteoCuatro);

		otroTemp += 100;

		fechaTemp = utils_clone(fechaTemp);
		//fecha = new Date();
		fechaTemp.setDate(fechaTemp.getDate()-1);
	};

	return sorteosVOs;
}

function tombolaService_getSorteosByFecha(fechaSorteo){
	console.log('ahora aqui');
	var sorteosVOs = tombolaService_getSorteosDiezDias(fechaSorteo);
	var values = new Array();

	for (var i = 0; i < sorteosVOs.length; i++) {
		var unSorteo = sorteosVOs[i];
		if(fechaSorteo.getDate == unSorteo.fecha.getDate && fechaSorteo.getMonth == unSorteo.fecha.getMonth && fechaSorteo.getYear == unSorteo.fecha.getYear){
			values.push(unSorteo);
		}
	}

	return values;
}