import { AdminProvider } from '@/context/AdminProvider';
import '@/index.css';
import { LoginPage } from '@/pages/Login/LoginPage';
import { OrderPage } from '@/pages/Order/OrderPage';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AdminProvider>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/order/:firstName' element={<OrderPage/>} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </AdminProvider>
  )
}

export default App
