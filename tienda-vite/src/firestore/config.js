import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBOxm7bEs8jhgMHCzLbpqWjLgn-R1Dwis",
  authDomain: "react-project-16259.firebaseapp.com",
  projectId: "react-project-16259",
  storageBucket: "react-project-16259.appspot.com",
  messagingSenderId: "993598029963",
  appId: "1:993598029963:web:d8bd28c4cd3506fac0548e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}