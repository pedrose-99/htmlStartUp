//Para guardar las respuestas del usuario
let opcion_elegida=[];
let numero_preguntas = 5;

function respuesta(num_pregunta, seleccionada){
    //Guardamos las respuestas elegidas
    opcion_elegida[num_pregunta]= seleccionada.value;

    //armo el id para seleccionar el section correspondiente
    id="p" + num_pregunta + "pedro";
    
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "#deb194";
    labels[5].style.backgroundColor = "#deb194";
    labels[7].style.backgroundColor = "#deb194";
    labels[9].style.backgroundColor = "#deb194";

    seleccionada.parentNode.style.backgroundColor="orange";

}



function mostrarResultado(){

    let cantidad_puntos = 0;
    for(i = 0; i < 5; i++)
    {
        cantidad_puntos = parseInt(cantidad_puntos) + parseInt(opcion_elegida[i]);
    }

    let imageGenerada = document.getElementById('imagenpedro');
    let textGenerado = document.getElementById('textpedro');
    let resultDiv = document.getElementById('resultpedro')

    if (cantidad_puntos < 17)
        {
            imageGenerada.src = 'imagenes/caramel.png';
            textGenerado.textContent = 'Café Caramel Marcchiato'
        }
        else if (cantidad_puntos < 34)
        {
            imageGenerada.src = 'imagenes/840d2867-004c-4e9e-a497-f1223dd9f146-2_d8eca44e-460f-4692-9899-1f3604bdfd0f.png';
            textGenerado.textContent = 'Café Irlandes'
        }
        else
        {
            imageGenerada.src = 'imagenes/unnamed.png';
            textGenerado.textContent = 'Café Espresso'
        }
        resultDiv.style.display = 'block';
}


