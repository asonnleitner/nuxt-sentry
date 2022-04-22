<template>
  <NuxtErrorBoundary>
    <ThrowError v-if="hasIssue" />
    <div v-else>
      Component is working ^_^
    </div>

    <template #error="{ error }">
      Component failed to Render -_-
      <button @click="fixIssue(error)">
        (fix the issue)
      </button>
    </template>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
import { ref } from '#imports'
import ThrowError from '~/components/ThrowError.vue'

const hasIssue = ref(true)

const fixIssue = (error) => {
  hasIssue.value = false
  error.value = null
}

</script>
