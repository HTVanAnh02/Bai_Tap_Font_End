<template>
  <div>
    <div class="py-6 px-6">
      <v-row>
        <v-col cols="4">
          <v-row>
            <v-select
              class="ma-2"
              label="ProdcutName"
              :items="['A-Z', 'Z-A']"
              v-model="selectedSortName"
              @change="applyFilters"
              density="compact"
              variant="outlined"
            ></v-select>

            <v-select
              class="ma-2"
              label="Price"
              :items="['Low High', 'High Low']"
              v-model="selectedSortPrice"
              @change="applyFilters"
              density="compact"
              variant="outlined"
            ></v-select>

            <v-select
              class="ma-2"
              label="Description"
              :items="['A-Z', 'Z-A']"
              v-model="selectedSortDescription"
              @change="applyFilters"
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
              style="background-color: #ebf2ff; font-size: 14px"
              >Show all</v-btn
            >
            <v-btn
              class="text-capitalize mt-2"
              elevation="2"
              size="large"
              style="color: #2264d1; font-size: 14px"
              >Auction</v-btn
            >
            <v-btn
              class="text-capitalize mt-2"
              variant="text"
              size="large"
              style="background-color: #ebf2ff; font-size: 14px"
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
          <h3
            class="ma-2 font-weight-bold"
            style="font-size: 14px; color: #19191d"
          >
            Releted
          </h3>
          <v-chip size="large" style="font-size: 14px"
            >worldwide shipping</v-chip
          >
          <v-chip size="large" style="font-size: 14px">under $50</v-chip>
          <v-chip size="large" style="font-size: 14px">kitten</v-chip>
          <v-chip size="large" style="font-size: 14px">plastic plugs</v-chip>
          <v-chip size="large" style="font-size: 14px">pucker shoes</v-chip>
          <v-chip size="large" style="font-size: 14px"
            >vintage typewriter</v-chip
          >
        </v-chip-group>
      </v-row>
    </div>
  </div>
  <v-row>
    <v-col cols="12" sm="3" v-for="(mypham, i) in myphams" :key="i">
      <v-card height="472px" with="258px" align="center" variant="flat" hover>
        <v-img
          :src="mypham.image"
          width="227"
          height="224"
          contain
          class="flex-grow-1"
          style="object-fit: cover"
        ></v-img>
        <v-card-text
          class="mt-n4 text-left"
          style="font-size: 16px; color: #19191d"
          height="226px"
          with="74px"
        >
          {{ mypham.title }}
        </v-card-text>
        <v-card-text class="mt-n4 text-left" height="226px" with="36px">
          <v-card-item>
            <strong style="font-size: 24px"> ${{ mypham.price }} </strong>
          </v-card-item>
        </v-card-text>
        <v-card-text
          class="mt-n4 text-left"
          style="font-size: 14px; color: #787885"
          height="226px"
          width="21px"
        >
          {{ mypham.reviews }}
        </v-card-text>
        <v-card-actions>
          <v-rating
            half-increments
            hover
            readonly
            model-value="3"
            :size="20"
            color="yellow-darken-3"
            class="mb-1 mr-3"
          ></v-rating>
          4.5
          <v-spacer></v-spacer>
          <v-btn
            prepend-icon="mdi-heart-outline"
            variant="outlined"
            class="text-capitalize"
            color="primary"
            >Watch</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-space></v-space>
  <Footer class="ma-10"></Footer>
</template>
  <script>
import Footer from "@/components/Client/Footer.vue";
export default {
  name: "TrangChu",
  components: {
    Footer,
  },
  data() {
    return {
      myphams: [
      {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112660/SW1hZ2VfcmVkdmxp/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112586/SW1hZ2VfMV9zaGV2ZmM=/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112568/SW1hZ2VfMl9vZ2hrMG8=/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112597/SW1hZ2VfM19vN2U4eHY=/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112601/SW1hZ2VfNF9qM3licnc=/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112608/SW1hZ2VfNV9qcGNocWQ=/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112614/SW1hZ2VfNl9rdWsxZnY=/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112622/SW1hZ2VfN19tYTl3cXY=/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112630/SW1hZ2VfOF91MnhhNmw=/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112635/SW1hZ2VfOV9uYzQydGc=/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112643/SW1hZ2VfMTBfZm1oNWR1/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://res-console.cloudinary.com/dyo42vgdj/thumbnails/v1/image/upload/v1706112651/SW1hZ2VfMTFfeG5zdmZr/preview",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
      ],
      products: [
        { name: 'Product A', price: 30, description: 'Description A' },
        { name: 'Product B', price: 20, description: 'Description B' },
        { name: 'Product C', price: 25, description: 'Description C' },
      ],
      selectedSortName: 'A-Z',
      selectedSortPrice: 'Low High',
      selectedSortDescription: 'A-Z',
    };
  },

  methods: {
    applyFilters() {
      let filteredProducts = [...this.products];

      if (this.selectedSortName === 'A-Z') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      }

      if (this.selectedSortPrice === 'Low High') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      if (this.selectedSortDescription === 'A-Z') {
        filteredProducts.sort((a, b) => a.description.localeCompare(b.description));
      } else {
        filteredProducts.sort((a, b) => b.description.localeCompare(a.description));
      }

      console.log(filteredProducts);
    },
  },
};
</script>
  
  