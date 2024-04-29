<template>
  <v-container class="mb-8 bg-primary">
    <v-app-bar class="indigo" :elevation="2" style="background-color: #6363c5;">
      <template v-slot:prepend>
        <v-app-bar-nav-icon color="white" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-btn variant="text" link to="/">Essence</v-btn>
      </template>

      <template v-slot:append>
        <v-tooltip text="Favourites" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="pink" icon="mdi-heart" to="/favourites"></v-btn>
          </template>
        </v-tooltip>
        <v-tooltip text="Go to Cart" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-cart" to="/CartView"></v-btn>
          </template>
        </v-tooltip>

        <!-- <v-tooltip text="Search" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-magnify" @click="dialog = true"></v-btn>
            <v-dialog v-model="dialog" width="400" class="flex">
              <v-card color="surface-light" max-width="400">
                <v-card-text>
                  <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="default" label="Search"
                    variant="regular" hide-details single-line @click:append-inner="onClick"></v-text-field>
                </v-card-text>
              </v-card>
            </v-dialog>
          </template>
        </v-tooltip> -->

        <v-tooltip text="Search" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-magnify"></v-btn>
          </template>
        </v-tooltip>
        <v-tooltip text="Profile" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-account-circle" to="/LogIn"></v-btn>
          </template>
        </v-tooltip>

      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "HeaderView",
  // components: {
  //   profile
  // },
  data: () => ({
    // user: null,
    drawer: false,
    dialog: false,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
};
</script>