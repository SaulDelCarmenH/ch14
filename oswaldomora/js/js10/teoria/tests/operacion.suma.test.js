operacion = require("../scripts/operaciones");
// Este archivo hará las pruebas unitarias para suma
//La function test, es donde se configura mi prueba unitaria
//test("comentario", function callback);

test ("Deberá sumar dos números positivos", ()=> {
    //expect(fncProbada).matcher();
    expect (operacion.suma(5,6)).toBe(11); 
})

test ("Debería sumar dos números negativos", ()=>{
    const suma = operacion.suma(-5,-8);
    expect(suma).toBe(-13);
});

test ("Debería sumar un positivo y un negativo", ()=>{
    const suma = operacion.suma(-10,5);
    expect(suma).toBe(-5);
});

test ("Debería sumar si un datos es númerico y otro tipo string", ()=>{
    const suma = operacion.suma(4,"5");
    expect(suma).toBe(9);
});

test ("Debería sumar si los dos números son de punto flotante", ()=>{
    const suma = operacion.suma(5.6,5.5);
    expect(suma).toBe(11.1);
});
