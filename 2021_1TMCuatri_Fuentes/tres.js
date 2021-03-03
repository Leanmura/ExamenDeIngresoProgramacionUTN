/* 
Leandro Murkaoshi Div:C
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un 
grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , 
el precio final tiene un descuento del 25%, que solo mostramos si corresponde. */

function mostrar()
{
	let nombreIngresado;
	let sexoIngresado;
	let estadoCivilIngresado;
	let edadIngresada;
	let temperaturaCorporalIngresada;

	let banderaPrimerFemeninoSoltera;
	let edadFemeninoSolteraMasJoven;
	let nombreFemeninoSolteraMasJoven;

	let contadorPasajeros;
	let contadorViudosMasSesenta;
	let contadorMasSesenta;

	let totalDescuento;
	let totalSinDescuento;
	let porcentajeMasSesenta;
	let precioPorPasajero;
	let descuento;

	let respuesta;

	banderaPrimerFemeninoSoltera = 'primero';

	contadorPasajeros = 0;
	contadorMasSesenta = 0;
	contadorViudosMasSesenta = 0;

	precioPorPasajero = 600;



	contadorPasajeros = 0;
	do
	{
		contadorPasajeros++;

		nombreIngresado = prompt("Ingrese nombre del pasajero #" + contadorPasajeros);
		while (isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese nombre del pasajero #" + contadorPasajeros);
		}

		estadoCivilIngresado = prompt("Ingrese el estado civil del pasajero: #" + (contadorPasajeros + 1));
		while (isNaN(estadoCivilIngresado) == false || (estadoCivilIngresado != 'soltero' && estadoCivilIngresado != 'casado' && estadoCivilIngresado != 'viudo'))
		{
			estadoCivilIngresado = prompt("Error. Ingrese el estado civil del pasajero: #" + (contadorPasajeros + 1));
		}

		edadIngresada = prompt("Ingrese la edad del pasajero #" + contadorPasajeros);
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) || edadIngresada < 18)
		{
			edadIngresada = prompt("Error. Ingrese la edad del pasajero #" + contadorPasajeros);
		}

		temperaturaCorporalIngresada = prompt("Ingrese la temperatura corporal del pasajero: #" + contadorPasajeros);
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		while (isNaN(temperaturaCorporalIngresada))
		{
			temperaturaCorporalIngresada = prompt("Error. Ingrese la temperatura corporal del pasajero: #" + contadorPasajeros);
		}

		sexoIngresado = prompt("Ingrese el sexo del Pasajero #" + contadorPasajeros);
		while (isNaN(sexoIngresado) == false || (sexoIngresado != 'femenino' && sexoIngresado != 'masculino' && sexoIngresado != 'no binario'))
		{
			sexoIngresado = prompt("Error. Ingrese el sexo del Pasajero #" + contadorPasajeros);
		}

		switch (estadoCivilIngresado)
		{
			case 'soltero':
				if (sexoIngresado == 'femenino')
				{
					if (banderaPrimerFemeninoSoltera == 'primero')
					{
						edadFemeninoSolteraMasJoven = edadIngresada;
						nombreFemeninoSolteraMasJoven = nombreIngresado;
						banderaPrimerFemeninoSoltera = 'no es el primero';
					}
					else
					{
						if (edadIngresada < edadFemeninoSolteraMasJoven)
						{
							edadFemeninoSolteraMasJoven = edadIngresada;
							nombreFemeninoSolteraMasJoven = nombreIngresado;
						}
					}
				}
				break;
			case 'viudo':
				if (edadIngresada > 60)
				{
					contadorViudosMasSesenta++;
				}
				break;
		}

		if (edadIngresada > 60)
		{
			contadorMasSesenta++;
		}

		respuesta = prompt('Desea ingresar otro pasajero?');

	} while (respuesta == 'si')

	totalSinDescuento = contadorPasajeros * precioPorPasajero;

	porcentajeMasSesenta = contadorMasSesenta * 100 / contadorPasajeros;

	if (contadorViudosMasSesenta != 0)
	{
		document.write('<br>Cantidad de personas con estado "viudo" de mas de 60 años: ' + contadorViudosMasSesenta);
	}
	else
	{
		document.write('<br>No hay pasajeros viudos con mas de sesenta años.')
	}

	if (banderaPrimerFemeninoSoltera != 'primero')
	{
		document.write('<br>Nombre de la mujer soltera mas joven: ' + nombreFemeninoSolteraMasJoven + ' y su edad es ' + edadFemeninoSolteraMasJoven + ' años.')
	}
	else
	{
		document.write('<br>No hay mujeres solteras.')
	}

	document.write('<br>Precio del viaje total sin descuento: $' + totalSinDescuento);

	if (porcentajeMasSesenta > 49)
	{
		descuento = totalSinDescuento * 25 / 100;
		totalDescuento = totalSinDescuento - descuento;

		document.write('<br>Precio del viaje total con descuento: $' + totalDescuento);
	}


}
