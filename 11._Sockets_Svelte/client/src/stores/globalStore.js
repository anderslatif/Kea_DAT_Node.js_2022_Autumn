import { writable } from "svelte/store";

// the user - used to know if the person is registered in or not.
export const username = writable(undefined); 
// no long needed since it's the same origin but keeping it in case of a different deployment model
export const BASE_URL = writable("");
export const ENVIRONMENT = writable("DEVELOPMENT");
