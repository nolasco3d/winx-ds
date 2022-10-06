<template>
  <div>
    <div class="card">
      <h3>Titulo do card</h3>
      <slot>
        Meu card
      </slot>

      <B>Card details</B>
    </div>
  </div>
</template>

<script setup lang="ts">
import B from './ButtonComponent.vue'
</script>

<style scoped>

</style>