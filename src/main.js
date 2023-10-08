import './assets/scss/all.scss';
import 'bootstrap'; // bootstrap's JS

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// plugin setting
import App from './App.vue';
import router from './router';

import axios from 'axios';
import VueAxios from 'vue-axios';

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import * as rules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

Object.keys(rules).forEach(rule => {
  defineRule(rule, rules[rule]);
});

// 設定 vee validation 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 繁體中文語系
  validateOnInput: false, // 輸入同時驗證
});
setLocale('zh_TW'); // 設定預設語系


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE__apiKey,
  authDomain: import.meta.env.VITE__authDomain,
  projectId: import.meta.env.VITE__projectId,
  storageBucket: import.meta.env.VITE__storageBucket,
  messagingSenderId: import.meta.env.VITE__messagingSenderId,
  appId: import.meta.env.VITE__appId,
  measurementId: import.meta.env.VITE__measurementId,
};

// Initialize Firebase
initializeApp(firebaseConfig);
// getAnalytics(app);




const app = createApp(App);

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app');
