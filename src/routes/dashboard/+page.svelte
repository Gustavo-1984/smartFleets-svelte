<script>
    // @ts-nocheck
        import { browser } from '$app/environment';
        import { goto } from '$app/navigation';
	import DateRange from '../../components/DateRange.svelte';
        let token = '';
    
        if (browser) {
            token = localStorage.getItem('token');
            if (token == null) {
                goto('/');
            }
        }
    </script>
<DateRange />