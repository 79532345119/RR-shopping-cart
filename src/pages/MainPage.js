import React from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
import Cart from "../components/Cart";

export function MainPage() {
    return (
        <>
            <div className="main">
              <Filter/>
              <Products />
            </div>
            <div className="sidebar">
              <Cart />
            </div>
            
        </>
    )
}
