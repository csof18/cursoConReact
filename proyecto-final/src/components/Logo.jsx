import { Link } from "react-router-dom";
export default function Logo(){
    return(
        <>
            <Link to="/">
                <img src="/img/logoReact.png" className="App-logo" alt="logo" />
            </Link>
        </>
    )
}