const tarjetasHtml = PRODUCTOS.productos.reduce((acc, elemento, i) => {   

    return acc = acc + `    
        <div class="tarjeta">
            <div class="img-container">
                <img src=${elemento.img} alt=${elemento.name}>
            </div>   
            <p>
                ${elemento.name} $ ${elemento.price}
            </p> 
           
               
        </div>
    `       
},"")

console.log(tarjetasHtml)

const contenedorTarjetas = document.querySelector(".contenedor-tarjetas")

console.log(contenedorTarjetas)

contenedorTarjetas.innerHTML = tarjetasHtml


