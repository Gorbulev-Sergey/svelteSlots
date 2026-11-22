import { getContext, setContext } from 'svelte';

let slots = $state<{
	header?: () => ReturnType<import('svelte').Snippet>;
	footer?: () => ReturnType<import('svelte').Snippet>;
}>({});

export function initSlots() {
	return setContext('slots', slots);
}

export function setSlots(snippets: {}) {
	slots = snippets;
	let context = getContext('slots') as {};
	Object.assign(context, slots);
}
