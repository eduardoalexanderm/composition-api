<template>
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <ul>
            <li v-for="user in users" :key="user.id">
                <h4>{{ user.first_name }} {{ user.last_name }}</h4>
                <h6>Correo: {{ user.email }}</h6>
            </li>
        </ul>
    </div>

    <button @click="prevPage">Atrás</button>
    <button @click="nextPage">Siguiente</button>
    <span>Página: {{ currentPage }}</span>
</template>

<script>
import useUsers from "@/composables/useUsers";
export default {
    setup() {
        const { 
            currentPage,
            errorMessage,
            isLoading,
            nextPage,
            prevPage,
            users,
        } =  useUsers();

        return {
          
            currentPage,
            errorMessage,
            isLoading,
            nextPage,
            prevPage,
            users,
        };
        // const users = ref([])
        // const isLoading = ref(true)
        // const currentPage = ref(1)
        // const errorMessage = ref()

        // const getUsers = async (page = 1) => {
        //     if (page <= 0) page = 1

        //     isLoading.value = true

        //     const { data } = await axios.get(`https://reqres.in/api/users/`, {
        //         params: { page }
        //     })
        //     console.log("datos de la api: ", data);
        //     if (data.data.length > 0) { //si hay data entonces:
        //         users.value = data.data
        //         currentPage.value = page
        //         errorMessage.value = null
        //     } else if (currentPage.value > 0) {
        //         errorMessage.value = "No hay datos."
        //     }
        //     isLoading.value = false
        // }
        // getUsers()

        // return {
        //     currentPage,
        //     errorMessage,
        //     isLoading,
        //     users,

        //     //Pagination:
        //     nextPage: () => getUsers(currentPage.value + 1),
        //     prevPage: () => getUsers(currentPage.value - 1)
        // }
    },
};
</script>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 250px;
}
</style>
