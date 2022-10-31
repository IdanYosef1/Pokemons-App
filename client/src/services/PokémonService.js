import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getFiveElements = () => axios.get(API_URL);

const getById = (id) => axios.get(API_URL + "/" + id);

const createData = (obj) => axios.post(API_URL, obj);

const updateData = (id, obj) => axios.put(API_URL + "/" + id, obj);

const deleteData = (id) => axios.delete(API_URL + "/" + id);

export { getFiveElements, getById, createData, updateData, deleteData };
