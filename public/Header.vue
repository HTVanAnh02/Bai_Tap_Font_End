<template>
  <v-app-bar color="#3853D8" prominent style="cursor: pointer">
    <v-toolbar-title>
      VietNam Travel
      <v-icon icon="mdi-map"></v-icon>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    
    <v-btn variant="text" icon @click="bellClick">
      <v-badge content="9+" color="error">
        <v-icon>mdi-bell</v-icon>
      </v-badge>
    </v-btn>
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <template v-slot:activator="{ props }">
        <v-list-item
          icon
          v-bind="props"
          :prepend-avatar="userInfo.avatar"
        ></v-list-item>
      </template>

      <v-card min-width="200">
        <v-list>
          <v-list-item
            :prepend-avatar="userInfo.avatar"
            :title="userInfo.name"
            :subtitle="userInfo.email"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>

        <v-list density="compact">
          <v-list-item
            prepend-icon="mdi-logout"
            title="Đăng xuất"
            value="Đăng xuất"
            @click="logout"
          ></v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>
    
<script>
export default {
  name: "HeaderView",
  data() {
    return {
      userInfo: {
        avatar: "anh.jpg",
        name: "Hoàng Thị Vân Anh",
        email: "hoangthivananh22122002@gmail.com",
      },
      menu: false,
    };
  },
  methods: {
    logout() {
      if (confirm('Bạn có muốn đăng xuất')) {
        this.$store.dispatch('Logout');
        alert('Bạn đã đăng xuất thành công');
        this.$router.push('/');
      }
    },
  },
};
</script>
     