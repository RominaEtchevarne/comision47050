    
    
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
    const resultado = peso / ((altura / 100) ** 2); // Convert altura to meters
    return resultado;
}

function calculoIMC() {
    const peso = parseFloat(prompt("Ingresá tu peso (en kg):"));
    const altura = parseFloat(prompt("Ingresá tu altura (en cm):"));
    const operacion = prompt("¿Quieres saber tu IMC? (Si/No)");

    if (operacion == "si") {
        const resultado = IMC(peso, altura);
        let clasificacion;

        if (resultado < 18.5) {
            clasificacion = 'peso inferior a lo normal';
        } else if (resultado < 25) {
            clasificacion = 'te encuentras saludable';
        } else {
            clasificacion = 'tienes sobrepeso';
        }

        console.log("Tu IMC es " + resultado + ' y tu ' + clasificacion);
    } else if (operacion == 'no') {
        console.log("Gracias por visitarnos.");
    } 
}

calculoIMC();




