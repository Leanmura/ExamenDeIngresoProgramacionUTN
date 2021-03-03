/* 
Leandro Murakoshi no entregado
pedir el ingreso de 10 mascotas
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) 
y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza */
function mostrar()
{
    let contador;
    let tipoIngresado;
    let razaIngresda;
    let edadIngresada;
    let nombreIngresado;

    let banderaPrimerGato;
    let banderaPrimerPerro;
    let banderaPrimerPajaro;
    let banderaPrimerOtro;

    let acumuladorEdadGenerico;
    let acumuladorEdadPeterbald;
    let acumuladorEdadSiames;
    let acumuladorEdadTurco;

    let contadorGenerico;
    let contadorPeterbald;
    let contadorSiames;
    let contadorTurco;

    let perroMayorEdad;
    let gatoMayorEdad;
    let pajaroMayorEdad;
    let otroMayorEdad;

    let nombreGatoMayorEdad;
    let nombreOtroMayorEdad;
    let nombrePajaroMayorEdad;
    let nombrePerroMayorEdad;

    let promedioEdadRazaGatosMasCantidad;
    let acumuladorEdadRazaGatosMasCantidad;
    let contadorEdadRazaGatosMasCantidad;
    let razaGatosMasAnimales;

    banderaPrimerGato = 'primero';
    banderaPrimerPerro = 'primero';
    banderaPrimerPajaro = 'primero';
    banderaPrimerOtro = 'primero';

    contadorGenerico = 0;
    contadorPeterbald = 0;
    contadorSiames = 0;
    contadorTurco = 0;
    contador = 0;

    acumuladorEdadGenerico = 0;
    acumuladorEdadPeterbald = 0;
    acumuladorEdadSiames = 0;
    acumuladorEdadTurco = 0;

    for (contador = 0; contador < 3; contador++)
    {
        tipoIngresado = prompt("Ingrese el tipo de animal(gato, perro, pajaro o otros): #" + (contador + 1));
        while (isNaN(tipoIngresado) == false || tipoIngresado != 'gato' && tipoIngresado != 'perro' && tipoIngresado != 'pajaro' && tipoIngresado != 'otros')
        {
            tipoIngresado = prompt("Error. Ingrese el tipo de animal(gato, perro, pajaro o otros): #" + (contador + 1));
        }

        razaIngresda = prompt("Ingrese la raza del " + tipoIngresado + ": ");
        while (isNaN(razaIngresda) == false || (tipoIngresado == 'perro' && razaIngresda != 'pastor' && razaIngresda != 'toy' && razaIngresda != 'callejero') || tipoIngresado == 'gato' && razaIngresda != 'siames' && razaIngresda != 'turco' && razaIngresda != 'peterbald' && razaIngresda != 'generico')
        {
            razaIngresda = prompt("Error. Ingrese la raza del " + tipoIngresado + ": #" + (contador + 1));
        }

        edadIngresada = prompt("Ingrese la edad del animal: #" + (contador + 1));
        edadIngresada = parseInt(edadIngresada);
        while (isNaN(edadIngresada) || ((tipoIngresado == 'perro' || tipoIngresado == 'gato') && (edadIngresada < 1 || edadIngresada > 20)) || (tipoIngresado == 'otros' && (edadIngresada < 1 || edadIngresada > 100)) || ((tipoIngresado == 'pajaro') && (edadIngresada < 1 || edadIngresada > 50)))
        {
            edadIngresada = prompt("Error. Ingrese la edad del animal: #" + (contador + 1));
        }

        nombreIngresado = prompt("Ingrese el nombre del " + tipoIngresado + ": ");
        while (isNaN(nombreIngresado) == false)
        {
            nombreIngresado = prompt("Error. Ingrese el nombre del " + tipoIngresado + ": #" + (contador + 1));
        }

        switch (tipoIngresado)
        {
            case 'gato':
                if (banderaPrimerGato == 'primero')
                {
                    gatoMayorEdad = edadIngresada;
                    nombreGatoMayorEdad = nombreIngresado;
                    banderaPrimerGato = 'no es el primero';
                }
                else
                {
                    if (edadIngresada > gatoMayorEdad)
                    {
                        gatoMayorEdad = edadIngresada;
                        nombreGatoMayorEdad = nombreIngresado;
                    }
                }

                switch (razaIngresda)
                {
                    case 'siames':
                        acumuladorEdadSiames = acumuladorEdadSiames + edadIngresada;
                        contadorSiames++;
                        break;
                    case 'turco':
                        acumuladorEdadTurco = acumuladorEdadTurco + edadIngresada;
                        contadorTurco++;
                        break;
                    case 'peterbald':
                        acumuladorEdadPeterbald = acumuladorEdadPeterbald + edadIngresada;
                        contadorPeterbald++;
                        break;
                    case 'generico':
                        acumuladorEdadGenerico = acumuladorEdadGenerico + edadIngresada;
                        contadorGenerico++;
                }
                break;
            case 'perro':
                if (banderaPrimerPerro == 'primero')
                {
                    perroMayorEdad = edadIngresada;
                    nombrePerroMayorEdad = nombreIngresado;
                    banderaPrimerPerro = 'no es el primero';
                }
                else
                {
                    if (edadIngresada > perroMayorEdad)
                    {
                        perroMayorEdad = edadIngresada;
                        nombrePerroMayorEdad = nombreIngresado;
                    }
                }
                break;
            case 'pajaro':
                if (banderaPrimerPajaro == 'primero')
                {
                    pajaroMayorEdad = edadIngresada;
                    nombrePajaroMayorEdad = nombreIngresado;
                    banderaPrimerPajaro = 'no es el primero';
                }
                else
                {
                    if (edadIngresada > pajaroMayorEdad)
                    {
                        pajaroMayorEdad = edadIngresada;
                        nombrePajaroMayorEdad = nombreIngresado;
                    }
                }
                break;
            default:
                if (banderaPrimerOtro == 'primero')
                {
                    otroMayorEdad = edadIngresada;
                    nombreOtroMayorEdad = nombreIngresado;
                    banderaPrimerOtro = 'no es el primero';
                }
                else
                {
                    if (edadIngresada > otroMayorEdad)
                    {
                        otroMayorEdad = edadIngresada;
                        nombreOtroMayorEdad = nombreIngresado;
                    }
                }
        }

        console.log(tipoIngresado);
        console.log(razaIngresda);
        console.log(edadIngresada);
        console.log(nombreIngresado);

    }
    console.log(contadorSiames);
    console.log(acumuladorEdadSiames);

    if (contadorTurco > contadorSiames && contadorTurco > contadorPeterbald && contadorTurco > contadorGenerico)
    {
        contadorEdadRazaGatosMasCantidad = contadorTurco;
        acumuladorEdadRazaGatosMasCantidad = acumuladorEdadTurco;
        razaGatosMasAnimales = 'turco';
    }
    else
    {
        if (contadorSiames > contadorPeterbald && contadorSiames > contadorGenerico)
        {
            contadorEdadRazaGatosMasCantidad = contadorSiames;
            acumuladorEdadRazaGatosMasCantidad = acumuladorEdadSiames;
            razaGatosMasAnimales = 'siames';
        }
        else
        {
            if (contadorPeterbald > contadorGenerico)
            {
                contadorEdadRazaGatosMasCantidad = contadorPeterbald;
                acumuladorEdadRazaGatosMasCantidad = acumuladorEdadPeterbald;
                razaGatosMasAnimales = 'petebald';
            }
            else
            {
                contadorEdadRazaGatosMasCantidad = contadorGenerico;
                acumuladorEdadRazaGatosMasCantidad = acumuladorEdadGenerico;
                razaGatosMasAnimales = 'generico';
            }
        }
    }

    promedioEdadRazaGatosMasCantidad = acumuladorEdadRazaGatosMasCantidad / contadorEdadRazaGatosMasCantidad;

    if (banderaPrimerPerro != 'primero')
    {
        document.write('Nombre del perro mas viejo: ' + nombrePerroMayorEdad);
    }
    else
    {
        document.write('No hay perros')
    }

    if (banderaPrimerGato != 'primero')
    {
        document.write('<br>Nombre del gato mas viejo: ' + nombreGatoMayorEdad);
        document.write('<br>Raza de gatos con mas animales: ' + razaGatosMasAnimales);
        document.write('<br>Promedio de edad de los ' + razaGatosMasAnimales + ': ' + promedioEdadRazaGatosMasCantidad);
    }
    else
    {
        document.write('<br>No hay gatos')
    }

    if (banderaPrimerPajaro != 'primero')
    {
        document.write('<br>Nombre del pajaro mas viejo: ' + nombrePajaroMayorEdad);
    }
    else
    {
        document.write('<br>No hay pajaros')
    }

    if (banderaPrimerOtro != 'primero')
    {
        document.write('<br>Nombre del otro mas viejo: ' + nombreOtroMayorEdad);
    }
    else
    {
        document.write('<br>No hay otros')
    }
}
