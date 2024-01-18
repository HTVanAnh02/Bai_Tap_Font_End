<template>
    <v-navigation-drawer>
        <v-list>
            <v-list-subheader>Hoàng Thị Vân Anh</v-list-subheader>
            <v-list-item v-for="(item, i) in links" :key="i" :to="item.link" color="primary">
                <template v-slot:prepend>
                    <v-icon>{{ item.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script>
export default {
    name: "SidebarView",
    data() {
        return {
            links: [
                { icon: " mdi-newspaper", text: "Quản lý Bài Viết", link: "/admin/baiviet" },
                { icon: "mdi-file-document", text: "Quản lý Chi Tiết Hóa Đơn", link: "/admin/chitiethoadon" },
                { icon: "mdi-wallet-travel", text: "Quản lý Đặt Tour", link: "/admin/dattour" },
                { icon: "mdi-receipt", text: "Quản lý Hóa Đơn", link: "/admin/hoadon" },
                { icon: "mdi-account-circle", text: "Quản lý Người Dùng", link: "/admin/nguoidung" },
                { icon: "mdi-airplane", text: "Quản lý Tour", link: "/admin/tour" },
                
            ],
        };
    },
};
</script>
  
<style scoped>
/* Các quy tắc CSS scoped nếu cần thiết */
</style>