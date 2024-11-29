import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const serverUrl = import.meta.env.BASE_URL  


const api = axios.create({
    baseURL : serverUrl
});

const adapter = new MockAdapter(api, {delayResponse: 1000});
   

