<template>
<div>
  <h1 class="display-2 font-weight-light mb-4">Negocie e Consulta suas Ações</h1>
  <!-- v-sheet pode-se virar component -->
  <v-sheet :elevation="6" class="pa-2 primary">
    <v-icon class="white--text mr-2">info</v-icon>
    <span class="white--text font-weight-light">Você pode Salvar & Carregar os Dados</span>
  </v-sheet>
  <v-sheet :elevation="6" class="pa-2 success darken-1 mt-2">
    <v-icon class="white--text mr-2">info</v-icon>
    <span class="white--text font-weight-light">Você pode Salvar & Carregar os Dados</span>
  </v-sheet>
  <v-divider class="my-4"></v-divider>
  <p class="headline"><strong>Seu Saldo:</strong> {{funds | currency}}</p>
</div>
</template>

<script>
export default {
  computed: {
    funds(){
     return this.$store.getters.funds
    }
  }

}
</script>

<style>

</style>