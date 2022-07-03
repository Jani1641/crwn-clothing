import {initializeApp} from 'firebase/app'
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider} 
    from 'firebase/auth'
import {getFirestore,
        doc,
        getDoc,
        setDoc
} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBkDGzo0jefW2M2bp-uwKrpMghAYxtZ6GA",
    authDomain: "crwn-clothing-db-156b2.firebaseapp.com",
    projectId: "crwn-clothing-db-156b2",
    storageBucket: "crwn-clothing-db-156b2.appspot.com",
    messagingSenderId: "947771717928",
    appId: "1:947771717928:web:eef9ee7abf4fe91567f81d"
  };

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});


export const auth = getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) =>{
    if(!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapshot = await getDoc (userDocRef);

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }catch(error){
            console.log("error creating the user",error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
}