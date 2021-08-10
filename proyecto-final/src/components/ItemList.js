import { useState, useEffect } from "react";
import Item from "./Item";

export default function ItemList() {
  const [productos, setProductos] = useState(0);
  useEffect(() => {
    const promesas = new Promise((resolve, reject) => {
      const datosProducto = [
        {
          id: "1",
          imagen: "#",
          nombreProducto: "producto 1",
          descripcion: "descripcion producto 1",
          precio: 120,
          stock: 5
        },
        {
          id: "2",
          imagen: "#",
          nombreProducto: "producto 2",
          descripcion: "descripcion producto 2",
          precio: 200,
          stock: 3
        },
        {
          id: "3",
          imagen: "#",
          nombreProducto: "producto 3",
          descripcion: "descripcion producto 3",
          precio: 150,
          stock: 6
        }
      ];
      const filtrandoStockDeProductos = datosProducto.filter( filtrarProducto => filtrarProducto.stock > 0);
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
      {productos.length && productos.map((mapaDeProductos) => (
        <Item {...mapaDeProductos} />
      ))}
    </>
  );
}