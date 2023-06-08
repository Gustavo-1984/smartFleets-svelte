<script>
// @ts-nocheck
	import Navbar from '../../components/Navbar.svelte';
	import BreadCrumb from '../../components/BreadCrumb.svelte';
</script>


<Navbar />
<BreadCrumb 
	referencia={"/home"} 
	referencia1={"/ventas"} 
	referencia2={"/home"} 
	title={"Inicio"} 
	title1={"Dashboard"} 
	title2={"Ventas"} />
<slot />


