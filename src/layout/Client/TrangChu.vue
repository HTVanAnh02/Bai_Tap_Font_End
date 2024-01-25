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
      myphams: [
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKhndAo7d9ES6mwh8UBPF2CNx5VhmCWJATP3I6sCQHf68Fgng",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1L1bo1AAurzmJXKQL_O_bHYAf9OWST8JY4FO9TVFX6-27EFBW",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOvXjSz7HW3IajCyvzFZkn_VpgUv_tUvqIYF7Qr_b_NoZlQssT",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNBD4t9xIH88F5kp-6Xo_ERhrWZ3BQaPlbz0hcbofxIMFLWq4",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqbJ8bwYXPNyfUnaY1PptuI8cOhF5tAwLltqshDEVRlwChfMM8",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDp0lTPujNnq8dcIwgyOvwb4P81tWOmmtjaV_v9M7sIY5VdAwF",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwiBndajBvBYmTL9f0OWgp06ftXXEc-4EfLIlKh7Ddwe30larQ",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRA5iThT1QphH8F6G8yAB4oTxQxm9aYxzcJAATy17NCQYUJ8ug6",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTf98Bto619Z8OoKjRwTBpIFDLIL-kFQw4spscovwhUqNo1ts0t",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQg3u8pcoA1T9jp9USNRxLmPoKt2KcF0Z2DNgbL-PNJ3-PMXvHY",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvG62ecvpe0w5rAAWpzcLQ6YNkdRCMGf_DrEQ3YpROKEVy9Uue",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjql57y04axr20dD-zMGBNog6olFngsYrt9q1tcS5wdYboznTg",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
        },
      ],
      products: [
        { name: "Product A", price: 30, description: "Description A" },
        { name: "Product B", price: 20, description: "Description B" },
        { name: "Product C", price: 25, description: "Description C" },
      ],
      selectedSortName: "A-Z",
      selectedSortPrice: "Low High",
      selectedSortDescription: "A-Z",
    };
  },

  methods: {
    applyFilters() {
      let filteredProducts = [...this.products];

      if (this.selectedSortName === "A-Z") {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      }

      if (this.selectedSortPrice === "Low High") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      if (this.selectedSortDescription === "A-Z") {
        filteredProducts.sort((a, b) =>
          a.description.localeCompare(b.description)
        );
      } else {
        filteredProducts.sort((a, b) =>
          b.description.localeCompare(a.description)
        );
      }

      console.log(filteredProducts);
    },
  },
};
</script>
  
  