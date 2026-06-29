import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    serverTimestamp,
  } from "firebase/firestore";
  
  import { db } from "../firebase/firebase";
  import type { Kontak } from "../types/kontak";
  
  const COLLECTION_NAME = "kontak";
  const DOCUMENT_ID = "desa";
  
  /**
   * Ambil data kontak
   */
  export const getKontak = async (): Promise<Kontak | null> => {
    const docRef = doc(db, COLLECTION_NAME, DOCUMENT_ID);
  
    const snapshot = await getDoc(docRef);
  
    if (!snapshot.exists()) return null;
  
    return {
      id: snapshot.id,
      ...(snapshot.data() as Omit<Kontak, "id">),
    };
  };
  
  /**
   * Buat data pertama
   */
  export const createKontak = async (
    data: Omit<Kontak, "id" | "createdAt">
  ) => {
    const docRef = doc(db, COLLECTION_NAME, DOCUMENT_ID);
  
    return await setDoc(docRef, {
      ...data,
      createdAt: serverTimestamp(),
    });
  };
  
  /**
   * Update data
   */
  export const updateKontak = async (
    data: Partial<Kontak>
  ) => {
    const docRef = doc(db, COLLECTION_NAME, DOCUMENT_ID);
  
    return await updateDoc(docRef, {
      ...data,
    });
  };