function controller_mostrarSorteos_pintarSorteos(arrayDivs, arraySorteosVos){

	if(arraySorteosVos.length == 0 ){
		var unSorteoVo = new SorteoVO(0, 'La Primera', 0, null, 'Jujuy', null);
		arraySorteosVos.push(unSorteoVo);
		unSorteoVo = new SorteoVO(0, 'Matutina', 0, null, 'Salta', null);
		arraySorteosVos.push(unSorteoVo);
		unSorteoVo = new SorteoVO(0, 'Vespertina', 0, null, 'Tucumán', null);
		arraySorteosVos.push(unSorteoVo);
		unSorteoVo = new SorteoVO(0, 'Nocturna', 0, null, 'Cordoba', null);
		arraySorteosVos.push(unSorteoVo);

		for (var i = 0; i < arrayDivs.length; i++) {
			var element = arrayDivs[i];
			var unSorteo = arraySorteosVos[i];

			//Puede que haya que agregar un span, ver en el demo de collapsible set
			element.find('.ui-btn-text').text(unSorteo.nombre+' - '+unSorteo.lugar+' (vacío)');
	
       		element.find('div').children().remove();
       		element.find('div').append('<p>no hya datos para hoy</p>');
		}

		
		return;
	}

	for (var i = 0; i < arrayDivs.length; i++) {
		var element = arrayDivs[i];
		//$('#acordion').show();
		//$('#div_msj').hide();
		//if(element.children()[1]) console.log(element.children()[1].children);
		//element.children().remove();
		//element.trigger('refresh');
		//element.removeAttr( "class" );

		var unSorteo = arraySorteosVos[i];

		//element.append('<div data-role="collapsible">');
		//element.find('h3').remove();


		element.find('.ui-btn-text').text(unSorteo.nombre+' - '+unSorteo.lugar+' - '+fechaUtils_format(unSorteo.fecha, '/,dd-mm-yyyy'));//+' - '+fechaUtils_format(unSorteo.fecha, '/,dd-mm-yyyy')

		
		//element.append('<h3 >'+unSorteo.nombre+' - '+unSorteo.lugar+'</h3>').trigger("create");
		//element.find('h3').text(unSorteo.nombre+' - '+unSorteo.lugar).trigger('create');
		//element.append('<h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-icon-plus ui-btn-icon-left ui-btn-inherit">'+unSorteo.nombre+' - '+unSorteo.lugar+'<span class="ui-collapsible-heading-status"> click to expand contents</span></a></h3>');
        element.find('div').children().remove();
        element.find('div').append('<table width="180" border="0" cellspacing="0" cellpadding="0" style="layout: fixed">'
	+'<tbody>'
		+'<tr>'
			+'<td class="lot_No">Nº</td>'
			+'<td colspan="4" bgcolor="#9E473D" class="lot_tit">'+unSorteo.nombre+'<br>'+unSorteo.lugar+' ('+unSorteo.hora()+' Hs.)</td>'
		+'</tr>'
		+'<tr>'
			+'<td colspan="4" height="4"><img src="img/logo.png" width="4" height="4"></td>'
		+'</tr>'
		+'<tr>'
			+'<td bgcolor="#9E473D" class="lot_n1">1</td>'
			+'<td class="lot_dat0">'+unSorteo.numeros[0]+'</td>'
			+'<td width="4">&nbsp;</td>'
			+'<td class="lot_nyl">11</td>'
			+'<td class="lot_dat0">'+unSorteo.numeros[10]+'</td>'
		+'</tr>'
		+'<tr>'
			+'<td class="lot_nyl">2</td>'
			+'<td class="lot_dat1">'+unSorteo.numeros[1]+'</td>'
			+'<td width="4">&nbsp;</td>'
			+'<td class="lot_nyl">12</td>'
			+'<td class="lot_dat1">'+unSorteo.numeros[11]+'</td>'
		+'</tr>'
		+'<tr>'
			+'<td class="lot_nyl">3</td>'
			+'<td class="lot_dat0">'+unSorteo.numeros[2]+'</td>'
			+'<td width="4">&nbsp;</td>'
			+'<td class="lot_nyl">13</td>'
			+'<td class="lot_dat0">'+unSorteo.numeros[12]+'</td>'
		+'</tr>'
		+'<tr>'
			+'<td class="lot_nyl">4</td>'
			+'<td class="lot_dat1">'+unSorteo.numeros[3]+'</td>'
			+'<td width="4">&nbsp;</td>'
			+'<td class="lot_nyl">14</td>'
			+'<td class="lot_dat1">'+unSorteo.numeros[13]+'</td>'
		+'</tr>'
		+'<tr>'
			+'<td class="lot_nyl">5</td>'
			+'<td class="lot_dat0">'+unSorteo.numeros[4]+'</td>'
			+'<td width="4">&nbsp;</td>'
			+'<td class="lot_nyl">15</td>'
			+'<td class="lot_dat0">'+unSorteo.numeros[14]+'</td>'
		+'</tr>'
		+'<tr>'
			+'<td class="lot_nyl">6</td>'
			+'<td class="lot_dat1">'+unSorteo.numeros[5]+'</td>'
			+'<td width="4">&nbsp;</td>'
			+'<td class="lot_nyl">16</td>'
			+'<td class="lot_dat1">'+unSorteo.numeros[15]+'</td>'
		+'</tr>'
		+'<tr>'
			+'<td class="lot_nyl">7</td>'
			+'<td class="lot_dat0">'+unSorteo.numeros[6]+'</td>'
			+'<td width="4">&nbsp;</td>'
			+'<td class="lot_nyl">17</td>'
			+'<td class="lot_dat0">'+unSorteo.numeros[16]+'</td>'
		+'</tr>'
		+'<tr>'
			+'<td class="lot_nyl">8</td>'
			+'<td class="lot_dat1">'+unSorteo.numeros[7]+'</td>'
			+'<td width="4">&nbsp;</td>'
			+'<td class="lot_nyl">18</td>'
			+'<td class="lot_dat1">'+unSorteo.numeros[17]+'</td>'
		+'</tr>'
		+'<tr>'
			+'<td class="lot_nyl">9</td>'
			+'<td class="lot_dat0">'+unSorteo.numeros[8]+'</td>'
			+'<td width="4">&nbsp;</td>'
			+'<td class="lot_nyl">19</td>'
			+'<td class="lot_dat0">'+unSorteo.numeros[18]+'</td>'
		+'</tr>'
		+'<tr>'
			+'<td class="lot_nyl">10</td>'
			+'<td class="lot_dat1">'+unSorteo.numeros[9]+'</td>'
			+'<td width="4">&nbsp;</td>'
			+'<td class="lot_nyl">20</td>'
			+'<td class="lot_dat1">'+unSorteo.numeros[19]+'</td>'
		+'</tr>'
	+'</tbody>'
+'</table>').trigger("create");


}
//$('#acordion').removeAttr( "class" );
//$('#acordion').collapsibleset().trigger('create');
//$('#acordion').collapsibleset( "create" );
//$('#acordion').trigger('create');
//$( ".folders" ).collapsibleset().trigger('create');
//$('#acordion').children().trigger( "collapse" );
//$('#acordion').collapsibleset( "refresh" );
//$('#contenedor').removeAttr( "class" );
//$('#contenedor').trigger('create');

//$('#page').trigger('create');
//$('page').page();
//$('page').trigger('create');
//$.mobile.loadPage( "../tombola_repo/index.html");

}

function controller_mostrarSorteos_modificarFecha(nuevaFecha){

	if(nuevaFecha instanceof Date){
		fechaNavegacion = nuevaFecha;
	}else{
		if(nuevaFecha == 'mas'){

			if(fechaUtils_compararFechasByCampos(fechaNavegacion, fechaHoy, 'd-m-y'))
				return false;

			fechaNavegacion.setDate(fechaNavegacion.getDate()+1);
		}else{
			fechaNavegacion.setDate(fechaNavegacion.getDate()-1);
		}
	}

	//$('#calendario').text(fechaUtils_format(fechaNavegacion, '/,dd-mm-yyyy'));
	$('#calendario').find('.ui-btn-text').text(fechaUtils_format(fechaNavegacion, '/,dd-mm-yyyy'));
	//$('#calendario').find('.ui-btn-text').append('<img title="calendario" src="/tombola_repo/css/images/icons-png/calendar-black.png"  border="0">');

	//var pila = new Array();
	//pila.push(controller_mostrarSorteos_pintarSorteos);

	tombolaService_getSorteosByFecha(fechaNavegacion, null, connection_error);
	//var sorteos = tombolaService_getSorteosByFecha(fecha);
	//controller_mostrarSorteos_pintarSorteos(arrayDivsTablas, sorteos);

}