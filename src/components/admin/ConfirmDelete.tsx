import Swal from "sweetalert2";

interface ConfirmDeleteProps {
  title?: string;
  text?: string;
  onConfirm: () => Promise<void>;
}

export default async function ConfirmDelete({
  title = "Hapus Data?",
  text = "Data yang sudah dihapus tidak dapat dikembalikan.",
  onConfirm,
}: ConfirmDeleteProps) {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Ya, Hapus",
    cancelButtonText: "Batal",
  });

  if (!result.isConfirmed) return;

  await onConfirm();

  await Swal.fire({
    icon: "success",
    title: "Berhasil",
    text: "Data berhasil dihapus.",
    timer: 1500,
    showConfirmButton: false,
  });
}