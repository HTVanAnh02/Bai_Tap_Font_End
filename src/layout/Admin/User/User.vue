<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-text-field
          style="background-color: white"
          density="compact"
          variant="outlined"
          label="Tìm kiếm"
          append-inner-icon="mdi mdi-magnify"
          single-line
          hide-details
          class="mr-2"
        ></v-text-field>
      </v-col>
      <v-col cols="9" class="text-right">
        <v-btn
          @click="showDialog = true"
          color="primary"
          prepend-icon="mdi mdi-plus"
          class="text-uppercase"
          >Thêm</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">Avatar</th>
                <th class="text-left">Tên Người Dùng</th>
                <th class="text-left">Email</th>
                <th class="text-left">Ngày Sinh</th>
                <th class="text-left">Số Điện Thoại</th>
                <th class="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10" :key="i">
                <td>
                  <v-img
                    width="60"
                    height="50"
                    src="@/assets/img/anh.jpg"
                  ></v-img>
                </td>
                <td>Hoàng Thị Vân Anh{{ i }}</td>
                <td>hoangthivananh22122002@gmail.com</td>
                <td>22/12/2002</td>
                <td>
                  0328301422
                </td>
                <td class="text-center">
                  <v-btn variant="text"><v-icon>mdi-pencil</v-icon></v-btn>
                  <v-btn variant="text"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-row class="ma-2">
            <v-col cols="8">
              <v-row>
                <p class="mt-5 opacity">Showing</p>
                <v-col cols="2">
                  <v-select
                    density="compact"
                    :items="['10', '20', '25', '30', 'All']"
                    variant="outlined"
                  ></v-select>
                </v-col>
                <p class="mt-5 opacity">of 50</p>
              </v-row>
            </v-col>
            <v-col cols="4" class="text-right">
              <v-pagination
                variant="text"
                density="compact"
                :length="10"
              ></v-pagination>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UserView",

    
};
</script>
  <style></style>