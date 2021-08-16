export default function CartWidget(){
    return(
        <i className="fas fa-shopping-cart"></i>
    )
}



























/*import { useState, useEffect } from "react";

export default function ProbandoAppi() {
    const [habilidades, setHabilidades] = useState([]);
    const getHabilidadesDeAppi = async () => {
        try{
            const respuestaDeAppi = await fetch('https://pokeapi.co/api/v2/ability/', {method: "GET"});
            const mostrandoDataAppi = await respuestaDeAppi.json();
            setHabilidades(mostrandoDataAppi.results);
        }catch (error) {
            console.log('estoy en el catch');
        }
    };
    useEffect(() => {
        getHabilidadesDeAppi();
    }, []);

    return(
        <div>
            {habilidades.map((verHabilidades) => (
                <>
                <p>{verHabilidades.name}</p>
                <img src={verHabilidades.url}/>
                </>
            ))}
        </div>
    );
}*/