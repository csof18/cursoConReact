import { useState, useEffect } from 'react';
import { datosProducto } from './DatosProducto';
import { useParams } from 'react-router';
import Item from './Item';
import ItemDetail from './ItemDetail';
export default function ItemDetailContainer() {
    const [ detalleDeProductos, setDetalleDeProductos] = useState([]);
    const {id} = useParams()

    const onAdd =(producto) => {
        console.log('AGREGARON UN PRODUCTO ', producto);
        console.log('ME TOCARON ', producto.nombreProducto);
       
    }

    useEffect(()=>{
        new Promise((resolve, reject) =>{
            setTimeout(()=> resolve(datosProducto.filter(valorDelProducto=> valorDelProducto.id === id)),2000);
        }).then((datos) => setDetalleDeProductos(datos[0]));
    }, []);
    console.log('ver valor de detalles de productos ', detalleDeProductos);
    return(
        <>
        <ItemDetail {...detalleDeProductos} onAdd={onAdd}/>
        {console.log('ME TOCARON ONADD', onAdd())}  
        </>  
    )
}






/*
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
}
*/