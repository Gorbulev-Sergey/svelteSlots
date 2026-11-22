import { getContext, setContext } from 'svelte';

export let slots: {
	header?: () => ReturnType<import('svelte').Snippet>;
	footer?: () => ReturnType<import('svelte').Snippet>;
} = $state({});

export function setSlots(snippets: {}) {
	let context = getContext('slots') || setContext('slots', slots);

	Object.assign(slots, snippets);
	Object.assign(context, slots);
}
