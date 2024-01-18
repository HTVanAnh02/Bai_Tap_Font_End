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
                <th class="text-center">Tên Sản Phẩm</th>
                <th class="text-center">Giá</th>
                <th class="text-center">Số Lượng</th>
                <th class="text-center">Mô tả</th>
                <th class="text-center">Ảnh</th>
                <th class="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in datas" :key="index">
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center">{{ item.TenSanPham }}</td>
                <td class="text-center">{{ item.Gia }}</td>
                <td class="text-center">{{ item.SoLuong }}</td>
                <td class="text-center">{{ item.MoTa }}</td>
                <td class="text-center">
                  <img
                    src="`${{ item.AnhSanPham }}`"
                    style="width: 50px; height: 50px"
                  />
                </td>
                <td class="text-center">
                  <v-btn
                    icon
                    color="green"
                    size="small"
                    @click="(dialog = true), (currentData = item)"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon color="red" size="small">
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-row
            class="ma-8 d-flex flex-row justify-content-center"
            style="border-bottom: 1px solid #ccc"
          >
          <v-cols col>
            <v-text style="color: rgb(173, 170, 170);">
            Showing
          </v-text>
            <v-select class="mt-5 px-10" label="10" style="width: 50px">
              <v-option value="name">Name</v-option>
            </v-select>
            <v-text style="color: rgb(173, 170, 170);">
            Of 50
          </v-text>
          </v-cols>
  
            <v-pagination
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
              class="mb-4 align-self-center"
              :length="5"
              v-model="currentPage"
            ></v-pagination>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
      
    
  <!-- <script>
export default {
  name: "SanPhamView",
  data() {
   
    return {
 
      dialogloading: false,
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
};
</script> -->
<script>
export default {
  name: "SanPhamView",

  data: () => ({
    datas: [
      {
        TenSanPham: "Sản Phẩm 1",
        Gia: "$45.59",
        SoLuong: 45,
        MoTa: "One string Bonsai description",
        AnhSanPham: "@/assets/img/anh.jpg",
      },
    ],
    currentPage: 1,
    itemsPerPage: 5,
  }),
};
</script>
  <style></style>