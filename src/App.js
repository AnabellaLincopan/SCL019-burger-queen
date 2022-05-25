import Home from './components/home';
import Pedido from './components/pedido/pedido';
import { Route, Routes } from 'react-router-dom';
import { Provider } from "./components/pedido/context";

function App() {
  return (
    <Provider>
    <Routes>
      <Route path= '/' element={<Home />} />
      <Route path= '/pedido' element={<Pedido />} />
    </Routes>
    </Provider>
    // <div className='App'>
    //   <Home />
    // </div>
  );
}

export default App;
