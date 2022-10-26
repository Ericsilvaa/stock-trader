// ações compradas
// Saldo pre/pós compra de ações

export default {
  state: {
    funds: 10000,
    stocks: []
  },

  mutations: {
    buyStock(state, { stockId, quantity, stockPrice}) {
      // 1° Verificação - Igual & adição se não tiver compra
      const record = state.stocks.find(element => element.id == stockId)
      if(record) {
        record.quantity += quantity
      } else {
        state.stocks.push({
          id: stockId,
          quantity: quantity
        })
      }
      // Ajuste de saldo
      state.funds -= stockPrice * quantity
    },
    // // Venda de uma ação
    // sellStock(state, { stockId, quantity, stockPrice}) {
    //   const record = state.stocks.find(element => element.id == stockId)
    //   if(record.quantity > quantity) {
    //     record.quantity -= quantity
    //   } else {
    //     // Iremos remover através do parametro do registro record
    //     state.stocks.splice(state.stocks.indexOf(record), 1)
    //   }
    //   // Ajuste do Saldo
    //   state.funds += stockPrice * quantity
    // },
    sellStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id == stockId)
      if (record.quantity > quantity) {
          record.quantity -= quantity
      } else {
          state.stocks.splice(state.stocks.indexOf(record), 1)
      }
      state.funds += stockPrice * quantity
    },
    setPortfolio(state, portfolio) {
      state.funds = portfolio.funds
      state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
  }
  },

  action: {
    // Apenas chamando a mutations
    sellStock({ commit }, order) {
      commit('sellStock', order)
  }
  },

  getters: {
    // Retornar todas as ações do portfolio
    // Não retorna o estado, pq não pegamos tudo.
    // Esse (getters) é a lista de todos os getters da aplicação

    stockPorfolio(state, getters) {
      return state.stocks.map(stock => {
        const record = getters.stocks.find(e => e.id == stock.id)
        return {
          id: stock.id,
          quantity:  stock.quantity,
          name: record.name,
          price: record.price
        }
      })
    },
    funds(state) {
      return state.funds
    }
  }
}