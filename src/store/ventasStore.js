// @ts-nocheck
import {readable} from 'svelte/store';
import axios from "axios";

export const ventas = readable(
    [],
    async set => {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/ventas`);
        const venta = await res.data;
        set(venta);
    }
)