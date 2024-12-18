function mostrarSeccion(seccion) {
    const contenido = document.getElementById("contenido");
    contenido.innerHTML = ""; 

    switch (seccion) {
        case 1:
            contenido.innerHTML = `
                <h2>Serie Fibonacci</h2>
                <form onsubmit="generarFibonacci(event)">
                    <label for="numeroFibonacci">Ingrese N:</label>
                    <input type="number" id="numeroFibonacci" required>
                    <button type="submit">Generar</button>
                </form>
                <div id="resultadoFibonacci"></div>
            `;
            break;
        case 2:
            contenido.innerHTML = `
                <h2>Verificar Número Primo</h2>
                <form onsubmit="verificarPrimo(event)">
                    <label for="numeroPrimo">Número:</label>
                    <input type="number" id="numeroPrimo" required>
                    <button type="submit">Verificar</button>
                </form>
                <div id="resultadoPrimo"></div>
            `;
            break;
        case 3:
            contenido.innerHTML = `
                <h2>Calculadora</h2>
                <form onsubmit="calcular(event)">
                    <label for="num1">Número 1:</label>
                    <input type="number" id="num1" required>
                    <label for="num2">Número 2:</label>
                    <input type="number" id="num2" required>
                    <select id="operacion" required>
                        <option value="sumar">Suma</option>
                        <option value="restar">Resta</option>
                        <option value="multiplicar">Multiplicación</option>
                        <option value="dividir">División</option>
                        <option value="potencial">Potencia</option>
                    </select>
                    <button type="submit">Calcular</button>
                </form>
                <div id="resultadoCalculadora"></div>
            `;
            break;
        case 4:
            contenido.innerHTML = `
                <h2>Verificar Palíndromo</h2>
                <form onsubmit="verificarPalindromo(event)">
                    <label for="cadenaPalindromo">Cadena:</label>
                    <input type="text" id="cadenaPalindromo" required>
                    <button type="submit">Verificar</button>
                </form>
                <div id="resultadoPalindromo"></div>
            `;
            break;
        case 5:
                contenido.innerHTML = `
                    <h2>Rotar Número</h2>
                    <form onsubmit="rotarNumero(event)">
                        <label for="numeroRotar">Número:</label>
                        <input type="number" id="numeroRotar" required>
                        <label for="direccion">Dirección:</label>
                        <select id="direccion" required>
                            <option value="derecha">Derecha</option>
                        </select>
                        <button type="submit">Rotar</button>
                    </form>
                    <div id="resultadoRotar"></div>
            `;
            break;

    }
}

// Funciones para cada ejercicio:

// 1. Serie Fibonacci
function generarFibonacci(event) {
    event.preventDefault();
    let n = parseInt(document.getElementById("numeroFibonacci").value);
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    document.getElementById("resultadoFibonacci").innerHTML = `Fibonacci hasta N: ${fib.join(', ')}`;
}

// 2. Verificar Número Primo
function verificarPrimo(event) {
    event.preventDefault();
    let numero = parseInt(document.getElementById("numeroPrimo").value);
    let esPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    document.getElementById("resultadoPrimo").innerHTML = esPrimo ? "Es primo" : "No es primo";
}

// 3. Calculadora
function calcular(event) {
    event.preventDefault();
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;
    switch (operacion) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            resultado = num1 / num2;
            break;
        case "potencial":
            resultado = num1 ^ num2;
            break;
    }
    document.getElementById("resultadoCalculadora").innerHTML = `Resultado: ${resultado}`;
}

// 4. Verificar Palíndromo
function verificarPalindromo(event) {
    event.preventDefault();
    let cadena = document.getElementById("cadenaPalindromo").value;
    let esPalindromo = cadena === cadena.split('').reverse().join('');
    document.getElementById("resultadoPalindromo").innerHTML = esPalindromo ? "Es un palíndromo" : "No es un palíndromo";
}

// 5. Rotar Número
function rotarNumero(event) {
    event.preventDefault();
    let numero = document.getElementById("numeroRotar").value;
    let direccion = document.getElementById("direccion").value;
    let rotado;
    if (direccion === "izquierda") {
        rotado = numero.slice(1) + numero[0];
    } else {
        rotado = numero[numero.length - 1] + numero.slice(0, -1);
    }
    document.getElementById("resultadoRotar").innerHTML = `Número Rotado: ${rotado}`;
}