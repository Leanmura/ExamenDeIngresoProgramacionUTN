/* 2- 
"super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado */
function mostrar()
{
    let respuesta;
    let tipoIngresado;
    let nombreIngresado;
    let importeIngresado;
    let procedenciaIngresada;
    let pesoIngresado;

    let contadorTotal;
    let contadorComestible;
    let contadorLimpieza;
    let contadorOtros;
    let contadorElaborados;

    let banderaPrimerProducto;
    let banderaPrimerComestible;
    let banderaPrimerProductoElaborado;

    let menorPrecio;
    let mayorPrecio;
    let nombreProductoMasBaratoElaborado;
    let nombreProductoMasCaro;
    let nombreMasPesadoComestible;
    let tipoProductoMasCantidad;
    let porcentajeElaborados;

    let acumuladorPesoOtros;
    let acumuladorPesoComestible;
    let acumuladorPesoLimpieza;

    banderaPrimerComestible = 'primero';
    banderaPrimerProducto = 'primero';
    banderaPrimerProductoElaborado = 'primero';

    contadorTotal = 0;
    contadorComestible = 0;
    contadorLimpieza = 0;
    contadorOtros = 0;
    contadorElaborados = 0;

    acumuladorPesoComestible = 0;
    acumuladorPesoLimpieza = 0;
    acumuladorPesoOtros = 0;

    do
    {
        contadorTotal++;
        tipoIngresado = prompt("Ingrese el tipo de producto: #" + contadorTotal);
        while (isNaN(tipoIngresado) == false || tipoIngresado != 'limpieza' && tipoIngresado != 'comestible' && tipoIngresado != 'otros')
        {
            tipoIngresado = prompt("Error. Ingrese el tipo de producto: #" + contadorTotal);
        }

        nombreIngresado = prompt("Ingrese el nombre del producto: #" + contadorTotal);
        while (isNaN(nombreIngresado) == false)
        {
            nombreIngresado = prompt("Error. Ingrese el nombre del producto: #" + contadorTotal);
        }

        importeIngresado = prompt("Ingrese el precio del producto: #" + contadorTotal);
        importeIngresado = parseInt(importeIngresado);
        while (isNaN(importeIngresado) || importeIngresado < 0 || importeIngresado > 1000)
        {
            importeIngresado = prompt("Error. Ingrese el precio del producto: #" + contadorTotal);
        }

        procedenciaIngresada = prompt("Ingrese la procedencia del producto: #" + contadorTotal);
        while (isNaN(procedenciaIngresada) == false || procedenciaIngresada != 'importado' && procedenciaIngresada != 'nacional' && procedenciaIngresada != 'elaborado')
        {
            procedenciaIngresada = prompt("Error. Ingrese la procedencia del producto: #" + contadorTotal);
        }

        pesoIngresado = prompt("Ingrese el peso del producto: #" + contadorTotal);
        pesoIngresado = parseInt(pesoIngresado);
        while (isNaN(pesoIngresado) || pesoIngresado < 0 || pesoIngresado > 30)
        {
            pesoIngresado = prompt("Error. Ingrese el peso del producto: #" + contadorTotal);
        }


        console.log(tipoIngresado);
        console.log(nombreIngresado);
        console.log(importeIngresado);
        console.log(procedenciaIngresada);
        console.log(pesoIngresado);

        switch (tipoIngresado)
        {
            case 'limpieza':
                contadorLimpieza++;
                acumuladorPesoLimpieza = acumuladorPesoLimpieza + pesoIngresado;
                break;
            case 'comestible':
                contadorComestible++;
                acumuladorPesoComestible = acumuladorPesoComestible + pesoIngresado;
                if (banderaPrimerComestible == 'primero')
                {
                    mayorPesoComestible = pesoIngresado;
                    nombreMasPesadoComestible = nombreIngresado;
                    banderaPrimerComestible = 'no e el primero';
                }
                else
                {
                    if (pesoIngresado > mayorPesoComestible)
                    {
                        mayorPesoComestible = pesoIngresado;
                        nombreMasPesadoComestible = nombreIngresado;
                    }
                }
                break;
            default:
                acumuladorPesoOtros = acumuladorPesoOtros + pesoIngresado;
                contadorOtros++;
        }

        if (banderaPrimerProducto == 'primero')
        {
            mayorPrecio = importeIngresado;
            nombreProductoMasCaro = nombreIngresado;
            banderaPrimerProducto = 'no es el primero';
        }
        else
        {
            if (importeIngresado > mayorPrecio)
            {
                mayorPrecio = importeIngresado;
                nombreProductoMasCaro = nombreIngresado;
            }
        }

        if (procedenciaIngresada == 'elaborado')
        {
            contadorElaborados++;
            if (banderaPrimerProductoElaborado == 'primero')
            {
                menorPrecio = importeIngresado;
                nombreProductoMasBaratoElaborado = nombreIngresado;
                banderaPrimerProductoElaborado = 'no es el primero';
            }
            else
            {
                if (importeIngresado < menorPrecio)
                {
                    menorPrecio = importeIngresado;
                    nombreProductoMasBaratoElaborado = nombreIngresado;
                }
            }
        }
        respuesta = prompt('Desea ingresar otro producto?');

    } while (respuesta == 'si')

    if (banderaPrimerComestible != 'primero')
    {
        document.write('Nombre del mas pesado de los comestibles: ' + nombreMasPesadoComestible);
        promedioPesoComestible = acumuladorPesoComestible / contadorComestible;
        document.write('<br>Promedio de pesos de los prodcutos comestibles: ' + promedioPesoComestible);
    }
    else
    {
        document.write('<br>No hay productos comestibles.');
    }

    if (contadorLimpieza != 0)
    {
        promedioPesoLimpieza = acumuladorPesoLimpieza / contadorLimpieza;
        document.write('<br>Promedio de pesos de los prodcutos de limpieza: ' + promedioPesoLimpieza);
    }
    else
    {
        document.write('<br>No hay productos de limpieza.');
    }

    if (contadorOtros != 0)
    {
        promedioPesoOtros = acumuladorPesoOtros / contadorOtros;
        document.write('<br>Promedio de pesos de los prodcutos Otros: ' + promedioPesoOtros);
    }
    else
    {
        document.write('<br>No hay productos Otros.');
    }

    document.write('<br>Nombre del mas caro de todos los productos: ' + nombreProductoMasCaro);

    if (banderaPrimerProductoElaborado != 'primero')
    {
        document.write('<br>Nombre del mas barato de los productos elaborados: ' + nombreProductoMasBaratoElaborado);
        porcentajeElaborados = contadorElaborados * 100 / contadorTotal;
        document.write('<br>Porcentaje de productos elaborados: ' + porcentajeElaborados + '%');
    }
    else
    {
        document.write('<br>No hay productos elaborados.');
    }

    if (contadorLimpieza > contadorComestible && contadorLimpieza > contadorOtros)
    {
        tipoProductoMasCantidad = 'limpieza';
    }
    else
    {
        if (contadorComestible > contadorOtros)
        {
            tipoProductoMasCantidad = 'comestible';
        }
        else
        {
            tipoProductoMasCantidad = 'otros';
        }
    }

    document.write('<br>Tipo de mercaderia que mas aparece: ' + tipoProductoMasCantidad);


}
