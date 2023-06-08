<script>
	// @ts-nocheck
	
	
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { login, session } from '../store/authStore.js';
  

	 let token = ''
	 if (browser) {
	 	token = localStorage.getItem('token');
	 	if (token == null) {
	 		goto('/');
			 
	 	} 
	}
     

	let usuario = '';
	let password = '';

	const handleLogin = async () => {
		await login(usuario, password);
		usuario = '';
		password = '';
		session();
	};

	
		
	
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar sesión</h2>
		</div>
		<form class="mt-8 space-y-6" on:submit|preventDefault={handleLogin}>
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="usuario" class="sr-only">Usuario</label>
					<input
						id="usuario"
						name="usuario"
						type="txt"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Usuario"
						bind:value={usuario}
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Contraseña</label>
					<input
						id="password"
						name="password"
						type="password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Contraseña"
						bind:value={password}
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Iniciar sesión
				</button>
			</div>
		</form>
	</div>
</div>
