<script>
// @ts-nocheck
    import Dashboard from '../../assets/dashboard.png';
	import Ventas from '../../assets/chart-1.png';
    import Vehiculo from '../../assets/vehiculo.png';
    import Card from "../../components/Card.svelte";
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';
	import { session } from '../../store/authStore';
    let token = '';

	if (browser) {
		token = localStorage.getItem('token');
        session()
		if (token == null) {
			goto('/');
		}
	}
</script>




<div class="grid md:grid-cols-2 sm:grid-cols-1 gap-3 p-2">
<Card title={'Ventas'} referencia={"/ventas"} imagen={Ventas} descripcion={"Reporte de ventas"}/>
   
  
<Card title={'Vehiculos'} referencia={"/vehiculos"} imagen={Vehiculo} descripcion={"Agregar Visualizar y Editar"} />
</div>

<div class="grid md:grid-cols-2 sm:grid-cols-1 gap-3 p-2">
    <Card title={'Configuracion'} referencia={"/config"} imagen={Dashboard} descripcion={"Agregar Visualizar y Editar"} />
    <Card title={'Cambio de precio'} referencia={"/cambio-precio"} imagen={Dashboard} descripcion={"Agregar Visualizar y Editar"} />
</div>

<div class="grid grid-cols-1 gap-2 p-2">
    <Card title={'Dashboard'} referencia={"/dashboard"} imagen={Dashboard} descripcion={"Agregar Visualizar y Editar"} />
</div>

