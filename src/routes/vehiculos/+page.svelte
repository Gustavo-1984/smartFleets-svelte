<script>
    // @ts-nocheck
        import { browser } from '$app/environment';
        import { goto } from '$app/navigation';
	      import Modal from '../../components/Modal.svelte';
        import  {vehiculos, addVehiculo}  from '../../store/vehiculosStore.js';

        let token = '';
    
        if (browser) {
            token = localStorage.getItem('token');
            if (token == null) {
                goto('/');
            }
        }
    vehiculos.subscribe(() => {});

      let tag = '';
      let placas = '';
      let modelo = '';
      let marca = '';
      let numeroEconomico = '';
      let odometro = '';
      let descripcion = '';


      const handAddVehiculo = async () => {
        await addVehiculo(tag, placas, modelo, marca, numeroEconomico, odometro, descripcion);
        tag = '';
        placas = '';
        modelo = '';
        marca = '';
        numeroEconomico = '';
        odometro = '';
        descripcion = '';
      };
      
       
    </script>

<div class="flex justify-between mr-5 text-2xl breadcrumbs">
    <div class="flex ml-5  breadcrumbs">
        <h1 class="text-4xl">Vehículos</h1>
       </div>
    <ul> 
      <li><label for="my-modal2" class="btn btn-outline btn-success text-2xl">Crear Nuevo</label></li>
    </ul>
   
  </div>

 

<div class="overflow-x-auto ml-5 mr-5">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Tag</th>
          <th>Placas</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Numero Economico</th>
          <th>Odometro</th>
          <th>Descripción</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {#each $vehiculos as item}
        <tr class="hover" >
          <td>{item.tag}</td>
          <td>{item.placas}</td>
          <td>{item.modelo}</td>
          <td>{item.marca}</td>
          <td>{item.numeroEconomico}</td>
          <td>{item.odometro}</td>
          <td>{item.descripcion}</td>
            <td>
                <label for="my-modal" class="btn btn-ghost">Editar</label>
            </td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <Modal />

  <input type="checkbox" id="my-modal2" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h1 class="font-bold text-2xl mb-3">Editar Vehiculos</h1>
    <form class="mt-8 space-y-6" on:submit|preventDefault={handAddVehiculo}>
    <label for="my-modal2" class="btn btn-sm btn-circle absolute right-2 top-2 mt-2">✕</label>
    <input type="text" placeholder="Tag" class="input input-bordered w-full mb-3" bind:value={tag} />
    <input type="text" placeholder="Placas" class="input input-bordered w-full mb-3" bind:value={placas} />
    <input type="text" placeholder="Modelo" class="input input-bordered w-full mb-3" bind:value={modelo} />
    <input type="text" placeholder="Marca" class="input input-bordered w-full mb-3" bind:value={marca} />
    <input type="text" placeholder="Numero Economico" class="input input-bordered w-full mb-3" bind:value={numeroEconomico} />
    <input type="text" placeholder="Odometro" class="input input-bordered w-full mb-3" bind:value={odometro} />
    <input type="text" placeholder="Descripción" class="input input-bordered w-full mb-3" bind:value={descripcion} />
 
    <div class="modal-action">
        <button type="submit" class="btn btn-primary">Guardar</button>
        <label for="my-modal2" class="btn">Cancelar</label>
    </div>
  </form>
  </div>
</div>