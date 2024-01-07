import axios from "axios";



export const pokeApiRest = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
})