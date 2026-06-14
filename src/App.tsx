import { CartDrawer } from '@/components/cart/CartDrawer';
import { AdminProvider } from '@/context/AdminProvider';
import { CartProvider } from '@/context/CartProvider';
import { SneakerProvider } from '@/context/SneakerProvider';
import '@/index.css';
import { LoginPage } from '@/pages/Login/LoginPage';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';
import { OrderPage } from '@/pages/Order/OrderPage';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AdminProvider>
        <CartProvider>
          <CartDrawer />
          <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/order/:username' element={
            <SneakerProvider>
              <OrderPage />
            </SneakerProvider>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ToastContainer position="bottom-right" />
        </CartProvider>
    </AdminProvider>
  )
}

export default App
