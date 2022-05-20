

/* class Discos{
    constructor(id,nombre,precio,year){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.year=year;
        console.log(this.id,this.nombre,this.precio,this.year);
    }

   
} */


//Funcion para el boton registrar

const discForm = document.getElementById('discForm');
let count = 0;

discForm.addEventListener('submit', (formEvent) => {
    formEvent.preventDefault();
    count++;
    let infoDiscForm = new FormData(discForm)
    let tableDiscRef = document.getElementById('tableDisc');
    let newDiscRow = tableDiscRef.insertRow(-1);
    

    //Creando el boton de borrar
    const borrarBtn = document.createElement("button");
    borrarBtn.innerHTML = "Borrar";
   // borrarBtn.classList.add('btn', 'btn-danger');
   // borrarBtn.onclick = borrarElemento(borrarBtn);

    

    //Creando el arreglo de discos
    const arrayDiscos = [];
    arrayDiscos.push(
        infoDiscForm.get('idDisco'),
        infoDiscForm.get('nameDisco'),
        infoDiscForm.get('precio'),
        infoDiscForm.get('year')
    )
    console.log(arrayDiscos);

    let newIdCell = newDiscRow.insertCell(0);
    newIdCell.textContent = arrayDiscos[0];

    newIdCell = newDiscRow.insertCell(1);
    newIdCell.textContent = arrayDiscos[1];

    newIdCell = newDiscRow.insertCell(2);
    newIdCell.textContent = arrayDiscos[2];

    newIdCell = newDiscRow.insertCell(3);
    newIdCell.textContent = arrayDiscos[3];    

    newIdCell = newDiscRow.insertCell(4);
    newIdCell.appendChild(borrarBtn); 
    newIdCell.innerHTML = '<input type="button" value="Borrar" class="btn btn-danger" onclick="borrarElemento(this)" />'; 
})

//Funcion para borrar elemento 
function borrarElemento(btn){
    
   const index = btn.parentNode.parentNode.rowIndex;
document.getElementById("tableDisc").deleteRow(index);
}

//Evento busqueda

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener('submit', (formEvent) => {
     formEvent.preventDefault();
     busqueda();
     
     //Funcion para busqueda de disco
function busqueda(arrayDiscos){
    let infoBuscar = new FormData(btnBuscar)
    let nombreBusqueda = infoBuscar.get('nameBusqueda')
    console.log(nombreBusqueda);
    for ( let i = 0; i<arrayDiscos; i++) {
        let nombreDisco = arrayDiscos[i]
        if (nombreBusqueda === nombreDisco) {
            alert(`El disco ${nombreDisco} si se encuentra disponible`)
    
        } else { alert(`El disco no se encuentra disponible`)}
    }
    
}

})





