import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import type { Profil } from "../types/profil";

const COLLECTION_NAME = "profil";
const DOCUMENT_ID = "desa";

/**
 * Ambil profil desa
 */
export const getProfil = async (): Promise<Profil | null> => {
  const docRef = doc(db, COLLECTION_NAME, DOCUMENT_ID);

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Profil, "id">),
  };
};

/**
 * Simpan profil pertama kali
 */
export const createProfil = async (
  data: Omit<Profil, "id" | "createdAt">
) => {
  const docRef = doc(db, COLLECTION_NAME, DOCUMENT_ID);

  return await setDoc(docRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
};

/**
 * Update profil
 */
export const updateProfil = async (
  data: Partial<Profil>
) => {
  const docRef = doc(db, COLLECTION_NAME, DOCUMENT_ID);

  return await updateDoc(docRef, {
    ...data,
  });
};