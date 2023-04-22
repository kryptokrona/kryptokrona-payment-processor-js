<script>
    import {state} from "../lib/store.js";
    import Step1 from "../components/Step1.svelte";
    import Step2 from "../components/Step2.svelte";
    import Step3 from "../components/Step3.svelte";
    import Response from "../components/Response.svelte";
</script>

<!-- THIS IS ALL WRAPPED IN +LAYOUT-->

<div class="card layered-shadow">
    {#if $state.step === 1}
        <Step1/>
    {:else if $state.step === 2}
        <Step2/>
    {:else if $state.step === 3}
        <Step3/>
    {:else if $state.step === 4}
        <Response/>
    {/if}
</div>