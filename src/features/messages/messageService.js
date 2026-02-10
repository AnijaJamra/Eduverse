import axios from "axios"

const fetchMessages = async(token) => {
    let options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get('/api/messages', options)
    return response.data
}

const sendMessage = async(pid,token) => {
    let options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post('/api/messages/' + pid , {text : "I am Intarested In Your Listing Kindly Contact Me! Thunks"} , options)
    console.log(response.data)
    return response.data
}

const messageService = { fetchMessages , sendMessage }

export default messageService


