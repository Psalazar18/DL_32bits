<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">32bits</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <router-link class="nav-link" to="/">Inicio</router-link>
                    <router-link class="nav-link" :to="{name: 'busqueda'}">Busqueda de Productos</router-link>
                    <router-link class="nav-link" :to="{name: 'venta'}">Venta de productos</router-link>
                    <router-link class="nav-link" :to="{name: 'total'}">Total de Ventas</router-link>
                </div>
            </div>
        </nav>
        
    </div>
</template>

<script>
export default {
    name: 'navBar'
}
</script>