import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};

export default InitializeFirebase;
