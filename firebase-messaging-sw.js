// Denne filen MÅ ligge i roten av nettstedet, ved siden av index.html,
// og MÅ hete nøyaktig "firebase-messaging-sw.js".
// Den kjører i bakgrunnen og viser varselet selv om appen er lukket.

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Samme Firebase-oppsett som i index.html
firebase.initializeApp({
  apiKey: "AIzaSyBEyojtD05zws-osoqWuInW07enW-I51H0",
  authDomain: "ukelonn-db96d.firebaseapp.com",
  projectId: "ukelonn-db96d",
  storageBucket: "ukelonn-db96d.firebasestorage.app",
  messagingSenderId: "90472772332",
  appId: "1:90472772332:web:9eaa8709af29a6b08cebc9",
});

const messaging = firebase.messaging();

// Viser varselet når appen/fanen ikke er åpen i forgrunnen.
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'Ukelønn';
  const options = {
    body: payload.notification?.body || '',
    icon: '/icon-180.png'
  };
  self.registration.showNotification(title, options);
});
