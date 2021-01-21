import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data.json";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
      size: "",
      sort: "",
      count: data.products.length
    }
  }
  createOrder = (order) => {
    console.log(order)
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ cartItems: cartItems.filter(x=>x._id !== product._id)})
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x=>x._id !== product._id)))  
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false
    cartItems.forEach(item=>{
      if(item._id === product._id) {
        item.count++
        alreadyInCart = true
      }
    })
    if (!alreadyInCart) {
      cartItems.push({...product, count: 1})
    }
    this.setState({cartItems})
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }

  sortProducts = (event) => {
    const sort = event.target.value
    this.setState(state=>({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => (
        sort === "lowest"?
        ((a.price > b.price)? 1:-1):
        sort === "highest"?
        ((a.price < b.price)? 1:-1):
        ((a._id > b._id)? 1:-1)
      ))
    }))
  }

  filterProducts = (event) => {
    if(event.target.value ==="") {
      this.setState({ size: event.target.value, products: data.products})
    } else {
        this.setState({
          size: event.target.value,
          products: data.products.filter(
            product => product.availableSizes.indexOf(event.target.value) >= 0
          )
        })
    }
  }

  render() {
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.count}
                      sort={this.state.sort}
                      size={this.state.size}
                      sortProducts={this.sortProducts}
                      filterProducts={this.filterProducts}
                />
              <Products products={this.state.products} 
                        addToCart={this.addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} 
                    removeFromCart={this.removeFromCart}
                    createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>All rights reserved</footer>
  
      </div>
      </Provider>
    );
  }
}

export default App;
