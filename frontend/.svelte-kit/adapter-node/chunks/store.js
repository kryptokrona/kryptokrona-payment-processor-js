import { w as writable } from "./index.js";
const state = writable({
  step: 1,
  address: void 0,
  amount: void 0,
  paymentID: void 0,
  status: "fetching...",
  currency: "XKR",
  returnToSite: "https://example.store"
});
export {
  state as s
};
