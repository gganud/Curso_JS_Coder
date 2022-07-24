const items = [];
/* Definicion de class para cargar el arreglo con los items */
class Producto{
    constructor(id, nombre, precio, img, descripcion, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.descripcion = descripcion;
        this.categoria = categoria;
    }
}

/* Se construyen los productos/items  y se cargan en el arreglo*/
items.push(new Producto(1,"Café", 200,"img/articulos/cafe.jpeg","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Cafeteria"));
items.push(new Producto(2,"Cafe con leche", 150,"img/articulos/cafeconleche.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Cafeteria"));
items.push(new Producto(3,"Té", 130,"img/articulos/te.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Cafeteria"));
items.push(new Producto(4,"Cortado", 170,"img/articulos/cortado.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Cafeteria"));
items.push(new Producto(5,"Ensalada mixta", 300,"img/articulos/mixta.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Comidas"));
items.push(new Producto(6,"Ensalada rusa", 370,"img/articulos/rusa.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Comidas"));
items.push(new Producto(7,"Bife de chorizo", 680,"img/articulos/bife.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Comidas"));
items.push(new Producto(8,"Ravioles c/Fileto", 620,"img/articulos/raviolesfileto.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Comidas"));
items.push(new Producto(9,"Pizza", 980,"img/articulos/pizza.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Comidas"));
items.push(new Producto(10,"Milanesa napolitana", 550,"img/articulos/napolitana.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Comidas"));
items.push(new Producto(11,"Jugo saborizado", 280,"img/articulos/saborizada.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Bebidas"));
items.push(new Producto(12,"Agua", 200,"img/articulos/agua.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Bebidas"));
items.push(new Producto(13,"Vino malbec", 700,"img/articulos/vinolatitud33.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Bebidas"));
items.push(new Producto(14,"Gaseosa", 350,"img/articulos/gaseosa.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Bebidas"));
items.push(new Producto(15,"Copa helada", 480,"img/articulos/copahelada.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Postres"));
items.push(new Producto(16,"Flan casero", 420,"img/articulos/flan.png","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit possimus, cumque quas aliquid", "Postres"));
