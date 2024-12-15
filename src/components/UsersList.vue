<template>
    <v-container>
      <!-- Data Table to display users -->
      <v-data-table
        :headers="headers"
        :items="users"
        item-key="id"
        class="elevation-1"
      >
        <template #item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>
              <v-btn color="primary" @click="viewUserDetails(item.id)">View</v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
  
      <!-- Display the UserProfile component when a user is selected -->
      <user-profile-admin v-if="selectedUserId" :user-id="selectedUserId" />
        </v-container>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import UserProfileAdmin from "./UserProfileAdmin.vue";
  
  export default {
    name: "UsersList",
    components: {
      UserProfileAdmin,
    },
    setup() {
      const users = ref([]);
      const selectedUserId = ref(null); // To store the selected user ID
  
      const headers = [
        { text: "ID", align: "start", key: "id", value: "id", sortable: true },
        { text: "Name", key: "name", value: "name", sortable: true },
        { text: "Email", key: "email", value: "email", sortable: true },
        { text: "Actions", key: "actions" },
      ];
  
      // Fetch users from the API
      const fetchUsers = async () => {
        try {
          const response = await axios.get(`${process.env.VUE_APP_API_URL}api/users`);
          users.value = response.data;
        } catch (error) {
          console.error("Failed to fetch users:", error);
        }
      };
  
      // Set the selected user ID
      const viewUserDetails = (userId) => {
        selectedUserId.value = userId;
      };
  
      onMounted(() => {
        fetchUsers();
      });
  
      return {
        users,
        headers,
        selectedUserId,
        viewUserDetails,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  