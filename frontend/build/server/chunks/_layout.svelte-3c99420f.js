import { c as create_ssr_component, a as subscribe } from './index2-38cd73ca.js';
import { s as state } from './store-2cf5b41c.js';
import './index-de164016.js';

const css = {
  code: "@import '../theme/global.scss';main.svelte-h2xdop{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;height:100vh;gap:2rem;padding:20px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_state();
  return `<main class="svelte-h2xdop">${slots.default ? slots.default({}) : ``}
</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-3c99420f.js.map
