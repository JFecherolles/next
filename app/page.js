'use client'

import Meals from '../components/Meals/Meals'
import Page from '../components/what/page'
import Cart from "../components/Cart/Cart";
import  CartProvider from '../components/store/CartProvider'
import { useState } from "react";
import Header from '../components/Header'

export default function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <><CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Page
        onShowCart={showCartHandler}
        onClose={hideCartHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
    <Header /></>
  );
}
