import { BrowserRouter, Route, Routes } from "react-router";
import Home from './Pages/Home';
import Amurtam from './Pages/Amurtam';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/amurtam' element={<Amurtam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;