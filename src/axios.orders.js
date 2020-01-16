import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://my-react-app-537a2.firebaseio.com/'
    
})

export default instance