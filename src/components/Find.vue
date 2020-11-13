<template>
  <div class="container mt-5">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Buscar por código" @keyup="findProducts" v-model="codigo">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
      </div>
    </div>
    <div v-if="codigo != '' ">
      <table class="table table-bordered mt-5 text-center">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in enviandoProducts" :key="index">
          <td>{{item.codigo}}</td>
          <td>{{item.nombre}}</td>
          <td>{{item.stock}}</td>
          <td>{{item.precio}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div v-else>
      <h3 class= "display-4 text-center">Cantidad de productos disponibles: {{totalStock}} </h3>
      <table class="table table-bordered mt-5 text-center">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in enviandoProducts" :key="index">
          <td>{{item.codigo}}</td>
          <td>{{item.nombre}}</td>
          <td>{{item.stock}}</td>
          <td>{{item.precio}}</td>
        </tr>
      </tbody>
    </table>
    </div>

    
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Find',
  data() {
    return {
      codigo: ''
    }
  },
  computed: {
    ...mapGetters(['enviandoProducts', 'productosConStock','encontrarCodigos', 'totalStock']),
    findProducts(){
      return this.encontrarCodigos(this.codigo)
    }
  },
}
</script>

<style scoped>

</style>
