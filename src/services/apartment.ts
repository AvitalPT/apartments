import axios from 'axios'
import { Apartment } from "../models/Apartment"

export const API = axios.create({
    baseURL: "http://localhost:8585/api/apartment"
});

export const addApartment = (newApartment: Apartment) =>API.post("/", newApartment); 
export const getAllApartments = () => API.get("/apartments");
export const getApartmentById = (id: number) => API.get(`/${id}`)
export const deleteApartment = (id: number) => API.delete(`/${id}`)
export const updateApartment = (id: Number, apartment: Apartment) => API.put(`/${id}`, apartment);
