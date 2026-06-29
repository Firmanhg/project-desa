import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";
  
  import type { User } from "firebase/auth";
  import { auth } from "../firebase/firebase";
  
  /**
   * Login Admin
   */
  export const login = async (
    email: string,
    password: string
  ): Promise<User> => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  
    return userCredential.user;
  };
  
  /**
   * Logout Admin
   */
  export const logout = async (): Promise<void> => {
    await signOut(auth);
  };
  
  /**
   * Mendengarkan perubahan status login
   */
  export const subscribeAuth = (
    callback: (user: User | null) => void
  ) => {
    return onAuthStateChanged(auth, callback);
  };
  
  /**
   * Ambil user yang sedang login
   */
  export const getCurrentUser = (): User | null => {
    return auth.currentUser;
  };