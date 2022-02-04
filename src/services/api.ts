// Criar uma base para sempre pegar a API e fazer as requisoções
import axios from 'axios'


// Criar uma API que vai ser igual axios.create e dentro do objeto 
// vai ser passado a configuração chamada baseURL, que será a rota padrão 
// para as nossas requisões (HTTP ... )
const api = axios.create ({
  baseURL: "http://localhost:3333"
})

export default api 