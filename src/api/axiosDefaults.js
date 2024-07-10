import axios from "axios"

axios.defaults.baseURL = 'https://drf-api-jam-b232223b79dc.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true
