<script lang="ts">
	import { setSlots } from '../lib/store.svelte';

	let v = $state('Привет');

	setSlots({ header });
</script>

{#snippet header()}
	<div class="d-flex align-items-center gap-2 px-10 py-3 bg-info bg-10">
		{v}
	</div>
{/snippet}
