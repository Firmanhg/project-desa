import {
    collection,
    getCountFromServer,
    doc,
    getDoc,
  } from "firebase/firestore";
  
  import { db } from "../firebase/firebase";
  
  export interface DashboardData {
    totalWisata: number;
    totalKomoditas: number;
    totalGaleri: number;
    jumlahPenduduk: number;
    jumlahKK: number;
  }
  
  export const getDashboardData =
    async (): Promise<DashboardData> => {
  
      const wisataSnap =
        await getCountFromServer(
          collection(db, "wisata")
        );
  
      const komoditasSnap =
        await getCountFromServer(
          collection(db, "komoditas")
        );
  
      const galeriSnap =
        await getCountFromServer(
          collection(db, "galeri")
        );
  
      const profilRef = doc(
        db,
        "profil",
        "desa"
      );
  
      const profilSnap =
        await getDoc(profilRef);
  
      const profil = profilSnap.exists()
        ? profilSnap.data()
        : {};
  
      return {
        totalWisata: wisataSnap.data().count,
        totalKomoditas: komoditasSnap.data().count,
        totalGaleri: galeriSnap.data().count,
        jumlahPenduduk:
          profil.jumlahPenduduk ?? 0,
        jumlahKK:
          profil.jumlahKK ?? 0,
      };
    };