import axios from 'axios'

const api = axios.create({
  baseURL: 'http://private-anon-d4297f7c5b-tradersclubapi.apiary-mock.com'
})

export default api;