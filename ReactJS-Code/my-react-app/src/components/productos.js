import img1 from './Assets/merch/hoodie1.jpg'
import img2 from './Assets/merch/hoodie2.jpg'
import img3 from './Assets/merch/hoodie3.jpg'
import img4 from './Assets/merch/hoodie4.jpg'
import img5 from './Assets/merch/hoodie5.jpg'

export const prod = [
    {id: 1, name: "Hoodie Black ASSC", price: 9000, image: img1, color: "negro"},
    {id: 1, name: "Hoodie White", price: 8000, image: img2, color: "blanco"},
    {id: 1, name: "Joggin Suit", price: 7500, image: img3, color: "negro"},
    {id: 1, name: "Hoodie Pink", price: 8500, image: img4, color: "rosa"},
    {id: 1, name: "Hoodie Grey", price: 10000, image: img5, color: "gris"},
]

export const product = {
    name: "Hoodie Black Anti Social Social Club",
    price: 9000,
    stock: 5,
    id: 44,
    image: img1,
    category: "Hoodie",
    discount: 5,
    color: "negro",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel consectetur lacus, eget posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et.",
}

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
};

export const traerProductos = (col) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = prod.filter(
            (pro) => pro.color === col
        );
        setTimeout(() => {
            if (col === undefined) {
                resolve(prod);
            } else {
                resolve(productosFiltrados);
            }
        }, 1000);
    });
};