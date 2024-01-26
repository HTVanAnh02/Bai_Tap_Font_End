<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-text-field style="background-color: white" density="compact" variant="outlined" label="Tìm kiếm"
          append-inner-icon="mdi mdi-magnify" single-line hide-details class="mr-2  elevation-2"></v-text-field>
      </v-col>
      <v-col cols="9" class="text-right">
        <v-btn @click="showDialog = true" prepend-icon="mdi mdi-plus" color="#0F60FF" class="text-uppercase">Tạo
          Mới</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left" style="opacity: 0.5;">Tên sản phẩm</th>
                <th class="text-left" style="opacity: 0.5;">Giá</th>
                <th class="text-left" style="opacity: 0.5;">Số lượng</th>
                <th class="text-left" style="opacity: 0.5;">Mô tả</th>
                <th class="text-left mr-4" style="opacity: 0.5;"><p class="ml-3">Ảnh</p></th>
                <th class="text-center" style="opacity: 0.5;">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10" :key="i">
                <td class="font-weight-bold" style="color: black;">Son dưỡng {{ i }}</td>
                <td style="color: black;">$49.000</td>
                <td style="color: black;">100</td>
                <td style="color: black;">Son dưỡng</td>
                <td >
                  <v-img class="text-left" width="60px" height="50px" src="@/assets/img/anh.jpg"></v-img>
                </td>
                <td class="text-center font-weight-bold" >
                  <v-btn variant="text"><v-icon> mdi mdi-square-edit-outline</v-icon></v-btn>
                  <v-btn variant="text"><v-icon> mdi mdi-trash-can-outline</v-icon></v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-row class="ma-2">
            <v-col cols="8">
              <v-row>
                <p class="mt-5 opacity" style="opacity: 0.5;">Showing</p>
                <v-col cols="2">
                  <v-select density="compact" :items="['10', '20', '25', '30', 'All']" variant="outlined"></v-select>
                </v-col>
                <p class="mt-5 opacity" style="opacity: 0.5;">of 50</p>
              </v-row>
            </v-col>
            <v-col cols="4" class="text-right" >
              <v-pagination variant="text" density="compact" :length="5" active-color="#0F60FF" ></v-pagination>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <Dialog v-model="showDialog" />
</template>
<script>
import Dialog from "@/layout/Admin/SanPham/Dialog.vue";
export default {
  name: "SanPhamView",
  data() {
    return {
      drawer: true,
      rail: true,
      showDialog: false,
    };
  },
  components: {
    Dialog,
  },
};
</script>
<style></style>