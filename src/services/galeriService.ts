import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    getDoc,
    orderBy,
    query,
    serverTimestamp,
  } from "firebase/firestore";
  
  import { db } from "../firebase/firebase";
  
  import type { Galeri } from "../types/galeri";
  
  const COLLECTION_NAME = "galeri";
  
  /**
   * Ambil semua data galeri
   */
  export const getAllGaleri = async (): Promise<Galeri[]> => {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy("createdAt", "desc")
    );
  
    const snapshot = await getDocs(q);
  
    return snapshot.docs.map((item) => ({
      id: item.id,
      ...(item.data() as Omit<Galeri, "id">),
    }));
  };
  
  /**
   * Ambil satu data galeri
   */
  export const getGaleriById = async (
    id: string
  ): Promise<Galeri | null> => {
    const docRef = doc(db, COLLECTION_NAME, id);
  
    const snapshot = await getDoc(docRef);
  
    if (!snapshot.exists()) return null;
  
    return {
      id: snapshot.id,
      ...(snapshot.data() as Omit<Galeri, "id">),
    };
  };
  
  /**
   * Tambah galeri
   */
  export const addGaleri = async (
    data: Omit<Galeri, "id" | "createdAt">
  ) => {
    return await addDoc(collection(db, COLLECTION_NAME), {
      ...data,
      createdAt: serverTimestamp(),
    });
  };
  
  /**
   * Update galeri
   */
  export const updateGaleri = async (
    id: string,
    data: Partial<Galeri>
  ) => {
    const docRef = doc(db, COLLECTION_NAME, id);
  
    return await updateDoc(docRef, {
      ...data,
    });
  };
  
  /**
   * Hapus galeri
   */
  export const deleteGaleri = async (id: string) => {
    const docRef = doc(db, COLLECTION_NAME, id);
  
    return await deleteDoc(docRef);
  };