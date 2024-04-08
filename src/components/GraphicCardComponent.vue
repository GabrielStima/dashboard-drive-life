<script setup>
import Chart from 'chart.js/auto'
import { ref, onMounted } from 'vue'

const props = defineProps(['label', 'data', 'cardTitle'])
const ctx = ref()

function generateChart() {
  new Chart(ctx.value, {
    type: 'bar',
    data: {
      labels: props.data.map((row) => row.year),
      datasets: [
        {
          label: props.label,
          data: props.data.map((row) => row.count)
        }
      ]
    }
  })
}

onMounted(() => {
  generateChart()
})
</script>
<template>
  <div class="card">
    <h3 class="card-title">{{ props.cardTitle }}</h3>
    <canvas ref="ctx"></canvas>
  </div>
</template>
<style scoped>
.card {
  width: 550px;
}
</style>
