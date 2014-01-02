function SorteoVO(id, nombre, numero, fecha, lugar, numeros){
	this.id = id;
	this.nombre = nombre;
	this.numero = numero;
	this.fecha = fecha;
	this.hora = function(){
		return this.fecha.getHours()+":"+this.fecha.getMinutes(); 
	}
	this.lugar = lugar;
	this.numeros = numeros;
}