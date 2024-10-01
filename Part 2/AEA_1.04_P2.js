// Exercici 3
const preus = [100, 200, 300, 400];

const ex3 = () => {
    const newPreus = preus.map(preu => Number((preu * 1.10).toFixed(0)));
    
    const list = document.getElementById("metodeMap");
    const li = document.createElement("li");

    li.className = "liClass";
    li.innerHTML = newPreus

    list.appendChild(li);

    // Deshabilitar botón
    document.getElementById("button1").disabled = true;
}

// Exercici 4
const edats = [16, 21, 18, 24, 12, 30];

// Exercici 5
const notes = [7, 9, 5, 10, 8];