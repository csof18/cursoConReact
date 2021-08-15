/*import { Button } from 'react-bootstrap';
import Item from './Item';
import NavBar from './NavBar';
import ItemDetailContainer from './ItemDetailContainer';
export default function ItemDetail(props) {
    return(
        <>
        <Button variant='light' onClick={()=> datosProducto= datosProducto.map((mapaDelProducto)=> <ItemDetailContainer {...mapaDelProducto}/>)}/>
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
import ItemDetailContainer from './ItemDetailContainer';


export default function ItemDelait() {
    const [verProducto, setVerProducto] = useState([]);
    const [validarProducto, setValidarProducto] = useState(false);
    useEffect(() => {
        setValidarProducto(true)
        setTimeout(()=>{
            setVerProducto(<ItemDetailContainer datosProducto={verProducto}/>)
            setValidarProducto(false)
        },2000)
    },[])
    if (validarProducto){
        return(<h2>estoy en el if de validar producto</h2>)
    }
    return(<p>ESTOY EN EL ELSE</p>)
    
}
*/
/*
import ItemDetailContainer from './ItemDetailContainer';
export default function ItemDelait() {
    const valor = 7;
    if(valor > 5){
        return(
            <>
            
            
            {console.log('ESTOY EN EL IF VALORE>5 ')}
            </>

        )
    }
    return(
        <>
        {console.log('ESTOY EN EL ELSE VALOR<5')}
        </>

    )
}
*/