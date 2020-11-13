<template>
    <div class="container">
        <h3 class= "display-4 text-center mt-5">Cantidad de productos con stock: {{productosConStock.length}} </h3>
        <table class="table table-bordered mt-5 text-center">
        <thead>
            <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Comprar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in productosConStock" :key="index">
            <td>{{item.codigo}}</td>
            <td>{{item.nombre}}</td>
            <td>{{item.stock}}</td>
            <td>{{item.precio}}</td>
            <td><button type="button" class="btn btn-secondary" @click="bajarStock(index)">Comprar</button></td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
    name: 'venta',
    computed: {
        ...mapGetters(['productosConStock']),
    },
    methods: {
        ...mapActions(['actionBajarStock']),
        bajarStock(index){
            setTimeout(this.actionBajarStock(index), 2000);
        }
    },
}
</script>