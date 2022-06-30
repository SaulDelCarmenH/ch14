/**
 * SCRIPT para dar funcionalidad a tabla que adivina
 * la fecha de un día dado en campos de input, por un_ USER,
 * realizado por jatg-eca, abue, el 30/05/22 @GenerationMx
 **/
//console.log("Link");

//Se declaran variables para mes, anio y día, obtenidas de input value

//Se ponen números en enteros, para evitar que pongan decimales
//parseInt();

//Se utiliza una función que cambia a string el mes del USER
//switchMonth(var2);

//Se concatenan las tres variables y se pasan a new Date, para obtener la fecha
//let userDate = new Date("" + var1 + var2 + var3);

//Se obtiene el número del día de la semana en la fecha dada
//let dayOFWeek = userDate.getDay();

//Se realiza una función que decide la info del day of week, y muestra el resultado en pantalla
//switchDay(dayOfWeek);

//Se revisa con un concatenador ternario si es dia laboral o fin de semana, y muestra el resultado en pantalla
// (dayOfWeek == 7 || dayOfWeek == 8) ? result.value="Fin de semana" : result.value="Día laboral";

//Funciones que se utilizan con hoisting
//Se ponen funciones abajo porque son varias lineas de código. Se aprovecha el hoisting para hacer el código legible


function switchMonth (month) {
switch(month) {
    case 0:
    case 00:
     {
        month="January";
        break;
    }
    case 1:
    case 01: {
        console.log("February");
        break;
    }
    case 2:
    case 02: {
        console.log("March");
        break;
    }
    case 3:
    case 03: {
        console.log("April");
        break;
    }
    case 4:
    case 04: {
        console.log("May");
        break;
    }
    case 5:
    case 05: {
        console.log("June");
        break;
    }
    case 6:
    case 06: {
        console.log("July");
        break;
    }
    case 7:
    case 07: {
        console.log("August");
        break;
    }
    case 8:
    case 08: {
        console.log("September");
        break;
    }
    case 9:
    case 09: {
        console.log("October");
        break;
    }
    case 10: {
        console.log("November");
        break;
    }
    case 11: {
        console.log("December");
        break;
    }
    default:
        console.log("No pude leer ese número. ¿podemos poner otro?");
        break;
}
}

function switchDay(day) {
switch(day) {
    case 1: {
        console.log("Lunes, día laborable");
        break;
    }
    case 2: {
        console.log("Martes, día laborable");
        break;
    }
    case 3: {
        console.log("Miércoles, día laborable");
        break;
    }
    case 4: {
        console.log("Jueves, día laborable");
        break;
    }
    case 5: {
        console.log("Viernes, día laborable");
        break;
    }
    case 6: {
        console.log("Sábado, fin de semana");
        break;
    }
    case 0: {
        console.log("Domingo, fin de semana");
        break;
    }
    default:
        console.log("Creo que falta cambiar algo en las fechas. \
        ¿Podemos volver a llenar con números?");
        break;
}
}