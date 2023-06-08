// @ts-nocheck
import {writable} from 'svelte/store';
import axios from "axios";
import { goto } from '$app/navigation';
import { browser } from '$app/environment';

let token = '';
if (browser) {
    token = localStorage.getItem('token');
    if (token !== null) {
        goto('/home');
    }
}
  
 const sessionStore = writable({ usuario: null, token: null });
 export const sessions = writable({
    usuario: '',
    confirm: false,
    devices: [],
    vehiculos: [],
    ventas: [],
    _id: '',
 });

 

 export const login = async (usuario, password) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, { usuario, password }, { withCredentials: true });
        sessionStore.subscribe(() => {})
        sessionStore.set(response.data);
        localStorage.setItem('id', response.data._id);
        localStorage.setItem('user', response.data.user);
        localStorage.setItem('token', response.data.token);
         
        goto('/home');
        
    } catch (error) {
        console.log('Error al iniciar sesión: ', error);
    }
 }

   export const session = async () => {
        const token = localStorage.getItem('token');
      try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/perfil`, { headers: { Authorization: `Bearer ${token}` }}, { withCredentials: true } );
          sessions.subscribe(() => {})
          sessions.set(response.data);
      } catch (error) {
          console.log('Error al obtener la sesión del usuario: ', error);
      }
   }

 export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStore.set({ usuario: null, token: null });
    goto('/');
  };
  
  