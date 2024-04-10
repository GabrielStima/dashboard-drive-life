<script setup>
import GraphicCardComponent from '../components/GraphicCardComponent.vue'
import {
  getStressDataByYear,
  getSleepDataByYear,
  getMentalExhaustionByYear
} from '../assets/database'
</script>
<template>
  <div class="main-view">
    <h1 class="main-title">Visão Inicial</h1>
    <div class="graphic-group">
      <GraphicCardComponent label="Stress % by year" :data="getStressDataByYear()" cardTitle="Estress" />
      <GraphicCardComponent label="Sleep quality % by year" :data="getSleepDataByYear()" cardTitle="Sleep Quality" />
      <GraphicCardComponent label="Feeling of Mental Exhaustion % by year" :data="getMentalExhaustionByYear()"
        cardTitle="Mental exhaustion" />
    </div>
    <div class="graphic-group">
      <GraphicCardComponent label="Stress % by year" :data="getStressDataByYear()" cardTitle="Estress" />
      <GraphicCardComponent label="Sleep quality % by year" :data="getSleepDataByYear()" cardTitle="Sleep Quality" />
      <GraphicCardComponent label="Feeling of Mental Exhaustion % by year" :data="getMentalExhaustionByYear()"
        cardTitle="Mental exhaustion" />
    </div>
  </div>
</template>
<style scoped>
.graphic-group {
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}
</style>
