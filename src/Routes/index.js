import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import MainPage from "../paginas/PaginaInicial";
// import FrontEnd from "../paginas/PaginaFrontEnd";
// import PaginaBackEnd from "../paginas/PaginaBackEnd";
import MainPage from "../pages/MainPage";
import CategoryPage from "../pages/categoryPage";
import SearchPage from "../pages/SearchPage/SearchPage";

import ItemDetails from "../pages/ItemDetails";

import CartPage from "../pages/CartPage/CartPage";

import MainProvider from '../Provider/MainProvider';
import PurchaseCheckout from '../pages/purchaseCheckout/PurchaseCheckout';

const Rotas = () => (
  <MainProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route exact path='/'   element={<MainPage/>}/> */}
        <Route exact path='/' element={<MainPage/>}/>
        {/* <Route path='/front-end' element={<FrontEnd/>}/> */}
        {/* <Route path='/back-end'  element={<PaginaBackEnd/>}/> */}
        <Route path='/main'  element={<MainPage/>}/>
        <Route path='/product/:id' element={<ItemDetails />}/>
        <Route path='/category'  element={<CategoryPage/>}/>
        <Route path='/search'  element={<SearchPage/>}/>
        <Route path='/cart'  element={<CartPage/>}/>
        <Route path='/purchaseCheckout'  element={<PurchaseCheckout/>}/>
      </Routes>
    </BrowserRouter>
  </MainProvider>
);

export default Rotas;