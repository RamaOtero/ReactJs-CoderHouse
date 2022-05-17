export const prod = [
    {id: 1, name: "Producto 1", price: 100, image: 'https://via.placeholder.com/150'},
    {id: 1, name: "Producto 2", price: 200, image: 'https://via.placeholder.com/150'},
    {id: 1, name: "Producto 3", price: 300, image: 'https://via.placeholder.com/150'},
    {id: 1, name: "Producto 4", price: 400, image: 'https://via.placeholder.com/150'},
    {id: 1, name: "Producto 5", price: 500, image: 'https://via.placeholder.com/150'},
]

const product = {
    name: "Producto 1",
    price: 100,
    stock: 5,
    id: 44,
    image: 'https://via.placeholder.com/150',
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