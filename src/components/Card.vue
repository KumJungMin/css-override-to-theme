
<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>이건 카드입니다.</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>
