<script>
    import {quadInOut} from "svelte/easing";
    import {draw} from "svelte/transition";
</script>

<svg version="1.1" width="50px" height="50px" viewBox="0 0 422.0 422.0" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <clipPath id="481171201105510611298107113">
            <path d="M211,0 C327.532082,0 422,94.4679178 422,211 C422,327.532082 327.532082,422 211,422 C94.4679178,422 0,327.532082 0,211 C0,94.4679178 94.4679178,0 211,0 Z"></path>
        </clipPath>
    </defs>
    <g clip-path="url(#481171201105510611298107113)">
        <path in:draw="{{duration:500, easing: quadInOut}}" d="M211,422 C327.532082,422 422,327.532082 422,211 C422,94.4679178 327.532082,0 211,0 C94.4679178,0 0,94.4679178 0,211 C0,327.532082 94.4679178,422 211,422 Z"
              stroke="#00FF46" stroke-width="50" fill="none" stroke-miterlimit="5"></path>
    </g>
    <g transform="translate(245.63690323679413 87.23375529218279) rotate(45.00000000000001)">
        <path in:draw="{{delay: 300, duration:500, easing: quadInOut}}" d="M0,180.34375 L79.5195312,180.34375 C80.6241007,180.34375 81.5195312,179.448319 81.5195312,178.34375 L81.5195312,0 L81.5195312,0"
              stroke="#00FF45" stroke-width="25" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
    </g>
</svg>