<template>
  <div>
    <v-row>
        <v-col cols="12" v-for="n in 3" :key="n" sm="4">
            <v-card variant="tonal" height="150">
                <v-card-title class="text-center mt-4"><v-icon color="#65B168" size="large">mdi-lightbulb-on-outline</v-icon></v-card-title>
                <v-card-text class="text-center font-weight-bold" style="font-size:26px;">Clear & Usable user flows</v-card-text>
                <v-card-item class="text-center">Let’s boost yout marketplace</v-card-item>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>
  <script>
export default {
  name: "FooterView",
  data: () => ({}),
};
</script>
