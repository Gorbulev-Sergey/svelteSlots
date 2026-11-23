import { getContext, setContext } from 'svelte';

interface IStore {
	slots: Record<string, () => ReturnType<import('svelte').Snippet>>;
}

export let STORE: IStore = $state({ slots: {} });

export function setSlots(snippets: typeof STORE.slots) {
	let context = getContext('slots') || setContext('slots', STORE.slots);

	Object.assign(STORE.slots, snippets);
	Object.assign(context, STORE.slots);
}
