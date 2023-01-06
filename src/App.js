import Home from './components/home';
import Pedido from './components/pedido/pedido';
import { Route, Routes } from 'react-router-dom';
import { Provider } from "./components/pedido/context";
import Cocina from './components/cocina/cocina';

function App() {
  return (
    <Provider>
    <Routes>
      <Route path= '/' element={<Home />} />
      <Route path= '/pedido' element={<Pedido />} />
      <Route path= '/cocina' element={<Cocina />} />
    </Routes>
    </Provider>
    // <div className='App'>
    //   <Home />
    // </div>
  );
}

export default App;
