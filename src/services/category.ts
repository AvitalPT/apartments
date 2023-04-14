import axios from 'axios'
import { Category } from "../models/Category"

export const API=axios.create({
    baseURL:"http://localhost:8585/api/category"
});


export const addCategory=(newCategory:Category)=>API.post("",newCategory);
export const getALLCategory=()=>API.get("/categorys");
export const getCategoryById=(id:number)=>API.get(`/${id}`)
export const deleteCategory=(id:number)=>API.delete(`/${id}`)
export const updateCategory=(id:number,category:Category)=>API.put(`/${id}`,category);
