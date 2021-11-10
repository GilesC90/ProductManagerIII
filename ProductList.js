import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import Product from "./Product";

const ProductList =  (props) => {
    const products = props.products
    // const [products, setProducts]  = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/products')
    //         .then(res => {
    //             setProducts(res.data.products)
    //             // products = setProducts
    //         })
    //         .catch(err => console.log("ERROR: ", err))
    // }, [counter])
    
    return (
        <div>
            {products.map((product, index) => (
                <p  key = { product._id } >
                    <Link to = {"/api/products/" + product._id}>{ product.title }</Link>
                </p>
            ))}
        </div>
    )
    }


export default ProductList;