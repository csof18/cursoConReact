import { Button, Form, Row, Col, Modal} from 'react-bootstrap';
import React,{useEffect, useState} from 'react';
import { addOrden } from '../firebase';

export default function FormularioDeCompras({datosDeCompra, borrarCarrito }){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState(''); 
    const [telefono, setTelefono] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [emailRepetido, setEmailRepetido] = useState(''); 
    const [ordenId, setOrdenId] = useState(null); 
    const [showModal, setShowModal] = useState(false); 

    console.log('ME TOCARON ESTOY EN EL FORMULARIO ')
    const validarEmail = () => {
        return email != '' && email === emailRepetido;
    }
    const limpiarTodo = () =>{
        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailRepetido('');
        borrarCarrito();
    }
    const guardarDatosEnFirebase = async () => {
        const ordenIdFirebase = await addOrden(datosDeCompra,{nombre,apellido,telefono,email})
        setOrdenId(ordenIdFirebase);
        setShowModal(true);
    }   

    return(
        <>
        <Form className="alinearTextoIzquierda m-3">
            <Row className="mb-3">
                <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="correoelectronico@ejemplo.com" onChange={(e) => setEmail(e.target.value) } value={email}/>
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label>Repita su mail</Form.Label>
                <Form.Control type="password" placeholder="correoelectronico@ejemplo.com" onChange={(e) => setEmailRepetido(e.target.value) } value={emailRepetido}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="Nombre"  onChange={(e) => setNombre(e.target.value) } value={nombre}/>
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label>Apellido</Form.Label>
                <Form.Control placeholder="Apellido"  onChange={(e) => setApellido(e.target.value) } value={apellido}/>
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="1123456789" onChange={(e) => setTelefono(e.target.value) } value={telefono}/>
                </Form.Group>
            </Row>
            { (email && emailRepetido && !validarEmail()) ? <p> Revise sus datos. </p> 
            : <Button variant="light" type="button" onClick={() =>{
                if(validarEmail()){
                    console.log('estoy en el if de validar mail')
                    guardarDatosEnFirebase();
                }
            }}>Realizar compra</Button>}
        </Form>


     {ordenId && 
      <Modal
      show={showModal}
      size="lg"
      centered
    >
      <Modal.Header closeButton onClick={()=> {
          setShowModal(false)
          limpiarTodo()
        } }>
        <Modal.Title>
          Tu compra #{ordenId.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Datos personales</h4>
        <p>Cliente: {nombre} {apellido}</p>
        <p>Telefono: {telefono}</p>
        <p>Email: {email}</p>
        <h4>Datos de tu compra</h4>
        {datosDeCompra && datosDeCompra.productos.map(({nombre,cantidad,descripcion,totalProducto})=>{
          <>
              <p>{nombre}</p>
              <p>Descripcion:{descripcion}</p>
              <p>Cantidad {cantidad}</p>
              <p>Total: ${totalProducto}</p>
          </>
          })
        }
        <p>Envio: ${datosDeCompra.envio}</p>
        <p>Total: ${datosDeCompra.total}</p>
      </Modal.Body>
    </Modal>

     }
  </>
    )
}