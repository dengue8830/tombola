<?php
header('Access-Control-Allow-Origin: *');
// fecha: fecha con la que se hace la consulta BD
$fecha =$_POST['fecha']; 

// fechaReturn: fecha que se devuelve a la app, la cadena debe ser dd/mm/yyyy,hh:mm
//$fechaReturn = $fecha . " 11:30:00.000";
//$numeros = array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20); 
$numeros = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20'; 
$sorteos_1 = array('id_sorteo' => 1, 'nombre' => 'La Primera', 'num' => 2354, 'fecha' => $fecha . " 11:30:00.000", 'lugar' => 'Jujuy', 'numeros' => $numeros); 
$sorteos_2 = array('id_sorteo' => 2, 'nombre' => 'Matutina', 'num' => 5554, 'fecha' => $fecha . " 14:00:00.000", 'lugar' => 'Salta', 'numeros' => $numeros); 
$sorteos_3 = array('id_sorteo' => 3, 'nombre' => 'Vespertina', 'num' => 6755, 'fecha' => $fecha . " 17:30:00.000", 'lugar' => 'Tucuman', 'numeros' => $numeros);  
$sorteos_4 = array('id_sorteo' => 4, 'nombre' => 'Nocturna', 'num' => 3927, 'fecha' => $fecha . " 22:30:00.000", 'lugar' => 'Cordoba', 'numeros' => $numeros); 

$sorteos = array($sorteos_1, $sorteos_2, $sorteos_3, $sorteos_4);

print json_encode($sorteos);

?>
