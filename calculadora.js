    
    
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


    function IMC(peso, altura) {
        const resultado = peso / (altura *2); 
        return resultado;
    }
    
    function calculoIMC() {
        const peso = parseInt(prompt("Ingresá tu peso (en kg):"));
        const altura = parseInt(prompt("Ingresá tu altura (en cm):"));
    
        if ((peso) || (altura)) {
            console.log("Por favor, ingresa valores válidos.");
            return;
        }
    
        const operacion = prompt("¿Quieres saber tu IMC? (Si/No)");
    
        if (operacion()) {
            const resultado = IMC(peso, altura);
            let clasificacion;
    
            if (resultado < 18.5) {
                clasificacion = 'peso inferior al normal';
            } else if (resultado < 25) {
                clasificacion = 'estás saludable';
            } else {
                clasificacion = 'tienes sobrepeso';
            }
    
            console.log("Tu IMC es " + resultado.toFixed(2) + ' y tu ' + clasificacion);
        } else {
            console.log("Gracias por visitarnos.");
        }
    }
    
    calculoIMC();
    

