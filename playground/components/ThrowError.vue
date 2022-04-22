<template>
  <div>Should never see this</div>
</template>

<script setup lang="ts">
throw new Error('Deliberate error by <ThrowError>')
</script>
