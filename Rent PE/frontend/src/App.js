import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Browse from './components/Browse/Browse';
import Product from './components/Product/Product';
import Booking from './components/Booking/Booking';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter basename="/Rent-pe">
     
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Register/>}/>

      

        <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >

          <Route path='/' element={<Home/>}/>
          <Route path='Browse' element={<Browse/>}/>
          <Route path='Booking' element={<Booking/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='Profile' element={<Profile/>}/>
          
         

        </Route>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
