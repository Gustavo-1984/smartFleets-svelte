<script>
    export let title = ''
    export let referencia = ''
    export let imagen = ''
    export let descripcion = ''
</script>


   <a href={referencia}>
    <div class="flex flex-col items-center h-64 rounded bg-secondary text-black w-auto p-3 text-4xl drop-shadow-lg hover:bg-slate-400">
        <h1>{title}</h1>
        <img class="icon text-white" src={imagen} alt="Ventas"/>
        <h1>{descripcion}</h1>
        
    </div>
   </a>   

 
   <style>
    .icon{
        padding: 15px;
        color: white;
        width: 250px;
        height: 150px;
    }
</style>