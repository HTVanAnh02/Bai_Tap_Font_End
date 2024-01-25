<template>
  <div>
    <div class="py-6 px-6">
      <v-row class="">
        <v-col cols="12" sm="12" md="6" lg="2">
          <v-select class="ma-2" label="ProdcutName" :items="['A-Z', 'Z-A']" v-model="selectedSortName"
            @change="applyFilters" density="compact" variant="outlined"></v-select>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="2">
          <v-select class="ma-2" label="Price" :items="['Low High', 'High Low']" v-model="selectedSortPrice"
            @change="applyFilters" density="compact" variant="outlined"></v-select>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="2">
          <v-select class="ma-2" label="Description" :items="['A-Z', 'Z-A']" v-model="selectedSortDescription"
            @change="applyFilters" density="compact" variant="outlined"></v-select>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" class="text-right">
          <v-btn style="background-color: #bbccf6;color:#4d4d50" class="rounded-1 text-capitalize" variant="tonal">
            Show all
          </v-btn>
          <v-btn style="font-weight: bold;color: #2264D1;" bg-color="white" class="rounded-1 text-capitalize"
            variant="elevated">
            Action
          </v-btn>
          <v-btn style="background-color: #bbccf6;color:#4d4d50" class="rounded-1 text-capitalize" variant="tonal">
            Buy now
          </v-btn>
          <v-btn style="background-color: #adc4fe" class="ml-5" ariant="tonal">
            <v-icon>mdi mdi-menu</v-icon>
          </v-btn>
          <v-btn class="mr-5" variant="elevated">
            <v-icon style="color: #0c5bda;">mdi mdi-microsoft-windows</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
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
    <v-col cols="12" sm="12" md="6" lg="3" v-for="(mypham, i) in myphams" :key="i">
      <v-card height="472px" with="258px" align="center" variant="flat" hover>
        <v-img :src="mypham.image" width="227" height="224" contain class="flex-grow-1" style="object-fit: cover"></v-img>
        <v-card-text class="mt-n4 text-left" style="font-size: 16px; color: #19191d" height="226px" with="74px">
          {{ mypham.title }}
        </v-card-text>
        <v-card-text class="mt-n4 text-left" height="226px" with="36px">
          <v-card-item>
            <strong style="font-size: 24px"> ${{ mypham.price }} </strong>
          </v-card-item>
        </v-card-text>
        <v-card-text class="mt-n4 text-left" style="font-size: 14px; color: #787885" height="226px" width="21px">
          {{ mypham.reviews }}
        </v-card-text>
        <!-- <v-card-actions>
          <v-col class="ml-3 mt-1" cols="5" style="display: flex;">
            <v-icon color="#FB8200" size="x-small">mdi mdi-star</v-icon>
            <v-icon color="#FB8200" size="x-small">mdi mdi-star</v-icon>
            <v-icon color="#FB8200" size="x-small">mdi mdi-star</v-icon>
            <v-icon color="#FB8200" size="x-small">mdi mdi-star</v-icon>
            <v-icon color="#FB8200" size="x-small">mdi mdi-star-half</v-icon>
            <span style="font-size: 14px;">{{ mypham.rating }}</span>
          </v-col>
          <v-spacer></v-spacer>
          <v-btn prepend-icon="mdi-heart-outline" variant="outlined" class="text-capitalize" color="primary">Watch</v-btn>
        </v-card-actions> -->
       <v-card-actions>
        <v-row style="margin-top: 5px;" class="mb-4">
          <v-col class="ml-3 mt-1" cols="5" style="display: flex;">
            <v-icon color="#FB8200" size="x-small" style="font-size: 16px;">mdi mdi-star</v-icon>
            <v-icon color="#FB8200" size="x-small" style="font-size: 16px;">mdi mdi-star</v-icon>
            <v-icon color="#FB8200" size="x-small" style="font-size: 16px;">mdi mdi-star</v-icon>
            <v-icon color="#FB8200" size="x-small" style="font-size: 16px;">mdi mdi-star</v-icon>
            <v-icon color="#FB8200" size="x-small" style="font-size: 16px;">mdi mdi-star-half</v-icon>
            <span style="font-size: 16px; margin-top: -4px;">4.05</span>
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
      myphams: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKhndAo7d9ES6mwh8UBPF2CNx5VhmCWJATP3I6sCQHf68Fgng",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.50",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "4.5"
        },
        {
          image:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1L1bo1AAurzmJXKQL_O_bHYAf9OWST8JY4FO9TVFX6-27EFBW",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "40.50",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "4.0"

        },
        {
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOvXjSz7HW3IajCyvzFZkn_VpgUv_tUvqIYF7Qr_b_NoZlQssT",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "50.50",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "3.5"

        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNBD4t9xIH88F5kp-6Xo_ERhrWZ3BQaPlbz0hcbofxIMFLWq4",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "30.30",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "5"

        },
        {
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqbJ8bwYXPNyfUnaY1PptuI8cOhF5tAwLltqshDEVRlwChfMM8",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "20.19",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "4.5"

        },
        {
          image:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDp0lTPujNnq8dcIwgyOvwb4P81tWOmmtjaV_v9M7sIY5VdAwF",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "55.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "4.5"
        },
        {
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwiBndajBvBYmTL9f0OWgp06ftXXEc-4EfLIlKh7Ddwe30larQ",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.99",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "4.5"

        },
        {
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRA5iThT1QphH8F6G8yAB4oTxQxm9aYxzcJAATy17NCQYUJ8ug6",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "48.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "4.5"

        },
        {
          image:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTf98Bto619Z8OoKjRwTBpIFDLIL-kFQw4spscovwhUqNo1ts0t",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "44.22",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "4.5"

        },
        {
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQg3u8pcoA1T9jp9USNRxLmPoKt2KcF0Z2DNgbL-PNJ3-PMXvHY",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.30",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "4.5"

        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvG62ecvpe0w5rAAWpzcLQ6YNkdRCMGf_DrEQ3YpROKEVy9Uue",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.59",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "4.5"

        },
        {
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjql57y04axr20dD-zMGBNog6olFngsYrt9q1tcS5wdYboznTg",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "45.50",
          reviews:
            "Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else Eligible for Shipping To Mars or somewhere else",
          rating: "4.5"

        },
      ],
    };
  },
};
</script>
  