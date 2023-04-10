import { createApp, h } from "vue";
import VueLazyload from "@jambonn/vue-lazyload";

import App from "./App.vue";
import router from "./pages";
import store from './store.js';
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import * as te from 'tw-elements';

import "./index.css";

import error from "./assets/error.png";


library.add(fas);
createApp({
  render: () => h(App),
})
.component('fa', FontAwesomeIcon)
  .use(router)
  .use(store)
  .use(te)
  .use(VueTelInput)
  .use(VueLazyload, {
    observer: true,
    preLoad: 1.3,
    error,
    attempt: 1,
  })
  .mount("#app");


