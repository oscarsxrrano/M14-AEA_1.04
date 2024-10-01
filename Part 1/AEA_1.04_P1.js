// Exercici 1
const estudiant = {
    nom: 'Joan',
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
};


const ex1 = () => {
    const {nom, edat, notes} = estudiant;
    const {matematiques, programacio, fisica} = notes;

    const list = document.getElementById("estudiantId");
    const li = document.createElement("li");

    li.className = "liClass";
    li.innerHTML = `${nom} té ${edat} i ha tret un ${matematiques} en matematiques.`

    list.appendChild(li);

    // Deshabilitar botón
    document.getElementById("button1").disabled = true;
}

// Exercici 2
const coordenades = [12, 5, 8];

const ex2 = () => {
    const [x, y, z] = coordenades;

    const list = document.getElementById("coordenadesId");
    const li = document.createElement("li");

    li.className = "liClass";
    li.innerHTML = `Les coordenades són x=${x}, y=${y}, z=${z}.`;

    list.appendChild(li);

    // Deshabilitar botón
    document.getElementById("button2").disabled = true;
}