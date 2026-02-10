import axios from "axios"

export const fetchComments = async (eid) => {
    const response = await axios.get("/api/events/" + eid + "/comment")
    return response.data
}

export const createComment = async (comment, token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }


    const response = await axios.post("/api/events/" + comment.eid + "/comment", comment, options)
    return response.data
}

const commentService = { fetchComments, createComment }

export default commentService 