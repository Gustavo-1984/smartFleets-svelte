// @ts-nocheck
import {readable, writable} from 'svelte/store';
import axios from "axios";

export const vehiculos = readable(
    [],
    async set => {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/vehiculos`);
        const vehiculo = await res.data;
        set(vehiculo);
    }
)





  let  tag = ''
  let  placas = ''
  let  modelo = ''
  let  marca = ''
  let  numeroEconomico = ''
  let  odometro = ''
  let  descripcion = ''


const createVehiculo = writable({
    tag,
    placas,
    modelo,
    marca,
    numeroEconomico,
    odometro,
    descripcion,
});

export const addVehiculo = async (tag, placas, modelo, marca, numeroEconomico, odometro, descripcion) => {
    let id = localStorage.getItem('id');
    console.log(id)
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/vehiculos/${id}`, {tag, placas, modelo, marca, numeroEconomico, odometro, descripcion}, { withCredentials: true });
        createVehiculo.subscribe(() => {})
        createVehiculo.set(response.data);
        console.log(response.data);
    } catch (error) {
        console.log('Error al agregar vehiculo: ', error);
    }
}