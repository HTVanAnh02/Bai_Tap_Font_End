<template>
  <v-dialog max-width="500px">
    <v-card>
      <v-card-title style="font-weight: bold">
        <h4>Tạo mới sản phẩm</h4>
      </v-card-title>
      <v-container style="background-color: rgb(247, 247, 247)">
        <v-row>
          <v-col cols="12" style="font-size: 13px">
            <div class="d-flex mb-2">
              <p>Tên sản phẩm</p>
              <span class="ml-1" style="color: blue">*</span>
            </div>
            <v-text-field
              style="background-color: white"
              label="Nhập tên sản phẩm"
              density="compact"
              single-line
              hide-details
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" style="font-size: 13px">
            <div class="d-flex mb-2">
              <p>Giá</p>
              <span class="ml-1" style="color: blue">*</span>
            </div>
            <v-text-field
              style="background-color: white"
              label="Nhập giá sản phẩm"
              density="compact"
              single-line
              hide-details
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" style="font-size: 13px">
            <div class="d-flex mb-2">
              <p>Số lượng</p>
              <span class="ml-1" style="color: blue">*</span>
            </div>
            <v-text-field
              style="background-color: white"
              label="Nhập số lượng sản phẩm"
              density="compact"
              single-line
              hide-details
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" style="font-size: 13px">
            <p>Mô tả</p>
            <v-textarea
              style="background-color: white"
              label="Nhập mô tả"
              density="compact"
              single-line
              hide-details
              variant="outlined"
            ></v-textarea>
          </v-col>
          <v-col cols="12" style="font-size: 13px">
            <div class="d-flex mb-2">
              <p>Ảnh sản phẩm</p>
              <span class="ml-1" style="color: blue">*</span>
            </div>
            <v-text-field
              placeholder="Nhập link ảnh sản phẩm"
              style="background-color: white"
              density="compact"
              single-line
              hide-details
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="this.$emit('close')"
          text="Hủy"
          style="border: 1px solid #ccc"
          width="70"
        ></v-btn>
        <v-btn
          text="Tạo mới"
          color="white"
          class="mr-2"
          style="background-color: #0f60ff"
          width="110"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "DialogProduct",
};
</script>
<style></style>