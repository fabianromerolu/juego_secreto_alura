// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Debes ingresar un nombre válido");
        return;
    }

    amigos.push(nombre);
    console.log(amigos)
    input.value = "";
    mostrarAmigos(); // Actualiza la lista después de agregar
}


function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    
    if (!lista) {
        console.error("No se encontró el elemento listaAmigos");
        return;
    }
    
    lista.innerHTML = "";

    if (amigos.length === 0) {
        lista.innerHTML = "<li>No hay amigos agregados</li>";
        return;
    }

    for (const amigo of amigos) {
        const li = document.createElement("li");
        li.className = "amigo-item"; // Para estilos CSS
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    const resultadoElemento = document.getElementById("resultado");
    
    // Validar elemento de resultado
    if (!resultadoElemento) {
        console.error("No se encontró el elemento para mostrar resultados");
        return;
    }

    // Validar amigos disponibles
    if (amigos.length === 0) {
        resultadoElemento.innerHTML = "<p class='error'>⚠️ Lista de amigos vacía</p>";
        return;
    }

    // Generar índice y mostrar resultado
    const indice = Math.floor(Math.random() * amigos.length);
    resultadoElemento.innerHTML = `
        <div class="sorteo-container">
            <h2>🎉 ¡Ganador! 🎉</h2>
            <p class="ganador">${amigos[indice]}</p>
            <small>De ${amigos.length} participantes</small>
        </div>
    `;
}