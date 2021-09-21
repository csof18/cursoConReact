import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartContext } from './context/CartContext';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import CategoryContainer from './components/CategoryContainer';
import { getProductos, getProductosByCategoria, getProductosById } from './firebase';
export default function App() {
  const [contextProducto, setContextProducto] = useState([])
    useEffect(() => {
      async function getData(){
        const result = await getProductos();
        const resultById = await getProductosById("Bp3vJEeCB0P01clHradD");
        const resultByCategoria = await getProductosByCategoria("combo-especial")
        console.log(result,resultById,resultByCategoria);
      }
      getData();
    },[])
    return (
    <>
      <body className="App colorDeFondo">
        <BrowserRouter className="App-header">
          <CartContext.Provider value={{contextProducto, setContextProducto}}>
            <NavBar/>
            <Switch className="colorDeFondo">
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/category/:nombre">
                <CategoryContainer/>
              </Route>
              
              <Route exact path="/item">
                <ItemListContainer/>
              </Route>
                
              <Route exact path="/item/:id">
                  <ItemDetailContainer/>
              </Route>
              <Route exact path="/cart">
                <Cart/>
              </Route>
            </Switch>
          </CartContext.Provider>
        </BrowserRouter>
      </body> 
    </>
  );
}
