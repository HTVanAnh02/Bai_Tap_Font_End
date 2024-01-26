<template>
  <div>
    <v-row class="ml-3 mt-3">
      <v-col cols="4" sm="6" md="6" lg="2">
        <v-select v-model="SortCategory" density="compact" label="Name" :items="['Son', 'Kem Nền','All']" variant="outlined"
          @change="applyFilters"></v-select>
      </v-col>
      <v-col cols="4" sm="6" md="6" lg="2">
        <v-select v-model="SortPrice" label="Price" density="compact" :items="['Price ↑', 'Price ↓']" variant="outlined"
          @change="applyFilters"></v-select>
      </v-col>
      <v-col cols="4" sm="6" md="6" lg="2">
        <v-select v-model="SortAnotherPrice" label="Price" density="compact" :items="['Price ↑', 'Price ↓']"
          variant="outlined" @change="applyFilters"></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" class="text-right">
        <v-btn style="background-color: #ebf2ff; font-size: 14px; color:#4d4d50" class="rounded-1 text-capitalize"
          variant="tonal">
          Show all
        </v-btn>
        <v-btn style="font-weight: bold;font-size: 14px; color: #2264D1;" bg-color="white"
          class="rounded-1 text-capitalize" variant="elevated">
          Action
        </v-btn>
        <v-btn style="background-color: #ebf2ff;font-size: 14px; color:#4d4d50" class="rounded-1 text-capitalize"
          variant="tonal">
          Buy now
        </v-btn>
        <v-btn style="background-color: #ebf2ff" class="ml-5" ariant="tonal">
          <v-icon>mdi mdi-menu</v-icon>
        </v-btn>
        <v-btn class="mr-5" variant="elevated">
          <v-icon style="color: #0c5bda;">mdi-microsoft</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <div>
      <v-row class="px-6">
        <v-chip-group>
          <h3 class="ma-2 font-weight-bold mt-3" style="font-size: 14px; color: #19191d">
            Releted
          </h3>
          <v-chip size="large" style="font-size: 14px">worldwide shipping</v-chip>
          <v-chip size="large" style="font-size: 14px">under $50</v-chip>
          <v-chip size="large" style="font-size: 14px">kitten</v-chip>
          <v-chip size="large" style="font-size: 14px">plastic plugs</v-chip>
          <v-chip size="large" style="font-size: 14px">pucker shoes</v-chip>
          <v-chip size="large" style="font-size: 14px">vintage typewriter</v-chip>
        </v-chip-group>
      </v-row>
    </div>
  </div>
  <v-row>
    <v-col cols="12" sm="12" md="6" lg="3" v-for="(mypham, i) in Myphams" :key="i">
      <v-card class="custom-shadow" height="472px" with="258px" align="center" variant="flat" hover rounded="lg">
        <v-img :src="mypham.image" width="227" height="224" contain class="flex-grow-1  margin-bottom: 10px"
          style="object-fit: cover"></v-img>
        <v-card-text class="mt-1 text-left" style="font-size: 16px; color: #19191d">
          {{ mypham.title }}
        </v-card-text>
        <v-card-text class="mt-n4 text-left " style="font-size: 14px; font-weight: 700;padding: auto; color: #040404"
          height="226px" width="21px">
          <p style="font-size: 24px ;margin: left 20px;"> ${{ mypham.price }} </p>
        </v-card-text>
        <v-card-text class="mt-n2 text-left" style="font-size: 14px; color: #787885">
          {{ mypham.reviews }}
        </v-card-text>
        <v-card-actions>
          <v-row class="mt-n4">
            <v-col class="ml-3 mt-1" cols="5" style="display: flex;">
              <v-icon color="#FB8200" size="x-small" style="font-size: 16px;">mdi mdi-star</v-icon>
              <v-icon color="#FB8200" size="x-small" style="font-size: 16px;">mdi mdi-star</v-icon>
              <v-icon color="#FB8200" size="x-small" style="font-size: 16px;">mdi mdi-star</v-icon>
              <v-icon color="#FB8200" size="x-small" style="font-size: 16px;">mdi mdi-star</v-icon>
              <v-icon color="#FB8200" size="x-small" style="font-size: 16px;">mdi mdi-star</v-icon>
              <span style="font-size: 16px; margin-top: -4px;">{{ mypham.rating }}</span>
            </v-col>
            <v-col class="text-right" cols="6">
              <v-btn class="text-capitalize" color="primary" size="small" prepend-icon="mdi-heart-outline"
                variant="outlined" style="margin-top: -4px;">
                Watch
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-space></v-space>
  <FooterClient class="ma-10" />
</template>
<script>
import FooterClient from "../../components/Client/FooterClient.vue";
export default {
  name: "TrangChu",
  components: {
    FooterClient,
  },
  data() {
    return {
      SortCategory: 'All',
      SortPrice: '',
      filteredMyphams: [
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_210000069_310523-1685529439_img_358x358_843626_fit_center.jpg",
          title: "Son Thỏi MAC Mịn Lì 646 Marrakesh - Đỏ Đất 3g Matte Lipstick",
          price: "50",
          reviews: "Son môi MAC Matte Lipstick là một trong những dòng son mang tính biểu tượng đã làm nên tên tuổi của M·A·C .",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_100630045_310523-1685529534_img_358x358_843626_fit_center.jpg",
          title: "Kem Nền MAC Lâu Trôi NC20 Màu Be Vàng Cho Da Sáng 30ml",
          price: "100",
          reviews: "Kem Nền Lâu Trôi MAC Studio Fix Fluid SPF 15 là dòng sản phẩm kem nền bán chạy nhất của thương hiệu mỹ phẩm trang điểm chuyên nghiệp M·A·C.",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_210000069_310523-1685529439_img_358x358_843626_fit_center.jpg",
          title: "Son Thỏi MAC Mịn Lì 646 Marrakesh - Đỏ Đất 3g Matte Lipstick",
          price: "50",
          reviews: "Son môi MAC Matte Lipstick là một trong những dòng son mang tính biểu tượng đã làm nên tên tuổi của M·A·C .",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_100630045_310523-1685529534_img_358x358_843626_fit_center.jpg",
          title: "Kem Nền MAC Lâu Trôi NC20 Màu Be Vàng Cho Da Sáng 30ml",
          price: "100",
          reviews: "Kem Nền Lâu Trôi MAC Studio Fix Fluid SPF 15 là dòng sản phẩm kem nền bán chạy nhất của thương hiệu mỹ phẩm trang điểm chuyên nghiệp M·A·C.",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_210000069_310523-1685529439_img_358x358_843626_fit_center.jpg",
          title: "Son Thỏi MAC Mịn Lì 646 Marrakesh - Đỏ Đất 3g Matte Lipstick",
          price: "50",
          reviews: "Son môi MAC Matte Lipstick là một trong những dòng son mang tính biểu tượng đã làm nên tên tuổi của M·A·C .",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_100630045_310523-1685529534_img_358x358_843626_fit_center.jpg",
          title: "Kem Nền MAC Lâu Trôi NC20 Màu Be Vàng Cho Da Sáng 30ml",
          price: "100",
          reviews: "Kem Nền Lâu Trôi MAC Studio Fix Fluid SPF 15 là dòng sản phẩm kem nền bán chạy nhất của thương hiệu mỹ phẩm trang điểm chuyên nghiệp M·A·C.",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_210000069_310523-1685529439_img_358x358_843626_fit_center.jpg",
          title: "Son Thỏi MAC Mịn Lì 646 Marrakesh - Đỏ Đất 3g Matte Lipstick",
          price: "50",
          reviews: "Son môi MAC Matte Lipstick là một trong những dòng son mang tính biểu tượng đã làm nên tên tuổi của M·A·C .",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_100630045_310523-1685529534_img_358x358_843626_fit_center.jpg",
          title: "Kem Nền MAC Lâu Trôi NC20 Màu Be Vàng Cho Da Sáng 30ml",
          price: "100",
          reviews: "Kem Nền Lâu Trôi MAC Studio Fix Fluid SPF 15 là dòng sản phẩm kem nền bán chạy nhất của thương hiệu mỹ phẩm trang điểm chuyên nghiệp M·A·C.",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_210000069_310523-1685529439_img_358x358_843626_fit_center.jpg",
          title: "Son Thỏi MAC Mịn Lì 646 Marrakesh - Đỏ Đất 3g Matte Lipstick",
          price: "50",
          reviews: "Son môi MAC Matte Lipstick là một trong những dòng son mang tính biểu tượng đã làm nên tên tuổi của M·A·C .",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_100630045_310523-1685529534_img_358x358_843626_fit_center.jpg",
          title: "Kem Nền MAC Lâu Trôi NC20 Màu Be Vàng Cho Da Sáng 30ml",
          price: "100",
          reviews: "Kem Nền Lâu Trôi MAC Studio Fix Fluid SPF 15 là dòng sản phẩm kem nền bán chạy nhất của thương hiệu mỹ phẩm trang điểm chuyên nghiệp M·A·C.",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_210000069_310523-1685529439_img_358x358_843626_fit_center.jpg",
          title: "Son Thỏi MAC Mịn Lì 646 Marrakesh - Đỏ Đất 3g Matte Lipstick",
          price: "50",
          reviews: "Son môi MAC Matte Lipstick là một trong những dòng son mang tính biểu tượng đã làm nên tên tuổi của M·A·C .",
          rating: "5"
        },
        {
          image: "https://media.hcdn.vn/catalog/product/t/o/top_fb_ads_100630045_310523-1685529534_img_358x358_843626_fit_center.jpg",
          title: "Kem Nền MAC Lâu Trôi NC20 Màu Be Vàng Cho Da Sáng 30ml",
          price: "100",
          reviews: "Kem Nền Lâu Trôi MAC Studio Fix Fluid SPF 15 là dòng sản phẩm kem nền bán chạy nhất của thương hiệu mỹ phẩm trang điểm chuyên nghiệp M·A·C.",
          rating: "5"
        },
      ],
      Myphams:[]
    };
  },
methods: {
  filterLoaiSanPham(value)
  {
    if(value==="All")
    {
      this.Myphams=this.filteredMyphams
      return
    }
    this.Myphams=this.filteredMyphams.filter(item=>item.title.includes(value))
  },
  filterPrice()
  {
    let filtered = [...this.Myphams]; 

    if (this.SortPrice === 'Price ↑') {
      this.Myphams = filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      
    } else {
      this.Myphams = filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
  }
},
watch:{
  SortCategory(newval)
  {
    // alert(OldVal+"   "+newval)
    this.filterLoaiSanPham(newval)
  },
  SortPrice(newval)
  {
    // alert(OldVal+"   "+newval)
    this.filterPrice(newval)
  }
},
created()
{
  this.Myphams=this.filteredMyphams;
}

};
</script>