/*import { Button } from 'react-bootstrap';
import Item from './Item';
import NavBar from './NavBar';
import ItemList from './ItemList';
export default function ItemDetail(props) {
    return(
        <>
        <Button variant='light' onClick={()=> datosProducto= datosProducto.map((mapaDelProducto)=> <ItemList {...mapaDelProducto}/>)}/>
        {console.log('  ESTOY EN EL ITEMdETAIL ME TOCARON')}
        {props.datosProducto}
        <div>
            <img src="img/logoReact.png" className="App-logo" alt="logo" />
            <NavBar/>
        </div>
        <div>

          <h1>{props.nombreProducto}</h1>
            <img src={props.imagen.src} alt='#' style={{height: props.imagen.height}}/>
            
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>
            <p>{props.stock}</p>
        </div>
        </>
    )
}
*/
/*
import { useEffect, useState } from "react";
import ItemList from './ItemList';


export default function ItemDelait() {
    const [verProducto, setVerProducto] = useState([]);
    const [validarProducto, setValidarProducto] = useState(false);
    useEffect(() => {
        setValidarProducto(true)
        setTimeout(()=>{
            setVerProducto(<ItemList datosProducto={verProducto}/>)
            setValidarProducto(false)
        },2000)
    },[])
    if (validarProducto){
        return(<h2>estoy en el if de validar producto</h2>)
    }
    return(<p>ESTOY EN EL ELSE</p>)
    
}


import { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import ItemList from './ItemList';

export default function ItemDetail(props) {

    const [dataProducto, setDataProducto] = useState([]);
    useEffect(()=>{
        setDataProducto(dataProducto)
        console.log('VALOR DE datosProducto', dataProducto);
    }, []);
    return( 
        <>
        
           {console.log('ESTOY EN EL IF DE DATOSPRODUCTOS')}
        
        </>
        )
    
}
*/

import { Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
export default function ItemDetail({imagen,nombreProducto,descripcion,precio,stock, envio, cultarDetalleProducto}){
    console.log("Imagen:",imagen)
    return(
        <section className='estiloProducto'>
                <div className='imgProducto'>
                    <img src={imagen.src} alt={nombreProducto} height={imagen.height} className='imagen'/>
                </div>
                <div className='datosDeProducto'>
                    <Button variant="outline-light" className='btnCerrarProducto' onClick={()=> {cultarDetalleProducto()}}>X</Button>
                    <div className='detallesProduc'>
                        <h2>{nombreProducto}</h2>
                        <p>{descripcion}</p>
                    </div>
                    <div className='precioYComprar'>
                        <p className='precioProduc'>{precio} $</p>
                        <p className='stockProduc'>Disponibles {stock}</p>
                        <ItemCount className='btnComprar' valorStock={stock}/>
                    </div>
                    <p className='datosEnvio'>{envio}</p>
                </div>
        </section>
    )
}