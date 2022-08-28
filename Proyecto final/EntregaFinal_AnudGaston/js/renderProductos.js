/* Render de productos y categorias*/
/* Funcion que contruye el contenedor de cada categoria del menu */
const createProductsContainer = (categorie) => {
    /* Se crea el nodo de cada categoria */
    const div = document.createElement('div');
    div.innerHTML = `<!--Comienza la categoria de productos-->
                        <h3 class="categorieTittle">${categorie}</h3>
                        <div id="productosContenedor${categorie}" class="productos"></div>
                        `;
    menu.append(div);
}
/* Funcion que construye los productos por categoria */
const createProducts = (itemsArray,categorie) => {
    /* Para cada categoria se renderizan los productos */
    const categoria = document.getElementById(`productosContenedor${categorie}`);
        itemsArray.forEach( i => {
        /* Desetruturacion del objeto articulo */
        const {nombre, precio, id, img, descripcion} = i;
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <div class="info">
                <h4>${nombre}</h4>
                <h4 class="precio">$ ${precio}</h4>
                <div>
                    <button class="iconoComprar" id=boton${id}><img  src="./img/boton-agregar.png" alt=""></button>
                </div>
            </div>
            <div class="fotoBlock">
                <img class="foto" src="${img}" alt="">
            </div>
            <p class="descripcion">${descripcion}</p>  
                     `;
        categoria.appendChild(div);
        /* Se escucha el boton de cada producto para agregar al carrito */
        const boton = document.getElementById(`boton${id}`);
        boton.addEventListener('click', ()=> {agregarCarrito(id)
            alertAddProduct(nombre, precio, img);
            })
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
    const categoriesMenu = document.getElementById('categoriesMenu');
    categoriesMenu.innerHTML = ""
    const liHeader = document.createElement('li');
    liHeader.innerHTML = `<div id="filtroTodos">
                            <div><img src="${categorias[0].img}" alt=""></div>
                            <p>Menu</p>
                          </div>
                          `;
    categoriesMenu.append(liHeader);
    /* De los articulos se obtienen las categorias de c/item y se guardan en un nuevo array */
    const nombresCategorias = [];
    for (item of items){nombresCategorias.push(item.categoria);}
    /* Uso de Spread */
    const categoriasUnicas = [...new Set(nombresCategorias)];
    
    /* Se contruye un objeto con un array por categoria para luego iterar y renderizar los productos en cada una */
    const menu = document.getElementById('menu');
    menu.innerHTML = ""
    const objetsCategorias = {}  ;
    categoriasUnicas.forEach( cat =>{
        objetsCategorias[cat] = items.filter (items => items.categoria == cat);
        createProductsContainer(cat);
        createProducts(objetsCategorias[cat],cat)
        /* Se crea las categorias en el menu del header */
        const indexCategoria = categorias.findIndex(object => object.nombre === cat);
        const liHeader = document.createElement('li');
        liHeader.innerHTML = `<div id="filtro${cat}">
                                <div><img src="${categorias[indexCategoria].img}" alt=""></div>
                                <p>${cat}</p>
                            </div>`;
        categoriesMenu.append(liHeader);
        const botonFiltro = document.getElementById(`filtro${cat}`);
        botonFiltro.addEventListener('click', ()=> articulosFiltrados(cat))
        const botonTodos = document.getElementById(`filtroTodos`);
        botonTodos.addEventListener('click', ()=> mostrarProductos())
    })
}


