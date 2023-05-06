import './App.css';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Header from './components/Header';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './components/themeContext';


const router = createBrowserRouter([{
  path:'/',
  element:<><Header /><ProductList /></>
},{
  path:'/product/:productId',
  element:<><Header /> <ProductDetail /></>
},{
  path: '/cart',
  element:<><Header /><Cart /></>
}]);

function App() {
  useEffect(()=>{
    console.log('App got mounted');
  }, []);
  const { isDarkMode }= useContext(ThemeContext);
  return (
   
    <div className={`App ${isDarkMode ? 'dark-mode': 'light-mode'}`}>
       <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
