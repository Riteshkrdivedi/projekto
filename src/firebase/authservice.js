import {
  signInWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { toast } from "react-toastify";

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(user);

    toast("welcome", userCredential.user.displayName);
    return userCredential;
  } catch (error) {
    //  alert("please sign up first");
    toast.error("please sign up first");
    return error;
  }
};
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast("welcome", userCredential.user.displayName);
    console.log(userCredential);

    // alert("welcome", userCredential.user.displayName);
    //save data in database
    return userCredential;
  } catch (error) {
    //  console.log(" signup error is there");
    toast.error("something went wrong");
    return error;
  }
};

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential;
  } catch (error) {
    return error;
  }
};
export const signInWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential;
  } catch (error) {
    return error;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    return error;
  }
};
