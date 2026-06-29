import type { Timestamp } from "firebase/firestore";

export interface Galeri {
  /**
   * ID Document Firestore
   */
  id?: string;

  /**
   * Judul Foto
   */
  title: string;

  /**
   * URL gambar
   */
  image: string;

  /**
   * Waktu dibuat
   */
  createdAt?: Timestamp;
}