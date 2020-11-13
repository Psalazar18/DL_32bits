<template>
    <div class="container">
        <div v-if="enviandoSoldProducts > 0">
            <h3>Acabas de comprar {{enviandoSoldProducts.length}} juegos!! </h3>
            <h3>Tu total es:{{totalSoldProducts}} </h3>
            <table class="table table-bordered mt-5 text-center">
                <thead>
                    <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in enviandoSoldProducts" :key="index">
                    <td>{{item.codigo}}</td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.precio}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <h3 class="display-4 text-center mt-5">No hay ventas registradas</h3>
        </div>
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'total',
    computed: {
        ...mapGetters(['enviandoSoldProducts', 'totalSoldProducts'])
    },
}
</script>