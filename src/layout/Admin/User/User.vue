<template>
  <div>
    <v-row class="mt-3">
      <v-text-field placeholder="Tìm Kiếm" style="max-width: 400px">
        <v-icon right>mdi-magnify</v-icon>
      </v-text-field>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="(dialog = true), (currentData = '')">
        Tạo Mới
        <v-icon>mdi mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <v-row class="mt-8">
      <v-col>
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th class="text-center">STT</th>
                <th class="text-center">Avatar</th>
                <th class="text-center">Tên Người Dùng</th>
                <th class="text-center">Email</th>
                <th class="text-center">Ngày Sinh</th>
                <th class="text-center">Số Điện Thoại</th>
                <th class="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in datas" :key="index">
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center">
                  <img
                    :src="item.AnhBaiViet"
                    style="width: 150px; height: 150px"
                  />
                </td>
                <td class="text-center">{{ item.TieuDe }}</td>
                <td class="text-center">{{ item.NguoiDungId }}</td>
                <td class="text-center">{{ item.NoiDung }}</td>
                <td class="text-center">
                  <v-btn
                    icon
                    color="green"
                    size="small"
                    @click="(dialog = true), (currentData = item)"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="red"
                    size="small"
                    @click="Show(item.BaiVietId)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <!-- <show
              style="z-index: 1000"
              v-model="showAlert.show"
              :content="showAlert.content"
              :color="showAlert.color"
              :icon="showAlert.icon"
            /> -->
          <v-pagination
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            class="pa-8"
            :length="totalPages"
            v-model="currentPage"
          ></v-pagination>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <!-- <Dialog
      :dialog="dialog"
      @close="dialog = false"
      @updateData="getAll"
      :currentData="currentData"
    />
    <thongbao ref="dialog" @deleteData="deleteData" :obj="objId" /> -->
</template>
        
      
    <script>
export default {
  name: "UserView",
  data() {
    return {
      // dialog: false,
      // currentData: "",
      // objId: "",
      // datas: [],
      // showAlert: {
      //   show: false,
      //   icon: "$success",
      //   content: "",
      //   color: "success",
      // },
      dialogloading: false,
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  // components: {
  //   Dialog,
  //   Thongbao,
  //   Show,
  // },
  // watch: {
  //   showAlert: {
  //     deep: true,
  //     handler(newVal) {
  //       if (!newVal.show) return;
  //       setTimeout(() => (this.showAlert.show = false), 2000);
  //     },
  //   },
  // },
  // computed: {
  //   displayed() {
  //     if (this.datas && this.datas.length > 0) {
  //       const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //       const endIndex = startIndex + this.itemsPerPage;
  //       return this.datas.slice(startIndex, endIndex);
  //     } else {
  //       return [];
  //     }
  //   },
  //   totalPages() {
  //     return Math.ceil(this.datas.length / this.itemsPerPage);
  //   },
  // },
  // methods: {
  //   getAll() {
  //     this.dialogloading = true;
  //       axios.get('https://localhost:7125/api/BaiViet').then(res => {
  //         this.datas = res.data;
  //       }).catch(error => {
  //         console.log(error);
  //       })
  //       this.dialogloading = false;
  //   },
  //   Show(id) {
  //     (this.objId = id), this.$refs.dialog.openDialog();
  //   },
  //   deleteData(id) {
  //     this.dialogloading = true;
  //     axios.delete('https://localhost:7125/api/BaiViet/' + id).then(res => {
  //       console.log(res.data);
  //       this.AlertSuccess("Xóa thành công");
  //       this.getAll();

  //     }).catch(error => {
  //       console.log(error);
  //       this.dialogloading = false;
  //       this.AlertError("Thao tác xóa chưa được thực hiện");
  //     })
  //     this.dialogloading = false;

  //   },
  //   formatDateTime(dateTimeString) {
  //     const dateObject = new Date(dateTimeString);
  //     const day = String(dateObject.getDate()).padStart(2, '0');
  //     const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  //     const year = String(dateObject.getFullYear()).slice();
  //     return `${day}/${month}/${year}`;
  //   },
  //   formatCurrency(value) {
  //     const formatter = new Intl.NumberFormat('vi-VN', {
  //       style: 'currency',
  //       currency: 'VND',
  //     });
  //     return formatter.format(value);
  //   },
  //   AlertSuccess(content) {
  //     this.showAlert.show = true;
  //     this.showAlert.icon = "$success";
  //     this.showAlert.content = content;
  //     this.showAlert.color = "success";
  //   },
  //   AlertError(content) {
  //     this.showAlert.show = true;
  //     this.showAlert.content = content;
  //     this.showAlert.icon = "$error";
  //     this.showAlert.color = "error";
  //   },
  // },
  // created() {
  //   this.getAll();
  // },
};
</script>
      
    <style></style>