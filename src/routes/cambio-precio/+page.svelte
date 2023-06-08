<script>
// @ts-nocheck
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';
    let token = '';

	if (browser) {
		token = localStorage.getItem('token');
		if (token == null) {
			goto('/');
		}
	}
</script>
 <h1>Cambio de precio</h1>