import axios from "axios"

const fetchProducts = async () => {
    const response = await axios.get('/api/products')
    return response.data
    
}

const fetchProduct = async (id) => {
    const response = await axios.get('/api/products/' + id)
     return response.data
    
}

const update = async(formData, token) => {
    let options = {
        headers: { authorization: `Bearer ${token}`}
    }
    const  response = await axios.put("/api/products/" + formData._id , formData , options )
    console.log(response.data);
    return response.data
}

const add = async(formData, token) => {
    let options = {
        headers: { authorization: `Bearer ${token}`}
    }
    const  response = await axios.post("/api/products/"  , formData , options )
    console.log(response.data);
    return response.data
}

const productService = {fetchProducts , fetchProduct , update , add}

export default productService