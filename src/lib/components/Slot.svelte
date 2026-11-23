<script lang="ts">
	import { setSlots } from '#lib/store.svelte.ts';

	interface IProps {
		name: string;
		children: () => ReturnType<import('svelte').Snippet>;
	}

	let { name, children }: IProps = $props();

	let obj: Record<string, () => ReturnType<import('svelte').Snippet>> = $state({});
	obj[name] = children;

	setSlots(obj);
</script>
