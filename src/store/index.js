import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Products: [
      {codigo: '0001', nombre: 'Sekiro', stock: '100', precio: '30000', color: 'red', destacado: true},
      {codigo: '0002', nombre: 'Fifa 21', stock: '100', precio: '25000', color: 'blue', destacado: false},
      {codigo: '0003', nombre: 'Gear of War 4', stock: '100', precio: '15000', color: 'green', destacado: true},
      {codigo: '0004', nombre: 'Mario Tenis Aces', stock: '100', precio: '35000', color: 'yellow', destacado: false},
      {codigo: '0005', nombre: 'Booldborne', stock: '100', precio: '10000', color: 'blue', destacado: false},
      {codigo: '0006', nombre: 'Forza Horizon 4', stock: '100', precio: '20000', color: 'red', destacado: true}
    ],
    soldProducts: [],
    titulo: '32 bits',
    subtitulo: 'Juegos de PC y consolas'
  },
  getters: {
    enviandoTitulo(state){
      return state.titulo;
    },
    enviandoSubtitulo(state){
      return state.subtitulo;
    },
    enviandoProducts(state){
      return state.Products;
    },
    enviandoSoldProducts(state){
      return state.soldProducts;
    },
    productosConStock: state => {
      return state.Products.filter((Products)=>{
      return Products.stock > 0
      })
    },
    totalStock(state){
      return state.Products.reduce((acumulador,valor)=>{
        return parseInt(acumulador)+parseInt(valor.stock);
      },0);
    },
    encontrarCodigos: (state, getters) => (codigo)=>{
      console.log(codigo)
      return getters.productosConStock.filter((Products)=>{
        return Products.codigo == codigo        
      })
    },
    totalSoldProducts(state){
      return state.soldProducts.reduce((acumulador,valor)=>{
        return acumulador+(valor.precio*state.soldProducts.length);
      },0);
    },
  },
  mutations: {
    mutacionBajarStock(state, index){
      state.Products[index].stock--;
      state.soldProducts.push(state.Products.codigo, state.Products.nombre, state.Products.precio),
      alert('¡Venta exitosa!')
      console.log(state.soldProducts)
    }
  },
  actions: {
    actionBajarStock(context, index){
      context.commit('mutacionBajarStock', index)
    }
  },
})
