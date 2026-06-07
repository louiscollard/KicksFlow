import '@/App.css';
import { LoginPage } from '@/components/pages/Login/LoginPage';
import '@/index.css';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { OrderPage } from './components/pages/Order/OrderPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/order/:firstName' element={<OrderPage/>} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App
