import { auth, firestore } from './firebaseConfig';

export const authMethods = {
  signup: async (email, password, displayName) => {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const userRef = firestore.doc(`users/${res.user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      try {
        await userRef.set({
          displayName,
          email,
        });
      } catch (error) {
        console.error('Error creating user', error);
      }
    }

    return res;
  },
  signin: (email, password) => auth.signInWithEmailAndPassword(email, password),
  signout: () => auth.signOut(),
};
