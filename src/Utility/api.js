import Swal from "sweetalert2";
import { apiBaseUrl } from "./Constants";
import SweetAlert from "../Component/SweetAlert/SweetAlert";

//getDataTableValue
export const fetchData = async (endpoint, setRows, setLoading, mapData) => {
  setLoading(true);
  try {
    const response = await fetch(`${apiBaseUrl}/${endpoint}`);
    const data = await response.json();
    const formattedData = data.map(mapData);
    setRows(formattedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
};

// ✅ Delete Data (DELETE Request)
export const deleteData = async (endpoint, id, setRows) => {
  SweetAlert.confirm(
    "warning",
    "Are you sure you want to delete this item?",
    async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/${endpoint}/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete the item.");
        }
        SweetAlert.success("Success", "Form submitted successfully!");
        setRows((prevData) => prevData.filter((item) => item.id !== id));
        console.log(`Item with ID ${id} deleted successfully.`);
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Failed to delete item. Please try again.");
      }
    }
  );
};
