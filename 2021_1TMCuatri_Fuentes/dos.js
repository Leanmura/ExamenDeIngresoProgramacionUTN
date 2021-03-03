/* 
Leandro Murakoshi div:C
Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota */

function mostrar()
{
  let contadorAlumnos;
  let nombreIngresado;
  let cantidadMateriasIngresada;
  let sexoIngresado;
  let notaIngresada;
  let edadIngresada;
  let tipoIngresado;

  let contadorMasculino;
  let contadorFemenino;
  let contadorNoBinario;

  let acumuladorNotaMasculino;
  let acumuladorNotaFemenino;
  let acumuladorNotaNoBinario;

  let banderaPrimerNotaFemeninoNoBinario;
  let banderaPrimerTipoLibre;
  let banderaPrimerTipoNoRemota;

  let edadMasMateriasNoRemota;
  let nombreMasMateriasNoRemota;
  let nombreMenorEdadLibre

  let promedioNotaMasculino;
  let promedioNotaFemenino;
  let promedioNotaNoBinario;

  let respuesta;

  contadorFemenino = 0;
  contadorMasculino = 0;
  contadorNoBinario = 0;

  acumuladorNotaFemenino = 0;
  acumuladorNotaMasculino = 0;
  acumuladorNotaNoBinario = 0;


  contadorAlumnos = 0;
  do
  {
    contadorAlumnos++;

    nombreIngresado = prompt("Ingrese nombre del alumno #" + contadorAlumnos);
    while (isNaN(nombreIngresado) == false)
    {
      nombreIngresado = prompt("Error. Ingrese nombre del alumno #" + contadorAlumnos);
    }

    tipoIngresado = prompt("Ingrese el tipo de cursada: #" + (contadorAlumnos + 1));
    while (isNaN(tipoIngresado) == false || (tipoIngresado != 'libre' && tipoIngresado != 'presencial' && tipoIngresado != 'remota'))
    {
      tipoIngresado = prompt("Error. Ingrese el tipo de cursada: #" + (contadorAlumnos + 1));
    }

    cantidadMateriasIngresada = prompt("Ingrese la cantidad de materias: #" + contadorAlumnos);
    cantidadMateriasIngresada = parseInt(cantidadMateriasIngresada);
    while (isNaN(cantidadMateriasIngresada) || cantidadMateriasIngresada < 1 || cantidadMateriasIngresada > 7)
    {
      cantidadMateriasIngresada = prompt("Error. Ingrese la cantidad de materias: #" + contadorAlumnos);
    }

    sexoIngresado = prompt("Ingrese el sexo del alumno #" + contadorAlumnos);
    while (isNaN(sexoIngresado) == false || (sexoIngresado != 'femenino' && sexoIngresado != 'masculino' && sexoIngresado != 'no binario'))
    {
      sexoIngresado = prompt("Error. Ingrese el sexo del alumno #" + contadorAlumnos);
    }

    notaIngresada = prompt("Ingrese la nota #" + contadorAlumnos);
    notaIngresada = parseInt(notaIngresada);
    while (isNaN(notaIngresada) || notaIngresada < 1 || notaIngresada > 10)
    {
      notaIngresada = prompt("Error. Ingrese la nota #" + contadorAlumnos);
    }

    edadIngresada = prompt("Ingrese la edad #" + contadorAlumnos);
    edadIngresada = parseInt(edadIngresada);
    while (isNaN(edadIngresada) || edadIngresada < 1)
    {
      edadIngresada = prompt("Error. Ingrese la edad #" + contadorAlumnos);
    }

    if (sexoIngresado != 'masculino')
    {
      if (banderaPrimerNotaFemeninoNoBinario = 'primero')
      {
        mayorNotaFemeninoNoBinario = notaIngresada;
        nombremayorNotaFemeninoNoBinario = nombreIngresado;
        banderaPrimerNotaFemeninoNoBinario = 'no es el primero'
      }
      else
      {
        if (notaIngresada > mayorNotaFemeninoNoBinario)
        {
          mayorNotaFemeninoNoBinario = notaIngresada;
          nombremayorNotaFemeninoNoBinario = nombreIngresado;
        }
      }
    }

    if (tipoIngresado == 'libre')
    {
      if (banderaPrimerTipoLibre = 'primero')
      {
        menorEdadLibre = edadIngresada;
        nombreMenorEdadLibre = nombreIngresado;
        banderaPrimerTipoLibre = 'no es el primero'

      }
      else
      {
        if (edadIngresada < menorEdadLibre)
        {
          menorEdadLibre = edadIngresada;
          nombreMenorEdadLibre = nombreIngresado;
        }
      }
    }

    switch (sexoIngresado)
    {
      case 'masculino':
        contadorMasculino++;
        acumuladorNotaMasculino = acumuladorNotaMasculino + notaIngresada;
        break;
      case 'femenino':
        contadorFemenino++;
        acumuladorNotaFemenino = acumuladorNotaFemenino + notaIngresada;
        break;
      case 'no binario':
        contadorNoBinario++;
        acumuladorNotaNoBinario = acumuladorNotaNoBinario + notaIngresada;
        break;
    }

    if (tipoIngresado != 'remota')
    {
      if (banderaPrimerTipoNoRemota = 'primero')
      {
        edadMasMateriasNoRemota = edadIngresada;
        nombreMasMateriasNoRemota = nombreIngresado;
        banderaPrimerTipoNoRemota = 'no es el primero'
      }
      else
      {
        if (cantidadMateriasIngresada > mayorCantidadMaterias)
        {
          edadMasMateriasNoRemota = edadIngresada;
          nombreMasMateriasNoRemota = nombreIngresado;
        }
      }
    }

    respuesta = prompt("Desea ingresar otro alumno? ");

  } while (respuesta == 'si')

  if (contadorNoBinario != 0 || contadorFemenino != 0)
  {
    document.write('<br>Nombre mejor promedio no masculino: ' + nombremayorNotaFemeninoNoBinario);
  }

  if (banderaPrimerTipoLibre != 'primero')
  {
    document.write('<br>El nombre del mas joven de los alumnos entre los que la dan libre es: ' + nombreMenorEdadLibre);
  }
  else
  {
    document.write('<br>No hay alumnos que cursen libre');
  }

  if (contadorFemenino != 0)
  {
    promedioNotaFemenino = acumuladorNotaFemenino / contadorFemenino;
    document.write('<br>El promedio de notas Femeninas es: ' + promedioNotaFemenino);
  }
  else
  {
    document.write('<br>No hay alumnas femeninas');
  }

  if (contadorMasculino != 0)
  {
    promedioNotaMasculino = acumuladorNotaMasculino / contadorMasculino;
    document.write('<br>El promedio de notas Masculinas es: ' + promedioNotaMasculino);
  }
  else
  {
    document.write('<br>No hay alumnos masculinos');
  }

  if (contadorNoBinario != 0)
  {
    promedioNotaNoBinario = acumuladorNotaNoBinario / contadorNoBinario;
    document.write('<br>El promedio de notas de los no binarios es: ' + promedioNotaNoBinario);
  }
  else
  {
    document.write('<br>No hay alumnos no binarios');
  }

}
