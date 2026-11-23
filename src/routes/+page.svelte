<script lang="ts">
	import Slot from '#lib/components/Slot.svelte';

	let v = $state('Привет');
</script>

<Slot name="header">
	<div class="d-flex align-items-center gap-2 px-10 py-3 bg-primary bg-50">
		{v}
	</div>
</Slot>

<Slot name="block">
	<div class="px-4 py-10 rounded-3 bg-success bg-75 w-25">Небольшой блочек</div>
</Slot>
