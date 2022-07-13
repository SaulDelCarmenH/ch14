console.log("Sesión JS04");

//Como definir un arreglo ********************
let miArreglo = ["dato String", false, 23, true];
console.log(miArreglo);
console.log(miArreglo.toString()); //Convertir el arreglo a string
console.log(miArreglo.join("-"));

//Eliminar el último dato del arreglo y pasarlo a una variable**
const frutas =["mango", "plátano", "melón", "guanábana", "aguacate", "kiwi"];
let fruta = frutas.pop(); //Se elimina el último elemento del arreglo y devuelve el elemento eliminado.
console.log(frutas.join(" * "));
console.log("Frata eliminada " + fruta ); //Con let fruta retorna cual fue el eliminado

//Agregar un elemento al final del arreglo *********************
console.log (frutas.push("uvas")); //Agregamos el elemento al final del arreglo y devuelve la longitud del arreglo.
console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada " + fruta);
//Agregar un elemento al inicio del arreglo *************************
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));

//Métodos que se utilizarían para hacer un FIFO en arreglo
/**
 * FIFO - First In First Out (PEPS): push -> shift
 * []
 * [a]
 * [a,b]
 * [a,b,c]
 *   i   0,1,2,3      0,1,2,3,4      
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO - Last In First Out (UEPS): push -> pop
 * []
 * [a]
 * [a,b]
 * [a,b,c]
 *   i   0,1,2,3      0,1,2,3,4      
 *      [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d]
 */

/**
 * for ([initialization]; [condition]; [final-expression])
 * statement
 */
for (let index = 0; index<10; index = index + 1 ) console.log(index);
//console.log("El valor de index " + index); //Esto no está en el alcance de la variable
console.log("Instrucción al final del for");
//----------------------------------------------------------
for(var maga = 0; maga<5; maga = maga + 1){
    console.log(maga);
}
console.log("valor de MAGA " + maga); //Esto no está en el alcance de la variable
//----------------------------------------------------------
for (let index = 10; index>0; index = index - 1) console.log(index);
//----------------------------------------------------------
//index = index + 1 -> index++;
//Utilizar dos variables en mi ciclo for 
let index = 0, a = 0;
for (   ; index < 3 ; index++, a+=2) {
    console.log (a , index); //0 -0 //2 - 1//4 - 2//No cumple 6 - 3
}
console.log(`final index ${index} - ${a}`); //6 - 3

// El ciclo for, puede no llevar parámetros de inicialización, evaluación y expresión final
index = 0;
for (   ; ; ) {
    if (index>3) break;
    console.log (index); 
    index++;
}
//El ciclo for podría no tener un cuerpo (bloque) de instrucciones
let i = 0
for(; i<100; i++);
console.log(i);

/**
 * Sintaxis del ciclo While
 * while(condition)
 * statement
 */
/*
i=0;
while ( !confirm("¿tu número es " + i + " ?") ) {
console.log("Su numero no es " + i);//Aparece ventana para aceptar y cancelar
i++;
}
console.log("Su número es " + i);
*/
console.log("\n ------------------"); //Para salto de línea
i=0;
while (i<10) {
    if (i==5)break;
    console.log("Valor de i en while " + i);
    i++;
}

//El hermano de While, se llama Do-While+++++++++++++++++++++++//While pregunta primero, se ejecuta mientras sea verdadera, Do-While hace el ciclo y después pregunta si quieres que lo siga haciendo.
/**
 * Sintaxis del ciclo Do-While
 * do {
 * code block to be executed
 * } while (condition);
 */
let numConciertos = 1;
do{
console.log("Veces que fui al concierto? " + numConciertos);
numConciertos++;
} while ( confirm ("¿Puedo ir al concierto? "));

let numMuseo = 1;
while ( confirm ("¿Puedo ir al museo? ")){
    console.log("Veces que fui al museo " + numMuseo);
    numMuseo++;
}
let resultado = suma (4,3);
/** 
 * Suma dos números y devuelve el resultado
 * @param {number} a primer número a sumar
 * @param {number} b segundo número a sumar
 * @returns suma de a + b
*/
function suma(a , b){
    return a + b;
} console.log("El resultado es " + resultado);

//Formas de interar un arreglo
const carros = ["VW","Audi","Seat","BMW"];
//Usando estructura for
for(let i=0; i<carros.length; i++) console.log("Con for " + carros[i]);
//Usando forEach
carros.forEach((auto) => console.log("Con for-each "+ auto));
//Usando for in
for (let auto in carros) console.log("Con for-in " + carros[auto]);
//Usando for of
for (let auto of carros) console.log("Con for-of " + auto);

//Arreglos de dos dimensiones
const cohortes = [ 
    ["Marihan", "Adrian", "Gustavo", "OLlin"] , 
    ["Miri", "Emiliano", "TuTiaAbi"]];
                // [F]eliz [C]umpleaños
console.log(cohortes[0]); // Primer corchete fila, segunda columna.
/**
 * Marihan
 * Adrian
 * Guatavo
 * Miri
 * Emiliano
 * TuTiaAbi
 */

//Con for 
for(let i=0;i<cohortes.length;i++) {
    for(let j=0;j<cohortes[i].length;j++){
        console.log("Con for " + cohortes[i][j]);
    }
}
//Con forEach
cohortes.forEach( fila => fila.forEach(columna=>console.log("Con for-each " +columna)));
//Con for-in
for(let fila in cohortes) {
    for (let columna in cohortes[fila])console.log("Con for-in " + cohortes[fila][columna]);
}
//Con for-of
for (let fila of cohortes){
    for (let columna of fila)console.log("Con for-of " + columna)
}