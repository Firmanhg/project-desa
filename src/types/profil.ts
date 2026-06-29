import type { Timestamp } from "firebase/firestore";

export interface Profil {
  id?: string;

  title: string;

  description: string;

  vision: string;

  mission: string;

  jumlahPenduduk: number;

  jumlahKK: number;

  jumlahWisata: number;

  jumlahKomoditas: number;

  createdAt?: Timestamp;
}