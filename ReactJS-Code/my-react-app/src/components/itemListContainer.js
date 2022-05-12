import React from "react";
import { useEffect, useState } from "react";
import productos from './itemList'

const itemList = ({greetings}) => {
       return (
           <div>
               <h1> Galeria de Arte {greetings} </h1>
           </div>
       );
    }

export default itemList;