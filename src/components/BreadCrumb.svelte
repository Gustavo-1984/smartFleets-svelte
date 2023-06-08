<script>
    export let title = ''
    export let title1 = ''
    export let title2 = ''
    export let referencia = ''
    export let referencia1 = ''
    export let referencia2 = ''
</script>

<div class="flex justify-center text-2xl breadcrumbs mb-10">
    <ul>
      <li><a href={referencia}>{title}</a></li>
      <li><a href={referencia1}>{title1}</a></li> 
      <li><a href={referencia2}>{title2}</a></li> 
    </ul>
  </div>