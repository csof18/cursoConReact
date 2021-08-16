/*import { useState, useEffect } from 'react';
import Productos from './MockAppi';
import Item from './Item';
export default function ItemDetailContainer() {
    const [detallesProductos, setDetallesProductos] = useState([]);
    const getProductos = async () => {
        try{
            const datos = await fetch(`${<Productos/>}`, {method: 'GET'});
            const mostrandoDatos = await datos.json();
            setDetallesProductos(mostrandoDatos.datosProducto);
        }catch (error){
            console.log('SURGIO UN ERROR');
        }
    };
    useEffect(() => {
        getProductos();
    }, []);
    return(
        <>
      {detallesProductos.length &&
        detallesProductos.map((mapProductos) => <Item {...mapProductos} />)}
    </>
    )
}*/

