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
  
  import type { Komoditas } from "../types/komoditas";
  
  const COLLECTION_NAME = "komoditas";
  
  /**
   * Ambil semua data komoditas
   */
  export const getAllKomoditas = async (): Promise<Komoditas[]> => {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy("createdAt", "desc")
    );
  
    const snapshot = await getDocs(q);
  
    return snapshot.docs.map((item) => ({
      id: item.id,
      ...(item.data() as Omit<Komoditas, "id">),
    }));
  };
  
  /**
   * Ambil satu data komoditas
   */
  export const getKomoditasById = async (
    id: string
  ): Promise<Komoditas | null> => {
    const docRef = doc(db, COLLECTION_NAME, id);
  
    const snapshot = await getDoc(docRef);
  
    if (!snapshot.exists()) return null;
  
    return {
      id: snapshot.id,
      ...(snapshot.data() as Omit<Komoditas, "id">),
    };
  };
  
  /**
   * Tambah komoditas
   */
  export const addKomoditas = async (
    data: Omit<Komoditas, "id" | "createdAt">
  ) => {
    return await addDoc(collection(db, COLLECTION_NAME), {
      ...data,
      createdAt: serverTimestamp(),
    });
  };
  
  /**
   * Update komoditas
   */
  export const updateKomoditas = async (
    id: string,
    data: Partial<Komoditas>
  ) => {
    const docRef = doc(db, COLLECTION_NAME, id);
  
    return await updateDoc(docRef, {
      ...data,
    });
  };
  
  /**
   * Hapus komoditas
   */
  export const deleteKomoditas = async (id: string) => {
    const docRef = doc(db, COLLECTION_NAME, id);
  
    return await deleteDoc(docRef);
  };