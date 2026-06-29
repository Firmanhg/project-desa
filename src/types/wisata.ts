import type { Timestamp } from "firebase/firestore";

export interface Wisata {
  /**
   * ID document Firestore
   */
  id?: string;

  /**
   * Nama wisata
   */
  title: string;

  /**
   * Deskripsi wisata
   */
  description: string;

  /**
   * Lokasi wisata
   */
  location: string;

  /**
   * Kategori wisata
   * Contoh:
   * - Alam
   * - Edukasi
   * - Rekreasi
   * - Budaya
   */
  category: string;

  /**
   * URL gambar dari Firebase Storage
   */
  image: string;

  /**
   * Waktu data dibuat
   */
  createdAt?: Timestamp;
}