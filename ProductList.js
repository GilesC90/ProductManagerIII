import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";


const ProductList =  (props) => {
    const products = props.products
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