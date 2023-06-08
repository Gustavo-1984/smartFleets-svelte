<script>
    // @ts-nocheck
        import { browser } from '$app/environment';
        import { goto } from '$app/navigation';
		import Modal from '../../components/Modal.svelte';
        import  {ventas}  from '../../store/ventasStore.js';
		import { format} from 'date-fns'

        let token = '';
    
        if (browser) {
            token = localStorage.getItem('token');
            if (token == null) {
                goto('/');
            }
        }
    
      ventas.subscribe(() => {})
       
    </script>
<input type="date" placeholder="Type here" class="input input-bordered w-full max-w-xs ml-5" />
<div class="overflow-x-auto p-5">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
		  <th>Numero de Serie</th>
          <th>Tag</th>
		  <th>Fecha</th>
		  <th>Hora</th>
          <th>Venta</th>
          <th>Litros</th>
        </tr>
      </thead>
      <tbody>
        {#each $ventas as item}
        <tr class="hover" >
		  <td>{item.serialNumber}</td>
          <td>{item.tag}</td>
		  <td>{format(new Date(item.createdAt), 'yyyy-MM-dd')}</td>
		  <td>{format(new Date(item.createdAt), 'HH:mm:ss').toString()}</td>
          <td>{item.venta}</td>
          <td>{item.litros}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <Modal />
