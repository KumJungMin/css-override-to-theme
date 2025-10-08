
<template>
  <div class="app">
    <h2>Before (오버라이드 충돌 예시)</h2>
    <Card title="기본 카드" />
    <Card title="pt8 클래스 적용" class="pt8" />
  </div>
</template>

<script setup lang="ts">
import Card from './components/Card.vue'
</script>
