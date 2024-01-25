<template>
  <v-dialog max-width="500px" v-model="ShowDialog">
    <v-card>
      <v-card-title style="font-weight: bold">
        <h4>Tạo mới người dùng</h4>
      </v-card-title>
      <v-container style="background-color: rgb(247, 247, 247)">
        <v-row>
          <v-col cols="12" style="font-size: 13px">
            <div class="d-flex mb-2">
              <p>Tên người dùng</p>
              <span class="ml-1" style="color: blue">*</span>
            </div>
            <v-text-field
              style="background-color: white"
              label="Nhập tên người dùng"
              density="compact"
              single-line
              hide-details
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" style="font-size: 13px">
            <div class="d-flex mb-2">
              <p>Email</p>
              <span class="ml-1" style="color: blue">*</span>
            </div>
            <v-text-field
              style="background-color: white"
              label="Nhập email"
              density="compact"
              single-line
              hide-details
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" style="font-size: 13px">
            <div class="d-flex mb-2">
              <p>Ngày sinh</p>
              <span class="ml-1" style="color: blue">*</span>
            </div>
            <v-text-field
              style="background-color: white"
              type="date"
              density="compact"
              single-line
              hide-details
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" style="font-size: 13px">
            <p>Số điện thoại</p>
            <v-text-field
              style="background-color: white"
              label="Nhập số điện thoại"
              density="compact"
              single-line
              hide-details
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" style="font-size: 13px">
            <div class="d-flex mb-2">
              <p>Avatar</p>
              <span class="ml-1" style="color: blue">*</span>
            </div>
            <v-text-field
              placeholder="Nhập link ảnh avatar"
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
  name: 'DialogUser',
  props: ['dialog'],
  computed: {
      ShowDialog: {
          get() {
              return this.dialog;
          },
          set(value) {
              if (!value) {
                  this.$emit('close');
              }
          }
      }
  }
}
</script>

<!-- <script setup>
import { ref } from "vue";
const dialog = ref(false);
import { useForm } from "vee-validate";
import * as yup from "yup";
const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const props = defineProps(["close"]);
const emit = defineEmits();

const { errors, handleSubmit, resetForm, defineField } = useForm({
  validationSchema: yup.object({
    name: yup.string().required("Vui lòng nhập tên người dùng"),
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Vui lòng nhập email"),
    ngaysinh: yup.string().required("Vui lòng nhập ngày sinh"),
    avatar: yup.string().required("Vui lòng nhập avatar"),
    sodienthoai: yup
      .string()
      .matches(regexPhoneNumber, "Số điện thoại không hợp lệ"),
  }),
});
const [name, nameAttrs] = defineField("name");
const [email, emailAttrs] = defineField("email");
const [ngaysinh, ngaysinhAttrs] = defineField("ngaysinh");
const [avatar, avatarAttrs] = defineField("avatar");
const [sodienthoai, sodienthoaiAttrs] = defineField("sodienthoai");

const handleClose = () => {
  resetForm();
  emit("close");
};

const createNewUser = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});
</script> -->

<style></style>