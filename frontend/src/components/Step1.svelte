<script>
    import {fade} from "svelte/transition";
    import {state} from "../lib/store.js";
    import Info from "./icons/Info.svelte";

</script>

<div in:fade>
    <div style="display: flex; gap: 1rem; align-items: center">
        <h1>Kryptokrona payment</h1>
    <!-- '   <Info green={$state.total > 10000000} red={$state.total < 10000000} on:click={() => $state.step = 'info'}/> '  -->
    </div>
    <p>Welcome to the kryptokrona payment processor!
        remember to check that you are sending to the correct address and payment ID. <span
        style="text-decoration: underline">Neither the shop nor the kryptokrona developers
                 are obligated to return any lost money due to using wrong address or payment ID</span>.
    </p>
</div>
<button in:fade on:click={() => $state.step = 2}>I understand</button>

<style lang="scss">



</style>