
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function CartWidget(){
    const {contextProducto, setContextProducto} =  useContext(CartContext);
    let contarProductos = 0;
    for ( const cantidadDeProductos of contextProducto){
      contarProductos += cantidadDeProductos.cantidad
    }
    
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