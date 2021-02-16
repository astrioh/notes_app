import { auth, firestore } from './firebaseConfig';

export const authMethods = {
  signup: (email, password, displayName) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
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
      });
  },
  signin: (email, password) => auth.signInWithEmailAndPassword(email, password),
  signout: () => auth.signOut(),
};
