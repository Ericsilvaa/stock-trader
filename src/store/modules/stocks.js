// Definição de tudo que for correspondente a parte de estoque

// importação feita hardcode.. poderia ser uma requisição..
import stocks from '@/data/stocks'

export default {
  state: {
    stocks: []
  },
  mutations: {
    // Alteração dos stocks
    setStocks(state, stocks) {
      state.stocks = stocks
    },
    randomizeStocks(state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.42))
      });
    }
  },
  actions: {
    // Compra de Ações - Stock - jogando para portfolio
    buyStock({ commit }, order) {
      commit('buyStock', order)
    },

    // Inicializar as ações
    initStocks({ commit }) {
      commit('setStocks', stocks)
    },
    randomizeStocks({commit}) {
      commit('randomizeStocks')
    }
  },
  getters: {
    // responsavel por obter todas as ações cadastradas dentro do state.. sempre retornar!
    stocks(state) {
      return state.stocks
    }
  }
}