import { useState, useEffect } from "react";
import Item from "./Item";
import Productos from "./MockAppi"; 
import ItemDetail from './ItemDetail';
export default function ItemList() {
  const [productos, setProductos] = useState(0);
  useEffect(() => {
    const promesas = new Promise((resolve, reject) => {
     const datosProducto = [
        {
          id: "1",
          imagen: {
            src:
              "https://www.okchicas.com/wp-content/uploads/2020/07/Ramos-de-flores-hermosos-y-rom%C3%A1nticos-5.jpg",
            height: "300px"
          },
          nombreProducto: "producto 1",
          descripcion: "descripcion producto 1",
          precio: 550,
          stock: 5
        },
        {
          id: "2",
          imagen: {
            src:
              "https://http2.mlstatic.com/D_NQ_NP_736325-MLA25433781363_032017-O.jpg",
            height: "300px"
          },
          nombreProducto: "producto 2",
          descripcion: "descripcion producto 2",
          precio: 2500,
          stock: 3
        },
        {
          id: "3",
          imagen: {
            src:
              "https://www.elmueble.com/medio/2018/02/08/ramos-de-flores-silvestres-de-maria-salazar_77fc2920.jpg",
            height: "300px"
          },
          nombreProducto: "producto 3",
          descripcion: "descripcion producto 3",
          precio: 500,
          stock: 6
        },
        {
            id: "4",
            imagen: {
              src:
                "https://www.floristeriadfranco.com/521-home_default/arreglo-floral-con-chocolates-y-peluche.jpg",
              height: "300px"
            },
            nombreProducto: "producto 4",
            descripcion: "descripcion producto 4",
            precio: 2500,
            stock: 3
          },
          {
            id: "5",
            imagen: {
              src:
                "https://soydegamx.com/wp-content/uploads/2021/03/100796914_272753623877861_34437352722006016_n-1.png",
              height: "300px"
            },
            nombreProducto: "producto 5",
            descripcion: "descripcion producto 5",
            precio: 2200,
            stock: 2
          }
      ];
      
      const filtrandoStockDeProductos = datosProducto.filter(
        (filtrarProducto) => filtrarProducto.stock > 0
      );
      if (filtrandoStockDeProductos.length !== 0) {
        setTimeout(() => resolve(datosProducto), 2000);
      } else {
        reject("Lo sentimos hubo un error, intente mas tarde por favor");
      }
    });
    promesas
      .then((productosOk) => {
        setProductos(productosOk);
        console.log(productosOk);
      })
      .catch((errorEnCarga) => {
        console.log("Lo sentimos hubo un error", errorEnCarga);
      });
  }, []);
  return (
    <>
      {productos.length &&
        productos.map((mapaDeProductos) => 
        <>
        <ItemDetail {...mapaDeProductos}/>
        <Item {...mapaDeProductos} />
        </>
        )}
    </>
  );
}