import * as firebase from "firebase/app";
//import { initializeApp } from "firebase/app";
// import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/database";
//데이터베이스 가져오기 위한 임포트
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authService = getAuth();
export const dbService = getFirestore();
