import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import Product from "../components/Product";
import Update from "../components/UpdateProduct";


export default () => {
    const [products, setProducts]  = useState([])
    const [counter, setCounter] = useState(0)

    const removeFromDom = productId => {
        setProducts(products.filter(products => products._id !== productId));
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.products)
                // products = setProducts
            })
            .catch(err => console.log("ERROR: ", err))
    }, [counter])
    console.log(products)
    return (
        <>
        <Route exact path = "/api/products">
            <div>
                    <ProductForm counter = {counter} setCounter = {setCounter}/>
            </div>
            <hr/>
            <div>
                <h2>
                    All Products
                </h2>
                <ProductList products = {products} removeFromDom = {removeFromDom}/>
            </div>
        </Route>
        <Route exact path = "/api/products/:id">
            <Product counter = {counter} setCounter = {setCounter}/>
        </Route>
        <Route exact path = "/api/products/update/:id">
            <Update />
        </Route>
        </>
    )
}