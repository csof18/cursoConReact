
import React,{ useContext,useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
export default function CartWidget(){
    const [contarProductos, setContarProductos] = useState(0)
    const {contextProducto, setContextProducto} =  useContext(CartContext);
    useEffect( () => {
        let productosEnCarrito = 0;
            for ( const cantidadDeProductos of contextProducto){
              productosEnCarrito += cantidadDeProductos.cantidad
              console.log('VER VALOR DE CANTIDAD DENTRO DEL FOR ', cantidadDeProductos.cantidad)
            }
            console.log("productosCarrito",productosEnCarrito)
            setContarProductos(productosEnCarrito)
        
    }, [contextProducto])
    return (
        <>
            <div><i className="fas fa-shopping-cart">{contarProductos}</i></div>
        </>
    )
}



























/*import { useState, useEffect } from "react";

export default function ProbandoAppi() {
    const [habilidades, setHabilidades] = useState([]);
    const getHabilidadesDeAppi = async () => {
        try{
            const respuestaDeAppi = await fetch('https://pokeapi.co/api/v2/ability/', {method: "GET"});
            const mostrandoDataAppi = await respuestaDeAppi.json();
            setHabilidades(mostrandoDataAppi.results);
        }catch (error) {
            console.log('estoy en el catch');
        }
    };
    useEffect(() => {
        getHabilidadesDeAppi();
    }, []);

    return(
        <div>
            {habilidades.map((verHabilidades) => (
                <>
                <p>{verHabilidades.name}</p>
                <img src={verHabilidades.url}/>
                </>
            ))}
        </div>
    );
}*/