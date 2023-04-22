<script>
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";
    import {state} from "../lib/store.js";


    let incomingUrl = null;

    onMount(async () => {
        const getAddress = await fetch(`${$state.backend}/getAddress`);
        const resAddress = await getAddress.json()
        $state.address = resAddress.walletAddress

        const getPaymentID = await fetch(`${$state.backend}/generatePaymentID`);
        const resPaymentID = await getPaymentID.json()
        $state.paymentID = resPaymentID.PaymentID

        const search = location.search;
        const params = new URLSearchParams(search);
        const amount = params.get('amount');
        history.replaceState({}, null, "/");
        if (amount) {
            $state.amount = amount
            const newPayment = await fetch(`${$state.backend}/addPayment?paymentID=${$state.paymentID}&amount=${amount}`)
            const resNewPayment = await newPayment.json()
            if(resNewPayment.status != "ok") {
                $state.status = 'FAILED'
            }
        } else {
            $state.status = 'FAILED'
        }
    })

</script>

<main in:fade>
    <slot/>
</main>

<style>
    @import '../theme/global.scss';

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        gap: 2rem;
        padding: 20px;
    }
</style>