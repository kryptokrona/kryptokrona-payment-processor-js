<script>
  import {fade} from "svelte/transition";
  import {state} from "../lib/store.js";
  

  setInterval(async function () {
            var getStatus = await fetch(`${$state.backend}/payment?paymentID=${$state.paymentID}`)
            var resGetStatus = await getStatus.json()
            $state.status  = resGetStatus.status
        }, 10000)

</script>

{#if $state.status != 'RECIEVED'}
<div in:fade>
  <h1>Payment information</h1>
  <p>Please send to the following address and payment ID</p>
</div>
<div in:fade>
  <div class="input-wrapper">
    <label for="address">Address</label><br>
    <input type="text" id="address" placeholder="SEKR..." bind:value={$state.address} disabled> <br>
  </div>
  <div class="input-wrapper"></div>
  <label for="amount">Amount</label><br>
  <input type="text" placeholder="AMOUNT NEEDED" id="amount" bind:value={$state.amount} disabled> <br>
</div>
<div class="input-wrapper">
  <label for="paymentID">Payment ID</label><br>
  <input type="text" placeholder="payment ID" id="paymentID" bind:value={$state.paymentID} disabled> <br>
</div>
<div class="info-wrapper">
  <h4 id="showStatus">status: {$state.status}</h4>
</div>
{/if}
{#if $state.status == 'RECIEVED'}
<div class="info-wrapper container">
  <div class="center">
  <h2>Success! We have gotten the transaction</h2>
  <button  in:fade on:click={() => $state.step = 3}>Continue</button>
  </div>
</div>
{/if}

<style lang="scss">
  .input-wrapper {
    margin-top: 1rem;
    display: block;
    align-items: center;
    gap: 1rem;
    
    button {
      width: 30%;
    }
    
    @media screen and (max-width: 568px) {
      flex-direction: column;
      
      button {
        width: 100%;
      }
    }
  }
  .info-wrapper {
    margin-top: 1rem;
    display: block;
    align-items: center;
    text-align: center;
    gap: 1rem;
    
    button {
      text-align: center;
      width: 100%;
      border-color: #6affab;

        &:hover {
          background-color: #30ab66;
        }
    }
    
    @media screen and (max-width: 568px) {
      
      button {
        width: 100%;
      }
    }
  }
  
  input {
    border: 1px solid #505050;
    background-color: transparent;
    border-radius: 5px;
    padding: 10px 15px;
    height: 48px;
    width: 100%;
    color: var(--text-color);
    font-size: 1rem;
    font-family: "Roboto Mono", monospace;
    transition: 200ms ease-in-out;
    
    &:focus {
      outline: none;
      border-color: white;
    }
  }
  .container {
  height: 200px;
  position: relative;
}

.center {
  margin: 0;
  position: absolute;
  top: 70%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>