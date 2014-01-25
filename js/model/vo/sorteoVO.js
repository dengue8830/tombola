function SorteoVO(idSorteo, nombre, num, fecha, lugar, numeros){
	this.idSorteo = idSorteo;
	this.nombre = nombre;
	this.num = num;
	this.fecha = fecha;
	this.hora = function(){
		return this.fecha.getHours()+":"+this.fecha.getMinutes(); 
	}
	this.lugar = lugar;
	this.numeros = numeros;
}