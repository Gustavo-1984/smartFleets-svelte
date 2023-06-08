<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { format} from 'date-fns'
  
    let fromDate = '';
    let toDate = '';
    let filteredResults = [];
  
    const results = [
      { id: 1, date: format(new Date(2023, 4, 1), 'yyyy-MM-dd') },
      { id: 2, date: format(new Date(2023, 4, 2), 'yyyy-MM-dd') },
      { id: 3, date: format(new Date(2023, 4, 5), 'yyyy-MM-dd') },
      { id: 4, date: format(new Date(2023, 4, 10), 'yyyy-MM-dd') },
      { id: 5, date: format(new Date(2023, 4, 15), 'yyyy-MM-dd') },
      { id: 6, date: format(new Date(2023, 4, 25), 'yyyy-MM-dd') }
    ];
  
    const  filterResults = () => {
      filteredResults = results.filter(result => {
        const date = result.date;
        return date >= fromDate && date <= toDate;
      });
   
    }
   
  </script>
  
  <main>
    <h1>Programa de filtro de resultados por rango de fecha</h1>
    <form class="mt-8 space-y-6" on:submit|preventDefault={filterResults}>
    <label>
      Desde:
      <input class="input input-bordered" type="date" bind:value={fromDate} on:change={filteredResults} />
    </label>
  
    <label>
      Hasta:
      <input  class="input input-bordered" type="date" bind:value={toDate} on:change={filteredResults} />
    </label>
  
    <h2>Resultados filtrados:</h2>
    <ul>
      {#each filteredResults as result}
        <li>{result.id}: {result.date}</li>
      {/each}
    </ul>
    <button class="btn" type="submit">Resultado</button>
  </main>
  