const socket = io();

const contenedor = document.querySelector(".actualizar");

socket.on('emitPMAdd', e => {

    contenedor.innerHTML += `
    
    <div class="productos">

<ul>
  
<p>Nombre : ${e.title}</p>
<p>Precio : ${e.price}</p>
<p>Descripcion : ${e.description}</p>
<p>Miniatura : ${e.thumbnail}</p>
<p>Stock : ${e.stock}</p>
<p>Codigo : ${e.code}</p>
<p>Categoria : ${e.category}</p>
<p>Estatus : ${e.status}</p>
<p>Id : ${e.id}</p>
</ul>

</div>
    `
});


socket.on('emitPMDel', data => {

    contenedor.innerHTML = '';

    data.forEach(e => {

        contenedor.innerHTML += `
    
        <div class="productos">
        
        <ul>
  
        <p>Nombre : ${e.title}</p>
        <p>Precio : ${e.price}</p>
        <p>Descripcion : ${e.description}</p>
        <p>Miniatura : ${e.thumbnail}</p>
        <p>Stock : ${e.stock}</p>
        <p>Codigo : ${e.code}</p>
        <p>Categoria : ${e.category}</p>
        <p>Estatus : ${e.status}</p>
        <p>Id : ${e.id}</p>
        </ul>
        
        </div>
        
        `
    })
})