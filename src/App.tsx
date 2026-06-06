import '@/App.css';
import { LoginPage } from '@/components/pages/Login/LoginPage';
import '@/index.css';
import { Route, Routes } from 'react-router';
import { OrderPage } from './components/pages/Order/OrderPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/order/:firstName' element={<OrderPage/>} />
    </Routes>
  )
}

export default App
