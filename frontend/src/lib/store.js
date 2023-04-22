import {writable} from "svelte/store";

export const state = writable({
    step: 1,
    address: undefined,
    amount: undefined,
    paymentID: undefined,
    status: 'fetching...',
    currency: 'XKR',
    backend: 'http://127.0.0.1:3030',
    returnToSite: 'https://kryptokrona.org'
})