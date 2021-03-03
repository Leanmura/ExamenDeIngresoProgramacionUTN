/*
Leandro Murakoshi 1:30hs
 Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza  (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
||
 */
function mostrar()
{
    let mascotaIngresada;
    let tipoPelajeIngresado;
    let edadMascotaIngresada;
    let razaIngresada;
    let nombreIngresado;
    let temperaturaCorporalIngresada;
    let estadoClinicoIngresado;
    let pesoIngresado;
    let respuesta;

    let contadorMascotas;
    let contadorGatos;
    let contadorOtros;
    let contadorPerros;
    let contadorEnfermos;
    let contadorAdopcion;
    let contadorInternados;

    let pesoMasPesado;
    let porcentajeEnfermos;
    let nombreUltimaMascotaOtraCosa;
    let menorTemperaturaCorporal;
    let nombrePerroMasPesado;
    let nombreSinPeloMenorTemperatura;
    let promedioTemperaturaGatos;
    let promedioTemperaturaOtros;
    let promedioTemperaturaPerros;
    let tipoMayorPromedioTemperatura;
    let totalGatosMasPerros;
    let porcentajeGatoMasPerro;
    let estadoClinicoMenorCantidad;
    let promedioPesoMascotas;
    let nombreGatoSinPeloMasLiviano;
    let razaGatoSinPeloMasLiviano;

    let acumuladorPesoMascotas;
    let acumuladorTemperaturasCorporalesGatos;
    let acumuladorTemperaturasCorporalesOtro;
    let acumuladorTemperaturasCorporalesPerros;

    let banderaPrimerPerroPeso;
    let banderaPrimerSinPelo;
    let banderaPrimerGatoSinPelo;


    banderaPrimerSinPelo = 'primero';
    banderaPrimerPerroPeso = 'primero';
    banderaPrimerGatoSinPelo = 'primero';

    contadorMascotas = 0;
    contadorGatos = 0;
    contadorOtros = 0;
    contadorPerros = 0;
    contadorEnfermos = 0;
    contadorInternados = 0;
    contadorAdopcion = 0;

    acumuladorTemperaturasCorporalesGatos = 0;
    acumuladorTemperaturasCorporalesOtro = 0;
    acumuladorTemperaturasCorporalesPerros = 0;
    acumuladorPesoMascotas = 0;

    do
    {
        contadorMascotas++;
        mascotaIngresada = prompt("Ingrese la mascota #" + contadorMascotas);
        while (isNaN(mascotaIngresada) == false || (mascotaIngresada != 'perro' && mascotaIngresada != 'gato' && mascotaIngresada != 'otra cosa'))
        {
            mascotaIngresada = prompt("Error. Ingrese la mascota #" + contadorMascotas);
        }

        tipoPelajeIngresado = prompt("Ingrese el tipo de pelaje #" + contadorMascotas);
        while (isNaN(tipoPelajeIngresado) == false || (tipoPelajeIngresado != 'corto' && tipoPelajeIngresado != 'largo' && tipoPelajeIngresado != 'sin pelo'))
        {
            tipoPelajeIngresado = prompt("Error. Ingrese el tipo de pelaje #" + contadorMascotas);
        }

        edadMascotaIngresada = prompt("Ingrese la edad de la mascota #" + contadorMascotas);
        edadMascotaIngresada = parseInt(edadMascotaIngresada);
        while (isNaN(edadMascotaIngresada) || edadMascotaIngresada < 0)
        {
            edadMascotaIngresada = prompt("Error. Ingrese la edad de la mascota #" + contadorMascotas);
        }

        nombreIngresado = prompt("Ingrese el nombre de la mascota #" + contadorMascotas);
        while (isNaN(nombreIngresado) == false)
        {
            nombreIngresado = prompt("Error. Ingrese el nombre de la mascota #" + contadorMascotas);
        }

        razaIngresada = prompt("Ingrese la raza de la mascota #" + contadorMascotas);
        while (isNaN(razaIngresada) == false)
        {
            razaIngresada = prompt("Error. Ingrese la raza de la mascota #" + contadorMascotas);
        }

        pesoIngresado = prompt("Ingrese el peso de la mascota #" + contadorMascotas);
        pesoIngresado = parseInt(pesoIngresado);
        while (isNaN(pesoIngresado) || pesoIngresado < 0)
        {
            pesoIngresado = prompt("Error. Ingrese el peso de la mascota #" + contadorMascotas);
        }

        estadoClinicoIngresado = prompt("Ingrese el estado clinico #" + contadorMascotas);
        while (isNaN(estadoClinicoIngresado) == false || (estadoClinicoIngresado != 'enfermo' && estadoClinicoIngresado != 'internado' && estadoClinicoIngresado != 'adopcion'))
        {
            estadoClinicoIngresado = prompt("Error. Ingrese el estado clinico #" + contadorMascotas);
        }

        temperaturaCorporalIngresada = prompt("Ingrese la temperatura corporal de la mascota #" + contadorMascotas);
        temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
        while (isNaN(temperaturaCorporalIngresada))
        {
            temperaturaCorporalIngresada = prompt("Error. Ingrese la temperatura corporal de la mascota #" + contadorMascotas);
        }

        console.log(mascotaIngresada);
        console.log(tipoPelajeIngresado);
        console.log(edadMascotaIngresada);
        console.log(razaIngresada);
        console.log(nombreIngresado);
        console.log(temperaturaCorporalIngresada);
        console.log(estadoClinicoIngresado);
        console.log(pesoIngresado);

        if (banderaPrimerSinPelo == 'primero' && tipoPelajeIngresado == 'sin pelo')
        {
            menorTemperaturaCorporal = temperaturaCorporalIngresada;
            nombreSinPeloMenorTemperatura = nombreIngresado;
            banderaPrimerSinPelo = 'no es el primro';
        }
        else
        {
            if (tipoPelajeIngresado == 'sin pelo' && temperaturaCorporalIngresada < menorTemperaturaCorporal)
            {
                menorTemperaturaCorporal = temperaturaCorporalIngresada;
                nombreSinPeloMenorTemperatura = nombreIngresado;
            }
        }

        switch (mascotaIngresada)
        {
            case 'perro':
                acumuladorTemperaturasCorporalesPerros = acumuladorTemperaturasCorporalesPerros + temperaturaCorporalIngresada;
                contadorPerros++;
                if (banderaPrimerPerroPeso == 'primero')
                {
                    pesoMasPesado = pesoIngresado;
                    nombrePerroMasPesado = nombreIngresado;
                    banderaPrimerPerroPeso = 'no es el primero';
                }
                else
                {
                    if (pesoIngresado > pesoMasPesado)
                    {
                        pesoMasPesado = pesoIngresado;
                        nombrePerroMasPesado = nombreIngresado;
                    }
                }
                break;
            case 'gato':
                acumuladorTemperaturasCorporalesGatos = acumuladorTemperaturasCorporalesGatos + temperaturaCorporalIngresada;
                contadorGatos++;
                if (banderaPrimerGatoSinPelo == 'primero' && tipoPelajeIngresado == 'sin pelo')
                {
                    menorPesoSinPelo = pesoIngresado;
                    nombreGatoSinPeloMasLiviano = nombreIngresado;
                    razaGatoSinPeloMasLiviano = razaIngresada;
                    banderaPrimerSinPelo = 'no es el primero';
                }
                else
                {
                    if (tipoPelajeIngresado == 'sin pelo' && pesoIngresado < menorPesoSinPelo)
                    {
                        menorPesoSinPelo = pesoIngresado;
                        nombreGatoSinPeloMasLiviano = nombreIngresado;
                        razaGatoSinPeloMasLiviano = razaIngresada;
                    }
                }

                break;
            default:
                acumuladorTemperaturasCorporalesOtro = acumuladorTemperaturasCorporalesOtro + temperaturaCorporalIngresada;
                contadorOtros++;
                nombreUltimaMascotaOtraCosa = nombreIngresado;
        }

        switch (estadoClinicoIngresado)
        {
            case 'adopcion':
                contadorAdopcion++;
                break;
            case 'enfermo':
                contadorEnfermos++;
                break;
            case 'internado':
                contadorInternados++;
                break;
        }

        acumuladorPesoMascotas = acumuladorPesoMascotas + pesoIngresado;

        respuesta = prompt('Desea ingresar otra mascota?');
    } while (respuesta == 'si')

    porcentajeEnfermos = contadorEnfermos * 100 / contadorMascotas;

    promedioTemperaturaGatos = acumuladorTemperaturasCorporalesGatos / contadorGatos;
    promedioTemperaturaPerros = acumuladorTemperaturasCorporalesPerros / contadorPerros;
    promedioTemperaturaOtros = acumuladorTemperaturasCorporalesOtro / contadorOtros;

    if (promedioTemperaturaGatos > promedioTemperaturaPerros && promedioTemperaturaGatos > promedioTemperaturaOtros)
    {
        tipoMayorPromedioTemperatura = 'gato';
    }
    else
    {
        if (promedioTemperaturaPerros > promedioTemperaturaOtros)
        {
            tipoMayorPromedioTemperatura = 'perro';
        }
        else
        {
            tipoMayorPromedioTemperatura = 'otro';
        }
    }

    totalGatosMasPerros = contadorGatos + contadorPerros;
    porcentajeGatoMasPerro = totalGatosMasPerros * 100 / contadorMascotas;

    if (contadorAdopcion < contadorEnfermos && contadorAdopcion < contadorInternados)
    {
        estadoClinicoMenorCantidad = 'adopcion';
    }
    else
    {
        if (contadorEnfermos < contadorInternados)
        {
            estadoClinicoMenorCantidad = 'enfermo';
        }
        else
        {
            estadoClinicoMenorCantidad = 'internado';
        }
    }

    promedioPesoMascotas = acumuladorPesoMascotas / contadorMascotas;

    if (contadorPerros != 0)
    {
        console.log("El perro mas pesado es: " + nombrePerroMasPesado);
    }
    else
    {
        console.log("No hay perros");
    }
    console.log("Porcentaje de enfermos: " + porcentajeEnfermos);
    if (contadorOtros != 0)
    {
        console.log("Nombre de la ultima mascota de tipo otra cosa: " + nombreUltimaMascotaOtraCosa);
    }
    else
    {
        console.log("No hay mascotas de tipo otra cosa: ");
    }

    if (banderaPrimerSinPelo != 'primero')
    {
        console.log("Nombre del animal sin pelo con menor temperatura corporal: " + nombreSinPeloMenorTemperatura);
    }
    else
    {
        console.log("No hay animales sin pelo");

    }
    console.log("Tipo de mascota con mayor promedio de temperatura: " + tipoMayorPromedioTemperatura);
    console.log("Procentaje de gatos mas perros: " + porcentajeGatoMasPerro);
    console.log("El estado clinico con menor cantidad de mascotas es: " + estadoClinicoMenorCantidad);
    console.log("Promedio de peso de todas las mascotas: " + promedioPesoMascotas);
    if (banderaPrimerGatoSinPelo != 'primero')
    {
        console.log("Nombre del gato sin pelos mas liviano: " + nombreGatoSinPeloMasLiviano + " y su raza es " + razaGatoSinPeloMasLiviano);
    }
    else
    {
        console.log("No hay gatos sin pelo")
    }
}
