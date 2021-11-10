import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const Update = (props) => {
    let history = useHistory();
    
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description)
        })
        .catch(err => console.log(err))
    }, [])

    const updateForm = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + id,{
            title,
            price,
            description
        })
        .then(res => {
            history.push('/api/products')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>
                Update Product
            </h2>
            <form onSubmit = {updateForm}>
            <p>
                <label>
                    Title:
                </label>
                <input type = "text" onChange = {(e) => setTitle(e.target.value)} value = {title} />
            </p>
            <p>
                <label>
                    Price:
                </label>
                <input type = "number" onChange = {(e) => setPrice(e.target.value)} value = {price} />
            </p>
            <p>
                <label>
                    Description:
                </label>
                <input type = "text" onChange = {(e) => setDescription(e.target.value)} value = {description} />
            </p>
            <input type = "submit" />
        </form>
        </div>
    )
}

export default Update