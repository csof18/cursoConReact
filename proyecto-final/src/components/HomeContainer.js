/*import { useEffect, useState } from "react";
import {productosDestacados} from "./datosProducto"
import Home from "./Home";
export default function HomeContainer(){
    const [destacados, setDestacados] = useState([]);
    useEffect(()=>{
        setDestacados(productosDestacados)
        console.log('VER VALOR DE productosDestacados',productosDestacados)
        console.log('VER VALOR DE destacados ', destacados)
    }, []);
    return(
        <>
        {destacados.map((dataDestacados)=>{
            <Home {...dataDestacados}/>
        })    
        }
        </>
    )
}
*/