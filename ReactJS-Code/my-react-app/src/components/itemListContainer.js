import React from "react";
import { useEffect, useState } from "react";
import { prod, traerProducto } from './productos';
import ItemList from './itemList';
import { useParams } from "react-router-dom";
import "../App.css";

const ItemListContainer = ({greetings}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout (() => {
        const data = new Promise((resolve, reject) => {
            resolve(prod);
        });
        data.then((data) => {
            setItems(data);
        });
        data.catch((err) => {
            console.log(err);
        });
      }, 2000);
     }, []);

       return (
           <div className="itemListContainer">
               <h1> Hoodies {greetings} </h1>
               <ItemList items={items} />
           </div>
       );
    }

export default ItemListContainer;