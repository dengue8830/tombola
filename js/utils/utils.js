function utils_clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Error, el tipo de dato no es soportado por esta utilidad.");
}

/***
Funcion que formatea la fecha ingresada como primer parametro en una cadena
respetando el formato pasado como segundo parametro.

ej: fecha, '/,dd-mm-yyyy'

params:

 fecha: Date
 cadena: cadena separada por comas, que representa en su primer parametro el separador a 
 utilizar en la cadena a devolver. En el segundo se indica el formato de dia mes y anio 
 separados por guiones altos, eso es estadnar y no influye en el tipo de separador
 ****/

function fechaUtils_format(date, mask){
  var mesesNomAcotado = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'];
  var yyyy = date.getFullYear().toString();                                    
  var mm = (date.getMonth()+1).toString();
  var dd  = date.getDate().toString();             

  var split = mask.split(',');
  var separador = split[0];
  var format = split[1].split('-');

  if(format[1] == 'Mm'){
    mm = mesesNomAcotado[mm];
  }
                            
  return (dd[1]?dd:"0"+dd[0]) + separador + (mm[1]?mm:"0"+mm[0]) + separador + yyyy;
}

function fechaUtils_getDiaSemanaString(dia){
  var semana=new Array(7);
  semana[0]="Domingo";
  semana[1]="Lunes";
  semana[2]="Martes";
  semana[3]="Miércoles";
  semana[4]="Jueves";
  semana[5]="Viernes";
  semana[6]="Sabado";

  return semana[dia];
}

function fechaUtils_getTurnoByFecha(fecha){
  var mediodia = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), 12, 0, 0, 0);

  if(fecha < mediodia){
    return 'Mañana';
  }

  return 'Tarde';
}

/*
  Recibe una cadena representando una fecha en este formato:
    dd/mm/yyyy,hh:mm
  y devuelve un objeto Date representando a dicha cadena
*/
function fechaUtils_getDate(stringDate){
  var split = stringDate.split(',');
  var fechaSplit = split[0].split('/');

  var dia = fechaSplit[0];
  var mes = fechaSplit[1];
  var anio = fechaSplit[2];

  var horaSplit = split[1].split(':');
  var hora = horaSplit[0];
  var min = horaSplit[1];

  return new Date(anio, mes-1, dia, hora, min, 0, 0);
}