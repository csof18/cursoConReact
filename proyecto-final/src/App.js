import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
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
          <ItemDetailContainer/>
        </section>
        <footer className='colorDeFondo'>
          <h3>Aca va el footer</h3>
        </footer>
      </body> 
    </>
  );
}
