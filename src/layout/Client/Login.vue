<template>
    <div>
        <v-card class="mx-auto pa-12 pb-8 my-6" variant="flat" max-width="500" rounded="lg">
            <v-img class="mx-auto my-6" max-width="100" src="@/assets/img/ttlab-logo.svg"></v-img>
            <div class="text-h4 text-center">
                Đăng nhập
            </div>
            <div class="text-subtitle-1 text-medium-emphasis">Email</div>


            <v-text-field density="compact" placeholder="Nhập email" variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Mật khẩu
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Nhập mật khẩu" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>
            <div class="d-flex justify-space-between align-center">
                <v-checkbox v-model="terms" color="secondary" label="Ghi nhớ Đăng nhập"></v-checkbox>
                <a class="text-caption text-decoration-none text-blue mb-6">
                    Quên mật khẩu?</a>
            </div>
            <v-btn block class="mb-8" color="#0F60FF" size="large">
                Đăng nhập
            </v-btn>
            <div class="text-center">
                Bạn chưa có tài khoản ?
                <a class="text-decoration-none text-center" style="color:#0F60FF;">
                    Đăng ký ?
                </a>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            visible: false,
        }
    }
}
</script>

<style>
.clsaas{
    
}</style>