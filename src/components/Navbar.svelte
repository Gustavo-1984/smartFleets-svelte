<script>
    // @ts-nocheck
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
  import { logout } from '../store/authStore.js';


  let usuario = '';
  
  onMount(() => {
    usuario = localStorage.getItem('user');
  });

     const handleLogout = () => {
           logout();
           goto('/');
         };


</script>

<div class="navbar bg-base-100 mb-5">
    <div class="flex-1 ">
      <a href="/home" class="btn btn-ghost normal-case text-5xl ">Smart-Fleets</a>
    </div>
    <div>
     <h1 class="mr-4 max-[600px]:invisible">Usuario: {usuario}</h1>
     <button class="mr-4 btn btn-outline">Cambiar contraseña</button>
     <button class="btn btn-outline" on:click={handleLogout}>Salir</button>
    </div>
  </div>
