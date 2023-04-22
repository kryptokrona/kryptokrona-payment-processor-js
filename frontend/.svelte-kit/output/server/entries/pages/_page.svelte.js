import { c as create_ssr_component, a as subscribe, b as set_store_value, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { s as state } from "../../chunks/store.js";
const Info_svelte_svelte_type_style_lang = "";
const Step1_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ':root{--logo-color:#ffffff;--backgound-color:#121212;--title-color:rgb(255, 255, 255);--text-color:rgba(255, 255, 255, 0.7);--hamburger:rgba(255, 255, 255, 0.5);--nav-backgound-color:rgba(32, 32, 32, 0.9);--nav-link-color:#ffffff;--link-color:#ffffff;--button-border:#303030;--button-background:#202020;--border-color:rgba(255, 255, 255, 0.1);--card-border:#252525;--card-background:#171717;--success-color:#3fd782;--warn-color:#f25f61;--info-color:#5f86f2;--alert-color:#f2cb5f}@font-face{font-family:"Roboto Mono";src:url("/fonts/RobotoMono-Regular.woff") format("woff"), url("/fonts/RobotoMono-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat";src:url("/fonts/Montserrat-Regular.woff") format("woff"), url("/fonts/Montserrat-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}.svelte-x05317,.svelte-x05317:before,.svelte-x05317:after{box-sizing:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1.svelte-x05317{font-family:Montserrat, sans-serif;color:var(--title-color);font-weight:600;margin:0}button.svelte-x05317{height:48px;padding:10px;color:white;font-size:1rem;font-family:Montserrat, sans-serif;font-weight:600;background-color:var(--button-background);border:1px solid var(--button-border);border-radius:5px;cursor:pointer;transition:200ms ease-in-out}button.svelte-x05317:hover{background-color:#252525}p.svelte-x05317{line-height:150%;font-family:"Roboto Mono", monospace;color:var(--text-color)}@keyframes svelte-x05317-blinker{50%{opacity:0}}',
  map: null
};
const Step1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => value);
  $$result.css.add(css$5);
  $$unsubscribe_state();
  return `<div class="svelte-x05317"><div style="display: flex; gap: 1rem; align-items: center" class="svelte-x05317"><h1 class="svelte-x05317">Kryptokrona payment</h1>
    </div>
    <p class="svelte-x05317">Welcome to the kryptokrona payment processor!
        remember to check that you are sending to the correct address and payment ID. <span style="text-decoration: underline" class="svelte-x05317">Neither the shop nor the kryptokrona developers
                 are obligated to return any lost money due to using wrong address or payment ID</span>.
    </p></div>
<button class="svelte-x05317">I understand</button>`;
});
const Step2_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ':root{--logo-color:#ffffff;--backgound-color:#121212;--title-color:rgb(255, 255, 255);--text-color:rgba(255, 255, 255, 0.7);--hamburger:rgba(255, 255, 255, 0.5);--nav-backgound-color:rgba(32, 32, 32, 0.9);--nav-link-color:#ffffff;--link-color:#ffffff;--button-border:#303030;--button-background:#202020;--border-color:rgba(255, 255, 255, 0.1);--card-border:#252525;--card-background:#171717;--success-color:#3fd782;--warn-color:#f25f61;--info-color:#5f86f2;--alert-color:#f2cb5f}@font-face{font-family:"Roboto Mono";src:url("/fonts/RobotoMono-Regular.woff") format("woff"), url("/fonts/RobotoMono-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat";src:url("/fonts/Montserrat-Regular.woff") format("woff"), url("/fonts/Montserrat-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}.svelte-1c2bp8m.svelte-1c2bp8m,.svelte-1c2bp8m.svelte-1c2bp8m:before,.svelte-1c2bp8m.svelte-1c2bp8m:after{box-sizing:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1.svelte-1c2bp8m.svelte-1c2bp8m,h2.svelte-1c2bp8m.svelte-1c2bp8m,h4.svelte-1c2bp8m.svelte-1c2bp8m{font-family:Montserrat, sans-serif;color:var(--title-color);font-weight:600;margin:0}button.svelte-1c2bp8m.svelte-1c2bp8m{height:48px;padding:10px;color:white;font-size:1rem;font-family:Montserrat, sans-serif;font-weight:600;background-color:var(--button-background);border:1px solid var(--button-border);border-radius:5px;cursor:pointer;transition:200ms ease-in-out}button.svelte-1c2bp8m.svelte-1c2bp8m:hover{background-color:#252525}p.svelte-1c2bp8m.svelte-1c2bp8m{line-height:150%;font-family:"Roboto Mono", monospace;color:var(--text-color)}@keyframes svelte-1c2bp8m-blinker{50%{opacity:0}}.input-wrapper.svelte-1c2bp8m.svelte-1c2bp8m{margin-top:1rem;display:block;align-items:center;gap:1rem}@media screen and (max-width: 568px){.input-wrapper.svelte-1c2bp8m.svelte-1c2bp8m{flex-direction:column}}.info-wrapper.svelte-1c2bp8m.svelte-1c2bp8m{margin-top:1rem;display:block;align-items:center;text-align:center;gap:1rem}.info-wrapper.svelte-1c2bp8m button.svelte-1c2bp8m{text-align:center;width:100%;border-color:#6affab}.info-wrapper.svelte-1c2bp8m button.svelte-1c2bp8m:hover{background-color:#30ab66}@media screen and (max-width: 568px){.info-wrapper.svelte-1c2bp8m button.svelte-1c2bp8m{width:100%}}input.svelte-1c2bp8m.svelte-1c2bp8m{border:1px solid #505050;background-color:transparent;border-radius:5px;padding:10px 15px;height:48px;width:100%;color:var(--text-color);font-size:1rem;font-family:"Roboto Mono", monospace;transition:200ms ease-in-out}input.svelte-1c2bp8m.svelte-1c2bp8m:focus{outline:none;border-color:white}.container.svelte-1c2bp8m.svelte-1c2bp8m{height:200px;position:relative}.center.svelte-1c2bp8m.svelte-1c2bp8m{margin:0;position:absolute;top:70%;left:50%;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}',
  map: null
};
const Step2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  setInterval(
    async function() {
      var getStatus = await fetch(`http://127.0.0.1:3030/payment?paymentID=${$state.paymentID}`);
      var resGetStatus = await getStatus.json();
      set_store_value(state, $state.status = resGetStatus.status, $state);
    },
    1e4
  );
  $$result.css.add(css$4);
  $$unsubscribe_state();
  return `${$state.status == "RECIEVED" ? `<div class="svelte-1c2bp8m"><h1 class="svelte-1c2bp8m">Payment information</h1>
  <p class="svelte-1c2bp8m">Please send to the following address and payment ID</p></div>
<div class="svelte-1c2bp8m"><div class="input-wrapper svelte-1c2bp8m"><label for="address" class="svelte-1c2bp8m">Address</label><br class="svelte-1c2bp8m">
    <input type="text" id="address" placeholder="SEKR..." disabled class="svelte-1c2bp8m"${add_attribute("value", $state.address, 0)}> <br class="svelte-1c2bp8m"></div>
  <div class="input-wrapper svelte-1c2bp8m"></div>
  <label for="amount" class="svelte-1c2bp8m">Amount</label><br class="svelte-1c2bp8m">
  <input type="text" placeholder="AMOUNT NEEDED" id="amount" disabled class="svelte-1c2bp8m"${add_attribute("value", $state.amount, 0)}> <br class="svelte-1c2bp8m"></div>
<div class="input-wrapper svelte-1c2bp8m"><label for="paymentID" class="svelte-1c2bp8m">Payment ID</label><br class="svelte-1c2bp8m">
  <input type="text" placeholder="payment ID" id="paymentID" disabled class="svelte-1c2bp8m"${add_attribute("value", $state.paymentID, 0)}> <br class="svelte-1c2bp8m"></div>
<div class="info-wrapper svelte-1c2bp8m"><h4 id="showStatus" class="svelte-1c2bp8m">status: ${escape($state.status)}</h4></div>` : ``}
${$state.status != "RECIEVED" ? `<div class="info-wrapper container svelte-1c2bp8m"><div class="center svelte-1c2bp8m"><h2 class="svelte-1c2bp8m">Success! We have gotten the transaction</h2>
  <button class="svelte-1c2bp8m">Continue</button></div></div>` : ``}`;
});
const Step3_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ':root{--logo-color:#ffffff;--backgound-color:#121212;--title-color:rgb(255, 255, 255);--text-color:rgba(255, 255, 255, 0.7);--hamburger:rgba(255, 255, 255, 0.5);--nav-backgound-color:rgba(32, 32, 32, 0.9);--nav-link-color:#ffffff;--link-color:#ffffff;--button-border:#303030;--button-background:#202020;--border-color:rgba(255, 255, 255, 0.1);--card-border:#252525;--card-background:#171717;--success-color:#3fd782;--warn-color:#f25f61;--info-color:#5f86f2;--alert-color:#f2cb5f}@font-face{font-family:"Roboto Mono";src:url("/fonts/RobotoMono-Regular.woff") format("woff"), url("/fonts/RobotoMono-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat";src:url("/fonts/Montserrat-Regular.woff") format("woff"), url("/fonts/Montserrat-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}.svelte-ch8sg.svelte-ch8sg,.svelte-ch8sg.svelte-ch8sg:before,.svelte-ch8sg.svelte-ch8sg:after{box-sizing:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1.svelte-ch8sg.svelte-ch8sg{font-family:Montserrat, sans-serif;color:var(--title-color);font-weight:600;margin:0}button.svelte-ch8sg.svelte-ch8sg{height:48px;padding:10px;color:white;font-size:1rem;font-family:Montserrat, sans-serif;font-weight:600;background-color:var(--button-background);border:1px solid var(--button-border);border-radius:5px;cursor:pointer;transition:200ms ease-in-out}button.svelte-ch8sg.svelte-ch8sg:hover{background-color:#252525}p.svelte-ch8sg.svelte-ch8sg{line-height:150%;font-family:"Roboto Mono", monospace;color:var(--text-color)}@keyframes svelte-ch8sg-blinker{50%{opacity:0}}.socials-wrapper.svelte-ch8sg.svelte-ch8sg{margin-top:1rem;display:grid;grid-template-columns:repeat(12, minmax(0, 1fr));gap:1rem}.socials-wrapper.svelte-ch8sg button.svelte-ch8sg{grid-column:span 6/span 6;width:100%}.socials-wrapper.svelte-ch8sg button.svelte-ch8sg:last-child{grid-column:span 12/span 12;background-color:var(--success-color);border-color:#6affab}.socials-wrapper.svelte-ch8sg button.svelte-ch8sg:last-child:hover{background-color:#30ab66}@media screen and (max-width: 568px){.socials-wrapper.svelte-ch8sg.svelte-ch8sg{flex-direction:column}}',
  map: null
};
const Step3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$result.css.add(css$3);
  {
    if ($state.response) {
      set_store_value(state, $state.step = 4, $state);
    }
  }
  $$unsubscribe_state();
  return `<div class="svelte-ch8sg"><h1 class="svelte-ch8sg">Thank you for your payment!</h1>
    <p class="svelte-ch8sg">Before you go, please consider following us on social media and giving us a star on github</p></div>
<div class="socials-wrapper svelte-ch8sg"><button class="svelte-ch8sg">Twitter</button>
    <button class="svelte-ch8sg">Github</button>
    <button class="svelte-ch8sg">Back to the site</button>
</div>`;
});
const Circle_svelte_svelte_type_style_lang = "";
const Circle2_svelte_svelte_type_style_lang = "";
const Circle3_svelte_svelte_type_style_lang = "";
const DoubleBounce_svelte_svelte_type_style_lang = "";
const GoogleSpin_svelte_svelte_type_style_lang = "";
const ScaleOut_svelte_svelte_type_style_lang = "";
const SpinLine_svelte_svelte_type_style_lang = "";
const Stretch_svelte_svelte_type_style_lang = "";
const BarLoader_svelte_svelte_type_style_lang = "";
const Jumper_svelte_svelte_type_style_lang = "";
const RingLoader_svelte_svelte_type_style_lang = "";
const SyncLoader_svelte_svelte_type_style_lang = "";
const Rainbow_svelte_svelte_type_style_lang = "";
const Wave_svelte_svelte_type_style_lang = "";
const Firework_svelte_svelte_type_style_lang = "";
const Pulse_svelte_svelte_type_style_lang = "";
const Jellyfish_svelte_svelte_type_style_lang = "";
const Chasing_svelte_svelte_type_style_lang = "";
const Shadow_svelte_svelte_type_style_lang = "";
const Square_svelte_svelte_type_style_lang = "";
const Moon_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".wrapper.svelte-nlgli4{height:var(--size);width:var(--size);border-radius:100%;animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;animation-fill-mode:forwards;position:relative}.circle-one.svelte-nlgli4{top:var(--moonSize);background-color:var(--color);width:calc(var(--size) / 7);height:calc(var(--size) / 7);border-radius:100%;animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;animation-fill-mode:forwards;opacity:0.8;position:absolute}.circle-two.svelte-nlgli4{opacity:0.1;border:calc(var(--size) / 7) solid var(--color);height:var(--size);width:var(--size);border-radius:100%;box-sizing:border-box}@keyframes svelte-nlgli4-moonStretchDelay{100%{transform:rotate(360deg)}}",
  map: null
};
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "0.6s" } = $$props;
  let { size = "60" } = $$props;
  let moonSize = +size / 7;
  let top = +size / 2 - moonSize / 2;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$2);
  return `<div class="wrapper svelte-nlgli4" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --color: " + escape(color, true) + "; --moonSize: " + escape(top, true) + escape(unit, true) + "; --duration: " + escape(duration, true) + ";"}"><div class="circle-one svelte-nlgli4"></div>
  <div class="circle-two svelte-nlgli4"></div></div>`;
});
const Plane_svelte_svelte_type_style_lang = "";
const Diamonds_svelte_svelte_type_style_lang = "";
const Clock_svelte_svelte_type_style_lang = "";
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg version="1.1" width="50px" height="50px" viewBox="0 0 422.0 422.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="481171201105510611298107113"><path d="M211,0 C327.532082,0 422,94.4679178 422,211 C422,327.532082 327.532082,422 211,422 C94.4679178,422 0,327.532082 0,211 C0,94.4679178 94.4679178,0 211,0 Z"></path></clipPath></defs><g clip-path="url(#481171201105510611298107113)"><path d="M211,422 C327.532082,422 422,327.532082 422,211 C422,94.4679178 327.532082,0 211,0 C94.4679178,0 0,94.4679178 0,211 C0,327.532082 94.4679178,422 211,422 Z" stroke="#00FF46" stroke-width="50" fill="none" stroke-miterlimit="5"></path></g><g transform="translate(245.63690323679413 87.23375529218279) rotate(45.00000000000001)"><path d="M0,180.34375 L79.5195312,180.34375 C80.6241007,180.34375 81.5195312,179.448319 81.5195312,178.34375 L81.5195312,0 L81.5195312,0" stroke="#00FF45" stroke-width="25" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path></g></svg>`;
});
const Stop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg version="1.1" width="50px" height="50px" viewBox="0 0 422.0 422.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="10311745115971191025010052"><path d="M243.5,18.7638837 L361.23136,86.7361163 C381.34243,98.3472479 393.73136,119.805504 393.73136,143.027767 L393.73136,278.972233 C393.73136,302.194496 381.34243,323.652752 361.23136,335.263884 L243.5,403.236116 C223.38893,414.847248 198.61107,414.847248 178.5,403.236116 L60.7686398,335.263884 C40.6575698,323.652752 28.2686398,302.194496 28.2686398,278.972233 L28.2686398,143.027767 C28.2686398,119.805504 40.6575698,98.3472479 60.7686398,86.7361163 L178.5,18.7638837 C198.61107,7.15275208 223.38893,7.15275208 243.5,18.7638837 Z"></path></clipPath></defs><g transform=""><g clip-path="url(#10311745115971191025010052)"><path d="M243.5,18.7638837 L361.23136,86.7361163 C381.34243,98.3472479 393.73136,119.805504 393.73136,143.027767 L393.73136,278.972233 C393.73136,302.194496 381.34243,323.652752 361.23136,335.263884 L243.5,403.236116 C223.38893,414.847248 198.61107,414.847248 178.5,403.236116 L60.7686398,335.263884 C40.6575698,323.652752 28.2686398,302.194496 28.2686398,278.972233 L28.2686398,143.027767 C28.2686398,119.805504 40.6575698,98.3472479 60.7686398,86.7361163 L178.5,18.7638837 C198.61107,7.15275208 223.38893,7.15275208 243.5,18.7638837 Z" stroke="#FF0000" stroke-width="50" fill="none" stroke-miterlimit="5"></path></g><g transform="translate(86.75688990614773 211.03529506467882) rotate(-44.99999999999999)"><g transform="translate(89.49932445491959 0.0)"><path d="M0.5,0 L0.5,170" stroke="#FF0000" stroke-width="25" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path></g><g transform="translate(0.0 84.74657441706154)"><path d="M179.999324,0.253425583 L0,0.746574417" stroke="#FF0000" stroke-width="25" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path></g></g></g></svg>`;
});
const Response_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--logo-color:#ffffff;--backgound-color:#121212;--title-color:rgb(255, 255, 255);--text-color:rgba(255, 255, 255, 0.7);--hamburger:rgba(255, 255, 255, 0.5);--nav-backgound-color:rgba(32, 32, 32, 0.9);--nav-link-color:#ffffff;--link-color:#ffffff;--button-border:#303030;--button-background:#202020;--border-color:rgba(255, 255, 255, 0.1);--card-border:#252525;--card-background:#171717;--success-color:#3fd782;--warn-color:#f25f61;--info-color:#5f86f2;--alert-color:#f2cb5f}@font-face{font-family:"Roboto Mono";src:url("/fonts/RobotoMono-Regular.woff") format("woff"), url("/fonts/RobotoMono-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat";src:url("/fonts/Montserrat-Regular.woff") format("woff"), url("/fonts/Montserrat-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}.svelte-1o40eh0,.svelte-1o40eh0:before,.svelte-1o40eh0:after{box-sizing:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h2.svelte-1o40eh0{font-family:Montserrat, sans-serif;color:var(--title-color);font-weight:600;margin:0}@keyframes svelte-1o40eh0-blinker{50%{opacity:0}}.res.svelte-1o40eh0{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;transition:200ms ease-in-out;gap:1rem;width:100%;height:100%}',
  map: null
};
const Response = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  console.log($state);
  $$result.css.add(css$1);
  $$unsubscribe_state();
  return `<div class="res svelte-1o40eh0">${!$state.response ? `${validate_component(Moon, "Moon").$$render(
    $$result,
    {
      color: "var(--title-color)",
      size: "40",
      unit: "px"
    },
    {},
    {}
  )}` : `${$state.sent === true ? `${validate_component(Check, "Check").$$render($$result, {}, {}, {})}
        <h2 class="svelte-1o40eh0">Sent!</h2>` : `${validate_component(Stop, "Stop").$$render($$result, {}, {}, {})}
        <h2 class="svelte-1o40eh0">${escape($state.response)}</h2>`}`}
</div>`;
});
const Status_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--logo-color:#ffffff;--backgound-color:#121212;--title-color:rgb(255, 255, 255);--text-color:rgba(255, 255, 255, 0.7);--hamburger:rgba(255, 255, 255, 0.5);--nav-backgound-color:rgba(32, 32, 32, 0.9);--nav-link-color:#ffffff;--link-color:#ffffff;--button-border:#303030;--button-background:#202020;--border-color:rgba(255, 255, 255, 0.1);--card-border:#252525;--card-background:#171717;--success-color:#3fd782;--warn-color:#f25f61;--info-color:#5f86f2;--alert-color:#f2cb5f}@font-face{font-family:"Roboto Mono";src:url("/fonts/RobotoMono-Regular.woff") format("woff"), url("/fonts/RobotoMono-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat";src:url("/fonts/Montserrat-Regular.woff") format("woff"), url("/fonts/Montserrat-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}.svelte-l245vl,.svelte-l245vl:before,.svelte-l245vl:after{box-sizing:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h3.svelte-l245vl{font-family:Montserrat, sans-serif;color:var(--title-color);font-weight:600;margin:0}button.svelte-l245vl{height:48px;padding:10px;color:white;font-size:1rem;font-family:Montserrat, sans-serif;font-weight:600;background-color:var(--button-background);border:1px solid var(--button-border);border-radius:5px;cursor:pointer;transition:200ms ease-in-out}button.svelte-l245vl:hover{background-color:#252525}p.svelte-l245vl{line-height:150%;font-family:"Roboto Mono", monospace;color:var(--text-color)}@keyframes svelte-l245vl-blinker{50%{opacity:0}}h3.svelte-l245vl{margin-bottom:10px}p.svelte-l245vl{margin:0}',
  map: null
};
const Status = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$result.css.add(css);
  $$unsubscribe_state();
  return `<div class="svelte-l245vl"><h3 class="svelte-l245vl">Address</h3>
    <p style="word-break: break-word" class="svelte-l245vl">${escape($state.address)}</p></div>
<div class="svelte-l245vl"><h3 class="svelte-l245vl">Balance</h3>
    <p class="svelte-l245vl">${escape($state.total / 1e5)} XKR</p></div>
<div class="svelte-l245vl"><h3 class="svelte-l245vl">Claimers</h3>
    <p class="svelte-l245vl">${escape($state.claimers)} XKR</p></div>
<button class="svelte-l245vl">Back</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$unsubscribe_state();
  return `

<div class="card layered-shadow">${$state.step === 1 ? `${validate_component(Step1, "Step1").$$render($$result, {}, {}, {})}` : `${$state.step === 2 ? `${validate_component(Step2, "Step2").$$render($$result, {}, {}, {})}` : `${$state.step === 3 ? `${validate_component(Step3, "Step3").$$render($$result, {}, {}, {})}` : `${$state.step === 4 ? `${validate_component(Response, "Response").$$render($$result, {}, {}, {})}` : `${$state.step === "info" ? `${validate_component(Status, "Status").$$render($$result, {}, {}, {})}` : ``}`}`}`}`}</div>`;
});
export {
  Page as default
};
