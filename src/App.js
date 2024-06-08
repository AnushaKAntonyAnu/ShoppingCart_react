import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewallProduct from './components/ViewallProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/search' element={<SearchProduct/>}/>
      <Route path='/delete' element={<DeleteProduct/>}/>
      <Route path='/view' element={<ViewallProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
