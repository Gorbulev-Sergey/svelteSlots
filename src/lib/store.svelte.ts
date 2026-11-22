import { getContext, setContext, Snippet } from 'svelte';

let slots = $state<{
	header?: () => ReturnType<import('svelte').Snippet>;
	footer?: () => ReturnType<import('svelte').Snippet>;
}>({});

export function initSlots() {
	return setContext('slots', slots);
}

export function setSlots(snippets: {}) {
	let context = getContext('slots') as {};
	Object.assign(context, snippets);
}
