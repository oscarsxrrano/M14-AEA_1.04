// Exercici 3
const preus = [100, 200, 300, 400];

const ex3 = () => {
    const newPreus = preus.map(preu => Number((preu * 1.10).toFixed(0)));

    const list = document.getElementById("metodeMap");
    const li = document.createElement("li");

    li.className = "liClass";
    li.innerHTML = newPreus.join("€ - ");

    list.appendChild(li);

    // Deshabilitar botón
    document.getElementById("button1").disabled = true;
}

// Exercici 4
const edats = [16, 21, 18, 24, 12, 30];

const ex4 = () => {
    const majorsEdat = edats.filter(edat => edat > 18);

    const list = document.getElementById("metodeFilter");
    const li = document.createElement("li");

    li.className = "liClass";
    li.innerHTML = majorsEdat.join(", ");


    list.appendChild(li);

    // Deshabilitar botón
    document.getElementById("button2").disabled = true;
}

// Exercici 5
const notes = [7, 9, 5, 10, 8];

const ex5 = () => {
    const suma = notes.reduce((mitja, valor) => {
        return mitja + valor
    }, 0);

    const mitjana = suma / notes.length;

    const list = document.getElementById("metodeReduce");
    const li = document.createElement("li");

    li.className = "liClass";
    li.innerHTML = mitjana;

    list.appendChild(li);

    // Deshabilitar botón
    document.getElementById("button3").disabled = true;
}