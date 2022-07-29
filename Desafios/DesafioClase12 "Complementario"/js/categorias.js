const categorias = [];
/* Definicion de class para cargar el arreglo con los items */
class Categoria{
    constructor(id, nombre, img){
        this.id = id;
        this.nombre = nombre;
        this.img = img;
    }
}

/* Se construyen los productos/items  y se cargan en el arreglo*/
categorias.push(new Categoria(1,"Todos","img/menu.png"));
categorias.push(new Categoria(2,"Cafetería","img/coffee.png"));
categorias.push(new Categoria(3,"Comidas","img/food.png"));
categorias.push(new Categoria(4,"Bebidas","img/drinks.png"));
categorias.push(new Categoria(5,"Postres","img/dessert.png"));