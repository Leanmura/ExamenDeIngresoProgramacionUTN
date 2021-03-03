/*
Leandro Murakoshi 52min
1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)

2. Se desconoce la cantidad de alumnos que se ingresaran.

3. Se deberán validar los casos resaltados en negrita.

4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.

E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos? */

function probarEjercicio()
{
	let respuesta;
	let nombreIngresado;
	let carreraIngresada;
	let estadoDeLaCarreraIngresada;
	let sexoIngresado;
	let edadIngresada;
	let notaIngresada;

	let contadorAlumnos;
	let contadorAlumnosDiseño;
	let contadorAlumnosProgramacion;
	let contadorAlumnosPsicologia;
	let contadorMujeresProgramacionEnCurso;
	let contadorNobinarios;
	let contadorAlumnosFinalizados;

	let acumuladorNotasAlumnosFinalizados;

	let promedioNotasAlumnoFinalizados;
	let mayorEdadPsicologia;
	let mayorNotaPsicologiaNobinario;
	let nombreMayorNotaPsicologiaNobinario;
	let estadoDeLaCarreraMayorNotaPsicologiaNobinario;
	let carreraMasAlumnos;
	let sexoMayorEdadPsicologia;
	let nombreMayorEdadPsicologia

	let banderaPrimerEdadPsicologia;
	let banderaPrimerNotaPsicologia;

	banderaPrimerEdadPsicologia = 'primero';
	banderaPrimerNotaPsicologia = 'primero';

	acumuladorNotasAlumnosFinalizados = 0;

	contadorAlumnos = 0;
	contadorAlumnosDiseño = 0;
	contadorAlumnosProgramacion = 0;
	contadorAlumnosPsicologia = 0;
	contadorMujeresProgramacionEnCurso = 0;
	contadorNobinarios = 0;
	contadorAlumnosFinalizados = 0;

	do
	{
		contadorAlumnos++;

		nombreIngresado = prompt("Ingrese nombre del alumno #" + contadorAlumnos);
		while (isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese nombre del alumno #" + contadorAlumnos);
		}

		carreraIngresada = prompt("Ingrese la carrera #" + contadorAlumnos);
		while (isNaN(carreraIngresada) == false || (carreraIngresada != 'programacion' && carreraIngresada != 'psicologia' && carreraIngresada != 'diseño grafico'))
		{
			carreraIngresada = prompt("Error. Ingrese la carrera #" + contadorAlumnos);
		}

		estadoDeLaCarreraIngresada = prompt("Ingrese el estado de la carrera #" + contadorAlumnos);
		while (isNaN(estadoDeLaCarreraIngresada) == false || (estadoDeLaCarreraIngresada != 'en curso' && estadoDeLaCarreraIngresada != 'abandono' && estadoDeLaCarreraIngresada != 'finalizado'))
		{
			estadoDeLaCarreraIngresada = prompt("Error. Ingrese el estado de la carrera #" + contadorAlumnos);
		}

		sexoIngresado = prompt("Ingrese el sexo del alumno #" + contadorAlumnos);
		while (isNaN(sexoIngresado) == false || (sexoIngresado != 'femenino' && sexoIngresado != 'masculino' && sexoIngresado != 'nobinario'))
		{
			sexoIngresado = prompt("Error. Ingrese el sexo del alumno #" + contadorAlumnos);
		}

		edadIngresada = prompt("Ingrese la edad #" + contadorAlumnos);
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) || edadIngresada < 18)
		{
			edadIngresada = prompt("Error. Ingrese la edad #" + contadorAlumnos);
		}

		notaIngresada = prompt("Ingrese la nota #" + contadorAlumnos);
		notaIngresada = parseInt(notaIngresada);
		while (isNaN(notaIngresada) || notaIngresada < 1 || notaIngresada > 10)
		{
			notaIngresada = prompt("Error. Ingrese la nota #" + contadorAlumnos);
		}

		switch (carreraIngresada)
		{
			case 'diseño grafico':
				contadorAlumnosDiseño++;
				break;
			case 'programacion':
				contadorAlumnosProgramacion++;
				if (sexoIngresado == 'femenino' && estadoDeLaCarreraIngresada == 'en curso')
				{
					contadorMujeresProgramacionEnCurso++;
				}
				break;
			case 'psicologia':
				contadorAlumnosPsicologia++;
				if (banderaPrimerEdadPsicologia == 'primero')
				{
					mayorEdadPsicologia = edadIngresada;
					nombreMayorEdadPsicologia = nombreIngresado;
					sexoMayorEdadPsicologia = sexoIngresado;
					banderaPrimerEdadPsicologia = 'no es el primero';
				}
				else
				{
					if (edadIngresada > mayorEdadPsicologia)
					{
						mayorEdadPsicologia = edadIngresada;
						nombreMayorEdadPsicologia = nombreIngresado;
						sexoMayorEdadPsicologia = sexoIngresado;
					}
				}
				if (banderaPrimerNotaPsicologia == 'primero' && sexoIngresado == 'nobinario')
				{
					mayorNotaPsicologiaNobinario = notaIngresada;
					nombreMayorNotaPsicologiaNobinario = nombreIngresado;
					estadoDeLaCarreraMayorNotaPsicologiaNobinario = estadoDeLaCarreraIngresada;
					banderaPrimerNotaPsicologia = 'no es el primero';
				}
				else
				{
					if (sexoIngresado == 'nobinario' && notaIngresada > mayorNotaPsicologiaNobinario)
					{
						mayorNotaPsicologiaNobinario = notaIngresada;
						nombreMayorNotaPsicologiaNobinario = nombreIngresado;
						estadoDeLaCarreraMayorNotaPsicologiaNobinario = estadoDeLaCarreraIngresada;
					}
				}
				break;
		}

		if (sexoIngresado == 'nobinario')
		{
			contadorNobinarios++;
		}

		if (estadoDeLaCarreraIngresada == 'finalizado')
		{
			contadorAlumnosFinalizados++;
			acumuladorNotasAlumnosFinalizados = acumuladorNotasAlumnosFinalizados + notaIngresada;
		}

		respuesta = prompt('Desea ingresar otro alumno?');
	} while (respuesta == 'si')

	promedioNotasAlumnoFinalizados = acumuladorNotasAlumnosFinalizados / contadorAlumnosFinalizados;

	if (contadorAlumnosDiseño > contadorAlumnosProgramacion && contadorAlumnosDiseño > contadorAlumnosPsicologia)
	{
		carreraMasAlumnos = 'diseño';
	}
	else
	{
		if (contadorAlumnosProgramacion > contadorAlumnosPsicologia)
		{
			carreraMasAlumnos = 'programacion';
		}
		else
		{
			carreraMasAlumnos = 'psicologia';
		}
	}

	console.log("Cantidad total de alumnos de programacion: " + contadorAlumnosProgramacion);
	console.log("Cantidad total de alumnos de psicologia: " + contadorAlumnosPsicologia);
	console.log("Cantidad total de alumnos de diseño: " + contadorAlumnosDiseño);
	console.log("Cantidad total de mujeres que cursan programacion: " + contadorMujeresProgramacionEnCurso);
	console.log("Cantidad de alumnos no binarios: " + contadorNobinarios);

	if (contadorAlumnosFinalizados != 0)
	{
		console.log("Promedio de notas de los alumnos fianlizantes: " + promedioNotasAlumnoFinalizados);
	}
	else
	{
		console.log("No hay alumnos finalizantes.");
	}
	if (banderaPrimerEdadPsicologia != 'primero')
	{
		console.log("Alumno mas viejo de la carrera de psicologia: " + nombreMayorEdadPsicologia + ", su sexo es " + sexoMayorEdadPsicologia + " y su edad es " + mayorEdadPsicologia);
		if (banderaPrimerNotaPsicologia != 'primero')
		{
			console.log("Mejor alumno no binario de la carrera psicologia: " + nombreMayorNotaPsicologiaNobinario + ",su nota es " + mayorNotaPsicologiaNobinario + " y su estado es " + estadoDeLaCarreraMayorNotaPsicologiaNobinario);
		}
		else
		{
			console.log("No hay no binarios en psicologia.");
		}
	}
	else
	{
		console.log("No hay alumnos de psicologia.");
	}
	console.log("Carrera con mas alumnos: " + carreraMasAlumnos);
}
