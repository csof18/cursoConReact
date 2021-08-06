import ItemListContainer from "./ItemListContainer"
//componente bruto
export default function CardProductos(props){
    return(
        <div className="estiloCards">
            <img src="#" alt=""/>
            <h3>{`NOMBRE DEL PRODUCTO ${props.nombreProducto}`}</h3>
            <ItemListContainer {...props.caracteristicas}/>
            <button>{<i class="fas fa-shopping-cart"></i>}Comprar</button>
        </div>
    )
}