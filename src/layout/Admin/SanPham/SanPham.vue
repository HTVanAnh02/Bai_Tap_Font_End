<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-text-field style="background-color: white" density="compact" variant="outlined" label="Tìm kiếm"
          append-inner-icon="mdi mdi-magnify" single-line hide-details
          class="mr-2  elevation-2 mr-2 elevation-2 custom-border"></v-text-field>
      </v-col>
      <v-col cols="9" class="text-right">
        <v-btn @click="(dialog = true), (currentData = '')" color="#0F60FF" class="text-uppercase">
          <v-icon> mdi mdi-plus</v-icon>
          Tạo Mới</v-btn>
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
                <th class="text-left mr-4" style="opacity: 0.5;">
                  <p class="ml-3">Ảnh</p>
                </th>
                <th class="text-center" style="opacity: 0.5;">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in myphams" :key="index">
                <td class="font-weight-bold" style="color: black;">{{ item.name }}</td>
                <td style="color: black;">{{ item.price }}</td>
                <td style="color: black;">{{ item.quantity }}</td>
                <td style="color: black;">{{ item.description }}</td>
                <td>
                  <img :src="item.imageUrl" class="text-left" width="50px" height="50px">
                </td>
                <td class="text-center font-weight-bold">
                  <v-btn variant="text" @click="(dialog = true), (currentData = '')">
                    <v-icon> mdi mdi-square-edit-outline</v-icon></v-btn>
                  <v-btn variant="text" @click="Show(item.Id)">
                    <v-icon> mdi mdi-trash-can-outline</v-icon>
                  </v-btn>
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
            <v-col cols="4" class="text-right">
              <v-pagination variant="text" density="compact" :length="5" active-color="#0F60FF"
                v-model="currentPage"></v-pagination>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <show style="z-index: 1000" v-model="showAlert.show" :content="showAlert.content" :color="showAlert.color"
    :icon="showAlert.icon" />
  <Dialog v-model="dialog" @close="dialog = false" @updateData="getAll" :currentData="currentData" />
  <thongbao ref="dialog" @deleteData="deleteData" :obj="objId" />
</template>
<script>
import Dialog from "@/layout/Admin/SanPham/Dialog.vue";
import Thongbao from '@/components/Client/Thongbao.vue';
import Show from '@/components/Show.vue';
import axios from 'axios';
export default {
  name: "SanPhamView",
  data() {
    return {
      dialog: false,
      currentData: "",
      objId: "",
      myphams: [],
      showAlert: {
        show: false,
        icon: "$success",
        content: "",
        color: "success",
      },
      dialogloading: false,
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  components: {
    Dialog,
    Thongbao,
    Show,
  },
  watch: {
    showAlert: {
      deep: true,
      handler(newVal) {
        if (!newVal.show) return;
        setTimeout(() => (this.showAlert.show = false), 2000);
      },
    },
  },
  computed: {
    displayed() {
      if (this.myphams && this.myphams.length > 0) {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.myphams.slice(startIndex, endIndex);
      } else {
        return [];
      }
    },
    totalPages() {
      return Math.ceil(this.myphams.length / this.itemsPerPage);
    },
  },
  methods: {
    getAll() {
      this.dialogloading = true;
      axios.get('http://localhost:3000/api/v1/product').then(res => {
        this.myphams = res.data;
      }).catch(error => {
        console.log(error);
      })
      this.dialogloading = false;

    },
    Show(id) {
      (this.objId = id), this.$refs.dialog.openDialog();
    },
    deleteData(id) {
      this.dialogloading = true;
      axios.delete('http://localhost:3000/api/v1/product/' + id).then(res => {
        console.log(res.data);
        this.AlertSuccess("Xóa thành công");
        this.getAll();

      }).catch(error => {
        console.log(error);
        this.dialogloading = false;
        this.AlertError("Thao tác xóa chưa được thực hiện");
      })
      this.dialogloading = false;

    },
    formatDateTime(dateTimeString) {
      const dateObject = new Date(dateTimeString);
      const day = String(dateObject.getDate()).padStart(2, '0');
      const month = String(dateObject.getMonth() + 1).padStart(2, '0');
      const year = String(dateObject.getFullYear()).slice();
      return `${day}/${month}/${year}`;
    },
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(value);
    },
    AlertSuccess(content) {
      this.showAlert.show = true;
      this.showAlert.icon = "$success";
      this.showAlert.content = content;
      this.showAlert.color = "success";
    },
    AlertError(content) {
      this.showAlert.show = true;
      this.showAlert.content = content;
      this.showAlert.icon = "$error";
      this.showAlert.color = "error";
    },
  },
  created() {
    this.getAll();
  },
};
</script>
<style></style>