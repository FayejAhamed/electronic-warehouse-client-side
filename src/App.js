import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Inventory from './Pages/Inventory/Inventory';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import InventoryItems from './Pages/InventoryItems/InventoryItems';
import Update from './Pages/Home/Update/Update';
import ManageInventory from './Pages/Home/ManageInventory/ManageInventory';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/update/:productId' element={
       <RequireAuth>
          <Update></Update>
       </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>

    </div>
  );
}

export default App;
