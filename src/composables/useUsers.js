import { ref } from "vue";
import axios from "axios";

const useUsers = () => {
  const users = ref([]);
  const isLoading = ref(true);
  const currentPage = ref(1);
  const errorMessage = ref();

  const getUsers = async (page = 1) => {
    if (page <= 0) page = 1;

    isLoading.value = true;

    const { data } = await axios.get(`https://reqres.in/api/users/`, {
      params: { page },
    });
    console.log("datos de la api: ", data);
    if (data.data.length > 0) {
      //si hay data entonces:
      users.value = data.data;
      currentPage.value = page;
      errorMessage.value = null;
    } else if (currentPage.value > 0) {
      errorMessage.value = "No hay datos.";
    }
    isLoading.value = false;
  };
  getUsers();

  return {
    //Pagination:
    currentPage,
    errorMessage,
    isLoading,
    nextPage: () => getUsers(currentPage.value + 1),
    prevPage: () => getUsers(currentPage.value - 1),
    users,
  };
};


export default useUsers