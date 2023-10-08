
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './features/ui/Layout/Layout';
import { Products } from './pages/Products';
import { Admin } from './pages/Admin';
import { ProductPage as Product } from './pages/Product';
import { Login } from './pages/Login';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <BrowserRouter>
      <Toaster position="top-center"
        reverseOrder={false} />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
