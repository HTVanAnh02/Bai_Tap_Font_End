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
  // components: {
  //   Form,
  //   Field,
  // },
  // methods: {
  //   onSubmit() {
  //     console.log('Submitting :(');
  //   },
  // },
};
</script>
<!-- <script setup>
import {ref} from 'vue'
const dialog = ref(false);
import { useForm } from 'vee-validate';
import * as yup from 'yup';
const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const props = defineProps(['close']);
const emit = defineEmits();

const { errors, handleSubmit,resetForm, defineField } = useForm({
    validationSchema: yup.object({
        tensanpham: yup.string().required('Vui lòng nhập tên sản phẩm'),
        gia: yup.number('Dữ liệu nhập phải là số').required('Vui lòng nhập giá'),
        soluong: yup.number('Dữ liệu nhập phải là số').required('Vui lòng nhập số lượng'),
        anhsanpham: yup.string().required('Vui lòng nhập ảnh sản phẩm'),
    }),
});
const [tensanpham, tensanphamAttrs] = defineField('tensanpham');
const [gia, giaAttrs] = defineField('gia');
const [soluong, soluongAttrs] = defineField('soluong');
const [anhsanpham, anhsanphamAttrs] = defineField('anhsanpham');

const handleClose = () => {
    resetForm();
    emit('close');
};

const createProduct = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
});
</script> -->
<style></style>