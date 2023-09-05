    
    
    const nombre = prompt("Ingresá tu nombre");
    const anioNacimiento = prompt("Ingresá tu año de nacimiento");

    const anioActual = 2023;
    const edad = anioActual - anioNacimiento;
    alert(nombre + ", tenes " + edad + " años.");

    let mayorEdad;
    if (edad >= 18) {
        mayorEdad = true;
    } else {
        mayorEdad = false;
    }
    if (mayorEdad) {
        alert("Podés realizar el cálculo.");
        } 
    else {
        alert("Sos menor, no podés realizar el cálculo.");
    }

// Calculo para saber Indicie de Masa Corporal

function IMC(peso, altura) {
    const resultado = peso / ((altura / 100) ** 2); 
    return resultado;
}

function calculoIMC() {
    const peso = parseInt(prompt("Ingresá tu peso (en kg):"));
    const altura = parseInt(prompt("Ingresá tu altura (en cm):"));
    const operacion = prompt("¿Quieres saber tu IMC? (Si/No)");

    if (operacion == "Si") {
        const resultado = IMC(peso, altura);
        let clasificacion;

        if (resultado < 18.5) {
            clasificacion = 'tu peso inferior a lo normal';
        } else if (resultado < 25) {
            clasificacion = 'te encuentras saludable';
        } else {
            clasificacion = 'tienes sobrepeso';
        }

        console.log("Tu IMC es " + resultado + ' y ' + clasificacion);
    } else if (operacion == "No") {
        console.log("Gracias.");
    } 
}

calculoIMC();




