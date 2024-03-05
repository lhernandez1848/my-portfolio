import firebase from 'firebase';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAW8DBy4AsXZOSSOzvLJEC0S92xRYpMWVs",
  authDomain: "portfolio-lisdanay.firebaseapp.com",
  databaseURL: "https://portfolio-lisdanay.firebaseio.com",
  projectId: "portfolio-lisdanay",
  storageBucket: "portfolio-lisdanay.appspot.com",
  messagingSenderId: "381471011384",
  appId: "1:381471011384:web:ab638826548d7f8403accd",
  measurementId: "G-12M2PHCFVV"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

export const db = app.database();
export default firebase;