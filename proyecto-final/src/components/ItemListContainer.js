import React from "react";
//componente de estado
export default class ItemListContainer extends React.Component{
    state ={
        texto:'Componente de Estado',
    }
    render(){
        return(
            <>
               <h3>{this.props.greeting}</h3>
            </>
        )
    }
}