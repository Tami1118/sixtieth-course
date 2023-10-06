import './assets/scss/all.scss';
import 'bootstrap'; // bootstrap's JS

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// plugin setting
import App from './App.vue';
import router from './router';

import axios from 'axios';
import VueAxios from 'vue-axios';



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

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount('#app');
