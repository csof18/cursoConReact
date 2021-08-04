/*
const productos = [
    {
        nombreProducto: 'producto 1',
        detalles: {
            id: '1',
            precio: '100',
            img: '#',
            stock: '5',
            carrito:'<i class="fas fa-shopping-cart"></i>'
        }
    },
    {
        nombreProducto: 'producto 2',
        detalles:{
            id: '2',
            precio: '200',
            img: '#',
            stock: '2',
            carrito:<i class="fas fa-shopping-cart"></i>
        }
    }
]
*/
/*export default function Count(props) {
    return <p>componente de estado{props.count}</p>
}*/



/*
//ESTA ES OTRA VERCION ESO LO MISMO PERO MAS CORTO, QUE LO QUE ESTA ABAJO. IMPORTO REACT Y LE DIGO Q VOY A SACAR INFO DE AHI
import { Component } from "react";
class ItemListContainer extends Component{}
*/

import React from "react";
//componente de estado

export default class ItemListContainer extends React.Component{
    state ={
        texto:'Componente de Estado',
    }
    /*
    //significa que el componente se monto, ya existe en el dom, ya esta renderizado
    componentDidMount(){

    }
    componentDidUpdate(){
        //el componente se actualizo...si el estado cambia
    }
    */
    render(){
        return(
            <>
                {this.props.nombre}
                {this.props.greeting}
            </>
        )
    }
}