import Swal from "sweetalert2";

export async function toast(type, msg) {
  return Swal.fire({
    position: "top-end",
    icon: type,
    timer: 2000,
    showConfirmButton: false,
    toast: true,
    title: msg,
  });
}
