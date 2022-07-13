const operacion = require("../scripts/operaciones");

//Este archivo hará las pruebas unitarias para multiplica
//La función test es donde se configura mi prueba unitaria
//test ("comentario", function callBack con función flecha) 

test ("Deberá multiplicar dos números positivos", ()=>{

    //expect(fncProbada).matcher();
    expect(operacion.multiplica(5,6)).toBe(30);//Aquí se escribe el resultado que se espera de la función
    
});

/*******EJERCICIOS******Se modificó el código en operaciones.js, se agregó  return Number(a) + Number(b); antes solo estaba return a + b******/
test ("Debería multiplicar dos números negativos", ()=>{
    const multiplica = operacion.multiplica(-5,-8);
    expect(multiplica).toBe(40);
});

test ("Debería multiplicar un positivo y un negativo", ()=>{
    const multiplica = operacion.multiplica(-10,5);
    expect(multiplica).toBe(-50);
});

test ("Debería multiplicar si un datos es númerico y otro tipo string", ()=>{
    const multiplica = operacion.multiplica("4",5);
   
    expect(multiplica).toBe(20);
});

test ("Debería dar NaN si un número no es numérico", ()=>{
    const multiplica = operacion.multiplica("ey",5);
    expect(multiplica).toBe(NaN);
});

test ("Debería multiplicar si los dos números son de punto flotante", ()=>{
    const multiplica = operacion.multiplica(5.6,5.5);
    expect(multiplica).toBeCloseTo(30.8);
});

