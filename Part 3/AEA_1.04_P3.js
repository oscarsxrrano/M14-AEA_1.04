// Exercici 6
const ex6 = () => {

    // Demanar a l'usuari
    const nom = prompt("Nombre del objeto!");
    const preu = parseFloat(prompt("Cual es el precio?"));
    const quantitat = parseFloat(prompt("Cuantos productos compraras?"));

    // Creem l'objecte
    const productUser = new Producte(nom, preu, quantitat);

    productUser.descompte;

    const list = document.getElementById("list1");
    const li = document.createElement("li");

    li.className = "liClass";
    li.innerHTML = productUser.info();

    list.appendChild(li);

    // Deshabilitar botón
    document.getElementById("button1").disabled = true;

}

function Producte(nom, preu, quantitat) {
    this.nom = nom;
    this.preu = preu;
    this.quantitat = quantitat;
    
    this.descompte = function() {
        return this.preu * 0.95;
    }

    this.info = function() {
        const preuDescompte = this.descompte();
        return `nom: ${this.nom}, preu: ${preuDescompte}€, quantitat: ${this.quantitat}`;
    };
}

// Exercici 7
const cotxe = {
    marca: 'Tesla',
    model: 'Model S',
    preu: 80000
};

const ex7 = () => {
    const anyUser = parseFloat(prompt("De quin any es el teu cotxe?"));
    cotxe.any = anyUser;

    const li = document.createElement("li");
    const list = document.getElementById("list2");

    li.className = "liClass";
    li.innerHTML = `Marca: ${cotxe.marca}, Model: ${cotxe.model}, Preu: ${cotxe.preu}, Any: ${cotxe.any}`;

    list.appendChild(li);

    document.getElementById("button2").disabled = true;
}