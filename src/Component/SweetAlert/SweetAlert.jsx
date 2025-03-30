import Swal from "sweetalert2";

const SweetAlert = {
  success: (title, text) => {
    Swal.fire({
      icon: "success",
      title: title || "Success!",
      text: text || "Operation completed successfully!",
    });
  },

  error: (title, text) => {
    Swal.fire({
      icon: "error",
      title: title || "Error!",
      text: text || "Something went wrong!",
    });
  },

  warning: (title, text) => {
    Swal.fire({
      icon: "warning",
      title: title || "Warning!",
      text: text || "Please check your input!",
    });
  },

  confirm: (title, text, callback) => {
    Swal.fire({
      title: title || "Are you sure?",
      text: text || "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, do it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed && callback) {
        callback();
      }
    });
  },
};

export default SweetAlert;
