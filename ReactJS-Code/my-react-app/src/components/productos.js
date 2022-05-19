import img1 from './Assets/merch/hoodie1.jpg'
import img2 from './Assets/merch/hoodie2.jpg'
import img3 from './Assets/merch/hoodie3.jpg'
import img4 from './Assets/merch/hoodie4.jpg'
import img5 from './Assets/merch/hoodie5.jpg'

export const prod = [
    {id: 1, name: "Hoodie Black ASSC", price: 9000, image: img1},
    {id: 1, name: "Hoodie White", price: 8000, image: img2},
    {id: 1, name: "Joggin Suit", price: 7500, image: img3},
    {id: 1, name: "Hoodie Pink", price: 8500, image: img4},
    {id: 1, name: "Hoodie Grey", price: 10000, image: img5},
]

const product = {
    name: "Hoodie Black Anti Social Social Club",
    price: 9000,
    stock: 5,
    id: 44,
    image: img1,
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