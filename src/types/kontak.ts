import type { Timestamp } from "firebase/firestore";

export interface Kontak {
  id?: string;

  namaDesa: string;

  alamat: string;

  telepon: string;

  email: string;

  maps: string;

  instagram: string;

  facebook: string;

  youtube: string;

  jamOperasional: string;

  createdAt?: Timestamp;
}