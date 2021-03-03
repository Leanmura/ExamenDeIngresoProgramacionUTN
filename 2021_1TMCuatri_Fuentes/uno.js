/* Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos */
function mostrar()
{
	let nombreIngresado;
	let tipoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let tipoIngresadoInflamable;
	let marcaIngresada;
	let contador;

	let acumuladorQuat;
	let acumuladorAlcohol;
	let acumuladorIac;

	let contadorQuat;
	let contadorIac;
	let contadorAlcohol;
	let contadorCombutible;
	let contadorIgnifugo;
	let contadorExplosivo;
	let contadorIacMenosDocientos;


	let promedioCantidadAlochol;
	let promedioCantidadIac;
	let promedioCantidadQuat;

	let inflamableMasCantidad;
	let tipoMasCaro;
	let precioMasCaro;
	let marcaMasCaro;

	acumuladorAlcohol = 0;
	acumuladorIac = 0;
	acumuladorQuat = 0;

	contadorAlcohol = 0;
	contadorIac = 0;
	contadorQuat = 0;
	contador = 0;
	contadorIgnifugo = 0;
	contadorExplosivo = 0;
	contadorIgnifugo = 0;
	contadorIacMenosDocientos = 0;

	for (contador = 0; contador < 5; contador++)
	{
		nombreIngresado = prompt("Ingrese el nombre del producto: #" + (contador + 1));
		while (isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese el nombre del producto: #" + (contador + 1));
		}
		tipoIngresado = prompt("Ingrese el tipo del producto: #" + (contador + 1));
		while (isNaN(tipoIngresado) == false || (tipoIngresado != 'ALCOHOL' && tipoIngresado != 'IAC' && tipoIngresado != 'QUAT'))
		{
			tipoIngresado = prompt("Error. Ingrese el tipo del producto: #" + (contador + 1));
		}

		precioIngresado = prompt("Ingrese el precio del producto: #" + (contador + 1));
		precioIngresado = parseInt(precioIngresado);
		while (isNaN(precioIngresado) || (precioIngresado < 101 || precioIngresado > 299))
		{
			precioIngresado = prompt("Error. Ingrese el precio del producto: #" + (contador + 1));
		}

		cantidadIngresada = prompt("Ingrese cantidad de productos: #" + (contador + 1));
		cantidadIngresada = parseInt(cantidadIngresada);
		while (isNaN(cantidadIngresada) || (cantidadIngresada < 1 || cantidadIngresada > 1000))
		{
			cantidadIngresada = prompt("Error. Ingrese cantidad de productos: #" + (contador + 1));
		}

		tipoIngresadoInflamable = prompt("Ingrese el tipo de infamable: #" + (contador + 1));
		while (isNaN(tipoIngresadoInflamable) == false || tipoIngresadoInflamable != 'ignifugo' && tipoIngresadoInflamable != 'combustible' && tipoIngresadoInflamable != 'explosivo')
		{
			tipoIngresadoInflamable = prompt("Error. Ingrese el tipo de infamable: #" + (contador + 1));
		}

		marcaIngresada = prompt("Ingrese la marca del producto: #" + (contador + 1));
		while (isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("Error. Ingrese la marca del producto: #" + (contador + 1));
		}

		switch (tipoIngresado)
		{
			case 'ALCOHOL':
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + cantidadIngresada;
				break;
			case 'IAC':
				contadorIac++;
				acumuladorIac = acumuladorIac + cantidadIngresada;

				if (precioIngresado < 201)
				{
					contadorIacMenosDocientos++;
				}
				break;
			case 'QUAT':
				contadorQuat++;
				acumuladorQuat = acumuladorQuat + cantidadIngresada;
				break;
		}

		switch (tipoIngresadoInflamable)
		{
			case 'combustible':
				contadorCombutible++;
				break;
			case 'explosivo':
				contadorExplosivo++;
				break;
			case 'ignifugo':
				contadorIgnifugo++;
				break;
		}

		if (contador == 0)
		{
			precioMasCaro = precioIngresado;
			marcaMasCaro = marcaIngresada;
			tipoMasCaro = tipoIngresado;
		}
		else
		{
			if (precioIngresado > precioMasCaro)
			{
				precioMasCaro = precioIngresado;
				marcaMasCaro = marcaIngresada;
				tipoMasCaro = tipoIngresado;
			}
		}
	}

	promedioCantidadAlochol = acumuladorAlcohol / contadorAlcohol;
	promedioCantidadIac = acumuladorIac / contadorIac;
	promedioCantidadQuat = acumuladorQuat / contadorQuat;

	if (contadorIgnifugo > contadorExplosivo && contadorIgnifugo > contadorCombutible)
	{
		inflamableMasCantidad = 'ingnifugo';
	}
	else
	{
		if (contadorExplosivo > contadorCombutible)
		{
			inflamableMasCantidad = 'explosivo';
		}
		else
		{
			inflamableMasCantidad = 'combustible';
		}
	}

	document.write('<br>Promedio de cantidad ALCOHOL: ' + promedioCantidadAlochol);
	document.write('<br>Promedio de cantidad IAC: ' + promedioCantidadIac);
	document.write('<br>Promedio de cantidad QUAT: ' + promedioCantidadQuat);
	document.write('<br>Tipo de inflamable con más cantidad de unidades en total de la compra: ' + inflamableMasCantidad);
	document.write('<br>Unidades de IAC con precios menos a 200 (inclusive) que se compraron en total: ' + contadorIacMenosDocientos);
	document.write('<br>La marca del mas caro de los productos es ' + marcaMasCaro + " y su tipo es " + tipoMasCaro);
}
