import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-a957c.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-a957c/us-central1/api'
})

export default instance;