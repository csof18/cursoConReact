import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProbandoAppi from './components/CartWidget'
import ItemDetail from './components/ItemDetail';
import Logo from './components/Logo';
export default function App() {
  return (
    <>
      <body className="App">
        <header className="App-header">
          <NavBar/>
          <Logo/>
          <h1 className='App-titulo'>
            Proyecto de react
          </h1>
        </header>
        <section className="colorDeFondo">
          <ItemListContainer/>
        </section>
        <footer className='colorDeFondo'>
          <h3>Aca va el footer</h3>
        </footer>
      </body> 
    </>
  );
}
