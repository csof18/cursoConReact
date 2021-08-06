export default function Botones(props) {
    return(
        <button  onClick={()=> props.onAdd('ME TOCARON')} >
            {props.text}
        </button>
    );
    
}
