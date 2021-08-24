import Item from "./Item";

export default function ItemList({producto}){
  return(
    <>
      {producto.map((datosItem) => (
        <Item {...datosItem} />
      ))}
    </>
  )
}