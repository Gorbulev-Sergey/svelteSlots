<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { STORE, setSlots } from '../lib/store.svelte';

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
	{@render STORE.slots.header?.()}
</header>

<div style="min-height:90dvh">
	{@render children()}
</div>

{#if STORE.slots.footer}
	<footer class="fg-white bg-black bg-90" style="min-height: 20em;">
		{@render STORE.slots.footer?.()}
	</footer>
{/if}
