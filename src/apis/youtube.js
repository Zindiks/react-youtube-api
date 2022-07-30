import axios from "axios"
const KEY = 'AIzaSyCcWuYdXzhv-72P3-UuvPyCFw8Jl40XZsA'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }



});