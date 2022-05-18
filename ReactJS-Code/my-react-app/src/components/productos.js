export const prod = [
    {id: 1, name: "Producto 1", price: 100, image: './Assets/merch/hoodie1.jpg'},
    {id: 1, name: "Producto 2", price: 200, image: './Assets/merch/hoodie2.jpg'},
    {id: 1, name: "Producto 3", price: 300, image: './Assets/merch/hoodie3.jpg'},
    {id: 1, name: "Producto 4", price: 400, image: './Assets/merch/hoodie4.jpg'},
    {id: 1, name: "Producto 5", price: 500, image: './Assets/merch/hoodie5.jpg'},
]

const product = {
    name: "Producto 1",
    price: 100,
    stock: 5,
    id: 44,
    image: './Asset/merch/hoodie1.jpg',
    category: "Arte",
    discount: 5,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel consectetur lacus, eget posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et.",
}

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
};