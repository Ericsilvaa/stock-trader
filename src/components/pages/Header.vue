<template> 
  <!-- seguindo modelo do Vuetify(toolbar) -->
  <v-toolbar app>

    <!-- titulo cabeçalho -->
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>

    <!-- links navegação por paginas -->
    <v-toolbar-items>
      <!-- suporta o (to) -->
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portfolio">Portfólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <!-- espaçamento -->
    <v-spacer></v-spacer>

    <!-- dois ultimos botões -->
    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile @click="saveData">
            <v-list-tile-title >Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile  @click="loadDataLocal">
            <v-list-tile-title>Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-layout align-center>
        <span class="tex-uppercase grey--text text--darken-2">
          Saldo: {{funds | currency}}
        </span>
      </v-layout>
    </v-toolbar-items>

  </v-toolbar>
  
</template>

<script>
export default {
computed: {
  funds() {
    return this.$store.getters.funds
  }
},
methods: {
  endDay() {
    this.$store.dispatch('randomizeStocks')
  },
  saveData() {
    const { funds, stockPortfolio, stocks } = this.$store.getters
    this.$http.put('data.json', { funds, stockPortfolio, stocks })
  },
  loadDataLocal() {
    this.$store.dispatch('loadData')
  }
}
}
</script>

<style>

</style>