// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGJZQuC7-wJ9z_1kq2f-PFNDown4_YTJc",
  authDomain: "context-api-auth-5f7f1.firebaseapp.com",
  projectId: "context-api-auth-5f7f1",
  storageBucket: "context-api-auth-5f7f1.appspot.com",
  messagingSenderId: "598902673946",
  appId: "1:598902673946:web:12a65edf635e640794b7a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// export const auth = getAuth(app);