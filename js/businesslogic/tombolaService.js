function tombolaService_getSorteosDiezDias(){
	var sorteosVOs = new Array();
	var fecha = new Date();
	var numeros = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

	var temp = 1;
	var otroTemp = 3694;

	for (var i = 0; i < 10; i++) {
		var sorteoUno = new SorteoVO(temp++, "Matutina", otroTemp, fecha, 'Jujuy', numeros);
		sorteosVOs.push(sorteoUno);

		otroTemp += 100;
		var sorteoDos = new SorteoVO(temp++, "Vespertina", otroTemp, fecha, 'Salta', numeros);
		sorteosVOs.push(sorteoDos);

		otroTemp += 100;
		var sorteoTres = new SorteoVO(temp++, "Tres", otroTemp, fecha, 'Tucuman', numeros);
		sorteosVOs.push(sorteoTres);

		otroTemp += 100;
		var sorteoCuatro = new SorteoVO(temp++, "Cuatro", otroTemp, fecha, 'Cordoba', numeros);
		sorteosVOs.push(sorteoCuatro);

		otroTemp += 100;

		fecha = utils_clone(fecha);
		//fecha = new Date();
		fecha.setDate(fecha.getDate()-1);
	};

	return sorteosVOs;
}