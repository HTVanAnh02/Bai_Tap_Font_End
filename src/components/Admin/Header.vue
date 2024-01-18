<template>
  <v-app-bar>
    <v-text variant="text">Danh sách sản phẩm</v-text>
    <v-spacer></v-spacer>
    <v-btn variant="text" icon @click="bellClick">
      <v-badge content="9+" color="error">
        <v-icon>mdi-bell</v-icon>
      </v-badge>
    </v-btn>
  <v-avatar>
    <v-img class="mx-auto my-6" max-width="100" src="@/assets/img/anh.jpg"></v-img>
  </v-avatar>
  </v-app-bar>
</template>
    
<script>
export default {
  name: "HeaderView",
  data() {
    return {
      userInfo: {
        avatar:
          "https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/378115767_1052368842424240_2395156966702886797_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeF_SyY-4lUkmgkXCzi536Z_eObwQpGm_Zp45vBCkab9mgMk7sk7LwRI4-U7TuzKAvQxEHbilnhjQls3nYebQ6Ue&_nc_ohc=86UQMQYJHiEAX-efJr_&_nc_oc=AQmt-Z1bLhveAH77Qmjyl1wzjzz-wjwR9zoX81gN0KAPiSDZezCyKMAQfRekEfyEAnk&_nc_ht=scontent.fhan1-1.fna&oh=00_AfD6IjcDsVussmehNaOlusczhXpiilJkDvfrgXmgRCggZA&oe=65AC9B56",
        name: "Hoàng Thị Vân Anh",
        email: "hoangthivananh22122002@gmail.com",
      },
      menu: false,
    };
  },
};
</script>
     