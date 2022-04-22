<template>
  <div class="relative font-sans" n="green6">
    <div class="container max-w-200 mx-auto py-10 px-4">
      <h1>{{ props.error.message }}</h1>
      There was an error 😱

      <br>
      <button @click="handleError">
        Clear error
      </button>
      <br>
      <NuxtLink to="/404">
        Trigger another error
      </NuxtLink>
      <br>
      <NuxtLink to="/">
        Navigate home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clearError } from '#imports'

const props = defineProps({
  error: { type: Object as () => Error, default: null as () => Error }
})

const handleError = () => clearError({ redirect: '/' })
</script>
