<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { initSlots, setSlots } from '../lib/store.svelte';

	let slots = initSlots();

	let { children } = $props();
	setSlots({ footer });
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#snippet footer()}
	<div class="d-flex flex-column w-100 p-10">
		<div>Как дела?</div>
	</div>
{/snippet}

<header class="sticky-top w-100">
	{@render slots.header?.()}
</header>

<div style="min-height:90dvh">
	{@render children()}
</div>

{#if slots.footer}
	<footer class="fg-white bg-black bg-90" style="min-height: 20em;">
		{@render slots.footer?.()}
	</footer>
{/if}
