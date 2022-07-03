import {initializeApp} from 'firebase/app'
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider} 
    from 'firebase/auth'
import {getFirestore,
        doc,
        getDoc,
        setDoc
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBkDGzo0jefW2M2bp-uwKrpMghAYxtZ6GA",
    authDomain: "crwn-clothing-db-156b2.firebaseapp.com",
    projectId: "crwn-clothing-db-156b2",
    storageBucket: "crwn-clothing-db-156b2.appspot.com",
    messagingSenderId: "947771717928",
    appId: "1:947771717928:web:eef9ee7abf4fe91567f81d"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});


export const auth = getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc (userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log("error creating the user",error.message);
        }
    }
    return userDocRef;
}
