// import axios from 'axios'
const enviro = process.env.NODE_ENV
const localUrl = 'http://localhost:5000'
const cloudUrl = 'https://immense-thicket-45779.herokuapp.com'
const BASE_URL = enviro === 'production' ? cloudUrl : localUrl

export default BASE_URL;
