<template>
  <v-app-bar :elevation="0" rounded scroll-behavior="elevate">
    <v-app-bar-title class="font-weight-bold ma-8 text-h5"
      >{{$store.state.title }}</v-app-bar-title>
    <template v-slot:append>
      <v-badge content="6" color="red" class="ma-4">
        <v-icon icon="mdi-bell-outline"></v-icon>
      </v-badge>
      <div style="position: relative; height: auto" class="mr-5">
        <v-avatar>
          <v-img
            class="mx-auto my-6"
            max-width="100"
            src="@/assets/img/anh.jpg"
          ></v-img>
        </v-avatar>
        <v-badge
          dot
          color="green"
          style="position: absolute; bottom: 8px"
        ></v-badge>
      </div>
    </template>
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
     