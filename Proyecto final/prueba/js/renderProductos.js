/* Render de productos y categorias*/
/* Funcion que contruye el contenedor de cada categoria del menu */
const createProductsContainer = (categorie) => {
    /* Se crea el nodo de cada categoria */
    const div = document.createElement('div');
    div.innerHTML = `<!--Comienza la categoria de productos-->
                        <a name="${categorie}"><h3>${categorie}</h3></a>
                        <div id="productosContenedor${categorie}" class="productos"></div>
                        `;
    menu.append(div);
}
/* Funcion que construye los productos por categoria */
const createProducts = (itemsArray,categorie) => {
    /* Para cada categoria se renderizan los productos */
    const categoria = document.getElementById(`productosContenedor${categorie}`);
    itemsArray.forEach( i => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <div class="info">
                <h4>${i.nombre}</h4>
                <h4 class="precio">$ ${i.precio}</h4>
                <div>
                    <button class="iconoComprar" id=boton${i.id}><img  src="./img/boton-agregar.png" alt=""></button>
                </div>
            </div>
            <div class="fotoBlock">
                <img class="foto" src="${i.img}" alt="">
            </div>
            <p class="descripcion">${i.descripcion}</p>  
                     `;
        categoria.appendChild(div);
        /* Se escucha el boton de cada producto para agregar al carrito */
        const boton = document.getElementById(`boton${i.id}`);
        boton.addEventListener('click', ()=> agregarCarrito(i.id))
    } )
}
/* Funcion que muestra los articulos filtrados por categoria */
const articulosFiltrados = (cat) => {
    const menu = document.getElementById('menu');
    menu.innerHTML = ""
    const filtro = items.filter (items => items.categoria == cat);
    createProductsContainer(cat)
    createProducts(filtro,cat)
}
const mostrarProductos = () => {
    /* Obtencion de los nodos padre */
    const categoriesMenu = document.getElementById('categoriesMenu');
    categoriesMenu.innerHTML = ""
    const liHeader = document.createElement('li');
    liHeader.innerHTML = `<button class="iconoComprar" id=filtroTodos>Todos</button>`;
    categoriesMenu.append(liHeader);
    const categoriesMenuFooter = document.getElementById('categoriesMenuFooter');
    categoriesMenuFooter.innerHTML = ""
    const liFooter = document.createElement('li');
    liFooter.innerHTML = `<button class="iconoComprar" id=filtroTodosFooter>Todos</button>`;
    categoriesMenuFooter.append(liFooter);
    /* De los articulos se obtienen las categorias de c/item y se guardan en un nuevo array */
    const nombresCategorias = [];
    for (item of items){nombresCategorias.push(item.categoria);}
    const categoriasUnicas = [...new Set(nombresCategorias)];
    /* Se contruye un objeto con un array por categoria para luego iterar y renderizar los productos en cada una */
    const menu = document.getElementById('menu');
    menu.innerHTML = ""
    const arraysCategorias = {}  ;
    categoriasUnicas.forEach( cat =>{
        arraysCategorias[cat] = items.filter (items => items.categoria == cat);
        createProductsContainer(cat);
        createProducts(arraysCategorias[cat],cat)
        /* Se crea las categorias en el menu del header */
        const liHeader = document.createElement('li');
        liHeader.innerHTML = `<button id="filtro${cat}">${cat}</button>`;
        categoriesMenu.append(liHeader);
        const botonFiltro = document.getElementById(`filtro${cat}`);
        botonFiltro.addEventListener('click', ()=> articulosFiltrados(cat))
        const botonTodos = document.getElementById(`filtroTodos`);
        botonTodos.addEventListener('click', ()=> mostrarProductos())
        /* Se crea las categorias en el menu del footer */
        const liFooter = document.createElement('li');
        liFooter.innerHTML = `<button id="filtroFooter${cat}">${cat}</button>`;
        categoriesMenuFooter.append(liFooter);
        const botonFiltroFooter = document.getElementById(`filtroFooter${cat}`);
        botonFiltroFooter.addEventListener('click', ()=> articulosFiltrados(cat))
        const botonTodosFooter = document.getElementById(`filtroTodosFooter`);
        botonTodosFooter.addEventListener('click', ()=> mostrarProductos())
    })
}


