import type { Timestamp } from "firebase/firestore";

export interface Komoditas {
  /**
   * ID Document Firestore
   */
  id?: string;

  /**
   * Nama Komoditas
   */
  title: string;

  /**
   * Deskripsi
   */
  description: string;

  /**
   * Kategori
   * Contoh:
   * - Perkebunan
   * - Peternakan
   * - Pertanian
   * - Perikanan
   */
  category: string;

  /**
   * URL gambar
   */
  image: string;

  /**
   * Waktu dibuat
   */
  createdAt?: Timestamp;
}