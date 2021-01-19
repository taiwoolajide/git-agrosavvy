import axios from "axios";
import { v4 } from 'uuid';


export const apiClient = axios.create({
  baseURL: '/api'
})

export const uuid = v4