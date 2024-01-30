<template>
  <v-dialog max-width="500px">
    <v-form @submit.prevent="login">
      <v-card class="rounded-card">
        <v-toolbar class="text-center bold-text" style="background-color: rgb(194, 203, 247)" :title="this.idEdit != null
          ? 'Sửa thông tin sản phẩm mới'
          : 'Thêm thông tin sản phẩm mới'
          "></v-toolbar>
        <v-container style="background-color: rgb(247, 247, 247);">
          <v-row>
            <v-col cols="12" style="font-size: 13px;">
              <span>Tên sản phẩm </span> <span class="text-blue ml-2">*</span>
              <v-text-field v-model="formData.name" placeholder="Nhập tên sản phẩm" :error-messages="nameError"
                style="background-color: white;" density="compact" single-line hide-details
                variant="outlined"></v-text-field>
              <span style="color:red"></span>
            </v-col>
            <v-col cols="12" style="font-size: 13px;">
              <span>Giá</span><span class="text-blue ml-2">*</span>
              <v-text-field v-model="formData.price" placeholder="Nhập giá sản phẩm" :error-messages="priceError" required
                style="background-color: white;" density="compact" single-line hide-details
                variant="outlined"></v-text-field>
              <span style="color:red"></span>
            </v-col>
            <v-col cols="12" style="font-size: 13px;">
              <span>Số lượng</span><span class="text-blue ml-2">*</span>
              <v-text-field v-model="formData.quantity" placeholder="Nhập số lượng sản phẩm" :error-messages="quantityError"
                required style="background-color: white;" density="compact" single-line hide-details
                variant="outlined"></v-text-field>
              <span style="color:red"></span>
            </v-col>
            <v-col cols="12" style="font-size: 13px;">
              <span>Mô tả</span>
              <v-textarea v-model="formData.description" placeholder="Nhập mô tả" :error-messages="descriptionError" required
                style="background-color: white;" density="compact" single-line hide-details
                variant="outlined"></v-textarea>
              <span style="color:red"></span>
            </v-col>
            <v-col cols="12" style="font-size: 14px;">
              <v-file-input v-model="image" type="file" accept="image/png, image/jpeg, image/bmp" placeholder="Chọn ảnh"
                prepend-icon="mdi-camera" label="Hình ảnh" @change="handleImageChange"></v-file-input>
              <img v-if="selectedImage" :src="selectedImage" style="width: 100px; height: 100px" alt="1" />
              <!-- <span>Ảnh sản phẩm</span><span class="text-blue ml-2">*</span> -->
              <!-- <v-text-field placeholder="Nhập link ảnh sản phẩm" style="background-color: white;" density="compact"
                single-line hide-details variant="outlined"></v-text-field> -->
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions class="pr-4">
          <v-spacer></v-spacer>
          <v-btn @click="$emit('close')" class="text-capitalize cancel-button">Hủy</v-btn>
          <v-btn class="text-capitalize" variant="elevated" color="#0F60FF" @click="updateData()">Tạo<span
              class="text-lowercase">mới</span></v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
  <show style="z-index: 1000" v-model="showAlert.show" :content="showAlert.content" :color="showAlert.color"
    :icon="showAlert.icon" />
</template>
<script>
export default {
  components: { Show },
  name: "DialogProduct",
  props: ["dialog", "currentData"],
  computed: {
    dialogAction: {
      get() {
        return this.dialog;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  data() {
    return {
      formData: {
        Id: "",
        name: "",
        price: "",
        quantity: "",
        description: "",
        imageUrl: "",
      },
      showAlert: {
        show: false,
        icon: "$success",
        content: "",
        color: "success",
      },
      nguoidungs: [],
      selectedImage: null,
      image: null,
      sanphams: [],
    };
  },
  watch: {
    currentData: function () {
      this.formData.Id = this.currentData.Id;
      this.formData.name = this.currentData.name;
      this.formData.price = this.currentData.price;
      this.formData.quantity = this.currentData.quantity;
      this.formData.quantity = this.currentData.quantity;
      this.formData.imageUrl = this.currentData.imageUrl;
    },
    showAlert: {
      deep: true,
      handler(newVal) {
        if (!newVal.show) return;
        setTimeout(() => (this.showAlert.show = false), 2000);
      },
    },
  },
  methods: {

    handleImageChange(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.image = selectedFile;
        this.selectedImage = URL.createObjectURL(selectedFile);
      } else {
        this.image = null;
        this.selectedImage = null;
      }
    },
    reSetForm() {
      this.formData.Id = "";
      this.formData.name = "";
      this.formData.quantity = "";
      this.formData.price = "";
      this.formData.quantity = "";
      this.formData.imageUrl = "";
      this.image = null;
      this.selectedImage = null;
    },
    updateData() {
      this.dialogloading = true;
      if (this.formData.Id === "") {
        this.formData.Id = 0;
        this.formData.imageUrl = this.image;
        axios.post('http://localhost:3000/api/v1/product', this.formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(res => {
          console.log(res.data);
          this.getBaiViet();
          this.dialogloading = false;
          this.AlertSuccess("Thêm mới thông tin thành công");
          this.$emit("close");
          this.$emit("updateData");
          this.reSetForm();
        })

      } else {
        this.formData.imageUrl = this.image;
        axios.put('http://localhost:3000/api/v1/product/' + this.formData.Id, this.formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(res => {
          console.log(res.data);
          this.dialogloading = false;
          this.getBaiViet();
          this.AlertSuccess("Cập nhập thông tin thành công");
          this.$emit("close");
          this.$emit("updateData");
          this.reSetForm();
        })
      }

    },
    getBaiViet() {
      axios.get('http://localhost:3000/api/v1/user').then(res => {
        this.users = res.data;
      }).catch(error => {
        console.log(error);
      })
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
    this.getBaiViet();
  },
};
</script>
<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import Show from '@/components/Show.vue';
import axios from 'axios';

// import { ref } from 'vue';


const { handleSubmit } = useForm();

const { value: name, errorMessage: nameError } = useField(
  'name',
  yup
    .string()
    .required('Không được bỏ trống')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Tên sản phẩm chỉ được chứa ký tự chữ cái, số và khoảng trắng')
);


const { value: price, errorMessage: priceError } = useField(
  'price',
  yup
    .number()
    .required('Không được bỏ trống')
    .min(0, 'Giá không được nhỏ hơn 0')
    .typeError('Giá phải là một số')
);

// const { value: quantity, errorMessage: quantityError } = useField(
//   'quantity',
//   yup
//     .number()
//     .required('Không được bỏ trống')
//     .integer('Số lượng phải là một số nguyên')
//     .min(0, 'Số lượng không được nhỏ hơn 0')
//     .typeError('Số lượng phải là một số')
// );
// const { value: description, errorMessage: descriptionError } = useField(
//   'description',
//   yup
//     .string()
//     .required('Không được bỏ trống')
//     .min(10, 'Mô tả phải có ít nhất 10 ký tự')
//     .max(500, 'Mô tả không được quá 500 ký tự')
// );
const login = handleSubmit(async () => {
  alert(name.value + "   " + price.value)
});
</script>
<style scoped>
.rounded-card {
  border-radius: 12px;
}

.cancel-button {
  border: 1px solid #dddee2;
  /* Màu viền của nút Hủy */
  color: #0f0f0f;
  /* Màu chữ của nút Hủy */
}

.create-button {
  /* Cấu hình màu và các thuộc tính khác cho nút Tạo mới */
  color: #fff;
  /* Màu chữ của nút Tạo mới */
  background-color: #0F60FF;
  /* Màu nền của nút Tạo mới */
  border: none;
  /* Không có viền */
}
</style>