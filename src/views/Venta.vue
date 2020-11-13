<template>
    <div class="container">
        <h1 class=" display-3 my-3 text-center">Compra ahora!!</h1>
        <h3 class= "display-5 text-center mt-5">Cantidad de productos con stock: {{productosConStock.length}} </h3>
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
            <tr v-for="(item, index) in productosConStock" :key="index" :class="{bold: item.destacado}">
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

<style scoped>
    .bold{
        font-weight:bold;
    }
</style>