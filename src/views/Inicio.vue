<template>
  <div class="text-center mt-5">
    <h1 class="display-1">{{enviandoTitulo}}</h1>
    <h2 class="display-3">{{enviandoSubtitulo}} </h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'inicio',
  computed: {
    ...mapGetters(['enviandoTitulo','enviandoSubtitulo'])
  },
}
</script>
