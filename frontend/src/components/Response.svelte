<script>
    import {fade} from "svelte/transition";
    import {Moon} from "svelte-loading-spinners";
    import {state} from "../lib/store.js";
    import {quadInOut} from "svelte/easing";
    import {draw, fly} from "svelte/transition";
    import Check from "./icons/Check.svelte";
    import Stop from "./icons/Stop.svelte";

    console.log($state)
</script>

<div in:fade class="res">
    {#if !$state.response}
        <Moon color="var(--title-color)" size="40" unit="px"/>
    {:else if $state.sent === true}
        <Check/>
        <h2 in:fly="{{y: 20, delay: 400, easing: quadInOut}}">Sent!</h2>
    {:else}
        <Stop/>
        <h2 in:fly="{{y: 10, delay: 400, easing: quadInOut}}">{$state.response}</h2>
    {/if}
</div>

<style lang="scss">

  .res {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    transition: 200ms ease-in-out;
    gap: 1rem;
    width: 100%;
    height: 100%;

  }
</style>