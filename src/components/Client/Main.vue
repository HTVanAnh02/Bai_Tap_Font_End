<template>
  <div>
    <div class="py-6 px-6">
      <v-row>
        <v-col cols="4">
          <v-row>
            <v-select
              class="ma-2"
              label="Sort by"
              :items="['Useless first']"
              density="compact"
              variant="outlined"
            ></v-select>
            <v-select
              class="ma-2"
              label="Condition"
              density="compact"
              variant="outlined"
            ></v-select>
            <v-select
              class="ma-2"
              label="Delivery options"
              density="compact"
              variant="outlined"
            ></v-select>
          </v-row>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="5">
          <v-row>
            <v-btn
              class="text-capitalize mt-2"
              variant="text"
              size="large"
              style="background-color: #ebf2ff"
              >Show all</v-btn
            >
            <v-btn
              class="text-capitalize mt-2"
              elevation="2"
              size="large"
              style="color: #2264d1"
              >Auction</v-btn
            >
            <v-btn
              class="text-capitalize mt-2"
              variant="text"
              size="large"
              style="background-color: #ebf2ff"
              >But now</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn
              class="mt-2"
              variant="text"
              size="large"
              style="background-color: #ebf2ff"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-btn class="mt-2" size="large">
              <v-icon>mdi-microsoft-windows</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div>
      <v-row class="px-6">
        <v-chip-group>
          <h3 class="ma-2 font-weight-regular">Releted</h3>
          <v-chip size="large">worldwide shipping</v-chip>
          <v-chip size="large">under $50</v-chip>
          <v-chip size="large">kitten</v-chip>
          <v-chip size="large">plastic plugs</v-chip>
          <v-chip size="large">pucker shoes</v-chip>
          <v-chip size="large">vintage typewriter</v-chip>
        </v-chip-group>
      </v-row>
    </div>
  </div>
  <v-row>
    <v-col cols="12" sm="3" v-for="(mypham, i) in myphams" :key="i">
      <v-card height="480" align="center" variant="flat" hover>
        <v-img
          :src="mypham.image"
          width="300"
          height="300"
          contain
          class="flex-grow-1"
          style="object-fit: cover"
        ></v-img>
        <v-card-text class="mt-n4 text-left" style="font-size: 20px">
          {{ mypham.title }}
        </v-card-text>
        <v-card-text class="mt-n4 text-left">
          <v-card-item>
            <strong style="font-size: 25px"> ${{ mypham.price }} </strong>
          </v-card-item>
        </v-card-text>
        <v-card-text class="mt-n4 text-left" style="font-size: 20px">
          {{ mypham.reviews }}
        </v-card-text>
        <v-card-actions>
          <v-rating
            half-increments
            hover
            readonly
            model-value="3"
            :size="24"
            color="yellow-darken-3"
            class="mb-1 mr-3"
          ></v-rating>
          4.5
          <v-spacer></v-spacer>
          <v-btn
          prepend-icon="mdi-heart-outline"
            variant="outlined"
            color="primary">
            Watch</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-space></v-space>
  <Footer class="mt-10" />
</template>
<script>
import Footer from "./footer.vue";

export default {
  name: "MainComponet",

  data: () => ({
    myphams: [
      {
        class: "pa-0",
        image:
          "https://media.hcdn.vn/catalog/product/p/h/phan-nuoc-laneige-che-phu-min-li-24h-tong-mau-21n-15g-1676282854_img_300x300_b798dd_fit_center.jpg",
        title: "One string Bonsai description",
        price: "45.59",
        reviews: " Eligible for nothing :(",
        sao: 4.5,
      },
      {
        class: "pa-0",
        image:
          "https://media.hcdn.vn/catalog/product/p/h/phan-nuoc-laneige-che-phu-min-li-24h-tong-mau-21n-15g-1676282854_img_300x300_b798dd_fit_center.jpg",
        title: "One string Bonsai description",
        price: "45.59",
        reviews: " Eligible for nothing :(",
        sao: 4.5,
      },
      {
        class: "pa-0",
        image:
          "https://media.hcdn.vn/catalog/product/p/h/phan-nuoc-laneige-che-phu-min-li-24h-tong-mau-21n-15g-1676282854_img_300x300_b798dd_fit_center.jpg",
        title: "One string Bonsai description",
        price: "45.59",
        reviews: " Eligible for nothing :(",
        sao: 4.5,
      },
      {
        class: "pa-0",
        image:
          "https://media.hcdn.vn/catalog/product/p/h/phan-nuoc-laneige-che-phu-min-li-24h-tong-mau-21n-15g-1676282854_img_300x300_b798dd_fit_center.jpg",
        title: "One string Bonsai description",
        price: "45.59",
        reviews: " Eligible for nothing :(",
        sao: 4.5,
      },
      {
        class: "pa-0",
        image:
          "https://media.hcdn.vn/catalog/product/p/h/phan-nuoc-laneige-che-phu-min-li-24h-tong-mau-21n-15g-1676282854_img_300x300_b798dd_fit_center.jpg",
        title: "One string Bonsai description",
        price: "45.59",
        reviews: " Eligible for nothing :(",
        sao: 4.5,
      },
      {
        class: "pa-0",
        image:
          "https://media.hcdn.vn/catalog/product/p/h/phan-nuoc-laneige-che-phu-min-li-24h-tong-mau-21n-15g-1676282854_img_300x300_b798dd_fit_center.jpg",
        title: "One string Bonsai description",
        price: "45.59",
        reviews: " Eligible for nothing :(",
        sao: 4.5,
      },
      {
        class: "pa-0",
        image:
          "https://media.hcdn.vn/catalog/product/p/h/phan-nuoc-laneige-che-phu-min-li-24h-tong-mau-21n-15g-1676282854_img_300x300_b798dd_fit_center.jpg",
        title: "One string Bonsai description",
        price: "45.59",
        reviews: " Eligible for nothing :(",
        sao: 4.5,
      },
      {
        class: "pa-0",
        image:
          "https://media.hcdn.vn/catalog/product/p/h/phan-nuoc-laneige-che-phu-min-li-24h-tong-mau-21n-15g-1676282854_img_300x300_b798dd_fit_center.jpg",
        title: "One string Bonsai description",
        price: "45.59",
        reviews: " Eligible for nothing :(",
        sao: 4.5,
      },
    ],
  }),
  components: { Footer },
};
</script>

