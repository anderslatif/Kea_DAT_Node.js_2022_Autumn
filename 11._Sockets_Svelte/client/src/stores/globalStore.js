import { writable } from "svelte/store";

export const username = writable(undefined); 
// no long needed since it's the same origin but keeping it in case of a different deployment model
export const BASE_URL = writable("");