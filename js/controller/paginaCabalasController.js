function pagiaCabalasController_cargarCabalas(id, cabala){
	console.log('cargando cabalas');

	if($('#'+id).children().length){
		console.log('hay cabalas cargadas, no se vuelven a cargar');
		return false;
	}

	var arrayCabala;

	if(cabala == 'suenios'){
		arrayCabala = new Array("00;Huevos", "01;Agua", "02;Niño", "03;San cono", "04;La cama", "05;Gato", "06;Perro", "07;Revolver", "08;Incendio", "09;Arroyo", "10;Cañon", "11;Minero", "12;Soldado", "13;Yeta", "14;Borracho", "15;Niña bonita", "16;Anillo", "17;Desgracia", "18;Sangre", "19;Pescado", "20;La fiesta", "21;Mujer", "22;Loco", "23;Cocinero", "24;Caballo", "25;Gallina", "26;La misa", "27;El peine", "28;El cerro", "29;San pedro", "30;Santa rosa", "31;La luz", "32;Dinero", "33;Cristo", "34;La cabeza", "35;Pajarito", "36;Castaña", "37;Eucaliptus", "38;Piedras", "39;Lluvia", "40;El cura", "41;El cuchillo", "42;Zapatillas", "43;Balcon", "44;Carcel", "45;El vino", "46;Tomates", "47;Muerto", "48;Muerto habla", "49;La carne", "50;El pan", "51;Serrucho", "52;Madre e hijo", "53;El barco", "54;La vaca", "55;La musica", "56;La caida", "57;Jorobado", "58;Ahogado", "59;Las plantas", "60;La virgen", "61;Escopeta", "62;Inundacion", "63;Casamiento", "64;El llanto", "65;Cazador", "66;Lombrices", "67;Mordida", "68;Sobrinos", "69;Vicios", "70;Muerto sueño", "71;Excremento", "72;Sorpresa", "73;Hospital", "74;Gente negra", "75;Besos", "76;Las llamas", "77;Piernas mujer", "78;Ramera", "79;Ladron", "80;La bocha", "81;Las flores", "82;La pelea", "83;Mal tiempo", "84;La iglesia", "85;Linterna", "86;El humo", "87;Rolos", "88;El papa", "89;La rata", "90;El miedo", "91;Excusado", "92;El medico", "93;Enamorado", "94;Cementerio", "95;Anteojos", "96;Marido", "97;Mesa", "98;Lavandera", "99;Hermano");
	}else{
		if(cabala == 'nombres'){
			arrayCabala = new Array("187;Adela-Anabella", "766;Adriana-Ana", "255;Alfoncina-Alba", "195;Alicia-Andrea", "532;Amanda-Amelia", "187;Analia-Aldana", "555;Anastacia-Anahi", "805;Angela-Amalia", "566;Antonella-Araceli", "137;Azucena-Ayelen", "930;Barbara-Belen", "163;Betiana-Berta", "090;Beatriz-Blanca", "614;Brenda-Carla", "111;Candela-Clara", "735;Carmen-Camila", "013;Carol-Carola", "825;Cecilia-Delia", "453;Celeste-Celina", "697;Claudia-Cynthia", "072;Daiana-Diana", "426;Dalma-Daniela", "723;Devora-Denise", "436;Dionicia-Ema", "261;Dolores-Dulce", "549;Eleonor-Elisa", "916;Elizabeth-Eva", "806;Elvira-Elena", "166;Emilce-Estrella", "236;Emilse-Emilia", "422;Encarnacion-Edith", "710;Fabiana-Fernanda", "605;Fiama-Flavia", "842;Florencia-Gala", "740;Gabriela-Gisela", "892;Gimena-Gladys", "432;Gloria-Graciela", "816;Greta-Guadalupe", "310;Helena-Heliana", "914;Huuen-Irma", "854;Ianina-Ines", "029;Irene-Isabel", "287;Itati-Ivana", "336;Janice-Jamila", "882;Jazmin-Jenifer", "312;Jesica-Jimena", "250;Johana-Juana", "315;Jorgelina-Judith", "809;Julia-Juliana", "440;Julieta-Karen", "607;Karina-Keila", "774;Laura-Lara", "069;Laya-Leandra", "055;Leonor-Leticia", "530;Lia-Liliana", "454;Lidia-Lila", "502;Loana-Lorena", "752;Lourdes-Lucia", "309;Luciana-Lujan", "441;Luisina-Luz", "480;Mabel-Mailen", "935;Macarena-Mara", "748;Maira-Malena", "885;Manuela-Maria", "369;Marcela-Mariana", "379;Margarita-Maribel", "922;Marilina-Marisa", "934;Marina-Marisol", "796;Marta-Matilde", "200;Melanie-Melisa", "150;Mercedes-Micaela", "720;Miriam-Mirna", "919;Mirta-Monica", "955;Nadia-Nancy", "896;Natalia-Natali", "139;Nelida-Nicole", "780;Nieves-Nilda", "786;Noel-Noelia", "208;Noemi-Nora", "487;Norma-Olga", "451;Patricia-Paola", "097;Paula-Perla", "498;Pilar-Raquel", "713;Rosa-Rocio", "603;Romina-Rosalia", "700;Rosana-Rosario", "299;Sabrina-Sandra", "938;Sara-Silvana", "573;Sasha-Silvia", "130;Silvina-Sofia", "366;Sol-Soledad", "712;Stella-Susana", "035;Tamara-Telma", "594;Teresa-Valeria", "496;Vanesa-Vanina", "859;Veronica-Victoria", "135;Virginia-Viviana", "125;Wendy-Ximena", "902;Yamila-Yanina", "889;Zulma-Zulema", "721;Adolfo-Adrian", "755;Agustin-Armando", "037;Alejo-Alberto", "634;Alfonso-Alejandro", "227;Alvaro-Alan", "099;Americo-Antonio", "725;Andres-Anibal", "805;Angel-Anselmo", "840;Ariel-Arturo", "911;Augusto-Axel", "807;Basilio-Brian", "618;Bernardo-Bernardino", "229;Bruno-Benjamin", "233;Carlos-Camilo", "962;Casimiro-Catriel", "507;Cesar-Cruz", "679;Clemente-Claudio", "956;Cristian-Carmelo", "426;Daniel-Dario", "691;Danilo-Eitan", "986;Dante-Duilio", "456;David-Damian", "276;Diego-Domingo", "875;Edgardo-Esteban", "645;Eduardo-Emiliano", "236;Emilio-Eugenio", "762;Enrique-Emanuel", "997;Ernesto-Eulogio", "574;Estanislao-Americo", "375;Ezequiel-Eros", "754;Fabian-Feliciano", "378;Fabio-Felix", "685;Fabricio-Fidel", "658;Facundo-Felipe", "884;Federico-Fortunato", "710;Fernando-Franco", "765;Flavio-Faustino", "675;Francisco-Freddy", "887;Gabriel-Gaspar", "841;Gaston-Gregorio", "740;Gerardo-Guido", "817;German-Gabino", "819;Gian-Gaetano", "853;Gonzalo-Gaulho", "145;Guillermo", "352;Gustavo-Guzman", "915;Haled-Hermenegildo", "043;Hailil-Haroldo", "527;Hector-Hipolito", "607;Hernan-Herminio", "356;Horacio-Homero", "820;Hugo-Heriberto", "457;Humberto-Helios", "182;Ignacio-Ismael", "287;Ivan-Inorencio", "285;Jano-Jacinto", "282;Javier-Jaime", "472;Jean-Jairo", "033;Jesus-Jeronimo", "941;Joaquin-Justo", "039;Jonathan-Jacobo", "397;Jorge-Isaac", "544;Jose-Isidoro", "250;Juan-Leopoldo", "547;Julian-Lorenzo", "809;Julio-Justino", "657;Kaled-Leon", "341;Kein-Laurencio", "437;Leandro-Lautaro", "069;Leo-Leonardo", "055;Leonel-Lian", "912;Lisandro-Lucas", "752;Luciano-Luis", "928;Manuel-Marcelo", "719;Marcos-Mariano", "569;Mario-Martin", "926;Matias-Mauricio", "303;Mauro-Maximiliano", "429;Miguel-Nahuel", "759;Nicolas-Nelson", "342;Norberto-Nestor", "348;Octavio-Omar", "709;Orlando-Oscar", "082;Osvaldo-Owen", "563;Pablo-Pascual", "782;Patricio-Paulo", "860;Pedro-Pehuen", "518;Quillen-Quimey", "374;Rafael-Ramiro", "329;Roman-Raul", "688;Ricardo-Roberto", "449;Rodolfo-Rodrigo", "265;Rogelio-Rolando", "450;Roman-Roque", "064;Ruben-Salvador", "479;Santiago-Sebastian", "184;Sergio-Silvio", "172;Tomas-Vigente", "937;Victor-Walter", "902;Yamil-Yoel");
		}else{
			if(cabala == 'sensaciones'){
				arrayCabala = new Array("01;Odio", "02;Despecho", "03;Desconsuelo", "04;Progreso", "05;Dicha", "06;Desprecio", "07;Dudas", "08;Nervios", "09;Viajes", "10;Valentia", "11;Desdicha", "12;Enfermedades", "13;Engaño", "14;Embriaguez", "15;Debilidad", "16;Fuerza", "17;Desgracia", "18;Placer", "19;Temor", "20;Desengaño", "21;Accidente", "22;Ciencia", "23;Angustia", "24;Fracaso", "25;Amargura", "26;Amor", "27;Sexo", "28;Justicia", "29;Futuro", "30;Locura", "31;Audacia", "32;Dinero", "33;Vanidad", "34;Orgullo", "35;Intruso", "36;Intimidad", "37;Fertilidad", "38;Traicion", "39;Tentacion", "40;Erotismo", "41;Fraude", "42;Fatalidad", "43;Éxito", "44;Alegria", "45;Envidia", "46;Chismes", "47;Simulacion", "48;Orgullo", "49;Adulterio", "50;Pasion", "51;Ingenuidad", "52;Torpeza", "53;Desaire", "54;Interesado", "55;Sufrimiento", "56;Rencor", "57;Paz", "58;Astucia", "59;Perspicacia", "60;Pereza", "61;Indolencia", "62;Politico", "63;Falacia", "64;Cuentero", "65;Miedo", "66;Maldad", "67;Congoja", "68;Corrupto", "69;Vicios", "70;Mal agurio", "71;Gusto", "72;Disgusto", "73;Frialdad", "74;Ladrones", "75;Imprudencia", "76;Paseo", "77;Viajes", "78;Volver", "79;Fuga", "80;Susto", "81;Acidez", "82;Sorpresa", "83;Imaginacion", "84;Actuacion", "85;Fe", "86;Esperanza", "87;Orador", "88;Oracion", "89;Adivina", "90;Frio", "91;Confusion", "92;Acertijo", "93;Fuego", "94;Choque", "95;Coimero", "96;Soborno");
			}else{
				if(cabala == 'flores'){
					arrayCabala = new Array("512;Alegria del hogar", "308;Amapola", "273;Azucena", "130;Cala", "951;Clavel", "971;Crisantemo", "146;Dalia", "333;Gladeolos", "115;Ortencia", "584;Jazmin", "346;Lavanda", "063;Lila", "847;Madreselva", "215;Margarita", "637;No me olvides", "419;Pensamientos", "358;Rosa", "857;Tulipan", "402;Trebol", "503;Violeta");
				}else{
					if(cabala == 'oficios'){
						arrayCabala = new Array("00;Criador", "01;Plomero", "02;Pediatra", "03;Farmaceutico", "04;Ingeniero", "05;Veterinario", "06;Sereno", "07;Policia", "08;Bombero", "09;Contador", "10;Lechero", "11;Minero", "12;Militar", "13;Fraile", "14;Catador", "15;Modelo", "16;Dibujante", "17;Abogado", "18;Cirujano", "19;Buzo", "20;Animador", "21;Ama de casa", "22;Psiquiatria", "23;Cocinero", "24;Polista", "25;Colectivero", "26;Vaijante", "27;Peluquero", "28;Astrologo", "29;Vidriero", "30;Florista", "31;Electricista", "32;Banquero", "33;Diseñador", "34;Futbolista", "35;Cantante", "36;Pstelero", "37;Dentista", "38;Arbitro", "39;Paragüero", "40;Cura", "41;Matarife", "42;Zapatero", "43;Budista", "44;Carcelero", "45;Viñatero", "46;Verdulero", "47;Funebrero", "48;Parapsicologo", "49;Carnicero", "50;Panadero", "51;Carpintero", "52;Domestica", "53;Marinero", "54;Tambero", "55;Musico", "56;Albañil", "57;Escritor", "58;Salvavidas", "59;Agronomo", "60;Monja", "61;Imprentero", "62;Navegante", "63;Juez", "64;Golfista", "65;Cazador", "66;Pescador", "67;Talabartero", "68;Juguetero", "69;Remisero", "70;Vendedor", "71;Politico", "72;Mago", "73;Actor", "74;Bailarin", "75;Payaso", "76;Carbonero", "77;Corredor", "78;Ramera", "79;Escribano", "80;Deportista", "81;Matematico", "82;Carateca", "83;Filosofo", "84;Pastor", "85;Guardabosque", "86;Telegrafista", "87;Martillero", "88;Cardenal", "89;Empleado", "90;Inspector", "91;Pintor", "92;Medico", "93;Cardiologo", "94;Sepulturero", "95;Oculista", "96;Torero", "97;Mozo", "98;Lavandera", "99;Boxeador");
					}else{
						if(cabala == 'animales'){
							console.log('fechas');
							arrayCabala = new Array("908;Lagarto", "288;Leon", "340;Leopardo", "030;Liebre", "276;Llama", "563;Lobo", "666;Lombriz", "548;Loro", "020;Mariposa", "403;Martineta", "012;Mono", "332;Mosca", "556;Mosquito", "385;Mula", "190;Murcielago", "086;Nutria", "634;Ñandu", "282;Orangutan", "780;Oso", "193;Paloma", "021;Papagallo", "222;Pato", "242;Pavo real", "518;Pejerrey", "955;Pelicano", "631;Peludo", "423;Perdiz", "306;Perro", "616;Pez espada", "802;Pez limon", "575;Pingüino", "187;Piojo", "452;Puerco espin", "613;Puma", "394;Rana", "389;Rata", "568;Rinoceronte", "843;Sapo", "353;Ternero", "267;Tiburon", "865;Tigre", "345;Toro", "261;Tortuga", "419;Trucha", "854;Vaca", "101;Vibora", "728;Vizcacha", "481;Zorrino", "207;Zorro", "491;Zorzal", "327;Aguila", "309;Anguila", "341;Antilope", "174;Araña", "583;Ardilla", "295;Armiño", "892;Avestruz", "136;Ballena", "897;Bisonte", "338;Boga", "798;Buey", "057;Bufalo", "910;Burro", "824;Caballo", "560;Caiman", "249;Camello", "935;Canario", "426;Canguro", "459;Caracol", "946;Castor", "811;Cebra", "671;Cerdo", "629;Chivo", "484;Ciervo", "747;Cigüeña", "464;Cocodrilo", "000;Codorniz", "814;Colibri", "337;Condor", "077;Conejo", "433;Cordero", "578;Corvina", "473;Cucaracha", "179;Cuervo", "669;Dorado", "996;Elefante", "570;Flamenco", "250;Foca", "315;Gacela", "944;Ganzo", "225;Gallina", "062;Garza", "105;Gato", "004;Halcon", "818;Hiena", "972;Hipopotamo", "851;Hormiga", "139;Jabali", "499;Jirafa", "617;Lechuza");
						}else{//fechas
							console.log('fechas');
								arrayCabala = new Array("ENERO 6;Dia de reyes", "FEBRERO 14;Dia de los enamorados", "ABRIL 1;Domingo dia de la novia", "ABRIL 4;Domingo dia del matrimonio", "MAYO 7;Dia del grafico", "MAYO 2;Domingo dia del ahijado", "JUNIO 11;Dia del vecino", "JUNIO 15;Dia del bioquimico", "JUNIO 3;Domingo dia del padre", "JULIO 20;Dia del amigo", "AGOSTO 6;Dia del veterinario", "AGOSTO 2;Domingo dia del niño", "AGOSTO 15;“santa maria", "AGOSTO 3;Domingo dia del abuelo", "AGOSTO 25;Dia del peluquero", "AGOSTO 29;Dia del abogado", "AGOSTO 30;“santa rosa", "SETIEMBRE 4;Dia de la secretaria", "SETIEMBRE 11;Dia del maestro", "SETIEMBRE 21;Dia del estudiante", "OCTUBRE 2;Dia del escribano", "OCTUBRE 3;Dia del odontologo", "OCTUBRE 3;Domingo dea de la madre", "NOVIEMBRE 1;Dia de todos los santos", "NOVIEMBRE 2;Domingo dia de la abuela", "NOVIEMBRE 22;Dia de la musica", "DICIEMBRE 1;Dia del farmaceutico", "DICIEMBRE 3;Dia del medico");
						}
					}
				}
			}
		}
	}
//<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-count ui-li-has-icon ui-first-child ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="index.html" class="ui-link-inherit"><img src="images/gf.png" alt="France" class="ui-li-icon ui-corner-none ui-li-thumb">France <span class="ui-li-count ui-btn-up-c ui-btn-corner-all">4</span></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
//<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="index.html" class="ui-link-inherit">Acura</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
	$.each(arrayCabala, function( i, unaCabala ) {
		var split = unaCabala.split(';');
		//$('#'+id).append('<li class="ui-li-static ui-body-inherit ui-li-has-count ui-first-child">'+split[1]+'<span class="ui-li-count ui-body-inherit">'+split[0]+'</span></li>');

//$('#'+id).append('<li data-corners="false" data-shadow="false" data-theme="c" class="ui-btn ui-btn-icon-right ui-li ui-li-has-count ui-li-has-icon ui-first-child ui-btn-up-c">'
		$('#'+id).append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right  ui-li-has-count ui-li ui-first-child ui-btn-up-c">'
			+'<div class="ui-btn-inner ui-li">'
				+'<div class="ui-btn-text">'
					+'<a href="#" class="ui-link-inherit">'
						//+'<img src="images/gf.png" alt="France" class="ui-li-icon ui-corner-none ui-li-thumb">'
						+split[1]
						+'<span class="ui-li-count ui-btn-up-c ui-btn-corner-all">'+split[0]+'</span>'
					+'</a>'
				+'</div>'
				//+'<span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span>'
			+'</div>'
		+'</li>');
	});
//	$('#'+id).refresh();
}

function getDataHTML(){
		var array = new Array();
		
		var trs = $('#cabala').children().children();

		//console.log(trs);
		var length = $(trs[0]).children().length;
		console.log(length);
		for (var i = 0; i < length; i = i+2) {
			//console.log($(trs[i]));
			$.each(trs, function( trIndex, tr ) {
				//console.log('tr: '+$(tr));
				//console.log('$(tr).children().length: '+$(tr).children().length);
                	var tds = $(tr).children();
                	//console.log('tds: '+tds);

                	
                	if(array.length == 99){
                		console.log(array);
                		array = [];
                	}
                	array.push($(tds[i]).children().text()+';'+getStringPrimeraLetraMayus($(tds[i+1]).text().trim()));
			});
		};
		console.log(array);
		
	}

	function cargarSuenios(cabala){
		var arrayCabala;
		if(cabala == 'suenios'){
			var suenios = new Array("00;Huevos", "01;Agua", "02;Niño", "03;San cono", "04;La cama", "05;Gato", "06;Perro", "07;Revolver", "08;Incendio", "09;Arroyo", "10;Cañon", "11;Minero", "12;Soldado", "13;Yeta", "14;Borracho", "15;Niña bonita", "16;Anillo", "17;Desgracia", "18;Sangre", "19;Pescado", "20;La fiesta", "21;Mujer", "22;Loco", "23;Cocinero", "24;Caballo", "25;Gallina", "26;La misa", "27;El peine", "28;El cerro", "29;San pedro", "30;Santa rosa", "31;La luz", "32;Dinero", "33;Cristo", "34;La cabeza", "35;Pajarito", "36;Castaña", "37;Eucaliptus", "38;Piedras", "39;Lluvia", "40;El cura", "41;El cuchillo", "42;Zapatillas", "43;Balcon", "44;Carcel", "45;El vino", "46;Tomates", "47;Muerto", "48;Muerto habla", "49;La carne", "50;El pan", "51;Serrucho", "52;Madre e hijo", "53;El barco", "54;La vaca", "55;La musica", "56;La caida", "57;Jorobado", "58;Ahogado", "59;Las plantas", "60;La virgen", "61;Escopeta", "62;Inundacion", "63;Casamiento", "64;El llanto", "65;Cazador", "66;Lombrices", "67;Mordida", "68;Sobrinos", "69;Vicios", "70;Muerto sueño", "71;Excremento", "72;Sorpresa", "73;Hospital", "74;Gente negra", "75;Besos", "76;Las llamas", "77;Piernas mujer", "78;Ramera", "79;Ladron", "80;La bocha", "81;Las flores", "82;La pelea", "83;Mal tiempo", "84;La iglesia", "85;Linterna", "86;El humo", "87;Rolos", "88;El papa", "89;La rata", "90;El miedo", "91;Excusado", "92;El medico", "93;Enamorado", "94;Cementerio", "95;Anteojos", "96;Marido", "97;Mesa", "98;Lavandera", "99;Hermano");
		}
		

		$.each(suenios, function( i, unSuenio ) {
				var split = unSuenio.split(';');
				$('#ul_suenios').append('<li>'+split[1]+'<span class="ui-li-count">'+split[0]+'</span></li>');
		});
		
	}