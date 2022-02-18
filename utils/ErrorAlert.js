import Swal from "sweetalert2";

const ErrorAlert = (message, theme) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    confirmButtonColor: theme.primary
  });
};

export default ErrorAlert;
