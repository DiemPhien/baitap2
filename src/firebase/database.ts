import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';


const config = {
  apiKey: "AIzaSyAQ2n5zBHPy20VXbRQhulvG2LFTH7uoG2U",
  authDomain: "queuing-stystem-2.firebaseapp.com",
  projectId: "queuing-stystem-2",
  storageBucket: "queuing-stystem-2.appspot.com",
  messagingSenderId: "676259117588",
  appId: "1:676259117588:web:0a0e5b192a47766cb18501",
  measurementId: "G-WBSZ4GFXZP"
  };

  const app = initializeApp(config);

  export const db = getFirestore(app);
  // export default firebase.firestore();
  