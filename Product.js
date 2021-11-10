import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom"
import axios from "axios";


const Product = (props) => {
    const { id } = useParams();
    console.log(id)

    const [product, setProduct] = useState({});

    let history = useHistory()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id )
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [id]);

    const deleteThisProduct = (id) => {
        axios.delete("http://localhost:8000/api/products/delete/" + id)
        .then(res => {
            console.log(res.data)
            history.push('/api/products')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>
                {product.title}
            </h2>
            <h3>
                Price: ${product.price}
            </h3>
            <h3>
                Description: {product.description}
            </h3>
                <Link to = {"/api/products/update/" + id }>Update Product</Link>
            {"   |   "}
                <button onClick = {() => deleteThisProduct(id)}>Delete Product</button>
            <br/>
            <Link to = {"/api/products"}>Back Home</Link>
        </div>
    )
}
export default Product