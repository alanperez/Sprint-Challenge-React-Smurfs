
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        Authorization: 'Client-ID ba3ca2de19ab8ddc1c53a8dbd56a1cef8535665b2dfe3dd14ce3ca253d41b7db'
    }
})