// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAHNF728cO-1rRlYrM-1iK51UlpEbB7_-I',
    authDomain: 'portafolio-angular-98185.firebaseapp.com',
    databaseURL: 'https://portafolio-angular-98185.firebaseio.com',
    projectId: 'portafolio-angular-98185',
    storageBucket: 'portafolio-angular-98185.appspot.com',
    messagingSenderId: '532758813013',
    appId: '1:532758813013:web:95b27fff8e696b704137dc',
    measurementId: 'G-WGM3BTTTYK'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(firebaseApp);
