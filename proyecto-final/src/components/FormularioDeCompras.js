import React,{useEffect, useState} from 'react'
export default function FormularioDeCompras(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState(''); 
    const [telefono, setTelefono] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [emailRepetido, setEmailRepetido] = useState(''); 
console.log('ME TOCARON ESTOY EN EL FORMULARIO ')
    return(
        <>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Formulario Compras ",nombre,apellido,telefono,email,emailRepetido)}
                }
            >
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" placeholder="nombre" onChange={(e) => setNombre(e.target.value) } value={nombre}/>

                <label for="apellido">Apellido</label>
                <input type="text" id="apellido" placeholder="apellido" onChange={(e) => setApellido(e.target.value) } value={apellido}/>  

                <label for="telefono">Telefono</label>  
                <input type="number" id="telefono" placeholder="112345678" onChange={(e) => setTelefono(e.target.value) } value={telefono} />

                <label for="mail">Email</label>  
                <input type="email" id="mail" placeholder="correoelectronico@ejemplo.com" onChange={(e) => setEmail(e.target.value) } value={email} />

                <label for="corroborarMail">Repita su email</label>  
                <input type="email" id="corroborarMail" onChange={(e) => setEmailRepetido(e.target.value) } value={emailRepetido} />
            </form>
        </>
    )
}