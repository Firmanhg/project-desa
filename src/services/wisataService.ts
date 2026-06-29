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
  
  import type { Wisata } from "../types/wisata";
  
  const COLLECTION_NAME = "wisata";
  
  /**
   * Ambil semua data wisata
   */
  export const getAllWisata = async (): Promise<Wisata[]> => {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy("createdAt", "desc")
    );
  
    const snapshot = await getDocs(q);
  
    return snapshot.docs.map((item) => ({
      id: item.id,
      ...(item.data() as Omit<Wisata, "id">),
    }));
  };
  
  /**
   * Ambil satu data wisata
   */
  export const getWisataById = async (
    id: string
  ): Promise<Wisata | null> => {
    const docRef = doc(db, COLLECTION_NAME, id);
  
    const snapshot = await getDoc(docRef);
  
    if (!snapshot.exists()) return null;
  
    return {
      id: snapshot.id,
      ...(snapshot.data() as Omit<Wisata, "id">),
    };
  };
  
  /**
   * Tambah wisata
   */
  export const addWisata = async (
    data: Omit<Wisata, "id" | "createdAt">
  ) => {
    return await addDoc(collection(db, COLLECTION_NAME), {
      ...data,
      createdAt: serverTimestamp(),
    });
  };
  
  /**
   * Update wisata
   */
  export const updateWisata = async (
    id: string,
    data: Partial<Wisata>
  ) => {
    const docRef = doc(db, COLLECTION_NAME, id);
  
    return await updateDoc(docRef, {
      ...data,
    });
  };
  
  /**
   * Hapus wisata
   */
  export const deleteWisata = async (id: string) => {
    const docRef = doc(db, COLLECTION_NAME, id);
  
    return await deleteDoc(docRef);
  };5