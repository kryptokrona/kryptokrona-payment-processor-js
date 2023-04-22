<script>
    export let grey = false
    export let red = false
    export let green = false
    export let blink = false
    let color = 'var(--text-color)'

    $: {
        if (red) {
            color = 'var(--warn-color)'
        } else if (green) {
            color = 'var(--success-color)'
        } else if (grey) {
            color = 'var(--text-color)'
        }
    }
</script>

<svg class:blink_me={blink} on:click style="transform: rotate(180deg); cursor: pointer" width="28px" height="28px"
     viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="info-circle">
            <path class:blicnkcolor={blink}
                  d="M22,12 C22,6.5 17.5,2 12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 Z"
                  id="Vector" stroke={color} stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" stroke-dasharray="0,0" fill-rule="nonzero"></path>
            <line class:blicnkcolor={blink} x1="12" y1="8" x2="12" y2="13" id="Vector" stroke={color} stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0,0"></line>
            <line class:blicnkcolor={blink} x1="11.9945068" y1="16" x2="12.0034888" y2="16" id="Vector" stroke={color}
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0,0"></line>
            <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z" id="Vector" opacity="0"></path>
        </g>
    </g>
</svg>

<style lang="scss">

  svg {
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 80%;
    }
  }

</style>