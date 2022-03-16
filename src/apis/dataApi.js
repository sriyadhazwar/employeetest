import axios from "axios";

const appID = '622f1d7b5b66a58cc5964b32'

export const getUsers = async () => {
    const res = await axios.get("https://dummyapi.io/data/v1/user?limit=100", {
        headers: {
            "app-id": appID
        }
    })
    return await res.data.data;
};

export const getUserById = async (id) => {
    const res = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
            "app-id": appID
        }
    })
    return await res.data;
};

export const getUserPost = async (id) => {
    const res = await axios.get(`https://dummyapi.io/data/v1/user/${id}/post`, {
        headers: {
            "app-id": appID
        }
    })
    return await res.data.data;
}

export const getPostbyTag = async (tag) => {
    const res = await axios.get(`https://dummyapi.io/data/v1/api/tag/${tag}/post/`, {
        headers: {
            "app-id": appID
        }
    })
    return await res.data.data;
}

export const getPostComment = async (postID) => {
    const res = await axios.get(`https://dummyapi.io/data/v1/api/post/${postID}/comment`, {
        headers: {
            "app-id": appID
        }
    })
    return await res.data.data
}