import axios from 'axios'
import { Rent } from "../models/Rent"

export const API=axios.create({
    baseURL:"http://localhost:8585/api/rent"
});


export const addRent=(newRent:Rent)=>API.post("",newRent);
export const getALLARents=()=>API.get("/rents");
export const getRentById=(id:number)=>API.get(`/${id}`)
export const deleteRent=(id:number)=>API.delete(`/${id}`)
export const updateRent=(id:number,rent:Rent)=>API.put(`/${id}`,rent);
