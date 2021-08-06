import React from "react";
//componente de estado
import ItemCount from './ItemCount';
export default class ItemListContainer extends React.Component{
    state ={
        texto:'Componente de Estado',
    }
    render(){
        return(
            <>
                {this.props.nombre}
                {this.props.greeting}
            </>
        )
    }
}