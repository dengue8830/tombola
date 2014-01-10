function controller_mostrarSorteos_pintarSorteos(arrayDivs, arraySorteosVos){
	//var arraySorteosVos = tombolaService_getSorteosDiezDias();
	if(arraySorteosVos.length == 0 ){
		/*for (var i = 0; i < arrayDivs.length; i++) {
			arrayDivs[i].hide();
		}*/
		$('#acordion').hide();
		/*var e = document.getElementById('div_msj');
		if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';*/
       $('#div_msj').show();
		//$('#div_msj').attr('style.display ', 'block');
		//document.getElementById('div_msj').style.display = 'block';
		//$('#div_msj').append('<p>No hay resultados para este día</p>');
		
		return;
	}

	for (var i = 0; i < arrayDivs.length; i++) {
		var element = arrayDivs[i];
		$('#acordion').show();
		$('#div_msj').hide();
		//if(element.children()[1]) console.log(element.children()[1].children);
		//element.children().remove();
		//element.trigger('refresh');
		//element.removeAttr( "class" );

		var unSorteo = arraySorteosVos[i];

		//element.append('<div data-role="collapsible">');
		//element.find('h3').remove();

		if(element.find('h3').text() == ''){
			element.find('h3').text(unSorteo.nombre+' - '+unSorteo.lugar);//+' - '+fechaUtils_format(unSorteo.fecha, '/,dd-mm-yyyy')
		}else{
			element.find('.ui-btn-inherit').text(unSorteo.nombre+' - '+unSorteo.lugar+' - '+fechaUtils_format(unSorteo.fecha, '/,dd-mm-yyyy'));//+' - '+fechaUtils_format(unSorteo.fecha, '/,dd-mm-yyyy')
		}
		
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
		fecha = nuevaFecha;
	}else{
		if(nuevaFecha == 'mas'){
			fecha.setDate(fecha.getDate()+1);
		}else{
			fecha.setDate(fecha.getDate()-1);
		}
	}
	//fecha.setDate(fecha.getDate()-1);
	$('#calendario').text(fechaUtils_format(fecha, '/,dd-mm-yyyy'));

	var pila = new Array();
	pila.push(controller_mostrarSorteos_pintarSorteos);

	tombolaService_getSorteosByFecha(fecha, pila, connection_error);
	//var sorteos = tombolaService_getSorteosByFecha(fecha);
	//controller_mostrarSorteos_pintarSorteos(arrayDivsTablas, sorteos);

}