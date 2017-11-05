// import axios from 'axios'
const localUrl = 'http://localhost:5000'
const cloudUrl = 'https://immense-thicket-45779.herokuapp.com'
const BASE_URL = process.env.NODE_ENV === 'production' ? cloudUrl : localUrl

export default BASE_URL;
