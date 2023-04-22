<script>
    import {fade} from "svelte/transition";
    import {state} from "../lib/store.js";
    import {goto} from "$app/navigation";

    const returnToSite = async () => {
      window.location.href = $state.returnToSite;
    }

    $: if ($state.response) {
        $state.step = 4
    }

</script>

<div in:fade>
    <h1>Thank you for your payment!</h1>
    <p>Before you go, please consider following us on social media and giving us a star on github</p>
</div>
<div in:fade class="socials-wrapper">
    <button on:click={() => goto('https://twitter.com/kryptokrona')}>Twitter</button>
    <button on:click={() => goto('https://github.com/kryptokrona')}>Github</button>
    <button on:click={() => returnToSite()}>Back to the site</button>
</div>

<style lang="scss">
  .socials-wrapper {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1rem;

    button {
      grid-column: span 6 / span 6;
      width: 100%;

      &:last-child {
        grid-column: span 12 / span 12;
        background-color: var(--success-color);
        border-color: #6affab;

        &:hover {
          background-color: #30ab66;
        }
      }
    }

    @media screen and (max-width: 568px) {
      flex-direction: column;
    }
  }
</style>