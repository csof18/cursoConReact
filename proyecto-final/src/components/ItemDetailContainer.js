import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
//componente de estado
export default function ItemDetailContainer() {
    const producto = [
      {
        id: "16",
        titulo: "plantas",
        imagen: {
          src:
            "https://www.jujuysemueve.com.ar/wp-content/uploads/2021/07/plantas-kokedamas.jpg",
          height: "300px"
        },
        nombreProducto: "Kokedamas",
        descripcion: "El nuevo arte japones, plantas del hogar sin macetas",
        precio: 1000,
        stock: 4,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
  ];
    const [valorProducto, setValorProducto] =useState([]);
    const getItem = async () => {
        try{
            setValorProducto(producto);
        }
        catch (error) {
            console.log('hubo un error');
        }
    }
    const [cargando, setCargando] = useState(false);
    useEffect(() =>{
        setCargando(true)
        setTimeout(()=>{
            getItem();
            setCargando(false)
        }, 2000)
    },[]);
   if(cargando){
       return(
       <>
        <h2>Cargando</h2></>
       )}
    return(
        <>
            {valorProducto.map((mapValorProducto) => 
            <>
                <ItemDetail {...mapValorProducto}/>
            </>
            )}
        </>
    )
}