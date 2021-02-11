import { auth, firestore } from './firebaseConfig';

export const authMethods = {
  // firebase helper methods go here...
  signup: async (email, password, displayName, setError, setToken) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        setError(err.message);
      })
      .then(async (res) => {
        let token;
        try {
          token = await Object.entries(res.user)[5][1].b;
        } catch (error) {
          console.error(error);
          return;
        }
        localStorage.setItem('token', token);
        setToken(token);

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
  signin: async (email, password, setError, setToken) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      const token = await Object.entries(res.user)[5][1].b;
      localStorage.setItem('token', token);

      setToken(window.localStorage.token);
    } catch (err) {
      setError(err.message);
    }
  },
  signout: (setError, setToken) => {
    auth
      .signOut()
      .then((res) => {
        localStorage.removeItem('token');
        setToken(null);
      })
      .catch((err) => {
        setError(err.message);
        localStorage.removeItem('token');
        setToken(null);
        console.error(err.message);
      });
  },
};
