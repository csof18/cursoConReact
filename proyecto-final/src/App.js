import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProbandoAppi from './components/CartWidget'
import ItemDetail from './components/ItemDetail';
import Logo from './components/Logo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
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
      {/*
      <BrowserRouter>
        <NavBar/>
        <Logo/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
      */}
    </>
  );
}
