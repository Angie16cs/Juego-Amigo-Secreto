// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
    
    function agregarAmigo() {
        let AmigoAgregado = document.getElementById('amigo');
        let nombreAmigo = AmigoAgregado.value.trim();
     
        console.log(nombreAmigo);

        if(nombreAmigo === ""){
            alert("Por favor, inserte un nombre.");
            
        }
       

        if (amigos.includes(nombreAmigo)) {
           alert("Este nombre ya ha sido agregado.");
           
        }
        
        amigos.push(nombreAmigo); 
        AmigoAgregado.value = "";
        mostrarAmigosDeLista(); 
        }
    
 
    function mostrarAmigosDeLista() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
        amigos.forEach((nombreAmigo) => {
            let li = document.createElement('li');
            li.textContent = nombreAmigo;
            lista.appendChild(li);
        });

    }


    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("La Lista de Amigos esta vacia. Agregue Amigos para realizar el sorteo.");
            
        }
        
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado]; 
        const resultado = document.getElementById('resultado'); 
        resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; 
        
    }
    
    