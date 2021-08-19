import './App.css';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import ItemListContainer from './components/ItemListContainer';
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
