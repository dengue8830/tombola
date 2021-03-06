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
  var mediodia = new Date(fecha.getFullYear(), fecha.getMonth()-1, fecha.getDate(), 12, 0, 0, 0);

  if(fecha < mediodia){
    return 'Mañana';
  }

  return 'Tarde';
}

/*
  Recibe una cadena representando una fecha en este formato:
    dd-mm-yyyy hh:mm:ss.sss
    o en este
    yyyy-mm-dd hh:mm:ss.sss
  y devuelve un objeto Date representando a dicha cadena
*/
function fechaUtils_getDate(stringDate){
  var split = stringDate.split(' ');
  var fechaSplit;

  if(split[0].indexOf('-') != -1){
    fechaSplit = split[0].split('-');
  }else{
    fechaSplit = split[0].split('/');
  }
  
  if(fechaSplit[0].length == 2){//dd-mm-yyyy
    var dia = fechaSplit[0];
    var anio = fechaSplit[2];
  }else{//yyyy-mm-dd
    var dia = fechaSplit[2];
    var anio = fechaSplit[0];
  }

  var mes = fechaSplit[1];

  var horaSplit = split[1].split(':');
  var hora = horaSplit[0];
  var min = horaSplit[1];
  var segSplit = horaSplit[2].split('.');
  var seg = segSplit[0];
  var mil = segSplit[1];
console.log(stringDate);
//console.log(anio+','+mes+','+dia+','+hora+','+min+','+seg+','+mil);
  return new Date(anio, mes-1, dia, hora, min, seg, mil);
}

//se usar para guardar en BD
function fechaUtils_getFromatedDateYYYYMMDDbyFechaDate(date){
  var yyyy = date.getFullYear().toString();                                    
  var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based         
  var dd  = date.getDate().toString();             
                            
  return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
}

function fechaUtils_getFromatedDateYYYYMMDDbyFechaString(stringDate){
  var split = stringDate.split(' ');
  var fechaSplit;

  if(split[0].indexOf('-') != -1){
    fechaSplit = split[0].split('-');
  }else{
    fechaSplit = split[0].split('/');
  }
  
  if(fechaSplit[0].length == 2){//dd-mm-yyyy
    var dia = fechaSplit[0];
    var anio = fechaSplit[2];
  }else{//yyyy-mm-dd
    var dia = fechaSplit[2];
    var anio = fechaSplit[0];
  }

  var mes = fechaSplit[1];

  var horaSplit = split[1].split(':');
  var hora = horaSplit[0];
  var min = horaSplit[1];
  var segSplit = horaSplit[2].split('.');
  var seg = segSplit[0];
  var mil = segSplit[1];

  return anio+'-'+mes+'-'+dia+' '+hora+':'+min+':'+seg+'.'+mil;
}

/*function fechaUtils_getDateJSfromDateBBDD(fechaStr){
  var yyyy = date.getFullYear().toString();                                    
  var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based         
  var dd  = date.getDate().toString();             
  var date = new Date();
  
  return 
  return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
}*/

function getStringPrimeraLetraMayus(txt){
  
  var indexof = txt.indexOf('-');

  if(indexof == -1){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }
    return txt.charAt(0).toUpperCase() + txt.substr(1, indexof-1).toLowerCase()+txt.charAt(indexof)+txt.charAt(indexof+1).toUpperCase()+txt.substr(indexof+2).toLowerCase();
}

/*
* Funcion que compara dos fechas para saber si son iguales, recibe las dos fechas a comparar
* y una cadena con los campos que se van a comparar:
*
* [d]-[m]-[y]-[h]-[mi]-[s]-[ms]
*
*/
function fechaUtils_compararFechasByCampos(fecha1, fecha2, camposComparacion){
  var condiciones = '';

  if(camposComparacion.indexOf('d') != -1){
    condiciones += fecha1.getDate() == fecha2.getDate();
  }
  
  if(camposComparacion.indexOf('m') != -1){
    condiciones += fecha1.getMonth() == fecha2.getMonth();
  }
  
  if(camposComparacion.indexOf('y') != -1){
    condiciones += fecha1.getYear() == fecha2.getYear();
  }
  
  if(camposComparacion.indexOf('h') != -1){
    condiciones += fecha1.getHours() == fecha2.getHours();
  }

  if(camposComparacion.indexOf('mi') != -1){
    condiciones += fecha1.getMinutes() == fecha2.getMinutes();
  }
  
  if(camposComparacion.indexOf('s') != -1){
    condiciones += fecha1.getSeconds() == fecha2.getSeconds();
  }
  
  if(camposComparacion.indexOf('ms') != -1){
    condiciones += fecha1.getMilliseconds() == fecha2.getMilliseconds();
  }
  

  if(condiciones.indexOf('false') != -1){
    return false;
  }

  return true;
}