import Home from './components/home';
import Pedido from './components/pedido/pedido';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path= '/' element={<Home />} />
      <Route path= '/pedido' element={<Pedido />} />
    </Routes>
    // <div className='App'>
    //   <Home />
    // </div>
  );
}

export default App;
